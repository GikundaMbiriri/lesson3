import React from 'react'
import {Link} from 'react-router-dom';

function Banner({title,subtitle}) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/" >Home</Link>
                    <Link to="/about" >About</Link>

                </li>
            </ul>
           <h1>{title}</h1>
           <h2>{subtitle}</h2>
        </div>
    )
}

export default Banner

