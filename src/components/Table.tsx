import React from 'react';

interface TableProps {
    className?: string;
    children: React.ReactNode;
}

export function Table(props: TableProps) {
    return (
        <table className={'w-full rounded-t-lg ' + props.className}>
            { props.children}
        </table>
    )
}

interface TableHeadProps {
    className?: string;
    children: React.ReactNode;
}

export function TableHead(props: TableHeadProps) {
    return (
        <thead className="text-left">
            <tr className="header-row">
                {props.children}
            </tr>
        </thead>
    )
}

interface TableHeaderProps {
    className?: string;
    children: React.ReactNode;
}

export function TableHeader(props: TableHeaderProps) {
    return (
        <th className={'pl-4 py-2 bg-gray-100 uppercase border-b tracking-wider font-semibold text-xs text-gray-600 ' + props.className}>
            { props.children}
        </th>
    )
}

interface TableBodyProps {
    className?: string;
    children: React.ReactNode;
}

export function TableBody(props: TableBodyProps) {
    return (
        <tbody className={props.className}>
            { props.children}
        </tbody>
    )
}

interface TableRowProps {
    className?: string;
    children: React.ReactNode;
}

export function TableRow(props: TableRowProps) {
    return (
        <tr className={'bg-white text-left text-gray-600 hover:bg-gray-100 font-semibold text-sm ' + props.className}>
            { props.children}
        </tr>
    )
}

interface TableCellProps {
    className?: string;
    children: React.ReactNode;
}

export function TableCell(props: TableCellProps) {
    return (
        <td className={'pl-4 py-3 border-b ' + props.className}>
            { props.children}
        </td>
    )
}