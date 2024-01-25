import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Soic from './components/Soic/Soic';
import Oci from './components/Oci/Oci';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import WalkinAppointment from './components/WalkinAppointment/WalkinAppointment';

function App() {
  return (
    <div className="app-c">
      <NavigationBar />
      {/* Route Setup */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soic" element={<Soic />} />
        <Route path="/oci" element={<Oci />} />
        <Route path="/walkin" element={<WalkinAppointment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
