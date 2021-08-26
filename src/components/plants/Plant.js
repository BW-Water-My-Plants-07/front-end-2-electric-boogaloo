import React from "react";

const Plant = ({ plant, editPlant, deletePlant, addPlant }) => {
    const handleDelete = (e) => {
        e.stopPropagation();
        deletePlant(plant); //TODO
    }
    // TODO
    // axiosWithAuth().PUT
    const handleEdit = (e) => {
        e.stopPropagation();
        editPlant(plant); //TODO
    }

    // TODO
    // axiosWithAuth().DELETE
    const handleAdd = (e) => {
        e.stopPropagation();
        addPlant(plant); //TODO
    }

    return (
        <div>
            <span className="add" onClick={handleAdd}>Add a Plant</span>
            <li>
                <span>
                    <span className="edit" onClick={handleEdit}>📝&nbsp;</span>
                    <span className="delete" onClick={handleDelete}>❌&nbsp;</span>
                    {`My name is ${plant.nickname}, I'm a ${plant.species}, Water me ${plant.h2oFrequency}`}
                </span>
            </li>
        </div>
    );
}

export default Plant;