import React from 'react'
import '../pages/Quotespage.css';
function Quotespage() {
  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'center', background: '#9384d1',
        height: '35px', width: '100%', paddingTop: '20px'
      }}>
        <div>
          <span style={{ color: 'white', fontWeight: 'bold' }}>Quotes App</span>
        </div>
      </div>
      <div style={{ color: '#9384d1', marginLeft: '20px', marginTop: '40px' }}>Love</div>
      <div className='Container2' >
        <p style={{ padding: '20px 5px 15px 20px ' }}>
          Love is not about how many days, months, or years you have been together.
          Love is much about how much you love each other every single day.</p>
      </div>
      <div className='Container2' >
      <p style={{ padding: '20px 5px 2px 20px ' }}>
          Love is not about how many days, months, or years you have been together.
          Love is much about how much you love each other every single day.</p>
          </div>
          <div className='Container2' >
      <p style={{ padding: '20px 5px 2px 20px ' }}>
          Love is not about how many days, months, or years you have been together.
          Love is much about how much you love each other every single day.</p>
          </div>
    </div>
  )
}

export default Quotespage