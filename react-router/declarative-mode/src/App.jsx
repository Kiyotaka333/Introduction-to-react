import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import BlogsPage from "./pages/blog/BlogsPage";
import BlogsDetailsPage from "./pages/blog/BlogsDetailsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogsDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Link to="/">
        <button> Go to Home Page</button>
      </Link>
      <Link to="/contact">
        <button>Go to Contact Page</button>
      </Link>
         <Link to="/blogs">
        <button>Go to Blogs Page</button>
      </Link>
      <Footer />
    </>
  );
}
export default App;
