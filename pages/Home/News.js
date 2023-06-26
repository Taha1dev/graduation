import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import { useState, useEffect } from 'react';
import NewsPageCard from '@/components/NewsPageCard';
import styles from '@/styles/News.module.css';
import NewsCardBtn from '@/components/newsPage/NewsCardBtn';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import Layout from '@/components/_Layout';
import AppointmentUpMiniFooter from '@/components/AppointmentUpMiniFooter';
import { axiosGetClient } from '@/lib/axiosClent';
function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosGetClient.get('/Post')
      .then(response => setData(response.data.data))
      .catch(error => console.error(error));
  }, []);

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
            className="p-0  container h-100 "
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
        {/* <!-- p --> */}
        {/* <!-- news cards --> */}
        <div className="container mt-3 mb-5">
          <div className="row">
            {data.map(item => (
              <NewsPageCard
                key={item.post_id}
                title={item.post_title}
                date="05 September 2022"
                text={item.post_text}
              />
            ))}
          </div>
        </div>
        {/* <!-- news cards --> */}
        <AppointmentUpMiniFooter />
      </Layout>
    </>
  );
}
export default News;
