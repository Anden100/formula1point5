import React from 'react';

interface CardProps {
    className?: string;
    children: React.ReactNode;
}

export default function Card(props: CardProps) {
    return (
        <div className={'py-3 bg-white rounded-md shadow ' + props.className}>
            {props.children}
        </div>
    )
}