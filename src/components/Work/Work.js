import React from 'react'
import './Work.css'
import TO from '../../assests/todolist.png'
import TC from '../../assests/churn.png'
import QR from '../../assests/QR.png'
import RS from '../../assests/RS.jpg'

const Work = () => {
return (
    
    <div className="portfolio-container">
        <h1 className="topic">My Portfolio</h1>
        
        <div className="cards">
        <div className="card" >
            <img src={TO} className="card-img" alt="..." />
            <div className="card-body">
            <h5 className="card-title">TodoList App</h5>
           
            <div className="view-button">
               <a href="https://github.com/aayushbikramlamichhane/Todo-list/tree/main/todo%20list%20using%20react/todo/todo" className="btn" target='__blank' rel="noopener noreferrer">
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
                <a href="https://github.com/aayushbikramlamichhane/qrcode-generator" className="btn" target='__blank' rel="noopener noreferrer">
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
                <a href="https://github.com/aayushbikramlamichhane/Telecom_churn_prediction_system/tree/main/Telecom-Customer-Churn-Prediction-System" className="btn" target='__blank' rel="noopener noreferrer">
                LINK
                </a>
            </div>
            </div>
        </div>
        <div className="card" >
            <img src={RS} className="card-img" alt="..." />
            <div className="card-body">
            <h5 className="card-title">
                Currency Converter
            </h5>
            
            <div className="view-button">
                <a href="https://github.com/aayushbikramlamichhane/Currency-Converter" className="btn" target='__blank' rel="noopener noreferrer">
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