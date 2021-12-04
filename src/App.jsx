import './App.css';

import Home from "./Component/Home/Home";
import Users from "./Component/Users/Users"
import {useEffect, useState} from "react";
import Header from "./Component/Header/Header";

const App = (userData) => {

   const [Array, setArray] = useState([]);
    const convertData = () => {
            setArray(userData.userData);
    }

    useEffect(() =>{
        convertData();
        },[userData]
     )

    return (
        <div className="App">
            <Header/>
            <div className="main">
                <Users fetchedData = {Array}/>
                <Home/>
            </div>
        </div>
    );
}
export default App;
