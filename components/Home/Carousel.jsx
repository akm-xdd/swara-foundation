import React from 'react';

function Carousel() {
  return (
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active c-item">
          <img src="https://plus.unsplash.com/premium_photo-1682092585257-58d1c813d9b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 c-img" alt="Slide 1"/>
        </div>
        <div className="carousel-item c-item">
          <img src="https://plus.unsplash.com/premium_photo-1682092618317-9b50d60e6e0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 c-img" alt="Slide 2"/>
        </div>
        <div className="carousel-item c-item">
          <img src="https://media.istockphoto.com/id/488273780/photo/mult-ethnic-large-group-of-children-hold-teamwork-sign-outdoors.jpg?s=1024x1024&w=is&k=20&c=k37kSvXIZObsRnNO78ehansGyJwSgxuAcI5VWhqiPgA=" className="d-block w-100 c-img" alt="Slide 3"/>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}

export default Carousel;
