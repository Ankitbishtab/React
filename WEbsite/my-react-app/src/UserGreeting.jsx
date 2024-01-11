
function UserGreeting(props){

    if(props.isLoggedIn){
        return <h2>welcome {props.Username}</h2>
    }
    else{
        return <h2>Please log in to continue</h2>
    }

}

export default UserGreeting