import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Alert } from 'react-bootstrap';

const DonationList = ({ type }) => {
  const [donations, setDonations] = useState([]);
  const [message, setMessage] = useState('');
  const [refresh, setRefresh] = useState(false);

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
  }, [refresh]);

  const handleMessage = (msg, success = true) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage('');
    }, 1000); 
  };

  const deleteDonation = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/donations/${id}`);
      handleMessage('Donation deleted successfully');
      setRefresh(!refresh);
      setTimeout(() => {
        fetchDonations();
      }, 1000); // Adjust the delay as needed
    } catch (error) {
      handleMessage('Failed to delete donation', false);
    }
  };

  const completeDonation = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/donations/${id}/complete`);
      handleMessage('Donation marked as completed');
      setRefresh(!refresh);
      setTimeout(() => {
        fetchDonations();
      }, 1000); // Adjust the delay as needed
    } catch (error) {
      handleMessage('Failed to mark donation as completed', false);
    }
  };

  return (
    <div>
      {message && <Alert variant="info">{message}</Alert>}
      <Table striped bordered hover className="donation-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Description</th>
            <th>Weight</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donations
            .filter(donation => type === 'completed' ? donation.status === 'Completed' : donation.status !== 'Completed')
            .map(donation => (
              <tr key={donation._id}>
                <td>{donation.firstName}</td>
                <td>{donation.lastName}</td>
                <td>{donation.email}</td>
                <td>{donation.phone}</td>
                <td>{donation.description}</td>
                <td>{donation.weight}</td>
                <td>{donation.address}</td>
                <td>{donation.status}</td>
                <td className="actions">
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
