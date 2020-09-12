import React from 'react';

export default function Card(props) {
    return (
        <div className={'py-3 bg-white rounded-md shadow ' + props.className}>
            {props.children}
        </div>
    )
}