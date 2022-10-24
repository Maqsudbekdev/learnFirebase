import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductData } from "../../static/static__data";
const Single = () => {

    const [id, setID] = useState({})



    let Location = useLocation()
    // console.log(Location);
    useEffect(() => {
        const Arr = () => {
            ProductData.map(item => {
                item.id === Location.state && setID(item)
            })


        }
        Arr()


    }, [])
    // console.log(id);



    return (
        <div>
            <h1>{id.ProductName}</h1>
            <img style={{ width: "500px" }} src={id?.ProductImage?.type} alt="" />
        </div>
    )
}

export default Single



