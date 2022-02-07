import React, {useEffect, useState} from "react";
import classes from "./Header.module.css";
import {BiGridAlt, BiX} from "react-icons/bi";
import NavMotion from "../../services/NavMotion";
import {observer} from 'mobx-react-lite';

export const Header = observer(() => {

    const [stateNavMenu, setStateNavMenu] = useState('-150%')

    useEffect(() => {
        if(NavMotion.navState === true) {
            setStateNavMenu('-150%')
        }
        if(NavMotion.navState === false) {
            setStateNavMenu('0')
        }
    }, [NavMotion.navState])

    const changeNavMenu = {
        top: stateNavMenu
    }

    const [scroll, setScroll] = useState('0')

    const handleScroll = () => {
       setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const color1 = {
        background: `linear-gradient(90deg, hsl(104, 28%, 40%) 0%, hsl(58, 28%, 40%) 100%)`
    }

    const color2 = {
        background: `linear-gradient(136deg, hsl(104, 28%, 35%) 0%, hsl(58, 28%, 35%) 100%)`
    }

    return (
            <div style={scroll < 49 ? color1 : color2} className={classes.Header}>
            <div className={classes.Container}>
                <a className={classes.HeaderLogo} href="/">
                    <img className={classes.HeaderLogoImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/project-from-scratch/assets/img/logo.png"}/>
                    Halloween
                </a>
                <div style={changeNavMenu} className={classes.NavMenu}>
                    <ul className={classes.NavList}>
                        <li className={classes.NavItem}>
                            <a  className={scroll < 500 ? classes.ActiveNavLink : classes.NavLink} href="#">Home</a>
                        </li>
                        <li className={classes.NavItem}>
                            <a className={scroll > 1200 && scroll < 1750? classes.ActiveNavLink : classes.NavLink} onClick={() => NavMotion.setNav()} href="#">About</a>
                        </li>
                        <li className={classes.NavItem}>
                            <a className={scroll > 1750 && scroll < 2500  ? classes.ActiveNavLink : classes.NavLink} onClick={() => NavMotion.setNav()} href="#">Candy</a>
                        </li>
                        <li className={classes.NavItem}>
                            <a className={scroll > 3100 && scroll < 3600  ? classes.ActiveNavLink : classes.NavLink} onClick={() => NavMotion.setNav()} href="#">New</a>
                        </li>

                        <a className={classes.ButtonGhost} href="/">Support</a>
                    </ul>
                    <div className={classes.NavClose}>
                        <BiX onClick={() => NavMotion.setNav()}/>
                    </div>
                    <img className={classes.NavLogoImage} src={"https://raw.githubusercontent.com/bedimcode/responsive-halloween-website/project-from-scratch/assets/img/nav-img.png"}/>
                </div>
                <div className={classes.NavToggle}>
                    <BiGridAlt onClick={() => NavMotion.setNav()}/>
                </div>
            </div>
            </div>
        )
    }
)