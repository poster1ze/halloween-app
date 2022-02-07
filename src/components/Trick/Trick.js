import React from "react";
import classes from './Trick.module.css'
import {TiShoppingCart} from 'react-icons/ti'

export const Trick = () => {
    return (
        <div className={classes.Trick}>
            <h2 className={classes.TrickOrTreatTitle}>Trick or Treat</h2>
            <div className={classes.Container}>
                <div className={`interval ${classes.TrickContent}`}>
                    <img className={classes.TrickContentImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/trick-treat1-img.png"}/>
                    <h3 className={classes.TrickTitle}>Toffee</h3>
                    <span className={classes.TrickSubTitle}>Candy</span>
                    <span className={classes.TrickPrice}>$11.99</span>
                    <button className={classes.Button}>
                        <TiShoppingCart className={classes.TrickIcon}/>
                    </button>
                </div>
                <div className={`interval ${classes.TrickContent}`}>
                    <img className={classes.TrickContentImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/trick-treat2-img.png"}/>
                    <h3 className={classes.TrickTitle}>Bone</h3>
                    <span className={classes.TrickSubTitle}>Accessory</span>
                    <span className={classes.TrickPrice}>$8.99</span>
                    <button className={classes.Button}>
                        <TiShoppingCart className={classes.TrickIcon}/>
                    </button>
                </div>
                <div className={`interval ${classes.TrickContent}`}>
                    <img className={classes.TrickContentImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/trick-treat3-img.png"}/>
                    <h3 className={classes.TrickTitle}>Scarecrow</h3>
                    <span className={classes.TrickSubTitle}>Accessory</span>
                    <span className={classes.TrickPrice}>$15.99</span>
                    <button className={classes.Button}>
                        <TiShoppingCart className={classes.TrickIcon}/>
                    </button>
                </div>
                <div className={`interval ${classes.TrickContent}`}>
                    <img className={classes.TrickContentImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/trick-treat4-img.png"}/>
                    <h3 className={classes.TrickTitle}>Candy Cane</h3>
                    <span className={classes.TrickSubTitle}>Candy</span>
                    <span className={classes.TrickPrice}>$7.99</span>
                    <button className={classes.Button}>
                        <TiShoppingCart className={classes.TrickIcon}/>
                    </button>
                </div>
                <div className={`interval ${classes.TrickContent}`}>
                    <img className={classes.TrickContentImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/trick-treat5-img.png"}/>
                    <h3 className={classes.TrickTitle}>Pumpkin</h3>
                    <span className={classes.TrickSubTitle}>Accessory</span>
                    <span className={classes.TrickPrice}>$19.99</span>
                    <button className={classes.Button}>
                        <TiShoppingCart className={classes.TrickIcon}/>
                    </button>
                </div>
                <div className={`interval ${classes.TrickContent}`}>
                    <img className={classes.TrickContentImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/trick-treat6-img.png"}/>
                    <h3 className={classes.TrickTitle}>Ghost</h3>
                    <span className={classes.TrickSubTitle}>Accessory</span>
                    <span className={classes.TrickPrice}>$17.99</span>
                    <button className={classes.Button}>
                        <TiShoppingCart className={classes.TrickIcon}/>
                    </button>
                </div>
            </div>
        </div>
    )
}