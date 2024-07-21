import React from 'react';
import PropTypes from 'prop-types';

const GroupingPanel = ({ columns, groupBy, setGroupBy }) => {
    const handleGroupByChange = (e) => {
        const value = e.target.value;
        setGroupBy(prev => {
            const newGroupBy = [...prev];
            if (newGroupBy.includes(value)) {
                return newGroupBy.filter(item => item !== value);
            } else {
                return [...newGroupBy, value];
            }
        });
    };

    return (
        <div>
            <h3>Group By</h3>
            {columns.map(column => (
                <div key={column.id}>
                    <label>
                        <input
                            type="checkbox"
                            value={column.id}
                            checked={groupBy.includes(column.id)}
                            onChange={handleGroupByChange}
                        />
                        {column.label}
                    </label>
                </div>
            ))}
        </div>
    );
};

GroupingPanel.propTypes = {
    columns: PropTypes.array.isRequired,
    groupBy: PropTypes.array.isRequired,
    setGroupBy: PropTypes.func.isRequired,
};

export default GroupingPanel;
