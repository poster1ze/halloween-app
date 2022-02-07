import React from "react";
import classes from './Footer.module.css'
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";

export const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.Container}>
            <div className={classes.FooterContent}>
                <a className={classes.FooterLogo}>
                    <img src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/logo.png"}/>
                    Halloween
                </a>

                <p className={classes.FooterDescription}> Enjoy the scariest night <br/> of your life.</p>

                <div className={classes.FooterSocial}>
                    <a href={"https://www.facebook.com"} target={"_blank"} className={classes.FooterSocialLink}>
                        <BsFacebook className={classes.FooterIcon}/>
                    </a>
                    <a href={"https://www.instagram.com"} target={"_blank"} className={classes.FooterSocialLink}>
                        <BsInstagram className={classes.FooterIcon} />
                    </a>
                    <a href={"https://www.twitter.com"} target={"_blank"} className={classes.FooterSocialLink}>
                        <BsTwitter className={classes.FooterIcon} />
                    </a>
                </div>
            </div>

            <div className={`interval ${classes.FooterContent}`}>
                <h3 className={classes.FooterTitle}>About</h3>

                <ul className={classes.FooterLinks}>
                    <li>
                        <a className={classes.FooterLink}>About Us</a>
                    </li>
                    <li>
                        <a className={classes.FooterLink}>Features</a>
                    </li>
                    <li>
                        <a className={classes.FooterLink}>News</a>
                    </li>
                </ul>
            </div>

            <div className={`interval ${classes.FooterContent}`}>
                <h3 className={classes.FooterTitle}>Our Services</h3>

                <ul className={classes.FooterLinks}>
                    <li>
                        <a className={classes.FooterLink}>Pricing</a>
                    </li>
                    <li>
                        <a className={classes.FooterLink}>Discounts</a>
                    </li>
                    <li>
                        <a className={classes.FooterLink}>Shipping mode</a>
                    </li>
                </ul>
            </div>

            <div className={`interval ${classes.FooterContent}`}>
                <h3 className={classes.FooterTitle}>Our Company</h3>

                <ul className={classes.FooterLinks}>
                    <li>
                        <a className={classes.FooterLink}>Blog</a>
                    </li>
                    <li>
                        <a className={classes.FooterLink}>About Us</a>
                    </li>
                    <li>
                        <a className={classes.FooterLink}>Our Mission</a>
                    </li>
                </ul>
            </div>

            <span className={classes.FooterReserved}>&#169; Design: Bedimcode <br/> Code: poster1ze </span>

            <img className={classes.FooterImageOne} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/footer1-img.png"}/>
            <img className={classes.FooterImageTwo} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/footer2-img.png"}/>
        </div>
        </div>
    )
}