import React, { ChangeEvent } from 'react';

interface SelectProps {
    className?: string;
    value: any;
    onChange(event: ChangeEvent<HTMLSelectElement>): void;
    children: React.ReactNode;
}

export default function Select(props: SelectProps) {
    return (
        <div className={'relative ' + props.className}>
            <select value={props.value} onChange={props.onChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 md:py-3 px-2 md:px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {props.children}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
        </div>
    )
}