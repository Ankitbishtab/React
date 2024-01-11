import PropTypes  from "prop-types";

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.Name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "No"}</p>
        </div>
    );
}
Student.prototype = {
name: PropTypes.string,
age: PropTypes.number,
isStudent: PropTypes.bool,

}

Student.defaultProps = {
    Name : "Guest",
    age: 0,
    isStudent: false,
}
export default Student