import './App.css';

import Home from "./Component/Home/Home";
import Users from "./Component/Users/Users"
import {useEffect, useState} from "react";


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
            <Users fetchedData = {Array}/>
            <Home/>
        </div>
    );
}
export default App;
