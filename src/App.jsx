import React from 'react';
import Header from './components/Header';
import StudentProfile from './components/StudentProfile';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';
import studentImg from './assets/img.jpg'; 

function App() {
  const studentData = {
    name: "Samia Akther",
    id: "25105(Inter 2nd year)",
    department: " Science ",
    email: "iffatsamia7@gmail.com",
    image: studentImg, 
    isActive: true
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <StudentProfile studentData={studentData} />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;