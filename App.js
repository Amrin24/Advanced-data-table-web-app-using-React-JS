import React, { useState } from 'react';
import FilterPanel from './FilterPanel';
import GroupingPanel from './GroupingPanel';
import DataTable from './DataTable';
import Pagination from './Pagination';
import sampleData from './data';

const App = () => {
    const [data, setData] = useState(sampleData);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [filters, setFilters] = useState({});
    const [grouping, setGrouping] = useState([]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (items) => {
        setItemsPerPage(items);
        setCurrentPage(1); // Reset to first page when items per page changes
    };

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const handleGroupingChange = (newGrouping) => {
        setGrouping(newGrouping);
    };

    // Calculate the data to be displayed based on pagination, filtering, and grouping
    const filteredData = data.filter(item => {
        return Object.keys(filters).every(key => item[key]?.toString().toLowerCase().includes(filters[key].toLowerCase()));
    });

    const groupedData = grouping.length
        ? filteredData.reduce((acc, item) => {
              const groupKey = grouping.map(group => item[group]).join('-');
              if (!acc[groupKey]) {
                  acc[groupKey] = [];
              }
              acc[groupKey].push(item);
              return acc;
          }, {})
        : { 'All Items': filteredData };

    const paginatedData = Object.values(groupedData).flat().slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="App">
            <FilterPanel onFilterChange={handleFilterChange} />
            <GroupingPanel onGroupingChange={handleGroupingChange} />
            <DataTable data={paginatedData} />
            <Pagination
                currentPage={currentPage}
                totalItems={filteredData.length}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
                onItemsPerPageChange={handleItemsPerPageChange}
            />
        </div>
    );
};

export default App;
