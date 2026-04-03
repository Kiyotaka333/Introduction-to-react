import { Link } from "react-router";
export default function HomePage(){
    return(
        <main>
            <h1>Home Page</h1>
            <Link to="/contact">
            <button>Go to \Contact Page</button>
            </Link>
        </main>
    );
}