import React from 'react';
import "./Tweet.css";

const Tweet = ({username, name, date, message}) => {
    return (
        <div className='tweet'>
            <h3><u>{name}</u> <i>@{username}</i></h3>
            <hr/>
            <p>{message}</p>
            <hr/>
            <p><b>Posted {date}</b></p>
        </div>
    );

};
export default Tweet;