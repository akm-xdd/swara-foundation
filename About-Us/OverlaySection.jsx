import React from 'react';

const OverlaySection = () => {
  return (
    <div className="position-relative w-100 vh-100 d-flex justify-content-center align-items-center bg-dark">
      <img 
        src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Background" 
        className="img-fluid position-absolute w-100 h-100" 
        style={{ objectFit: 'cover', opacity: 0.5 }}
      />
      <div className="position-relative d-flex justify-content-center align-items-center text-white">
        <h1>Real Work. Real Change</h1>
      </div>
    </div>
  );
};

export default OverlaySection;
