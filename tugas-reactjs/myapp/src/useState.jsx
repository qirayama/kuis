import React, { useState } from 'react';

function Greeting({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
        </div>
    );
}
