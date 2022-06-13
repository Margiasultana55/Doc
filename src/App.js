
import './App.css';
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Heart from './Pages/Doctors/Heart/Heart';
import Cancer from './Pages/Doctors/Cancer/Cancer';
import Child from './Pages/Doctors/Child/Child';
import Dermalogy from './Pages/Doctors/Dermalogy/Dermalogy';
import Ent from './Pages/Doctors/Ent/Ent';
import Eye from './Pages/Doctors/Eye/Eye';
import Dental from './Pages/Doctors/Dental/Dental';
import Gynecology from './Pages/Doctors/Gynecology/Gynecology';
import Medicine from './Pages/Doctors/Medicine/Medicine';
import Register from './Pages/LoginPage/Register/Register';
import Login from './Pages/LoginPage/Login/Login';
import AuthProvider from './contexs/AuthProvider';
import Details from './Pages/Doctors/Details/Details';
import Dashboard from './Pages/Dashboards/Dashboard/Dashboard';
import AppointmentForm from './Pages/Doctors/AppointmentForm/AppointmentForm';
import MyAppoinments from './Pages/Dashboards/MyAppoinments/MyAppoinments';
import MyDetail from './Pages/Dashboards/MyDetail/MyDetail';

import Doc1 from './Pages/Doctors/Doc1';
import Admin from './Pages/Dashboards/AdminDashboard/Admin';
import AdminDoc from './Pages/Dashboards/AdminDashboard/AdminDoc';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        < BrowserRouter>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="heart" element={<Heart />} />
            <Route path="cancer" element={<Cancer />} />
            <Route path="child" element={<Child />} />
            <Route path="derma" element={<Dermalogy />} />
            <Route path="dental" element={< Dental />} />
            <Route path="ent" element={<Ent />} />
            <Route path="eye" element={<Eye />} />
            <Route path="gyne" element={<Gynecology />} />
            <Route path="medi" element={<Medicine />} />
            <Route path="doc" element={<Doc1 />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="" element={<MyAppoinments />} />
              <Route path="admin" element={<Admin />} />
              <Route path="admin/adminDoc" element={<AdminDoc />} />
              <Route path="mydetail/:serviceId" element={<MyDetail />} />
            </Route>
            <Route path="detail/:serviceId" element={<Details />} />
            <Route path="form/:serviceId" element={<AppointmentForm />} />



            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
