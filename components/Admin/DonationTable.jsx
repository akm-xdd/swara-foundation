import React from 'react';
import { Table } from 'react-bootstrap';
import { FaCheck, FaEdit, FaTrash, FaUndo, FaTrashAlt } from 'react-icons/fa';
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
                <FaCheck 
                  style={{ cursor: 'pointer', color: 'green', marginRight: '8px' }} 
                  onClick={() => completeDonation(donation._id)} 
                />
              )}
              {!donation.deleted && (
                <FaEdit 
                  style={{ cursor: 'pointer', color: 'orange', marginRight: '8px' }} 
                  onClick={() => handleEdit(donation)} 
                />
              )}
              {!donation.deleted && (
                <FaTrash 
                  style={{ cursor: 'pointer', color: 'red', marginRight: '8px' }} 
                  onClick={() => handleOpenWarningModal(donation._id)} 
                />
              )}
              {donation.deleted && (
                <>
                  <FaUndo 
                    style={{ cursor: 'pointer', color: 'blue', marginRight: '8px' }} 
                    onClick={() => restoreDonation(donation._id)} 
                  />
                  <FaTrashAlt 
                    style={{ cursor: 'pointer', color: 'darkred' }} 
                    onClick={() => deleteDonation(donation._id)} 
                  />
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

// import React from 'react';
// import { Button, Card, Container, Row, Col } from 'react-bootstrap';
// import moment from 'moment';
// import { FaCheck, FaEdit, FaTrash, FaTrashRestore } from 'react-icons/fa';
// import styled from 'styled-components';

// // Styled component for the card container
// const CardContainer = styled(Container)`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 20px;
//   justify-content: center;
//   padding: 20px;
// `;

// // Styled component for individual cards
// const StyledCard = styled(Card)`
//   width: 100%;
//   margin: 10px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   }

//   .card-body {
//     padding: 20px;
//   }

//   .card-title {
//     font-size: 1.5rem;
//     font-weight: bold;
//     color: #333;
//   }

//   .card-text {
//     font-size: 1rem;
//     color: #666;
//     margin-bottom: 10px;
//   }

//   .btn {
//     margin-right: 5px;
//   }
// `;

// // Function component representing the Donation Table as a card layout
// const DonationTable = ({
//   donations,
//   completeDonation,
//   handleEdit,
//   handleOpenWarningModal,
//   restoreDonation,
//   deleteDonation
// }) => {
//   return (
//     <CardContainer>
//       {donations.map(donation => (
//         <StyledCard key={donation._id}>
//           <Card.Body>
//             <Card.Title>{donation.firstName} {donation.lastName}</Card.Title>
//             <Card.Text><strong>Email:</strong> {donation.email}</Card.Text>
//             <Card.Text><strong>Phone:</strong> {donation.phone}</Card.Text>
//             <Card.Text><strong>Description:</strong> {donation.description}</Card.Text>
//             <Card.Text><strong>Weight:</strong> {donation.weight}</Card.Text>
//             <Card.Text><strong>Address:</strong> {donation.address}</Card.Text>
//             <Card.Text><strong>Date of Pickup:</strong> {donation.date}</Card.Text>
//             <Card.Text><strong>Time Slot:</strong> {donation.timeSlot}</Card.Text>
//             <Card.Text><strong>Status:</strong> {donation.status}</Card.Text>
//             <Card.Text><strong>Completed At:</strong> {donation.completedAt ? moment(donation.completedAt).format('YYYY-MM-DD HH:mm') : 'N/A'}</Card.Text>
//             <Card.Text><strong>Attended By:</strong> {donation.attendedBy}</Card.Text>
//             <Card.Text><strong>Remarks:</strong> {donation.pickupRemarks}</Card.Text>
//             <div>
//               {donation.status !== 'Completed' && !donation.deleted && (
//                 <Button variant="success" size="sm" onClick={() => completeDonation(donation._id)}>
//                   <FaCheck />
//                 </Button>
//               )}
//               {!donation.deleted && (
//                 <>
//                   <Button variant="warning" size="sm" onClick={() => handleEdit(donation)} className="ms-2">
//                     <FaEdit />
//                   </Button>
//                   <Button variant="danger" size="sm" onClick={() => handleOpenWarningModal(donation._id)} className="ms-2">
//                     <FaTrash />
//                   </Button>
//                 </>
//               )}
//               {donation.deleted && (
//                 <>
//                   <Button variant="secondary" size="sm" onClick={() => restoreDonation(donation._id)} className="ms-2">
//                     <FaTrashRestore />
//                   </Button>
//                   <Button variant="danger" size="sm" onClick={() => deleteDonation(donation._id)} className="ms-2">
//                     <FaTrash />
//                   </Button>
//                 </>
//               )}
//             </div>
//           </Card.Body>
//         </StyledCard>
//       ))}
//     </CardContainer>
//   );
// };

// export default DonationTable;

