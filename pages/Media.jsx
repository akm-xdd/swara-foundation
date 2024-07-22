import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const MediaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
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

  &:hover::before {
    content: attr(data-newspaper) " - " attr(data-date);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    text-align: center;
    font-size: 1rem;
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

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Heading = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  font-family: 'Roboto', sans-serif;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: 'Open Sans', sans-serif;
`;

const Media = () => {
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
    { src: 'https://pbs.twimg.com/media/DtJDcYWVYAA5cxe.jpg', newspaper: 'Newspaper A', date: '2023-01-01' },
    { src: 'https://www.jagranimages.com/images/newimg/15042021/15_04_2021-15shh_m_10_15042021_167-c-2_21562150_222825.jpg', newspaper: 'Newspaper B', date: '2023-02-01' },
    { src: 'https://staticimg.amarujala.com/assets/images/2020/01/25/concept-pic_1579959552.jpeg?w=1200', newspaper: 'Newspaper C', date: '2023-03-01' },
    { src: 'https://i.ytimg.com/vi/a0WKKIlKiZI/maxresdefault.jpg', newspaper: 'Newspaper D', date: '2023-04-01' },
  ];

  return (
    <div>
      <Header>
        <Heading>Media Gallery</Heading>
        <Description>Explore our media gallery to see how our NGO is making a difference. Click on the images below to view them in full size.</Description>
      </Header>
      <MediaContainer>
        {images.map((image, index) => (
          <ImageWrapper
            key={index}
            data-newspaper={image.newspaper}
            data-date={image.date}
            onClick={() => openModal(image.src)}
          >
            <img src={image.src} alt={`Media ${index + 1}`} />
          </ImageWrapper>
        ))}
      </MediaContainer>
      <StyledModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        closeTimeoutMS={300}
        className="ReactModal__Content"
      >
        <CloseButton onClick={closeModal} />
        <img src={selectedImage} alt="Selected Media" />
      </StyledModal>
    </div>
  );
};

export default Media;
