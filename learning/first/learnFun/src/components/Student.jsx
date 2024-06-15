import PropTypes from 'prop-types'

export function Student(props) {
    return (
        <>
            <div className="student">
                <p>Name: {props.name} </p>
                <p>Age: {props.age} </p>
                <p> {(props.isStudent) ? "Yes he is a student" : "Nope! He is not"} </p>
            </div>
        </>
    )
}
// Proptypes (Good Pratice)
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
