import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange, onItemsPerPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (e) => {
        onPageChange(Number(e.target.value));
    };

    const handleItemsPerPageChange = (e) => {
        onItemsPerPageChange(Number(e.target.value));
    };

    return (
        <div>
            <label>
                Items per page:
                <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </label>
            <label>
                Page:
                <input
                    type="number"
                    min="1"
                    max={totalPages}
                    value={currentPage}
                    onChange={handlePageChange}
                />
            </label>
            <p>
                Page {currentPage} of {totalPages}
            </p>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    onItemsPerPageChange: PropTypes.func.isRequired,
};

export default Pagination;
