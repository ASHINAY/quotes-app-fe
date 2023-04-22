import React from 'react'
import '../pages/Homepage.css';
// import { useNavigate} from 'react-router-dom'

function Homepage() {
  // const navigate = useNavigate();
  // const onBackButtonClick = () => {

  //   navigate("/Quotespage")
  // }

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
      <div style={{ color: '#9384d1', marginLeft: '20px', marginTop: '40px' }}>Categories</div>
      <div className='MainContainer'>
        <div style={{
          width: '88px', height: '28px', marginLeft: '25px', color: 'white', textAlign: 'center',
          display: 'flex', justifyContent: 'center', marginTop: '20px', background: '#C9A7EB', paddingTop: '3px',
          borderRadius: '300px'
        }}>Love</div>

        <div style={{
          width: '88px', height: '28px', marginLeft: '25px', color: 'white', textAlign: 'center',
          display: 'flex', justifyContent: 'center', marginTop: '20px', background: '#C9A7EB', paddingTop: '3px',
          borderRadius: '300px'
        }}>Sad</div>

        <div style={{
          width: '88px', height: '28px', marginLeft: '25px', color: 'white', textAlign: 'center',
          display: 'flex', justifyContent: 'center', marginTop: '20px', background: '#C9A7EB', paddingTop: '3px',
          borderRadius: '300px'
        }}>Happy</div>

        <div style={{
          width: '88px', height: '28px', marginLeft: '25px', color: 'white', textAlign: 'center',
          display: 'flex', justifyContent: 'center', marginTop: '20px', background: '#C9A7EB', paddingTop: '3px',
          borderRadius: '300px'
        }}>Motivation</div>

        <div style={{
          width: '88px', height: '28px', marginLeft: '25px', color: 'white', textAlign: 'center', paddingTop: '3px',
          display: 'flex', justifyContent: 'center', marginTop: '20px', background: '#C9A7EB',
          borderRadius: '300px'
        }}>Success</div>
      </div>
    </div>

  )
}

export default Homepage