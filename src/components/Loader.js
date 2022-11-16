import React from 'react'
import RingLoader from "react-spinners/RingLoader";
import { useState} from 'react';


function Loader() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    

    return (
        <div style={{marginTop: '150px'}}>
        <div className="sweet-loading text-center">
             <RingLoader
                color='#000'
                loading={loading}
                css=''
                size={60}
        />
        </div>
        </div>
    )
}

export default Loader
