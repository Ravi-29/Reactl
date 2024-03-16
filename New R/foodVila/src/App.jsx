import React from 'react';

import './App.css';

const Title = () =>{
  return(
  <a href="/">
    <img
  className='logo'
  alt='logo'
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkCLsB0r9kMxcMUSj8tPdj51uBMVzeYr-lD2FuRn_Da5LRoPwzuu-7LbB3pwxLRMPTWY&usqp=CAU"/>
  </a>
  );
}

const Header = () => {
  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      
    </div>
  );
}

const burgerKing=
  {
    name: "Burger King",
    Image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eqaon8guufklmil7ayhr",
    cusines: ["Burger", "America"],
    rating: "4.2"
  }


  const RestrauntCard = () =>{
    return(
      <div className='card'>
        <img src={burgerKing.Image}/>
        <h2>{burgerKing.name}</h2>
        <h3>{burgerKing.cusines.join(",")}</h3>
        <h4>{burgerKing.rating}stars</h4>
      </div>
    )
  }

  const Body = () =>{
    return(
      <div className='listitems'>
        <RestrauntCard/>
        <RestrauntCard/>
        <RestrauntCard/>
        <RestrauntCard/>
        <RestrauntCard/>
      </div>
    );
  }

  const Footer = () =>{
    return(
      <h4>Footer</h4>
    );
  }

  const AppLayout = () =>{
    return(
      // <></> ====  <React.Fragment></React.Fragment>    react fragment is a component
      <>
      <Header/>
      <Body />
      <Footer />
      </>
    );
  }

  


export default AppLayout
