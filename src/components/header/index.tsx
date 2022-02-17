import React from 'react'

const Header: React.FC<{blogName:string}>  = ({blogName}) => {
    return (
        <div className='nav-bar'>
            <div className="container">
                <a href="#" className="logo">{blogName}</a>
            </div>
        </div>
    )
}

export default Header