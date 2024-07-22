import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Modal from 'react-modal';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const FullWidthCarousel = styled(Carousel)`
  .carousel-item {
    height: 100vh;
    min-height: 300px;
    position: relative;
    overflow: hidden;
  }

  .carousel-item img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.5s ease;
  }

  .carousel-item .dark-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .carousel-item:hover .dark-overlay {
    opacity: 1;
  }

  .carousel-caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    opacity: 1;
  }

  .carousel-caption h3, .carousel-caption p {
    color: white;
  }
`;

const OurWorkContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 40px;
  &:before {
    content: "";
    display: block;
    width: 80px;
    height: 2px;
    background-color: #333;
    margin: 0 auto 20px;
  }
`;

const Quote = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  font-family: 'Roboto', sans-serif;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 30px auto;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &:hover::after {
    content: attr(data-description);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    font-size: 1rem;
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 0.3s ease, transform 0.3s ease;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  &.ReactModal__Content--after-open {
    opacity: 1;
    transform: translateY(0);
  }

  &.ReactModal__Content--before-close {
    opacity: 0;
    transform: translateY(-100%);
  }

  img {
    max-width: 90%;
    max-height: 90%;
    margin: auto;
  }
`;

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  cursor: pointer;
  font-size: 24px;
`;

const UpcomingActivities = styled.div`
  text-align: center;
`;

const OurWork = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

  const images = [
    { src: 'https://via.placeholder.com/300', description: 'Our volunteers distributing clothes to the underprivileged.' },
    { src: 'https://via.placeholder.com/300', description: 'A workshop on skill development for women.' },
    { src: 'https://via.placeholder.com/300', description: 'Medical camp providing free health check-ups.' },
    { src: 'https://via.placeholder.com/300', description: 'Children enjoying a fun learning session.' },
  ];

  const carouselImages = [
    { src: 'https://www.shutterstock.com/image-photo/smiling-faces-young-children-having-600w-639450937.jpg', caption: 'Our Work Slide 1', description: 'Some representative description for slide 1.' },
    { src: 'https://timesnext.com/content/images/wp-content/uploads/2020/09/JAGOFOUNDATION-768x509-1.jpg', caption: 'Our Work Slide 2', description: 'Some representative description for slide 2.' },
    { src: 'https://www.bailinson-oleary.com/wp-content/uploads/2019/08/Child-Support.jpg', caption: 'Our Work Slide 3', description: 'Some representative description for slide 3.' },
  ];

  return (
    <>
      <FullWidthCarousel controls={false} indicators interval={3000} pause="hover">
        {carouselImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={`Slide ${index + 1}`}
            />
            <div className="dark-overlay">
              <Carousel.Caption>
                <h3>{image.caption}</h3>
                <p>{image.description}</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </FullWidthCarousel>
      <OurWorkContainer>
        <Section>
          <Quote>"The best way to find yourself is to lose yourself in the service of others." - Mahatma Gandhi</Quote>
          <Description>We are dedicated to improving the lives of underprivileged communities. Below are some snapshots of our recent activities and events. Click on the images to view them in full size.</Description>
        </Section>
        <Section>
          <GalleryContainer>
            {images.map((image, index) => (
              <ImageWrapper
                key={index}
                data-description={image.description}
                onClick={() => openModal(image.src)}
              >
                <img src={image.src} alt={`Work ${index + 1}`} />
              </ImageWrapper>
            ))}
          </GalleryContainer>
        </Section>
        <Section>
          <UpcomingActivities>
            <h3>Upcoming Activities</h3>
            <p>There are no upcoming activities at the moment. Stay tuned for updates!</p>
          </UpcomingActivities>
        </Section>
        <StyledModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          closeTimeoutMS={300}
          className="ReactModal__Content"
        >
          <CloseButton onClick={closeModal} />
          <img src={selectedImage} alt="Selected Work" />
        </StyledModal>
      </OurWorkContainer>
    </>
  );
};

export default OurWork;
