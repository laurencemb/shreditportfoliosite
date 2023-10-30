import "./homepage.css"
import React, {Fragment } from "react"
import Nav from "../../Features/NavBar/navbar"
import Logo from "../../Features/Logo/logo"

function HomePage() {

    return (
        <Fragment>
            <Nav/>
            <Logo/>
            <h1>
            Fun, engaging and unique art installations for your venue, festival or event  from concept to install. 
            </h1>
        </Fragment>
       
    )
}

export default HomePage;