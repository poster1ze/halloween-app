import React from "react";
import classes from './Category.module.css';

export const Category = () => {

    return (
        <div className={classes.Category}>
            <h2 className={classes.CategoryTitle}>Favorite Scare <br/> Category</h2>
            <div className={classes.Container}>
                <div className={`interval ${classes.CategoryData}`}>
                    <img className={classes.CategoryImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/category1-img.png"}/>
                    <h3 className={classes.CategorySubTitle}>Ghosts</h3>
                    <p className={classes.CategoryDescription}>Choose the ghosts, the scariest there are.</p>
                </div>
                <div className={`interval ${classes.CategoryData}`}>
                    <img className={classes.CategoryImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/category2-img.png"}/>
                    <h3 className={classes.CategorySubTitle}>Pumpkins</h3>
                    <p className={classes.CategoryDescription}>You look at the scariest pumpkins there is.</p>
                </div>
                <div className={`interval ${classes.CategoryData}`}>
                    <img className={classes.CategoryImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/main/assets/img/category3-img.png"}/>
                    <h3 className={classes.CategorySubTitle}>Witch Hat</h3>
                    <p className={classes.CategoryDescription}>Pick the most stylish witch hats out there.</p>
                </div>
            </div>
        </div>
    )
}