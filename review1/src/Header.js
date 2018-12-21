import React, { Component } from 'react';

const Header =({ count, onClick })=>{  
    return(
        <div>
            <div>{count}</div>
            <button onClick={onClick}> 더하기 </button>
        </div>
    );
}

export default Header;