import React from 'react';

export function Table(props) {
    return (
        <table className={'w-full rounded-t-lg ' + props.className}>
            { props.children}
        </table>
    )
}

export function TableHead(props) {
    return (
        <thead className="text-left">
            <tr className="header-row">
                {props.children}
            </tr>
        </thead>
    )
}

// rounded-tl-lg 
export function TableHeader(props) {
    return (
        <th className={'pl-4 py-2 bg-gray-100 uppercase border-b tracking-wider font-semibold text-xs text-gray-600 ' + props.className}>
            { props.children}
        </th>
    )
}

export function TableBody(props) {
    return (
        <tbody className={props.className}>
            { props.children}
        </tbody>
    )
}

export function TableRow(props) {
    return (
        <tr className={'bg-white text-left text-gray-600 hover:bg-gray-100 font-semibold text-sm ' + props.className}>
            { props.children}
        </tr>
    )
}

export function TableCell(props) {
    return (
        <td className={'pl-4 py-3 border-b ' + props.className}>
            { props.children}
        </td>
    )
}