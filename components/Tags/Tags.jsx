import React from 'react';

export default function Tags(props){
    return(
        <div className='tags'>
            {props.tags.map((data) => (
                <p key={data}>{data}</p>
        ))}
        </div>
    )
}
