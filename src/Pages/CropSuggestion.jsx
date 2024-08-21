// import React, { useState } from 'react';
// import axios from 'axios';
// import Header from '../components/header.jsx'
// import Navbar from '../components/navbar.jsx'
// const CropSuggestion = () => {
//     const [formData, setFormData] = useState({
//         N: '',
//         P: '',
//         K: '',
//         temperature: '',
//         humidity: '',
//         ph: '',
//         rainfall: ''
//     });
//     const [recommendation, setRecommendation] = useState('');
//     const [error, setError] = useState('');

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setRecommendation('');
//         try {
//             const response = await axios.post('http://localhost:5000/recommend', formData);
//             setRecommendation(response.data.crop);
//         } catch (err) {
//             setError('Failed to get the recommendation. Please try again.');
//         }
//     };

//     return (
//         <>
//         <Header></Header>
//         <Navbar></Navbar>
//         <div className='crop-recommendation-main'>
//             <h1>Crop Recommendation System</h1>
//             <form onSubmit={handleSubmit} className='crop-recommendation-form'>
//                 <div className='form-int'>
//                     <div className="cs-int">
//                     <h5>Nitrogen</h5>
//                     <input type="number" name="N"  value={formData.N} onChange={handleChange} required />
//                     </div>
//                     <div className="cs-int">
//                     <h5>Phosphorus</h5>
//                     <input type="number" name="P" value={formData.P} onChange={handleChange} required />
//                     </div>
//                     <div className="cs-int">
//                     <h5>Potassium</h5>
//                     <input type="number" name="K"  value={formData.K} onChange={handleChange} required />
//                     </div>
//                     <div className="cs-int">
//                     <h5>Temperature</h5>
//                     <input type="number" name="temperature" value={formData.temperature} onChange={handleChange} required />
//                     </div>
//                 </div>
//                 <div className='form-int'>
//                     <div className="cs-int">
//                     <h5>Humidity</h5>
//                     <input type="number" name="humidity" value={formData.humidity} onChange={handleChange} required />
//                     </div>
//                     <div className="cs-int">
//                     <h5>pH</h5>
//                     <input type="number" name="ph"  value={formData.ph} onChange={handleChange} required />
//                     </div>
//                     <div className="cs-int">
//                     <h5>Rainfall</h5>
//                     <input type="number" name="rainfall"  value={formData.rainfall} onChange={handleChange} required />
//                     </div>
//                 </div>
//                 <button type="submit">Get Recommendation</button>
//             </form>
//             {recommendation && <h2>Recommended Crop: {recommendation}</h2>}
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//         </div>
//         </>
//     );
// };

// export default CropSuggestion;
