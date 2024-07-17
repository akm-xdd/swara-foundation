import React from "react"
import { Link } from "react-router-dom"
import Question from "../components/Question"

export default function Home() {
    return (
    <div className="home-container">
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://khushii.org/wp-content/uploads/2020/10/education-top-image.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="https://smileindiatrust.org/wp-content/uploads/2019/12/IMG_0203-min-1200x800.jpg" width={884}  height ={ 417} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="https://www.bailinson-oleary.com/wp-content/uploads/2019/08/Child-Support.jpg" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        

        <div className="section-2 bg-light-subtle w-100 px-5 py-5">
            <h1 className="heading mb-4"> Your support is vital in guaranteeing education for everyone!</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="para">
                            Childhood is often considered the most joyous phase of human life—a time when we are carefree, secure, and content. However, this idyllic image does not reflect the reality for many children who are out of school. Various factors contribute to children dropping out of school, including challenging socio-economic conditions and a lack of awareness in communities where education is not prioritized.
                            Attending school not only secures a dignified future and a joyful present for children, but it also provides them with a safe environment to express themselves, learn, share, and grow. Children who drop out of school are frequently forced into child labor, child marriages, or become victims of child trafficking.
                            The Swara Foundation, through its ‘Shiksha Na Ruke’ initiative, has been assisting children from difficult backgrounds to continue their education, aiming for a brighter future and a better life. Currently, we are directly providing education to over 120,000 children across 27 states in India.
                            Despite the numerous challenges, these young champions remain resilient, continuing to dream and strive for a better future. With your support, we can nurture their dreams by providing accessible and quality education. Join us in ensuring a happy and safe childhood for all!
                        </p>
                    </div>

                    <div className="col">
                        <img src="https://www.smilefoundationindia.org/wp-content/uploads/2023/03/Layer-109-1-1024x757.png" height={300} width={300} className="img"></img>
                    </div>
                </div>
            </div>
        </div>


        <div className="section-3 mt-5 bg-body-tertiary w-100">
            <h1 className="heading mb-4 text-center">Key Intervation under Swara Foundation</h1>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <img src="https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg" className="img-fluid img"/>
                    </div>
                    <div className="col">
                    <img src="https://img.freepik.com/free-vector/flat-international-women-s-day-badges-collection_23-2149260642.jpg" className="img-fluid img "/>
                    </div>
                </div>

                <div className="row mt-5 mb-5">
                    <div className="col">
                        <img src="https://www.shutterstock.com/image-vector/illustration-icon-food-sharing-donation-600nw-2229819277.jpg" className="img-fluid img "/>
                    </div>
                    <div className="col">
                        <img src="https://img.freepik.com/free-vector/charity-life-abstract-logo_1043-47.jpg" className="img-fluid img"/>
                    </div>
                </div>
            </div>

        </div>


        <div className="faq mt-5 bg-body-tertiary w-100 d-flex flex-column mb-3">
            <h1 className="display-3 text-center">FREQUENTLY ASKED QUESTIONs</h1>
            <Question/>
        </div>


            
                
          
       
    </div>
    )
};