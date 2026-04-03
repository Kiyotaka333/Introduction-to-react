import {Link} from 'react-router-dom';
export default function BlogsPage(){
    const id=crypto.randomUUID();
        return(
        <main>
            <h1>Blogs</h1>
            <link to={`/blogs/${id}`}>
            <button>Go to Blog Details</button>
            </link>
        </main>
    );
}