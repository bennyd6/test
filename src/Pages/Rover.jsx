// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Rover.css';
// import Header from '../components/header.jsx'
// import Navbar from '../components/navbar.jsx'

// const Rover = () => {
//   const [irSensors, setIrSensors] = useState([0, 0, 0, 0]);
//   const [distances, setDistances] = useState([0, 0, 0]);
//   const [message, setMessage] = useState('');

//   const ESP32_IP = '192.168.'; // Replace with your ESP32 IP address

//   useEffect(() => {
//     const fetchSensorData = async () => {
//       try {
//         const response = await axios.get(`${ESP32_IP}/`); // Fetch the main page
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(response.data, 'text/html');
        
//         // Extract sensor readings
//         const ir1 = parseInt(doc.querySelector('p:contains("Sensor 1:")').innerText.split(': ')[1]);
//         const ir2 = parseInt(doc.querySelector('p:contains("Sensor 2:")').innerText.split(': ')[1]);
//         const ir3 = parseInt(doc.querySelector('p:contains("Sensor 3:")').innerText.split(': ')[1]);
//         const ir4 = parseInt(doc.querySelector('p:contains("Sensor 4:")').innerText.split(': ')[1]);
//         const distance1 = parseInt(doc.querySelector('p:contains("Distance 1:")').innerText.split(': ')[1].replace(' cm', ''));
//         const distance2 = parseInt(doc.querySelector('p:contains("Distance 2:")').innerText.split(': ')[1].replace(' cm', ''));
//         const distance3 = parseInt(doc.querySelector('p:contains("Distance 3:")').innerText.split(': ')[1].replace(' cm', ''));

//         setIrSensors([ir1, ir2, ir3, ir4]);
//         setDistances([distance1, distance2, distance3]);
//       } catch (error) {
//         console.error("Error fetching sensor data:", error);
//       }
//     };

//     fetchSensorData();
//     const interval = setInterval(fetchSensorData, 1000); // Fetch data every second

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   const sendCommand = async (command) => {
//     try {
//       await axios.get(`${ESP32_IP}/${command}`);
//       setMessage(`Command ${command} sent successfully`);
//     } catch (error) {
//       console.error(`Error sending ${command} command:`, error);
//       setMessage(`Failed to send ${command} command`);
//     }

//     setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
//   };

//   return (
//     <>
//     <Header></Header>
//     <Navbar></Navbar>
//     <div className="control-panel">
//       <h1>Rover</h1>
//       <div className="controls">
//         <button onClick={() => sendCommand('forward')}>Forward</button>
//         <div>
//           <button onClick={() => sendCommand('left')}>Left</button>
//           <button onClick={() => sendCommand('stop')}>Stop</button>
//           <button onClick={() => sendCommand('right')}>Right</button>
//         </div>
//         <button onClick={() => sendCommand('backward')}>Backward</button>
//       </div>
//       {/* <button onClick={() => sendCommand('cleaning')}>Start Cleaning</button> */}
//       {message && <p className="message">{message}</p>}
//       <div className="sensor-readings">
//         {/* <h2>IR Sensor Readings</h2>
//         <p>Sensor 1: {irSensors[0]}</p>
//         <p>Sensor 2: {irSensors[1]}</p>
//         <p>Sensor 3: {irSensors[2]}</p>
//         <p>Sensor 4: {irSensors[3]}</p>
//         <h2>Ultrasonic Sensor Distances</h2>
//         <p>Distance 1: {distances[0]} cm</p>
//         <p>Distance 2: {distances[1]} cm</p>
//         <p>Distance 3: {distances[2]} cm</p> */}
//       </div>
//     </div>
//     </>
//   );
// };

// export default Rover;