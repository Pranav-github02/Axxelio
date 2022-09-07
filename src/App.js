import { Component } from 'react';
import './App.css';
import Hero from './Hero/hero.jsx'
import Recommended_Courses from './Recommended_Courses/Recommended_Courses';
import Stories from './Testimonials/Stories';
import Navbar from './Navbar/Navbar.jsx';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Navbar />
        <Hero />
        <Recommended_Courses />
        <Stories />
      </div>
    );
  }
}

export default App;


