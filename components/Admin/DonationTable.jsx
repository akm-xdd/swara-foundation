import React from 'react';
import { Button, Table } from 'react-bootstrap';
import moment from 'moment';

const DonationTable = ({ donations, completeDonation, handleEdit, handleOpenWarningModal, restoreDonation, deleteDonation }) => {
  return (
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
        {donations.map(donation => (
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
  );
};

export default DonationTable;
