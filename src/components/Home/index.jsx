import React, { useState, useEffect } from 'react';
import Card from '../Card';
import axios from 'axios';
import './home.css'


const Home = () => {
    const [userData, setUserData] = useState();
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setUserData(res.data)
        });
    }, []);

    return (<div className="home_page">
        {userData && userData.map((user) => {
            return <Card user={user} key={user.id} />
        })}
    </div>);
}

export default Home;