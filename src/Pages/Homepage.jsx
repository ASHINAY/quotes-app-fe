import React from 'react'
import '../pages/Homepage.css';
import { useNavigate, useLocation } from 'react-router-dom'

function Homepage() {
  const navigate = useNavigate();
  const onCategoryClick = () => {

    navigate("/Quotespage")
  }
  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'center', background: '#9384d1', height: '35px', width: '100%', paddingTop: '20px'
      }}>
        <div>
          <span style={{ color: 'white', fontWeight: 'bold' }}>Quotes App</span>
        </div>
      </div>
      <div style={{ color: '#9384d1', marginLeft: '20px', marginTop: '40px' }}>Categories</div>
      <div className='MainContainer'>

        <div className='Container' onClick={onCategoryClick}>Love</div>

        <div className='Container'>Sad</div>

        <div className='Container'>Happy</div>

        <div className='Container'>Motivation</div>

        <div className='Container'>Success</div>
      </div>
    </div>
  )
}
export default Homepage