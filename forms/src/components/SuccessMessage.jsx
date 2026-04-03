export default function SuccessMessage(){
    return(
        <div>
            <h1>Form submited successfully</h1>
            <p>Fullname:{props.fullname}</p>
            <p>Email:{props.email}</p>
            <button>Logout</button>
        </div>
    );
}