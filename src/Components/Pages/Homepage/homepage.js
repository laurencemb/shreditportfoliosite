import "./homepage.css"
import React, {Fragment } from "react"
import Nav from "../../Features/NavBar/navbar"
import Logo from "../../Features/Logo/logo"

function HomePage() {

    return (
        <Fragment>
            <Nav/>
            <Logo/>
        </Fragment>
    )
}

export default HomePage;