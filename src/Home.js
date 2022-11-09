import React, { useState, useEffect } from "react"
import axios from "axios";


function Home() {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState()
    const [error, setError] = useState()
    const fetchData = async () => {
        console.log(3)

        try {

            console.log(4)
            const data =  await axios.get('http://localhost:5000/api/rooms/getAllRooms')
            // const result = await data.json()
            console.log(6)
            console.log(data.data)
            setRooms(data.data)
            setLoading(false)


        } catch (error) {
            console.log(5)
            setError(true)
            console.log(error)
            setLoading(false)

        }

    }
        console.log(2)
    useEffect (() => {
        fetchData()
        console.log(1)
        

        }, [])


    return (
        <div>
            <div className="row">
                {loading ? (
                    <h1>Loading...</h1>
                ) : error ? (
                    <h1>Error</h1> 
                ) : (
                    rooms.map((room) => {
                        return <div className="col-md-9">
                                <Room room={room}/>

                        </div>
                    })
                )}

            </div>
         
        </div>
    )
}

export default Home;