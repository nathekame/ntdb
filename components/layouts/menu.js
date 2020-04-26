import React from 'react'
import AdminLinks from '../partials/menuLinks/AdminLinks'
import UserLinks from '../partials/menuLinks/UserLinks'

const Menu =()=> {

    const userRole = "admin"

    const checkRole = (role) =>{
        if (role === "admin") {
            return <AdminLinks />
        }
        if (role === "user") {
            return <UserLinks />
        }
    }


    return (
        <div className="menu">
            
            <ul>
            
             {checkRole(userRole)}
            </ul>
        </div>
    )
}

export default Menu
