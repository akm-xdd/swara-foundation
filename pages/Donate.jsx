// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'sonner';
// import styled from 'styled-components';
// import moment from 'moment/moment';

// const DonateContainer = styled.div`
//   padding: 20px;
//   max-width: 1200px;
//   margin: 0 auto;
//   text-align: center;
// `;

// const Heading = styled.h2`
//   font-size: 2.5rem;
//   margin-bottom: 10px;
// `;

// const Description = styled.p`
//   font-size: 1.2rem;
//   margin-bottom: 30px;
// `;

// const DonateSection = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   margin-bottom: 30px;
// `;

// const DonateHalf = styled.div`
//   flex: 1 1 45%;
//   padding: 20px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   margin-bottom: 20px;
//   display: flex;
//   flex-direction: column;

//   @media (max-width: 768px) {
//     flex: 1 1 100%;
//   }
// `;

// const LeftHalf = styled(DonateHalf)`
//   height: auto;
// `;

// const RightHalf = styled(DonateHalf)`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// const SubHeading = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 20px;
// `;

// const QRCode = styled.img`
//   max-width: 100%;
//   height: auto;
//   margin-bottom: 20px;
// `;

// const StyledInput = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 20px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
// `;

// const StyledTextarea = styled.textarea`
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 20px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
// `;

// const StyledSelect = styled.select`
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 20px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
// `;

// const CheckButton = styled.button`
//   padding: 10px 20px;
//   border: none;
//   background-color: #28a745;
//   color: white;
//   cursor: pointer;
//   border-radius: 5px;
//   margin-bottom: 20px;
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   background-color: black;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   margin-top: 20px;
// `;

// const CheckSection = styled.div`
//   margin-bottom: 30px;
// `;

// const InputGroup = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const InputGroupText = styled.span`
//   padding: 10px;
//   background-color: #eee;
//   border: 1px solid #ddd;
//   border-radius: 5px 0 0 5px;
// `;

// const FormGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 20px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FullWidth = styled.div`
//   grid-column: span 2;

//   @media (max-width: 768px) {
//     grid-column: span 1;
//   }
// `;

// const Donate = () => {
//   const [pincode, setPincode] = useState('');
//   const [showForm, setShowForm] = useState(false);
//   const [isValidPincode, setIsValidPincode] = useState(null);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     description: '',
//     weight: '',
//     address: '',
//     pincode: '',
//     date: '',
//     timeSlot: ''
//   });

//   const navigate = useNavigate();
//   const validPincodes = [
//     110010, 110016, 110021, 110023, 110028, 110029, 110030, 110037, 110038, 110043,
//     110045, 110046, 110047, 110057, 110061, 110064, 110067, 110068, 110070, 110071,
//     110072, 110073, 110074, 110075, 110077, 110078
//   ];

//   const handlePincodeCheck = () => {
//     if (validPincodes.includes(parseInt(pincode))) {
//       setIsValidPincode(true);
//       setShowForm(true);
//       setFormData(prevState => ({
//         ...prevState,
//         pincode: pincode
//       }));
//     } else {
//       setIsValidPincode(false);
//       setShowForm(false);
//       toast.error('Sorry, we are not available in your area yet.');
//     }
//   };

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [id]: value
//     }));

//     if (id === 'phone') {
//       if (!value.match('^[0-9]{10}$')) {
//         toast.error('Your phone number is not valid!');
//       } else {
//         toast.success('Phone Number is valid!');
//       }
//     }
//   };

//   const checkAvailability = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/donations/check-availability', {
//         params: { date: formData.date, timeSlot: formData.timeSlot, pincode: formData.pincode }
//       });
//       return response.data.available;
//     } catch (error) {
//       console.error('Error checking availability', error);
//       toast.error('Error checking availability');
//       return false;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const isAvailable = await checkAvailability();
//     if (!isAvailable) {
//       toast.error('Time slot already booked, please choose another.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/donations', formData);
//       if (response.status === 201) {
//         toast.success('Form submitted successfully!');
//         setTimeout(() => {
//           setFormData({
//             firstName: '',
//             lastName: '',
//             email: '',
//             phone: '',
//             description: '',
//             weight: '',
//             address: '',
//             pincode: '',
//             date: '',
//             timeSlot: ''
//           });
//           navigate('/');
//           window.location.reload();
//         }, 2000);
//       } else {
//         toast.error('Failed to submit form. Please try again.');
//       }
//     } catch (error) {
//       toast.error('Failed to submit form. Please try again.');
//     }
//   };

