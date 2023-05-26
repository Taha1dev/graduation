import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import DepPageCard from '@/components/Department_home/DepPageCard';
import Layout from '@/components/_Layout';
import { Container, Row } from 'react-bootstrap';

function Departments() {
  
  return (
    <Layout>
      <BreadCrumb name={'Department'} />  
      <Container >
        <Row>
          <DepPageCard src='/imgs/depCardImg1.png'/>
          <DepPageCard src='/imgs/depCardImg2.png'/>
          <DepPageCard src='/imgs/depCardImg3.png'/>
          <DepPageCard src='/imgs/depCardImg1.png'/>
          <DepPageCard src='/imgs/depCardImg2.png'/>
          <DepPageCard src='/imgs/depCardImg3.png'/>
          <DepPageCard src='/imgs/depCardImg1.png'/>
          <DepPageCard src='/imgs/depCardImg2.png'/>
          <DepPageCard src='/imgs/depCardImg3.png'/>
        </Row>
      </Container>
    </Layout>
  );
}

export default Departments;
