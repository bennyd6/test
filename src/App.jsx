import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import './App.css';
import Home from './Pages/Home.jsx';
import Services from './Pages/Services.jsx';
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import User from "./Pages/User.jsx";
import Ongoingcrop from "./Pages/Ongoingcrop.jsx";
import CropSuggestion from "./Pages/CropSuggestion.jsx";
import Footer from './components/footer.jsx'
import CropAnalysis from "./Pages/CropAnalysis.jsx";
import RoverandDrones from "./Pages/RoverandDrones.jsx";
import YeildPrediction from "./Pages/yeildPrediction.jsx";
import './Pages/CropSuggestion.css';
import Rover from "./Pages/Rover.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/services/yet-to-crop", element: <Services /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/user", element: <User /> },
  { path: "/services/ongoing-crop", element: <Ongoingcrop /> },
  { path: "/services/yet-to-crop/crop-suggestion", element: <CropSuggestion /> },
  { path: "/services/ongoing-crop/crop-analysis",element:<CropAnalysis/>},
  { path:"/services/ongoing-crop/rover-and-drones",element:<RoverandDrones/>},
  { path:"/services/ongoing-crop/rover-and-drones/rover-controls",element:<Rover/>},
  { path:"/services/ongoing-crop/crop-analysis/yeild-prediction",element:<YeildPrediction/>}
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="ult">
    <RouterProvider router={router}> </RouterProvider>
    <Footer></Footer>
    </div>
    </>
  );
}

export default App;