//   return (
//     <DonateContainer>
//       <Heading>Donate</Heading>
//       <Description>Your donation of clothes, money, or books can make a significant difference. Join us in our mission to support those in need.</Description>
//       <DonateSection>
//         <LeftHalf>
//           <SubHeading>Importance of Donation</SubHeading>
//           <QRCode src="https://storage.googleapis.com/dara-c1b52.appspot.com/daras_ai/media/a3202e58-17ef-11ee-9a70-8e93953183bb/cleaned_qr.png" alt="UPI QR Code" />
//           <Description>Scan the QR code to donate. Your generosity helps us reach more people in need.</Description>
//         </LeftHalf>
//         <RightHalf>
//           <SubHeading>Check Availability in Your Area</SubHeading>
//           <CheckSection>
//             <form>
//               <StyledInput 
//                 type="text" 
//                 value={pincode} 
//                 onChange={(e) => setPincode(e.target.value)} 
//                 placeholder="Enter your 6-digit pincode" 
//               />
//               <CheckButton type="button" onClick={handlePincodeCheck}>Check</CheckButton>
//             </form>
//           </CheckSection>
//           {showForm && (
//             <form className="donation-form mt-3" onSubmit={handleSubmit}>
//               <SubHeading>Donation Form</SubHeading>
//               <FormGrid>
//                 <StyledInput type="text" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
//                 <StyledInput type="text" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
//                 <StyledInput type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//                 <InputGroup>
//                   <InputGroupText>+91</InputGroupText>
//                   <StyledInput type="tel" id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
//                 </InputGroup>
//                 <FullWidth>
//                   <StyledInput type="text" id="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
//                 </FullWidth>
//                 <FullWidth>
//                   <StyledTextarea id="description" placeholder="Description about donation" value={formData.description} onChange={handleChange} required />
//                 </FullWidth>
//                 <StyledSelect id="weight" value={formData.weight} onChange={handleChange} required>
//                   <option value="">Select weight</option>
//                   <option value="0-5kg">0-5 kg</option>
//                   <option value="5-10kg">5-10 kg</option>
//                   <option value="10-20kg">10-20 kg</option>
//                   <option value="20+kg">20+ kg</option>
//                 </StyledSelect>
//                 <StyledSelect id="timeSlot" value={formData.timeSlot} onChange={handleChange} required>
//                   <option value="">Select time slot</option>
//                   <option value="7-8">7-8 AM</option>
//                   <option value="8-9">8-9 AM</option>
//                   <option value="9-10">9-10 AM</option>
//                   <option value="10-11">10-11 AM</option>
//                 </StyledSelect>
//                 <StyledInput type="text" id="pincode" placeholder="Pincode" value={formData.pincode} readOnly />
//                 <FullWidth>
//                   <StyledInput type="date" id="date" value={formData.date} onChange={handleChange} required />
//                 </FullWidth>
//               </FormGrid>
//               <SubmitButton type="submit">Submit</SubmitButton>
//             </form>
//           )}
//         </RightHalf>
//       </DonateSection>
//     </DonateContainer>
//   );
// };

// export default Donate;






























import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import styled from 'styled-components';
import moment from 'moment/moment';
import { Alert } from 'react-bootstrap';

const DonateContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const DonateSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const DonateHalf = styled.div`
  flex: 1 1 45%;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const LeftHalf = styled(DonateHalf)`
  height: auto;
`;

const RightHalf = styled(DonateHalf)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const QRCode = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const CheckButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
`;

