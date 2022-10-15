import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>All Users Here</h1>
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <ul>
                                <li>Id: {user.id}</li>
                                <li>Title: {user.title}</li>
                                <li>Body: {user.body}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Home;