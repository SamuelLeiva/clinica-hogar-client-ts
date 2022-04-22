import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login/Login";
import DashboardPage from "./pages/Dashboard/Dashboard";
import Services from "./pages/Services/Services";
import Appointments from "./pages/Appointments/Appointments";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />.
          <Route path="dashboard" element={<DashboardPage />}>
            <Route path="services" element={<Services />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="profile" element={<Profile />} />
            {/* <Route path="profile" element={<Profile />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="sent" element={<AppointmentProcess />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
