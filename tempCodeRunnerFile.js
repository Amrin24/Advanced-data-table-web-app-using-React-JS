// Example code to run or test
const sampleData = [
    { id: 1, name: 'Sample Item 1', category: 'Category A' },
    { id: 2, name: 'Sample Item 2', category: 'Category B' },
    { id: 3, name: 'Sample Item 3', category: 'Category A' },
];

// Function to filter data
const filterData = (data, filter) => {
    return data.filter(item =>
        Object.keys(filter).every(key =>
            item[key]?.toString().toLowerCase().includes(filter[key].toLowerCase())
        )
    );
};

// Function to paginate data
const paginateData = (data, currentPage, itemsPerPage) => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
};

// Function to group data
const groupData = (data, groupBy) => {
    if (groupBy.length === 0) return { 'All Items': data };

    return data.reduce((groups, item) => {
        const groupKey = groupBy.map(group => item[group]).join(' | ');
        if (!groups[groupKey]) {
            groups[groupKey] = [];
        }
        groups[groupKey].push(item);
        return groups;
    }, {});
};

// Example usage
const filters = { name: 'Sample' }; // Example filter
const groupedBy = ['category']; // Example grouping

// Apply filter
const filteredData = filterData(sampleData, filters);

// Apply grouping
const groupedData = groupData(filteredData, groupedBy);

// Apply pagination
const currentPage = 1;
const itemsPerPage = 2;
const paginatedData = paginateData(groupedData['All Items'] || [], currentPage, itemsPerPage);

// Output results
console.log('Filtered Data:', filteredData);
console.log('Grouped Data:', groupedData);
console.log('Paginated Data:', paginatedData);
