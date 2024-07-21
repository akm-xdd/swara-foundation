import React from 'react';

const KeyInterventionsSection = () => {
  const sectionStyle = {
    width: '100%',
    padding: '2rem 1rem',
    backgroundColor: '#f8f9fa'
  };

  const headingStyle = {
    marginBottom: '1.5rem',
    textAlign: 'center'
  };

  const imgStyle = {
    maxWidth: '360px',
    height: 'auto',
    borderRadius: '0.6rem',
    padding: '0'
  };


  const rowStyle = {
    marginTop: '2rem',
    marginBottom: '2rem',
    justifyContent: 'center',
    alignContent: 'center',
    gap: "1rem"
  };

  return (
    <div className="section-3" style={sectionStyle}>
      <h1 className="heading" style={headingStyle}>Key Interventions under Swara Foundation</h1>
      <div className="container text-center">
        <div className="row" style={rowStyle}>
            <img
              src="https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg"
              style={imgStyle}
              alt="Education Support"
            />
            <img
              src="https://img.freepik.com/free-vector/flat-international-women-s-day-badges-collection_23-2149260642.jpg"
              style={imgStyle}
              alt="Women's Empowerment"
            />
            <img
              src="https://www.shutterstock.com/image-vector/illustration-icon-food-sharing-donation-600nw-2229819277.jpg"
              style={imgStyle}
              alt="Food Sharing"
            />
            <img
              src="https://img.freepik.com/free-vector/charity-life-abstract-logo_1043-47.jpg"
              style={imgStyle}
              alt="Charity Life"
            />
          </div>
      </div>
    </div>
  );
};

export default KeyInterventionsSection;
