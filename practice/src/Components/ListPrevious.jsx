import React from 'react'
import './List.css'

const List = ({ data }) => {
    if (!data || !Array.isArray(data)) {
        return <div>No data available</div>;
    }

    return (
        <>
            <h1>List</h1>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Street</th>
                        <th>Suite</th>
                        <th>City</th>
                        <th>Zipcode</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d) => (
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
    )
}

export default List