import Image from 'next/image';
import React from 'react';
import styles from './styles/Slider.module.css';
import { Carousel, Container } from 'react-bootstrap';

function ImageSlider() {
  const HOMESLIDER_IMAGES = [
    { id: 1, src: '/imgs/caro1.jpg' },
    { id: 2, src: '/imgs/caro3.jpg' },
    { id: 3, src: '/imgs/caro4.jpg' },
  ];

  return (
    <>
      <div className={styles.bgb}>
        <div className={styles.bg}>
          <Carousel>
            {HOMESLIDER_IMAGES.map((slider) => {
              return (
                <Carousel.Item key={slider.id}>
                  <img
                    className={`d-block w-100 ${styles.mycarImg}`}
                    src={slider.src}
                    alt="Slider Image"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
