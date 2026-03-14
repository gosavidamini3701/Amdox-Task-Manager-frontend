import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/common/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import Dashboard from "./components/dashboard/Dashboard";
import ResetPassword from "./components/pages/ResetPasswordPage";
import FeaturesSection from "./components/common/FeaturesSection";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/features" element={<FeaturesSection />} />
        


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;