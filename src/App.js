import React, {useEffect} from "react";
import {Header} from "./components/Header/Header";
import {MainPage} from "./components/MainPage/MainPage";
import {Category} from "./components/Category/Category";
import {About} from "./components/About/About";
import {Trick} from "./components/Trick/Trick";
import {Discount} from "./components/Discount/Discount";
import {Arrivals} from "./components/Arrivals/Arrivals";
import {Newsletter} from "./components/Newsletter/Newsletter";
import {Footer} from "./components/Footer/Footer";
import {ScrollUp} from "./components/ScrollUp/ScrollUp";
import ScrollReveal from "scrollreveal";


export const App = () => {

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400,
            // reset: true
        })
        sr.reveal(`.mySwiper`)
        sr.reveal(`.interval`, {interval: 100})
        sr.reveal(`.left`, {origin: 'left'})
        sr.reveal(`.right`, {origin: 'right'})

    }, [])

    return (
      <div>
          <Header />
          <MainPage />
          <Category />
          <About />
          <Trick />
          <Discount />
          <Arrivals />
          <Newsletter />
          <Footer />
          <ScrollUp />
        </div>
  )
}
