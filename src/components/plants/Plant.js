import React from "react";

const Plant = ({ plant, editPlant, deletePlant, addPlant }) => {
    const handleDelete = (e) => {
        e.stopPropagation();
        deletePlant(plant); //TODO
    }
    // TODO
    const handleEdit = (e) => {
        e.stopPropagation();
        editPlant(plant); //TODO
    }

    // TODO
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
                    {`${plant.nickname}`}
                </span>
            </li>
        </div>
    );
}

export default Plant;