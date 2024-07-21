import React, { useState, useEffect } from 'react';

const EducationSupportSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1012);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1012);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fullText = `Childhood is often considered the most joyous phase of human life—a time when we are carefree, secure, and content. However, this idyllic image does not reflect the reality for many children who are out of school. Various factors contribute to children dropping out of school, including challenging socio-economic conditions and a lack of awareness in communities where education is not prioritized. Attending school not only secures a dignified future and a joyful present for children, but it also provides them with a safe environment to express themselves, learn, share, and grow. Children who drop out of school are frequently forced into child labor, child marriages, or become victims of child trafficking. The Swara Foundation, through its ‘Shiksha Na Ruke’ initiative, has been assisting children from difficult backgrounds to continue their education, aiming for a brighter future and a better life. Currently, we are directly providing education to over 120,000 children across 27 states in India. Despite the numerous challenges, these young champions remain resilient, continuing to dream and strive for a better future. With your support, we can nurture their dreams by providing accessible and quality education. Join us in ensuring a happy and safe childhood for all!`;

  const reducedText = `Childhood is often considered the most joyous phase of human life—a time when we are carefree, secure, and content. However, this idyllic image does not reflect the reality for many children who are out of school. Various factors contribute to children dropping out of school, including challenging socio-economic conditions and a lack of awareness in communities where education is not prioritized. The Swara Foundation, through its ‘Shiksha Na Ruke’ initiative, has been assisting children from difficult backgrounds to continue their education, aiming for a brighter future and a better life. Currently, we are directly providing education to over 120,000 children across 27 states in India. Join us in ensuring a happy and safe childhood for all!`;

  const sectionStyle = {
    width: '100%',
    padding: '2rem 1rem',
    backgroundColor: 'white',
    maxWidth: "1200px",
    margin: "auto"
  };

  const headingStyle = {
    marginBottom: '1.5rem',
    textAlign: 'center'
  };

  const paraStyle = {
    fontSize: '1rem',
    lineHeight: '1.5',
    textAlign: 'justify'
  };

  const imgStyle = {
    height: '300px',
    width: '300px',
    objectFit: 'cover',
    borderRadius: '.6rem'
  };

  const rowStyle = {
    justifyContent: 'center',
    gap: "1.6rem"
  }

  return (
    <div style={sectionStyle}>
      <h1 style={headingStyle}>Your support is vital in guaranteeing education for everyone!</h1>
      <div className="container">
        <div className="row" style={rowStyle}>
          <div className="col-12 col-md-8">
            <p style={paraStyle}>
              {isMobile ? reducedText : fullText}
            </p>
          </div>
          <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
            <img
              src="https://media.istockphoto.com/id/1162324751/photo/indian-girl.jpg?s=1024x1024&w=is&k=20&c=4pHYbGtNvGDZuLtXEemHOAVAch_VPOfXQD3Lj-i80gA="
              style={imgStyle}
              alt="Educational support"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSupportSection;
