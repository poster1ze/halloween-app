import React from "react";
import classes from './MainPage.module.css'
import {BsArrowRight} from "react-icons/bs";
import {SwiperSlide, Swiper} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";


export const MainPage = () => {

    return (
        <div className={classes.Main}>
            <div className={classes.Container}>
                <div className={classes.HomeSwiper}>
                <Swiper className={`mySwiper ${classes.SwiperWrapper}`} spaceBetween={30} loop={true} pagination={true} modules={[Pagination]}>
                    <SwiperSlide className={classes.SwiperSlide}>
                        <div className={classes.HomeContent}>
                            <div className={classes.HomeGroup}>
                                <img className={classes.HomeImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/project-from-scratch/assets/img/home1-img.png"}/>
                                <div className={classes.HomeIndicator}></div>

                                <div className={classes.HomeDetailsImage}>
                                    <h4 className={classes.HomeDetailsTitle}>The Labu "Reiza"</h4>
                                    <span className={classes.HomeDetailsSubTitle}>The Living Pumpkin</span>
                                </div>
                            </div>

                        <div className={classes.HomeData}>
                                <h3 className={classes.HomeSubTitle}>#1 Top Scariest Ghost</h3>
                                <h1 className={classes.HomeTitle}>UOOOO <br/> TRICK OR <br/> TREAT!!!</h1>
                                <p className={classes.HomeDescription}> Hi, I`m Reiza, people can call me "El Babu". I am currently trying something new, building my own bike with parts made only in Malaysia.</p>

                                <div className={classes.HomeButtons}>
                                    <a className={classes.Button}>
                                        Book Now</a>
                                     <a className={classes.ButtonLink}>
                                         Track Record
                                         <div className={classes.IconArrow}>
                                             <BsArrowRight/>
                                         </div>
                                     </a>
                                </div>
                        </div>
                        </div>
                        </SwiperSlide>
                    <SwiperSlide className={classes.SwiperSlide}>
                            <div className={classes.HomeContent}>
                                <div className={classes.HomeGroup}>
                                <img className={classes.HomeImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/project-from-scratch/assets/img/home2-img.png"}/>
                                <div className={classes.HomeIndicator}></div>


                                <div className={classes.HomeDetailsImage}>
                                    <h4 className={classes.HomeDetailsTitle}>Adino & Grahami"</h4>
                                    <span className={classes.HomeDetailsSubTitle}>No Words can describe them</span>
                                </div>
                            </div>

                            <div className={classes.HomeData}>
                                <h3 className={classes.HomeSubTitle}>#2 Top Best Duo</h3>
                                <h1 className={classes.HomeTitle}>BRING BACK <br/> MY COTTON <br/> CANDY</h1>
                                <p className={classes.HomeDescription}> Adino steals cotton candy from his brother and eats them all in one bite, a hungry beast. Grahami can no longer contain his anger towards Adino</p>

                                <div className={classes.HomeButtons}>
                                    <a className={classes.Button}>
                                        Book Now</a>
                                    <a className={classes.ButtonLink}>
                                        Track Record
                                        <div className={classes.IconArrow}>
                                            <BsArrowRight/>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                    <SwiperSlide className={classes.SwiperSlide}>
                            <div className={classes.HomeContent}>
                                <div className={classes.HomeGroup}>
                                <img className={classes.HomeImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/project-from-scratch/assets/img/home3-img.png"}/>
                                <div className={classes.HomeIndicator}></div>

                                <div className={classes.HomeDetailsImage}>
                                    <h4 className={classes.HomeDetailsTitle}>Captain Sem</h4>
                                    <span className={classes.HomeDetailsSubTitle}>Veteran Spooky Ghost</span>
                                </div>
                            </div>

                            <div className={classes.HomeData}>
                                <h3 className={classes.HomeSubTitle}>#3 Top Scariest Ghost</h3>
                                <h1 className={classes.HomeTitle}>RESPAWN <br/> THE SPOOKY <br/> SKULL</h1>
                                <p className={classes.HomeDescription}> In search for cute little puppy, Captain Sem has come back from his tragic death. With his hogwarts certified power he promise to be a hero for all of ghostkind </p>

                                <div className={classes.HomeButtons}>
                                    <a className={classes.Button}>
                                        Book Now</a>
                                    <a className={classes.ButtonLink}>
                                        Track Record
                                        <div className={classes.IconArrow}>
                                            <BsArrowRight/>
                                        </div>
                                    </a>
                                </div>
                                </div>
                            </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </div>
    )
}