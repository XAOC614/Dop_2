import React, {useEffect, useState} from 'react';

import './App.css';
import {Button} from "./UniversalComponents/Button";


type dataType = {
    body: string
    id: number
    title: string
    userId: number
}




function App() {
    const getMeData = () => {
       setData([])
    }
    const [data, setData] = useState <Array<dataType>> ([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    },[])
    return (
        <div>
            <Button name={'CLEAN DATA'} callBack={getMeData}/>
            <ul>
                {data.map(el => {
                    return (

                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                        </li>


                    )
                })}
            </ul>
        </div>
    );
}

export default App;
