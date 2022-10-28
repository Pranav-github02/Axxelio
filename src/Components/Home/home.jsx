import React from 'react'
import Hero from './Hero/hero'
import Recommended_Courses from './Recommended_Courses/Recommended_Courses'
import Testimonials from './Testimonials/testimonials'

const Home = () => {
    return (
        <div>
            <Hero />
            <Recommended_Courses />
            <Testimonials />
        </div>
    )
}

export default Home