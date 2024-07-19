import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, Alert, Form, Row, Col, Modal } from 'react-bootstrap';
import moment from 'moment';
import { toast } from 'sonner';

const DonationList = ({ type }) => {
  const [donations, setDonations] = useState([]);
  const [dateFilter, setDateFilter] = useState('all');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [editDonation, setEditDonation] = useState(null);
  const [deleteDonationId, setDeleteDonationId] = useState(null);

  const fetchDonations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/donations');
      setDonations(response.data);
    } catch (error) {
      console.error('Error fetching donations', error);
      toast.error('Error fetching donations');
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const deleteDonation = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/donations/${id}/delete`);
      fetchDonations();
      toast.success('Moved to trash');
    } catch (error) {
      toast.error('Failed to move to trash');
    }
  };

  const completeDonation = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/donations/${id}/complete`);
      fetchDonations();
      toast.success('Marked as completed');
    } catch (error) {
      toast.error('Failed to mark donation as completed');
    }
  };

  const restoreDonation = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/donations/${id}/restore`);
      fetchDonations();
      toast.success('Restored from trash');
    } catch (error) {
      toast.error('Failed to restore donation');
    }
  };

  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value);
  };

  const filterDonations = (donations) => {
    let filteredDonations = donations.filter(donation => donation.deleted === (type === 'trash'));

    if (type === 'completed') {
      filteredDonations = filteredDonations.filter(donation => donation.status === 'Completed');
    } else if (type === 'uncompleted') {
      filteredDonations = filteredDonations.filter(donation => donation.status !== 'Completed' && !donation.deleted);
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

  const handleEdit = (donation) => {
    setEditDonation(donation);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditDonation(null);
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`http://localhost:5000/api/donations/${editDonation._id}`, editDonation);
      fetchDonations();
      setShowEditModal(false);
      toast.success('Donation updated successfully');
    } catch (error) {
      toast.error('Failed to update donation');
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEditDonation((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleOpenWarningModal = (id) => {
    setDeleteDonationId(id);
    setShowWarningModal(true);
  };

  const handleCloseWarningModal = () => {
    setShowWarningModal(false);
    setDeleteDonationId(null);
  };

  const handleConfirmDelete = () => {
    deleteDonation(deleteDonationId);
    setShowWarningModal(false);
  };

  const filteredDonations = filterDonations(donations);

  return (
    <div className="m-3">
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
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Description</th>
            <th>Weight</th>
            <th>Address</th>
            <th>Date of Pickup</th>
            <th>Time Slot</th>
            <th>Status</th>
            <th>Completed At</th>
            <th>Attended By</th>
            <th>Remarks</th>
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
              <td>{donation.completedAt ? moment(donation.completedAt).format('YYYY-MM-DD HH:mm') : ''}</td>
              <td>{donation.attendedBy}</td>
              <td>{donation.pickupRemarks}</td>
              <td style={{ whiteSpace: 'nowrap' }}>
                {donation.status !== 'Completed' && !donation.deleted && (
                  <Button variant="success" size="sm" onClick={() => completeDonation(donation._id)}>Complete</Button>
                )}
                {!donation.deleted && (
                  <Button variant="warning" size="sm" onClick={() => handleEdit(donation)} className="ms-2">Edit</Button>
                )}
                {!donation.deleted && (
                  <Button variant="danger" size="sm" onClick={() => handleOpenWarningModal(donation._id)} className="ms-2">Trash</Button>
                )}
                {donation.deleted && (
                  <>
                    <Button variant="secondary" size="sm" onClick={() => restoreDonation(donation._id)} className="ms-2">Restore</Button>
                    <Button variant="danger" size="sm" onClick={() => deleteDonation(donation._id)} className="ms-2">Delete Permanently</Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Donation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editDonation && (
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={editDonation.firstName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={editDonation.lastName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={editDonation.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      value={editDonation.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  value={editDonation.description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="weight">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control
                      type="text"
                      value={editDonation.weight}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      value={editDonation.address}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="date">
                    <Form.Label>Date of Pickup</Form.Label>
                    <Form.Control
                      type="date"
                      value={editDonation.date}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="timeSlot">
                    <Form.Label>Time Slot</Form.Label>
                    <Form.Control
                      as="select"
                      value={editDonation.timeSlot}
                      onChange={handleChange}
                    >
                      <option value="7-8">7-8 AM</option>
                      <option value="8-9">8-9 AM</option>
                      <option value="9-10">9-10 AM</option>
                      <option value="10-11">10-11 AM</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="attendedBy">
                    <Form.Label>Attended By</Form.Label>
                    <Form.Control
                      type="text"
                      value={editDonation.attendedBy}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="pickupRemarks">
                    <Form.Label>Remarks</Form.Label>
                    <Form.Control
                      type="text"
                      value={editDonation.pickupRemarks}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showWarningModal} onHide={handleCloseWarningModal}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to move this donation to trash?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseWarningModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DonationList;
