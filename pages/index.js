import Head from 'next/head';
import Image from 'next/image';
import HomeCard from '@/components/HomeCard';
import SummaryHospital from '@/components/SummaryHospital';
import FAQ from '@/components/FAQ';
import DepartmentCard from '@/components/DepartmentCard';
import CarouselButton from '@/components/CarouselButton';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ShrinkCard from '@/components/ShrinkCard';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import ImageSlider from '@/components/ImageSlider';

export default function Home() {
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
          <button className="col-lg-2 m-md-5 btn btn-primary">see all</button>
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
    </>
  );
}
