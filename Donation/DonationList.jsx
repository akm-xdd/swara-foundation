import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, Alert, Form, Row, Col } from 'react-bootstrap';
import moment from 'moment';

const DonationList = ({ type }) => {
  const [donations, setDonations] = useState([]);
  const [message, setMessage] = useState('');
  const [dateFilter, setDateFilter] = useState('all');

  const fetchDonations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/donations');
      setDonations(response.data);
    } catch (error) {
      console.error('Error fetching donations', error);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const deleteDonation = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/donations/${id}`);
      setMessage('Donation deleted successfully');
      fetchDonations();
      setTimeout(() => {
        setMessage('');
      }, 2000); 
    } catch (error) {
      setMessage('Failed to delete donation');
      setTimeout(() => {
        setMessage('');
      }, 2000);
    }
  };

  const completeDonation = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/donations/${id}/complete`);
      setMessage('Donation marked as completed');
      fetchDonations();
      setTimeout(() => {
        setMessage('');
      }, 2000); 
    } catch (error) {
      setMessage('Failed to mark donation as completed');
      setTimeout(() => {
        setMessage('');
      }, 2000); 
    }
  };

  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value);
  };

  const filterDonations = (donations) => {
    let filteredDonations = donations;

    if (type === 'completed') {
      filteredDonations = filteredDonations.filter(donation => donation.status === 'Completed');
    } else {
      filteredDonations = filteredDonations.filter(donation => donation.status !== 'Completed');
    }

    if (dateFilter === 'today') {
      const today = moment().format('YYYY-MM-DD');
      filteredDonations = filteredDonations.filter(donation => donation.date === today);
    } else if (dateFilter === 'tomorrow') {
      const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');
      filteredDonations = filteredDonations.filter(donation => donation.date === tomorrow);
    }

    return filteredDonations;
  };

  const filteredDonations = filterDonations(donations);

  return (
    <div>
      {message && <Alert variant="info">{message}</Alert>}
      <Form className="mb-3">
        <Row>
          <Col md={6}>
            <Form.Control 
              as="select" 
              value={dateFilter} 
              onChange={handleDateFilterChange}
            >
              <option value="all">All Dates</option>
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
            </Form.Control>
          </Col>
        </Row>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Description</th>
            <th>Weight</th>
            <th>Address</th>
            <th>Date</th>
            <th>Time Slot</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDonations.map(donation => (
            <tr key={donation._id}>
              <td>{donation.firstName}</td>
              <td>{donation.lastName}</td>
              <td>{donation.email}</td>
              <td>{donation.phone}</td>
              <td>{donation.description}</td>
              <td>{donation.weight}</td>
              <td>{donation.address}</td>
              <td>{donation.date}</td>
              <td>{donation.timeSlot}</td>
              <td>{donation.status}</td>
              <td>
                {donation.status !== 'Completed' && (
                  <Button variant="success" size="sm" onClick={() => completeDonation(donation._id)}>Complete</Button>
                )}
                <Button variant="danger" size="sm" onClick={() => deleteDonation(donation._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DonationList;
