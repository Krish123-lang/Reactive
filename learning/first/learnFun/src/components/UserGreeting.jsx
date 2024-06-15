import PropTypes from 'prop-types';

export function UserGreeting(props) {
    return (
        <>
            <p> {(props.isLoggedIn) ? <h1 className="success">Hello, {props.username}</h1> : <h2 className="danger"> please Log in</h2>} </p>
        </>
    )
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}