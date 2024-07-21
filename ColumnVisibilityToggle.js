import React from 'react';
import PropTypes from 'prop-types';

const ColumnVisibilityToggle = ({ columns, visibleColumns, setVisibleColumns }) => {
    const handleVisibilityChange = (e) => {
        const columnId = e.target.value;
        setVisibleColumns(prevVisibleColumns => {
            if (prevVisibleColumns.includes(columnId)) {
                // Remove column from visible columns
                return prevVisibleColumns.filter(id => id !== columnId);
            } else {
                // Add column to visible columns
                return [...prevVisibleColumns, columnId];
            }
        });
    };

    return (
        <div>
            <h3>Column Visibility</h3>
            {columns.map(column => (
                <div key={column.id}>
                    <label>
                        <input
                            type="checkbox"
                            value={column.id}
                            checked={visibleColumns.includes(column.id)}
                            onChange={handleVisibilityChange}
                        />
                        {column.label}
                    </label>
                </div>
            ))}
        </div>
    );
};

ColumnVisibilityToggle.propTypes = {
    columns: PropTypes.array.isRequired,
    visibleColumns: PropTypes.array.isRequired,
    setVisibleColumns: PropTypes.func.isRequired,
};

export default ColumnVisibilityToggle;
