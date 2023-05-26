import Image from 'next/image';
import React from 'react';
import styles from './styles/Slider.module.css';
import { Carousel } from 'react-bootstrap';

function ImageSlider() {
  const HOMESLIDER_IMAGES = [
    {id:1, src: '/imgs/carouselhospital.jpg' },
    {id:2, src: '/imgs/carohos.jpg' },
    {id:3, src: '/imgs/carho.jpg' },
  ];

  return (
    <>

      <Carousel>
        {HOMESLIDER_IMAGES.map((slider) => {
          return (
            <Carousel.Item key={slider.id} >
              <Image
                height={1000}
                width={1000}
                className={`d-block w-100 ${styles.mycarImg}`}
                src={slider.src}
                alt="Slider Image"
                />
            
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default ImageSlider;
