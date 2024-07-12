import React, { useState } from 'react';
import './List.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

const List = ({ data }) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const sortedData = React.useMemo(() => {
        if (!data) return [];
        let sortableData = [...data];
        if (sortConfig.key) {
            sortableData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableData;
    }, [data, sortConfig]);

    const requestSort = key => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const getClassNamesFor = name => {
        if (!sortConfig.key) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    if (!data || !Array.isArray(data)) {
        return <div>No data available</div>;
    }

    return (
        <>
            <h1>List</h1>
            <table className="data-table">
                <thead>
                    <tr>
                        {[
                            'ID', 'Name', 'Username', 'Email', 'Street', 'Suite', 'City', 'Zipcode',
                            'Latitude', 'Longitude', 'Phone', 'Website', 'Company'
                        ].map((header, index) => (
                            <th key={index} onClick={() => requestSort(header.toLowerCase())}>
                                {header}
                                {sortConfig.key === header.toLowerCase() && (
                                    <FontAwesomeIcon icon={sortConfig.direction === 'ascending' ? faSortUp : faSortDown} />
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((d) => (
                        <tr key={d.id}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.username}</td>
                            <td>{d.email}</td>
                            <td>{d.address.street}</td>
                            <td>{d.address.suite}</td>
                            <td>{d.address.city}</td>
                            <td>{d.address.zipcode}</td>
                            <td>{d.address.geo.lat}</td>
                            <td>{d.address.geo.lng}</td>
                            <td>{d.phone}</td>
                            <td>{d.website}</td>
                            <td>{d.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default List;
