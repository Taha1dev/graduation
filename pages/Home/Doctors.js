import Layout from '@/components/_Layout';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import DoctorCard from '@/components/Doctor_Home/DoctorCard';
import { Container, Row } from 'react-bootstrap';
import axiosClient from '@/lib/axiosClent';

export default function Doctors({ doctors }) {
  
  if (!Array.isArray(doctors) || doctors.length === 0) {
    return <div>No doctors found</div>;
  }

  return (
    <>
      <Layout>
        <BreadCrumb name={'Doctors'} />
        <Container>
          <Row>
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.Doctor_ID} doctor={doctor} />
            ))}
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const response = await axiosClient.get('/Doctor');
  const doctors = response.data.data || [];

  return {
    props: {
      doctors,
    },
    revalidate: 60, // regenerate the page in the background every 60 seconds
  };
}
