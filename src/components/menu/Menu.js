import React , {useState} from 'react';
import './menu.css';

function Menu() {

    return(
        <div>
            <div className='divMenu'>
                <ul className='ul'>
                    <li><a>Home</a></li>
                    <li><a>Service</a></li>
                    <li><a>About</a></li>
                    <li><a>Help</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu