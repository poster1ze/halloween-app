import React from "react";
import classes from './Discount.module.css'

export const Discount = () => {
    return (
        <div className={classes.Discount}>
            <div className={classes.Container}>
                <div className={`right ${classes.DiscountData}`}>
                    <h2 className={classes.DiscountTitle}>50% Discount <br/> On New Products</h2>
                    <a className={classes.DiscountButton}>Go to new</a>
                </div>
                <img className={`left ${classes.DiscountImage}`} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/discount-img.png"}/>
            </div>
        </div>
    )
}