import React, { useState, useEffect } from 'react';
import "./card.css";
import axios from 'axios'

const Card = ({ user }) => {
    const [userAvatar, setUserAvatar] = useState()
    const { name, email, phone, website, username } = user;

    useEffect(() => {
        axios.get(`https://avatars.dicebear.com/v2/avataaars/%7B%7B4${username}%7D%7D.svg`).then((res) => {
            setUserAvatar(res.config.url)
            console.log(res.config.url);
        });
    }, [username]);

    return (
        <div className="card_wrapper">
            <img src={userAvatar} alt="" />
            <div className="card_content_body">
                <h4 style={{ marginBottom: "0px", paddingBottom: "0" }}>{name}</h4>
                <p><i className="far fa-envelope"></i>{email}</p>
                <p><i className="fas fa-phone"></i>{phone}</p>
                <p><i className="fas fa-globe" style={{ marginBottom: "0px", paddingBottom: "0" }}></i>{website}</p>
            </div>
            <div className="card_footer">
                <i className="far fa-heart"></i>
                <i className="fas fa-pen"></i>
                <i className="fas fa-trash"></i>
            </div>
        </div>
    );
}

export default Card;