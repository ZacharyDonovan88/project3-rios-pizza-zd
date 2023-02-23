import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./css/slide.css";
import "../App.css"




// end of js slide


function Home() {
   const [slideIndex, setSlideIndex] = useState(0);
    // js for slideshow

//setTimeout(showSlides(slideIndex), 2000);
// showSlides(slideIndex);

// Next/previous controls
function prev() {
  //showSlides(slideIndex + 1);
  if (slideIndex === 0) return;
  setSlideIndex(slideIndex - 1);
}
function next() {
    if (slideIndex === 2) {
        setSlideIndex(0)
    } else {
        setSlideIndex(slideIndex + 1)
    }
}

// Thumbnail image controls
function currentSlide(n) {
  //showSlides(slideIndex = 1);
  setSlideIndex(n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {setSlideIndex(1)}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}

  return (
    <>
    <div className="">  
      <div className="header vinesR">
        <div className="headerBg vinesL">
          <h1>Rios Pizza</h1>
        </div>
      </div>
    </div>
      <div className="slideshow-container">

        <div className={`${slideIndex === 0 ? 'showMySlides' : 'mySlides'} fade`}>
          <div className="numbertext">1 / 3</div>
          <img src={require('./assets/images/freshPizza.jpg')} style={{width:'100%'}} alt="Fresh Pizza"/>
          <div className="text">Caption Text</div>
        </div>

        <div className={`${slideIndex === 1 ? 'showMySlides' : 'mySlides'} fade`}>
          <div className="numbertext">2 / 3</div>
          <img src={require('./assets/images/deals.jpg')} style={{width:'100%'}} alt="Deals"/>
          <div className="text">Caption Two</div>
        </div>

        <div className={`${slideIndex === 2 ? 'showMySlides' : 'mySlides'} fade`}>
          <div className="numbertext">3 / 3</div>
          <img src={require('./assets/images/signup.jpg')} style={{width:'100%'}} alt="Signup"/>
          <div className="text">Caption Three</div>
        </div>

        <a className="prev" onClick={prev}>&#10094;</a>
        <a className="next" onClick={next}>&#10095;</a>
      </div>

      <div style={{textAlign:'center'}}>
        <span className="dot" onClick={() => currentSlide(0)}></span>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
      </div>

    </>
  );
}

export default Home;
