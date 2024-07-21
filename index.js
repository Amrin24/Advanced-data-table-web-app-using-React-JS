import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import DataTable from './DataTable';
import FilterPanel from './FilterPanel';
import GroupingPanel from './GroupingPanel';
import Pagination from './Pagination';
import sampleData from './sampledata.json';

const columns = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'category', label: 'Category' },
    // Add more columns as needed
];

const App = () => {
    const [data, setData] = useState(sampleData);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [filters, setFilters] = useState({});
    const [groupBy, setGroupBy] = useState([]);

    const filteredData = useMemo(() => {
        return data.filter(item => {
            return Object.keys(filters).every(key => {
                return item[key]?.toString().toLowerCase().includes(filters[key].toLowerCase());
            });
        });
    }, [data, filters]);

    const groupedData = useMemo(() => {
        if (groupBy.length === 0) return { 'All Items': filteredData };

        return filteredData.reduce((groups, item) => {
            const groupKey = groupBy.map(group => item[group]).join(' | ');
            if (!groups[groupKey]) {
                groups[groupKey] = [];
            }
            groups[groupKey].push(item);
            return groups;
        }, {});
    }, [filteredData, groupBy]);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return Object.values(groupedData).flat().slice(start, end);
    }, [groupedData, currentPage, itemsPerPage]);

    return (
        <div>
            <FilterPanel filters={filters} setFilters={setFilters} />
            <GroupingPanel columns={columns} groupBy={groupBy} setGroupBy={setGroupBy} />
            <DataTable data={paginatedData} columns={columns} />
            <Pagination
                currentPage={currentPage}
                totalItems={filteredData.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
                onItemsPerPageChange={setItemsPerPage}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
