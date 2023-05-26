import BannerImg from '@/components/BannerImg';
import BreadCrumbMulti from '@/components/BreadCrumb/BreadCrumbMulti';
import NewsPageCard from '@/components/NewsPageCard';
import Layout from '@/components/_Layout';
import SingleNewsBigTitle from '@/components/newsPage/SingleNewsBigTitle';
import { Container, Row } from 'react-bootstrap';
import styles from '/styles/NewsSingle.module.css';
import AppointmentUpMiniFooter from '@/components/AppointmentUpMiniFooter';
const SingleNew = (props) => {
  return (
    <Layout>
      <BreadCrumbMulti parent={'News'} name={'Helping Seniors'} />
      <Container>
      <BannerImg  src="/imgs/newsimg2.png" />
      </Container>
      {/* this must be dynamic from api*/}
      <SingleNewsBigTitle />
      <Container>
        <h3 className="titles">Recent News</h3>
        <Row>
          <NewsPageCard />
          <NewsPageCard />
          <NewsPageCard />
          <NewsPageCard />
        </Row>
      </Container>
      <br />  
    </Layout>
  );
};

export default SingleNew;
