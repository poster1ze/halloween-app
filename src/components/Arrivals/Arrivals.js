import React from "react";
import classes from './Arrivals.module.css';
import {TiShoppingCart} from 'react-icons/ti';
import {SwiperSlide, Swiper} from 'swiper/react';
import "swiper/css";


export const Arrivals = () => {
    return (
        <div className={classes.Arrivals}>
            <div className={classes.Container}>
                <h2 className={classes.ArrivalsMainTitle}>New Arrivals</h2>
                <Swiper className={`mySwiper ${classes.SwiperWrapper}`} centeredSlides={true} spaceBetween={16} slidesPerView={"auto"} loop={true}>
                        <SwiperSlide>
                        <div className={classes.ArrivalsContent}>
                            <div className={classes.ArrivalsTag}>New</div>
                            <img className={classes.ArrivalsImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/new1-img.png"}/>
                            <h3 className={classes.ArrivalsTitle}>Haunted House</h3>
                            <span className={classes.ArrivalsSubTitle}>Accessory</span>

                            <div className={classes.ArrivalsPrices}>
                                <span className={classes.ArrivalsPrice}>$14.99</span>
                                <span className={classes.ArrivalsDiscount}>$29.99</span>
                            </div>

                            <button className={classes.Button}>
                                <TiShoppingCart className={classes.ArrivalsIcon} />
                            </button>
                        </div>
                    </SwiperSlide>
                        <SwiperSlide>
                        <div className={classes.ArrivalsContent}>
                            <div className={classes.ArrivalsTag}>New</div>
                            <img className={classes.ArrivalsImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/new2-img.png"}/>
                            <h3 className={classes.ArrivalsTitle}>Halloween Candle</h3>
                            <span className={classes.ArrivalsSubTitle}>Accessory</span>

                            <div className={classes.ArrivalsPrices}>
                                <span className={classes.ArrivalsPrice}>$11.99</span>
                                <span className={classes.ArrivalsDiscount}>$21.99</span>
                            </div>

                            <button className={classes.Button}>
                                <TiShoppingCart className={classes.ArrivalsIcon} />
                            </button>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className={classes.ArrivalsContent}>
                            <div className={classes.ArrivalsTag}>New</div>
                            <img className={classes.ArrivalsImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/new3-img.png"}/>
                            <h3 className={classes.ArrivalsTitle}>Witch Hat</h3>
                            <span className={classes.ArrivalsSubTitle}>Accessory</span>

                            <div className={classes.ArrivalsPrices}>
                                <span className={classes.ArrivalsPrice}>$4.99</span>
                                <span className={classes.ArrivalsDiscount}>$9.99</span>
                            </div>

                            <button className={classes.Button}>
                                <TiShoppingCart className={classes.ArrivalsIcon} />
                            </button>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className={classes.ArrivalsContent}>
                            <div className={classes.ArrivalsTag}>New</div>
                            <img className={classes.ArrivalsImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/new4-img.png"}/>
                            <h3 className={classes.ArrivalsTitle}>Rip</h3>
                            <span className={classes.ArrivalsSubTitle}>Accessory</span>

                            <div className={classes.ArrivalsPrices}>
                                <span className={classes.ArrivalsPrice}>$24.99</span>
                                <span className={classes.ArrivalsDiscount}>$44.99</span>
                            </div>

                            <button className={classes.Button}>
                                <TiShoppingCart className={classes.ArrivalsIcon} />
                            </button>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className={classes.ArrivalsContent}>
                            <div className={classes.ArrivalsTag}>New</div>
                            <img className={classes.ArrivalsImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/new5-img.png"}/>
                            <h3 className={classes.ArrivalsTitle}>Terrifying Crystal Ball</h3>
                            <span className={classes.ArrivalsSubTitle}>Accessory</span>

                            <div className={classes.ArrivalsPrices}>
                                <span className={classes.ArrivalsPrice}>$5.99</span>
                                <span className={classes.ArrivalsDiscount}>$12.99</span>
                            </div>

                            <button className={classes.Button}>
                                <TiShoppingCart className={classes.ArrivalsIcon} />
                            </button>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className={classes.ArrivalsContent}>
                            <div className={classes.ArrivalsTag}>New</div>
                            <img className={classes.ArrivalsImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/new6-img.png"}/>
                            <h3 className={classes.ArrivalsTitle}>Witch Broom</h3>
                            <span className={classes.ArrivalsSubTitle}>Accessory</span>

                            <div className={classes.ArrivalsPrices}>
                                <span className={classes.ArrivalsPrice}>$7.99</span>
                                <span className={classes.ArrivalsDiscount}>$14.99</span>
                            </div>

                            <button className={classes.Button}>
                                <TiShoppingCart className={classes.ArrivalsIcon} />
                            </button>
                        </div>
                        </SwiperSlide>
                </Swiper>

            </div>
        </div>
    )
}