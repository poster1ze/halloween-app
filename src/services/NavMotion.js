import {makeAutoObservable} from "mobx";

class NavMotion {
    constructor() {
        makeAutoObservable(this)
    }

    navState = true

    setNav = () => {
        this.navState = !this.navState
    }
}

export default new NavMotion()