import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Donate.css';

const Donate = () => {
  const [pincode, setPincode] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [isValidPincode, setIsValidPincode] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
    weight: '',
    address: '',
    date: '',
    timeSlot: ''
  });
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [availabilityMessage, setAvailabilityMessage] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const navigate = useNavigate();
  const validPincodes = [110001, 110002, 110003, 110004, 110005];

  const handlePincodeCheck = () => {
    if (validPincodes.includes(parseInt(pincode))) {
      setIsValidPincode(true);
      setShowForm(true);
    } else {
      setIsValidPincode(false);
      setShowForm(false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));

    if (id === 'phone') {
      if (value.length !== 10) {
        setPhoneError('Please enter a valid 10-digit phone number.');
      } else {
        setPhoneError('');
      }
    }
  };

  const checkAvailability = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/donations/check-availability', {
        params: { date: formData.date, timeSlot: formData.timeSlot }
      });
      return response.data.available;
    } catch (error) {
      console.error('Error checking availability', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneError) {
      return;
    }

    const isAvailable = await checkAvailability();
    if (!isAvailable) {
      setAvailabilityMessage('Time slot already booked, please choose another.');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/donations', formData);
      if (response.status === 201) {
        setSubmissionMessage('Form submitted successfully!');
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            description: '',
            weight: '',
            address: '',
            date: '',
            timeSlot: ''
          });
          navigate('/');
          window.location.reload();
        }, 2000);
      } else {
        setSubmissionMessage('Failed to submit form. Please try again.');
      }
    } catch (error) {
      setSubmissionMessage('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="donate-container">
      <h2>Donate</h2>
      <p>Your donation of clothes, money, or books can make a significant difference. Join us in our mission to support those in need.</p>
      <div className="donate-section">
        <div className="donate-half left-half">
          <h3>Importance of Donation</h3>
          <img src="https://storage.googleapis.com/dara-c1b52.appspot.com/daras_ai/media/a3202e58-17ef-11ee-9a70-8e93953183bb/cleaned_qr.png" alt="UPI QR Code" className="qr-code"/>
          <p>Scan the QR code to donate. Your generosity helps us reach more people in need.</p>
        </div>
        <div className="donate-half right-half">
          <h3>Check Availability in Your Area</h3>
          <Form>
            <Form.Group controlId="pincode">
              <Form.Control 
                type="text" 
                value={pincode} 
                onChange={(e) => setPincode(e.target.value)} 
                placeholder="Enter your 6-digit pincode" 
                className="pincode-input"
              />
            </Form.Group>
            <Button variant="success" onClick={handlePincodeCheck} className="check-button">Check</Button>
          </Form>
          {isValidPincode === false && (
            <Alert variant="danger" className="mt-3">
              Sorry, we are not available in your area yet.
              <p>Please deliver your donations to:</p>
              <address>
                123 Charity Street<br />
                Kindness City, KC 12345
              </address>
            </Alert>
          )}
          {showForm && (
            <Form className="donation-form mt-3" onSubmit={handleSubmit}>
              <h3>Donation Form</h3>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="firstName">
                    <Form.Control type="text" placeholder="First Name" className="form-input" value={formData.firstName} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="lastName">
                    <Form.Control type="text" placeholder="Last Name" className="form-input" value={formData.lastName} onChange={handleChange} required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Control type="email" placeholder="Email" className="form-input" value={formData.email} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="phone">
                    <Form.Control type="number" placeholder="Phone Number" className="form-input" value={formData.phone} onChange={handleChange} required />
                    {phoneError && <Alert variant="danger" className="mt-2">{phoneError}</Alert>}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="description">
                <Form.Control as="textarea" placeholder="Description about donation" className="form-textarea" value={formData.description} onChange={handleChange} required />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="weight">
                    <Form.Control as="select" className="form-select" value={formData.weight} onChange={handleChange} required>
                      <option value="">Select weight</option>
                      <option value="0-5kg">0-5 kg</option>
                      <option value="5-10kg">5-10 kg</option>
                      <option value="10-20kg">10-20 kg</option>
                      <option value="20+kg">20+ kg</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="address">
                    <Form.Control type="text" placeholder="Address" className="form-input" value={formData.address} onChange={handleChange} required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="date">
                    <Form.Control type="date" placeholder="Date" className="form-input" value={formData.date} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="timeSlot">
                    <Form.Control as="select" className="form-select" value={formData.timeSlot} onChange={handleChange} required>
                      <option value="">Select time slot</option>
                      <option value="7-8">7-8 AM</option>
                      <option value="8-9">8-9 AM</option>
                      <option value="9-10">9-10 AM</option>
                      <option value="10-11">10-11 AM</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Button type="submit" variant="primary" disabled={formData.phone.length !== 10}>Submit</Button>
            </Form>
          )}
          {availabilityMessage && <Alert variant="warning">{availabilityMessage}</Alert>}
          {submissionMessage && <Alert variant={submissionMessage.includes('successfully') ? 'success' : 'danger'}>{submissionMessage}</Alert>}
        </div>
      </div>
    </div>
  );
};

export default Donate;
