import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './header/Navbar';
import AllRoutes from './routes/AllRoutes';
import Footer from './header/Footer';

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading time (you can replace this with actual data loading)
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // 2 seconds loader

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="app-loader">
  //       <div className="loader-spinner"></div>
  //       <div className="loader-text">Loading...</div>
  //     </div>
  //   );
  // }

  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;