import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="container py-5">
      <div className='row'>

        <div className="col-md-3">
          <h3 className='mb-3'>UrbanEdge Constructions</h3>
          <div className='pe-5'>
            <p>Our post-construction services gives you peace of mind knowing that we are still here for you even after.</p>
          </div>
        </div>

        <div className="col-md-3">
          <h3 className='mb-3'>Our Services</h3>
          <ul>
            <li><a href="">Speciality Constructions</a></li>
            <li><a href="">Speciality Constructions</a></li>
            <li><a href="">Speciality Constructions</a></li>
            <li><a href="">Speciality Constructions</a></li>
            <li><a href="">Speciality Constructions</a></li>
          </ul>
        </div>

        <div className="col-md-3">
          <h3 className='mb-3'>Quick Links</h3>
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Blogs</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>

        <div className="col-md-3">
          <h3 className='mb-3'>Contact Us</h3>
          <ul>
            <li><a href="">(888-000-0000)</a></li>
            <li><a href="">info@example.com</a></li>
            <p>B-18X, Rajaji Puram <br />Lucknow,Uttar Pardesh ,226017 <br /> 0522400XXX</p>
          </ul>
        </div>
        <hr />
        <div className='text-center pt-4'>Copyright © 2024 UrbanEdge Constructions. All Rights Reserved.</div>
      </div>
    </div>

  </footer>
)
}

export default Footer