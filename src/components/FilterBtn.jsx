import React from 'react';

const FilterBtn = ({ text, id, filterStatus, click }) => {
    const btnClass = id === filterStatus ? "btn btn-info py-3" : "btn btn-light py-3";
    return (
        <button className={btnClass} onClick={() => click(id)}>{text}</button>
    );
}

export default FilterBtn;