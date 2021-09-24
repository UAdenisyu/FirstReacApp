import React from 'react';

import './app-header.css';

const AppHeader = (props) => {
    return (
        <div className="app-header d-flex">
            <h1>Denis Yukhnovets</h1>
            <h2>{props.amount} записей, из них понравилось 0</h2>
        </div>
    )
}

export default AppHeader;