import BannerImg from '@/components/BannerImg';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import BriefText from '@/components/BriefText';
import EventCard from '@/components/Event_home/EventCard';
import Layout from '@/components/_Layout';
import { Container, Row } from 'react-bootstrap';

function Events() {
  return (
    <Layout>
      <BannerImg src="/imgs/events-img.png" />
      <BreadCrumb name={'Events'} />
      <Container>
        <BriefText />
        <Row>
          <EventCard src="/imgs/event-img.png" />
          <EventCard src="/imgs/event-img2.png" />
          <EventCard src="/imgs/event-img3.png" />
          <EventCard src="/imgs/event-img.png" />
          <EventCard src="/imgs/event-img2.png" />
          <EventCard src="/imgs/event-img3.png" />
          <EventCard src="/imgs/event-img.png" />
          <EventCard src="/imgs/event-img2.png" />
          <EventCard src="/imgs/event-img3.png" />
        </Row>
      </Container>
    </Layout>
  );
}
export default Events;