const CheckSection = styled.div`
  margin-bottom: 30px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const InputGroupText = styled.span`
  padding: 10px;
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 5px 0 0 5px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FullWidth = styled.div`
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

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
    pincode: '',
    date: '',
    timeSlot: ''
  });

  const navigate = useNavigate();
  const validPincodes = [
    110010, 110016, 110021, 110023, 110028, 110029, 110030, 110037, 110038, 110043,
    110045, 110046, 110047, 110057, 110061, 110064, 110067, 110068, 110070, 110071,
    110072, 110073, 110074, 110075, 110077, 110078
  ];

  const handlePincodeCheck = () => {
    if (validPincodes.includes(parseInt(pincode))) {
      setIsValidPincode(true);
      setShowForm(true);
      setFormData(prevState => ({
        ...prevState,
        pincode: pincode
      }));
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
      if (!value.match('^[0-9]{10}$')) {
        console.log("Phone number is invalid")
      } else {
        toast.success('Phone Number is valid!');
      }
    }
  };

  const checkAvailability = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/donations/check-availability', {
        params: { date: formData.date, timeSlot: formData.timeSlot, pincode: formData.pincode }
      });
      return response.data.available;
    } catch (error) {
      console.error('Error checking availability', error);
      toast.error('Error checking availability');
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isAvailable = await checkAvailability();
    if (!isAvailable) {
      toast.error('Time slot already booked, please choose another.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/donations', formData);
      if (response.status === 201) {
        toast.success('Form submitted successfully!');
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            description: '',
            weight: '',
            address: '',
            pincode: '',
            date: '',
            timeSlot: ''
          });
          navigate('/');
          window.location.reload();
        }, 2000);
      } else {
        toast.error('Failed to submit form. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    }
  };

  return (
    <DonateContainer>
      <Heading>Donate</Heading>
      <Description>Your donation of clothes, money, or books can make a significant difference. Join us in our mission to support those in need.</Description>
      <DonateSection>
        <LeftHalf>
          <SubHeading>Importance of Donation</SubHeading>
          <QRCode src="https://as2.ftcdn.net/v2/jpg/04/86/91/81/1000_F_486918185_Sp2VXc2d6BwvRLFnFrS1Jmd0lRVTNBtK.jpg" alt="UPI QR Code" />
          <Description>Scan the QR code to donate. Your generosity helps us reach more people in need.</Description>
        </LeftHalf>
        <RightHalf>
          <SubHeading>Check Availability in Your Area</SubHeading>
          <CheckSection>
            <form>
              <StyledInput 
                type="text" 
                value={pincode} 
                onChange={(e) => setPincode(e.target.value)} 
                placeholder="Enter your 6-digit pincode" 
              />
              <CheckButton type="button" onClick={handlePincodeCheck}>Check</CheckButton>
            </form>
            {isValidPincode === false && (
              <Alert variant="warning">Sorry, we are not available in your area yet. Ship your donations here: A-40, Swatentra Nagar, Narela, New Delhi-110040</Alert>
            )}
          </CheckSection>
          {showForm && (
            <form className="donation-form mt-3" onSubmit={handleSubmit}>
              <SubHeading>Donation Form</SubHeading>
              <FormGrid>
                <StyledInput type="text" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                <StyledInput type="text" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                <StyledInput type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                  <StyledInput type="tel" id="phone" placeholder="(+91 IN) Phone Number" value={formData.phone} onChange={handleChange} required />
   
                <FullWidth>
                  <StyledInput type="text" id="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
                </FullWidth>
                <StyledInput type="text" id="pincode" placeholder="Pincode" value={formData.pincode} readOnly/>
                <FullWidth>
                  <StyledTextarea id="description" placeholder="Description about donation" value={formData.description} onChange={handleChange} required />
                </FullWidth>
                <StyledSelect id="weight" value={formData.weight} onChange={handleChange} required>
                  <option value="">Select weight</option>
                  <option value="0-5kg">0-5 kg</option>
                  <option value="5-10kg">5-10 kg</option>
                  <option value="10-20kg">10-20 kg</option>
                  <option value="20+kg">20+ kg</option>
                </StyledSelect>
                <StyledSelect id="timeSlot" value={formData.timeSlot} onChange={handleChange} required>
                  <option value="">Select time slot</option>
                  <option value="7-8">7-8 AM</option>
                  <option value="8-9">8-9 AM</option>
                  <option value="9-10">9-10 AM</option>
                  <option value="10-11">10-11 AM</option>
                </StyledSelect>
                <FullWidth>
                  <StyledInput type="date" id="date" value={formData.date} onChange={handleChange} required />
                </FullWidth>
              </FormGrid>
              <SubmitButton type="submit" disabled={formData.phone.length !== 10}>Submit</SubmitButton>
            </form>
          )}
        </RightHalf>
      </DonateSection>
    </DonateContainer>
  );
};

export default Donate;
