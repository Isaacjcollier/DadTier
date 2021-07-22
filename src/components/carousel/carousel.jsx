import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './carousel.module.css'
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Carousel 
                width={"100%"}
                infiniteLoop  
                autoPlay 
                interval={3000}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                
                >
                    <div className={styles.imageContainer}>
                        <img className={styles.image1} src={require('./images/slide1.jpg')} />
                    </div>
                    <div className={styles.imageContainer}>
                        <img className={styles.image2} src={require('./images/slide2.jpg')} />
                    </div>
                    <div className={styles.imageContainer}>
                        <img className={styles.image3} src={require('./images/slide3.jpg')} />
                    </div>
                    <div className={styles.imageContainer}>
                        <img className={styles.image4} src={require('./images/slide4.jpg')} />
                    </div>
                    <div className={styles.imageContainer}>
                        <img className={styles.image5} src={require('./images/slide5.jpg')} />
                    </div>
                </Carousel>

                    <div className={styles.carouselTextBox}>
                        <h1 className={styles.carouselText}>{"Jordan, Joshua & Isaac"}</h1>
                        <h2 className={styles.carouselText}>{"Dads, Brothers, & Hosts of DadTier"}</h2>
                    </div>
            </div>
        );
    }
};

export default DemoCarousel