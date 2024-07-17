import React from "react"
import { Link } from "react-router-dom"
import Question from "../components/Home/Question"
import Carousel from "../components/Home/Carousel"
import EducationSupportSection from "../components/Home/EducationSupportSection"

export default function Home() {
    return (
    <div className="home-container">
        <Carousel/>
        <EducationSupportSection/>


        <div className="section-3 w-100 px-5 py-5">
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


        <div className="faq mt-5 w-100 d-flex flex-column mb-3 bg-white">
            <h1 className="display-3 text-center">FREQUENTLY ASKED QUESTIONs</h1>
            <Question/>
        </div>


            
                
          
       
    </div>
    )
};