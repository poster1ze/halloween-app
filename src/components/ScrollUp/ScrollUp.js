import React, {useEffect, useState} from "react";
import classes from './ScrollUp.module.css';
import {BiUpArrowAlt} from "react-icons/bi";

export const ScrollUp = () => {

    const [scroll, setScroll] = useState(0)

    const handleScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return() => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div>
            {scroll < 459 ? null :
                <a href="#" className={classes.ScrollUp}>
            <BiUpArrowAlt className={classes.ScrollIcon}/>
                </a>}
        </div>
    )
}