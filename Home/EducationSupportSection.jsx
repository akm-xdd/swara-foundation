import React, { useState, useEffect } from 'react';

const EducationSupportSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1012);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1012);
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fullText = `Childhood is often considered the most joyous phase of human life—a time when we are carefree, secure, and content. However, this idyllic image does not reflect the reality for many children who are out of school. Various factors contribute to children dropping out of school, including challenging socio-economic conditions and a lack of awareness in communities where education is not prioritized. Attending school not only secures a dignified future and a joyful present for children, but it also provides them with a safe environment to express themselves, learn, share, and grow. Children who drop out of school are frequently forced into child labor, child marriages, or become victims of child trafficking. The Swara Foundation, through its ‘Shiksha Na Ruke’ initiative, has been assisting children from difficult backgrounds to continue their education, aiming for a brighter future and a better life. Currently, we are directly providing education to over 120,000 children across 27 states in India. Despite the numerous challenges, these young champions remain resilient, continuing to dream and strive for a better future. With your support, we can nurture their dreams by providing accessible and quality education. Join us in ensuring a happy and safe childhood for all!`;

  const reducedText = `Childhood is often considered the most joyous phase of human life—a time when we are carefree, secure, and content. However, this idyllic image does not reflect the reality for many children who are out of school. Various factors contribute to children dropping out of school, including challenging socio-economic conditions and a lack of awareness in communities where education is not prioritized. The Swara Foundation, through its ‘Shiksha Na Ruke’ initiative, has been assisting children from difficult backgrounds to continue their education, aiming for a brighter future and a better life. Currently, we are directly providing education to over 120,000 children across 27 states in India. Join us in ensuring a happy and safe childhood for all!`;

  return (
    <div className="section-2 w-100 px-5 py-5 bg-white">
      <h1 className="heading mb-4">Your support is vital in guaranteeing education for everyone!</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="para">
              {isMobile ? reducedText : fullText}
            </p>
          </div>
          <div className="col">
            <img
              src="https://www.smilefoundationindia.org/wp-content/uploads/2023/03/Layer-109-1-1024x757.png"
              height={300}
              width={300}
              className="img"
              alt="Educational support"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSupportSection;
