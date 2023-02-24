import React from 'react';

function Taskbox({ name }) {
    return (
        <div className='taskbox'>
            <p>{name}</p>
        </div>
    );
}

export default Taskbox;