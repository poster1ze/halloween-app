import React from "react";
import classes from './Newsletter.module.css'

export const Newsletter = () => {
    return (
        <div className={classes.Newsletter}>
            <div className={`mySwiper ${classes.Container}`}>
                <h2 className={classes.NewsletterTitle}>Our Newsletter</h2>
                <p className={classes.NewsletterDescription}>Promotion new products and sales. Directly to your inbox</p>

                <form className={classes.NewsletterForm}>
                    <input type={'email'} placeholder={"Enter your email"} className={classes.NewsletterInput}/>
                    <button className={classes.Button}>Subscribe</button>
                </form>
            </div>
        </div>
    )
}