import React from 'react';
import OverlaySection from '../components/About-Us/OverlaySection';
import Navbar from '../components/About-Us/Navbar';
import ContentSection from '../components/About-Us/ContentSection';

export default function About() {
  return (
    <div>
      <OverlaySection />
      <div className="container mt-5">
        <div className="mb-5 text-center">
          <p>Smile Foundation was initiated in 2002 when a group of friends came together with the intention of giving back to the society. They were inspired by the thought and philosophy of Peter Senge, the founder of the Society for Organizational Learning who has propagated that “sustainability, social equality and the environment are now business problems…” and corporate leaders can’t expect governments to solve them alone.</p>
          <p>What triggered these thoughts was the liberalisation of the Indian economy in the 1990’s which brought with it immense opportunities. Business revived, and India became not just a market, but also an investment prospect for the developed world. Disposable incomes and early settlements became a living reality for the working middle-class. For the first time in India, professionals could think beyond making a living, and contribute towards the society.</p>
        </div>
        <Navbar />
        <ContentSection 
          id="our-story" 
          title="Our Story" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum." 
          imgSrc="https://via.placeholder.com/500" 
        />
        <ContentSection 
          id="vision" 
          title="Vision" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum." 
          imgSrc="https://via.placeholder.com/500" 
          reverse
        />
        <ContentSection 
          id="mission" 
          title="Mission" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum." 
          imgSrc="https://via.placeholder.com/500" 
        />
        <ContentSection 
          id="how-we-work" 
          title="How We Work" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum." 
          imgSrc="https://via.placeholder.com/500" 
          reverse
        />
      </div>
    </div>
  );
}
