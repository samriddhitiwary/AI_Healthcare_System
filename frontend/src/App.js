import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import ClinicCarousel from './components/Carousel/Carousel';
import Appointments from './components/Appoinments/Appoinments';
import Speciality from './components/Speciality/Speciality';
import MiniNavbar from './components/MiniNavbar/MiniNavbar';
import Procedures from './components/Procedures/Procedures';
import ProHealth from './components/ProHealth/ProHealth';
import ConsultOnline from './components/Appoinments/ConsultOnline';
import PatientCare from './components/PatientCare/PatientCare';
import FooterAppointments from './components/FooterAppointments/FooterAppointments';
import Footer from './components/Footer/Footer';
import Login from './components/Header/Login';
import Profile from './components/Header/Profile';
import FindHospital from './components/Appoinments/FindHospital';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookAppointment from './components/Appoinments/BookAppointment';
import ViewAppointments from './components/Appoinments/ViewAppointments';
import ViewHealthRecord from './components/Appoinments/ViewHealthRecord';
import Diagnostic from './components/Appoinments/Diagnostic/Diagnostic';
import Chatbot from './components/Chatbot/Chatbot';
import AppointmentsWidget from './components/AppointmentsWidget/AppointmentsWidget';
import Nutrients_Value from './components/Appoinments/Nutrients_Value';
import View_Calories from './components/Appoinments/View_Calories';

function App() {
  useEffect(() => {
    document.title = 'Digital Healthcare';
  }, []);

  return (
    <Router>
      <Routes>
        {/* Main layout for general pages */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Speciality />} />
          <Route path="/speciality" element={<Speciality />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/prohealth" element={<ProHealth />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Separate layout for Profile page */}
        <Route path="/profile" element={<ProfileOnlyLayout />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Separate page layout for Consult Online */}
        <Route path="/consult-online" element={<ConsultOnline />} />
        <Route path="/find-hospital" element={<FindHospital />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/view-appointment" element={<ViewAppointments />} />
        <Route path="/view-health-record" element={<ViewHealthRecord />} />
        <Route path="/diagnostic-investigations" element={<Diagnostic />} />
        <Route path="/cal-calories" element={<Nutrients_Value />} />
        <Route path="/view-calories" element={<View_Calories />} />
        

       
       

        {/* Only Header is rendered for /login route */}
        <Route path="/login" element={<HeaderOnlyLayout />}>
         
        </Route>
      </Routes>
      <Chatbot/>
      <AppointmentsWidget />
    </Router>
  );
}

const MainLayout = () => (
  <>
    <Header />
    <ClinicCarousel />
    <Appointments />
    <MiniNavbar />
    <br />
    <Outlet />
    <br />
    <PatientCare />
    {/* <FooterAppointments /> */}
    <Footer />
  </>
);

const ProfileOnlyLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const DiagnosticLayout = () => (
  <>
    <Header />
    <ClinicCarousel />
    <Outlet />
  </>
);

const HeaderOnlyLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default App;
