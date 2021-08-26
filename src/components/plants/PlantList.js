import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../util/axiosWithAuth";

import Plant from "./Plant";

function PlantList() {
    const [plants, setPlants] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get(`/plants`)
            .then(res => {
                setPlants(res.data);
            })
            .catch(err => console.log({ err }));
    }, [])

    return (
        <div>
            <h3>🌵 Your Plants 🌱</h3>
            {
                plants.map(plant => (
                    <Plant key={plant.plant_id} plant={plant} />
                ))
            }
        </div>
    )
}

export default PlantList;

