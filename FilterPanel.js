import React from 'react';
import PropTypes from 'prop-types';

const FilterPanel = ({ filters, setFilters }) => {
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    return (
        <div>
            <h3>Filters</h3>
            {/* Replace with actual filter inputs based on your data */}
            <label>
                Filter by name:
                <input
                    type="text"
                    name="name"
                    value={filters.name || ''}
                    onChange={handleFilterChange}
                />
            </label>
        </div>
    );
};

FilterPanel.propTypes = {
    filters: PropTypes.object.isRequired,
    setFilters: PropTypes.func.isRequired,
};

export default FilterPanel;
