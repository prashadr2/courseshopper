import React from 'react'
import SearchBar from '../SearchBar'
import logo from '../../images/CourseShopperLogo.png'

const Home = () => {
  return (
    <div>
      <img src={logo} alt="logo" className="Homepage-logo img-fluid" 
      height={270}
      width={287}
      style={{ alignSelf: 'center' }}/>

    <div 
      style={{
        position: 'absolute', left: '20%', right: '20%', top: '60%'
    }}>
      <SearchBar />
      Tags: 
    </div>

    <div
      style={{
        border: '3px solid #2f7051',
        borderRadius: '10px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'absolute',
        left: '15%',
        right: '15%',
        top: '75%',
        backgroundColor: '#e9f7f1'
      }}>
        <div style = {{fontSize: '18px'}}>
        <div style = {{fontSize: '25px', fontWeight: "bold"}}> Welcome to CourseShopper! <br />  </div>
        We are a website that is trying to help new and current RPI students learn more about 
        potential courses at RPI before they sign up for them. Here, you can search for courses based off of your interests,
        your major, class CRNs, or school/department. For each course you will be able to see past syllabi, a description of the class,
        and reviews. You will also be able to leave reviews and post syllabi for classes you have taken as well.
        We also have a feature where you can find courses that will complete your graduation requirements.
        </div>
        
    </div>
      
    </div>
  )
}

export default Home
