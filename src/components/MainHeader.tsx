import React from 'react';
import {Link} from "react-router-dom";

const MainHeader = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link className="header-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="header-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="header-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="header-link" to="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MainHeader;
