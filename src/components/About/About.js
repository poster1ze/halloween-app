import React from "react";
import classes from './About.module.css'

export const About = () => {
    return (
        <div className={classes.About}>
            <div className={classes.Container}>
                <div className={`left ${classes.AboutData}`}>
                    <h2 className={classes.AboutTitle}>About Halloween <br/> Night</h2>
                    <p className={classes.AboutDescription}>Night of all the saints, or all the dead, is celebrated on October 31 and it is a very fun international celebration, this celebration comes from ancient origins, and is already celebrated by everyone </p>
                    <a className={classes.AboutButton}>Know more</a>
                </div>
                <img className={`right ${classes.AboutImage}`} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/about-img.png"}/>
            </div>
        </div>
    )
}