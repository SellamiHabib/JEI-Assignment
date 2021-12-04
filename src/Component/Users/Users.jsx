import React, {useEffect, useState} from "react";
import "./Users.css";
import {Link} from "react-router-dom";

    const Users = (fetchedData) => {
        const [dataArray,setArray] = useState([]);

        useEffect(() => {
            setArray(Array.from(fetchedData.fetchedData));
        },[fetchedData]);

        return (
            <div className="Users">
                <h2>Users : </h2>
                <ol>
                    {
                        dataArray.map(user => {
                            return <li><Link to ={`/Users/${user.id}`}> {user.name}  </Link></li>;
                        })
                    }
                </ol>
            </div>
        );
    }
    export default Users;