import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import { Breadcrumb } from 'react-bootstrap';
import NewsPageCard from '@/components/NewsPageCard';
import styles from '@/styles/News.module.css';
import NewsCardBtn from '@/components/newsPage/NewsCardBtn';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import Layout from '@/components/_Layout';
import AppointmentUpMiniFooter from '@/components/AppointmentUpMiniFooter';
function News() {
  return (
    <>
      <Layout>
        <div className={`row ${styles['news-img']}   p-0`}>
          <img
            src="/imgs/news-img.png"
            height={300}
            width={500}
            quality={100}
            alt=""
            className="p-0  container h-100"
          />
        </div>

        {/* <!-- Breadcrumb --> */}
        <BreadCrumb name={'News'} />
        <h4 className={`${styles['bread-title']} ps-5`}>SAIFEE News</h4>
        {/* <!-- Breadcrumb --> */}
        <p
          className={`mt-5  ${styles['text-color']} container`}
          style={{ textAlign: 'justified' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          pellentesque leo nec aenean maecenas odio tempus id. Mauris, elementum
          est egestas tincidunt pellentesque. Tempus massa rhoncus velit nec.
          Lorem purus est facilisis quam lorem amet, nunc lectus. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed pellentesque leo nec
          aenean maecenas odio tempus id. Mauris, elementum est egestas
          tincidunt pellentesque. Tempus massa rhoncus velit nec. Lorem purus
          est facilisis quam lorem amet, nunc lectus.
        </p>
        {/* <!-- p -->
      <!-- news cards --> */}
        <div className="container mt-3 mb-5">
          <div className="row">
            <NewsPageCard />
            <NewsPageCard />
            <NewsPageCard />
            <NewsPageCard />
            <NewsPageCard />
            <NewsPageCard />
            <NewsPageCard />
            <NewsPageCard />
          </div>
        </div>
        {/* <!-- news cards -->
      <!-- button group --> */}
        <div className="container d-flex justify-content-center mt-5 mb-5">
          <div className="row ">
            <div
              className={`${styles['btn-toolbar']}`}
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className={`${styles['btn-group me-2']}`}
                role="group"
                aria-label="First group"
              >
                <NewsCardBtn value={1} />
                <NewsCardBtn value={2} />
                <NewsCardBtn value={'...'} />
                <NewsCardBtn value={'>'} />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- button group -->
      <!-- make Appointment --> */}
        <AppointmentUpMiniFooter/>
      </Layout>
    </>
  );
}

export default News;
