import { Component } from 'react';
import './App.css';
import Hero from './Hero/hero.jsx'
import Recommended_Courses from './Recommended_Courses/Recommended_Courses';
import Stories from './Testimonials/Stories';

class App extends Component{
  render(){
  return (
    <div className='container'>
      <Hero />
      <Recommended_Courses/>
      <Stories />
    </div>
  );
}
}

export default App;


