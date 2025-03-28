import React,{lazy,Suspense} from 'react'
import Home from '../Pages/Home'
import AboutUs from '../Pages/AboutUs'
// import Services from '../Pages/Services'
import Careers from '../Pages/Careers'
import { Routes, Route } from 'react-router-dom'
import Contact from '../Pages/Contact'
import WhatWeOffer from '../Pages/WhatWeOffer'
import Blog from '../Pages/Blog'

export default function AllRoutes() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="/WhatWeOffer" element={<WhatWeOffer/>} />
            {/* <Route path="/services" element={<Services />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />

        </Routes>
        </Suspense>
    </div>
  )
}
