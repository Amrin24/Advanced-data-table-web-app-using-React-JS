import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const DataTable = ({ data, columns }) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map(column => (
                        <th key={column.id}>{column.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map(column => (
                            <td key={column.id}>{row[column.id] || 'N/A'}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

DataTable.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
};

export default DataTable;
