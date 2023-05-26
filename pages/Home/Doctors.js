import Layout from '@/components/_Layout';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import DoctorCard from '@/components/Doctor_Home/DoctorCard';
import Filter from '@/components/Doctor_Home/DoctorFilter/Filter';
import { Container, Row } from 'react-bootstrap';

function Doctors() {
  return (
    <>
      <Layout>
        <BreadCrumb name={'Doctors'} />
        <Filter />
        <Container>
          <Row>
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Doctors;
