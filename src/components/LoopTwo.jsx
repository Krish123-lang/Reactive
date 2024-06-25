import React from 'react';
import Data2 from '../api/Data2.json';

// Component to render address details
const Address = ({ address }) => (
    <>
        <h4><u>Address</u></h4>
        <p>Street: {address.street}</p>
        <p>Suite: {address.suite}</p>
        <p>City: {address.city}</p>
        <p>Zip Code: {address.zipcode}</p>
        <p>Latitude: {address.geo.lat}</p>
        <p>Longitude: {address.geo.lng}</p>
    </>
);

// Component to render company details
const Company = ({ company }) => (
    <>
        <h4><u>Company Details</u></h4>
        <p>Company Name: {company.name}</p>
        <p>CatchPhrase: {company.catchPhrase}</p>
        <p>BS: {company.bs}</p>
    </>
);

// Component to render user details
const User = ({ user }) => (
    <li>
        <h3>Name: {user.name}</h3>
        <p>Username: @{user.username}</p>
        <p>Email: {user.email}</p>
        <Address address={user.address} />
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <Company company={user.company} />
    </li>
);

// Main component to map through the data and render the User component
export const MapData = () => (
    <>
        <h1>Loop Two</h1>
        <ol>
            {Data2.map(user => (
                <User key={user.id} user={user} />
            ))}
        </ol>
    </>
);

export default MapData;
