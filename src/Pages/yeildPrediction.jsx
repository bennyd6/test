import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/header.jsx'
import Navbar from '../components/navbar.jsx'

function yeildPrediction(){
    return(
        <>
        <Header></Header>
        <Navbar></Navbar>
        <div className='crop-recommendation-main'>
            <h1>Yield Prediction System</h1>
            <form className='crop-recommendation-form'>
                <div className='form-int'>
                    <div className="cs-int">
                    <h5>Nitrogen</h5>
                    <input type="number"/>
                    </div>
                    <div className="cs-int">
                    <h5>Phosphorus</h5>
                    <input type="number"/>
                    </div>
                    <div className="cs-int">
                    <h5>Potassium</h5>
                    <input type="number" />
                    </div>
                    <div className="cs-int">
                    <h5>Temperature</h5>
                    <input type="number"/>
                    </div>
                </div>
                <div className='form-int'>
                    <div className="cs-int">
                    <h5>Humidity</h5>
                    <input type="number"/>
                    </div>
                    <div className="cs-int">
                    <h5>pH</h5>
                    <input type="number"/>
                    </div>
                    <div className="cs-int">
                    <h5>Rainfall</h5>
                    <input type="number"/>
                    </div>
                </div>
                <button type="submit">Predict!</button>
            </form>
        </div>
        </>
    )
}

export default yeildPrediction