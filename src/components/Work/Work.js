import React from 'react'
import './Work.css'
import TO from '../../assests/todolist.png'
import TC from '../../assests/churn.png'
import QR from '../../assests/QR.png'

const Work = () => {
return (
    
    <div className="portfolio-container">
        <h1 className="topic">My Portfolio</h1>
        <div className="line"></div>
        <div className="cards">
        <div className="card" >
            <img src={TO} className="card-img" alt="..." />
            <div className="card-body">
            <h5 className="card-title">TodoList App</h5>
           
            <div className="view-button">
                <a href="/" className="btn btn-dark">
                LINK
                </a>
            </div>
            </div>
        </div>
        <div className="card" >
            <img src={QR} className="card-img" alt="..." />
            <div clasNames="card-body">
            <h5 className="card-title">QR code Generator</h5>
            
            <div className="view-button">
                <a href="/" className="btn btn-dark">
                LINK
                </a>
            </div>
            </div>
        </div>
        <div className="card" >
            <img src={TC} className="card-img" alt="..." />
            <div className="card-body">
            <h5 className="card-title">
                Telecom Customer Churn Prediction System
            </h5>
            
            <div className="view-button">
                <a href="https://github.com/aayushbikramlamichhane/Telecom_churn_prediction_system/tree/main/Telecom-Customer-Churn-Prediction-System" classNameName="btn btn-dark">
                LINK
                </a>
            </div>
            </div>
        </div>
</div>
    </div>
    
)
}

export default Work