import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'


const Layout =()=> {
    

    return (
        <div>
          
                <Navbar />
                <Sidebar />
                <a href="#" className="float">Menu
                  <i className="fa fa-plus my-float"></i>
                </a>
        </div>
    )
}

export default Layout
