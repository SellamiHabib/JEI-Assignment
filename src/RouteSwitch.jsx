import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App"
import Users from "./Component/Users/Users";
import {useEffect, useState} from "react";
import axios from "axios";
import User from "./Component/Users/User";



const createRouteUser = (Data)  => {
    const row = [];

    for(let i = 1 ; i <= 10 ; i++) {
        row.push(<Route path ={`/users/${i}`} element={<User props = {{Data, i}} />}/>);
    }
    return row;
}
const RouteSwitch = () => {

    const url = 'https://jsonplaceholder.typicode.com/users';
    const [usersList, getUsers] = useState([]);

    const fetchAllUsers = () => {
        axios.get(url)
            .then ( (response) => {
                    const data = response.data
                    getUsers(data);
                }
            )
    }
    useEffect( () => {
        fetchAllUsers();
    }, []);


    return (
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<App userData = {usersList}/>}/>
                <Route path ="/Users" element={<Users fetchedData={usersList}/>}/>
                {
                    createRouteUser(usersList)
                }

            </Routes>
        </BrowserRouter>

    )

}
export default RouteSwitch;
