import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './assets/Navbar';
import Landingpage from './assets/Landingpage';
import Loginpage1 from './assets/Loginpage1';
import Loginpage2 from './assets/Loginpage2';
import Hero from './assets/Hero';
import Services from './assets/Services';
import Memberships from './assets/Memberships';
import AboutUs from './assets/AboutUs';
import FitnessFooter from './assets/FitnessFooter';
import Home from './assets/Home';
import BMI from './assets/BMI';
import Trainers from './assets/Trainers';
import Diet from './assets/Diet';
import Workout from './assets/Workout';
import Adminpanel from './Admin/Adminpanel';
import Admnav from './Admin/Admnav';
import View from './Admin/View';
import Lungs from './assets/Lungs';
import Shuttle from './assets/Shuttle';
import Bronco from './assets/Bronco';
import YoYo from './assets/YoYo';
import Cooper from './assets/Cooper';
import Illinois from './assets/Illinois';
import Shop from './assets/Shop';

function AppContent() {
  const location = useLocation();

  const hideNavbar = location.pathname === '/Home' || location.pathname === '/BMI' ||
  location.pathname === '/Trainers' || location.pathname === '/Diet' || location.pathname === '/Workouts' ||
  location.pathname === '/Adminpanel' || location.pathname === '/Admnav' || location.pathname === '/admin/View' ||
  location.pathname === '/Lungs' || location.pathname === '/Shuttle' || location.pathname === '/Bronco' ||
  location.pathname === '/YoYo' || location.pathname === '/Cooper' || location.pathname === '/Illinois' ||
  location.pathname === '/Shop';



  return (
    <>
      {!hideNavbar && <Navbar />}
      
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/Hero' element={<Hero />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Premium' element={<Memberships />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<FitnessFooter />} />
        <Route path='/Landingpage' element={<Landingpage />} />
        <Route path='/Loginpage2' element={<Loginpage2 />} />
        <Route path='/Adminpanel' element={<Adminpanel />} />
        <Route path='/Admnav' element={<Admnav />} />
        <Route path='/Loginpage1' element={<Loginpage1 />} />
        <Route path='/BMI' element={<BMI />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Trainers' element={<Trainers />} />
        <Route path='/Diet' element={<Diet />} />
        <Route path='/Workouts' element={<Workout />} />
        <Route path='/admin/View' element={<View />}></Route>
        <Route path='/Lungs' element={<Lungs />}></Route>
        <Route path='/Shuttle' element={<Shuttle />}></Route>
        <Route path='/Bronco' element={<Bronco />}></Route>
        <Route path='/YoYo' element={<YoYo />}></Route>
        <Route path='/Cooper' element={<Cooper />}></Route>
        <Route path='/Illinois' element={<Illinois />}></Route>
        <Route path='/Shop' element={<Shop />}></Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;