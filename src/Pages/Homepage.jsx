import React, { useState, useEffect } from 'react'
import '../pages/Homepage.css';
import { useNavigate } from 'react-router-dom'
import axios from "axios";

function Homepage() {
  const navigate = useNavigate();
  const [categoryLabelList, setCategoryLabelList] = useState([]);

  useEffect(() => {
    setCategoryLabelList(["Love", "Sad", "Happy", "Motivation", "Success"]);
  }, []);

  const onCategoryClick = () => {

    navigate("/Quotespage")
  }
  axios.get('http://localhost:3000/getCategories')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'center', background: '#9384d1', height: '35px', width: '100%', paddingTop: '20px'
      }}>
        <div>
          <span style={{ color: 'white', fontWeight: 'bold' }}>Quotes App</span>
        </div>
      </div>
      <div style={{ color: '#9384d1', marginLeft: '20px', marginTop: '40px', fontWeight: 'bold' }}>Categories</div>
      <div className='MainContainer'>

        {categoryLabelList.map((item, index) => (
          <div className='Container' onClick={onCategoryClick}>{item}</div>
        ))}
      </div>
    </div>
  )
}
export default Homepage