import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import HomeCard from '@/components/HomeCard';
import SummaryHospital from '@/components/SummaryHospital';
import FAQ from '@/components/FAQ';
import DepartmentCard from '@/components/DepartmentCard';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import ImageSlider from '@/components/ImageSlider';
import { Link, animateScroll as scroll } from 'react-scroll'; // Import the Link and animateScroll components from React Scroll
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [showScroll, setShowScroll] = useState(false); // State variable to control the display of the scroll-to-top icon

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 1 }); // Scroll to the top of the page with a duration of 500ms
  };

  const handleScroll = () => {
    // Check if the user has scrolled down 200px from the top of the page
    if (window.pageYOffset > 500) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    // Add a scroll event listener to the window to detect when the user scrolls
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove the scroll event listener when the component is unmounted
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar />  
      <ImageSlider />
      {/* services */}
      <br />
      <h1 className="ser-title text-center my-3">Services</h1>
      <Container>
        <Row className="justify-content-center">
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </Row>
      </Container>
      <div className="container backGround pb-5 mt-5 ">
        <div className="row d-flex justify-content-center">
          <div className="col-1">
            <Image
              width={46}
              height={46}
              src="/imgs/Polygon 1.png"
              alt=""
              className="Polygon-img align-content-center "
            />
          </div>
        </div>
        {/* endServices */}
        <SummaryHospital />
      </div>
      <div className="container">
        <h1 className="faq-dep-title mt-5">Our Departments</h1>
        <div className="row">
          <p className="des-dep col-lg-9">
            Lörem ipsum den val. Trejepp terade. Hexahet öpöd sologi. Uhys
            terasång syk som roliga i mys. Preprenar ora dekav.
          </p>
          {/* Replace the anchor tag with the Link component */}
          <Link to="departments" smooth={true} duration={500} className="col-lg-2 m-md-5 btn btn-primary">see all</Link>
        </div>
        <div className="row justify-content-center mt-4">
          <DepartmentCard title="Surgery" src="/imgs/homeDep1.png" />
          <DepartmentCard title="Eye" src="/imgs/homedep2.png" />
          <DepartmentCard title="Reproductive" src="/imgs/homedep3.png" />
          <DepartmentCard title="Respiratory" src="/imgs/homedep4.png" />
        </div>
      </div>
      <FAQ />
      <Footer />
      
      {/* Add a scroll-to-top icon that is displayed when the user scrolls down */}
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon color='#fff' icon={faArrowUp} />
        </div>
      )}
      
      {/* Add styles for the scroll-to-top icon */}
      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #0557ad;
          cursor: pointer;
          transition: opacity 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 99999;
        }

        .scroll-to-top:hover {
          opacity: 0.8;
        }
        
      `}</style>
    </>
  );
}