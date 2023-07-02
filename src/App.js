import './App.css';
import {Route,Routes} from "react-router-dom";
import Layout from './components/Layout';
import IndexPage from './components/Pages/IndexPage';
import LoginPage from './components/Pages/LoginPage';
import RegisterPage from './components/Pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './components/Pages/CreatePost';
import PostPage from "./components/Pages/PostPage";
import CategoryPage from "./components/Pages/CategoryPage";
import BrandPage from "./components/Pages/BrandPage";
import DisplayCategory from "./components/Pages/DisplayCategory";
import DisplayBrand from "./components/Pages/DisplayBrand.js";
import CreateBrand from './components/Pages/CreateBrand';
import CreateCategory from './components/Pages/CreateCategory';
import HomePage from './components/Pages/HomePage';
import ProductsPage from './components/Pages/ProductsPage';
import EditProduct from './components/Pages/EditProduct';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/product/:id" element={<PostPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category/:category" element={<DisplayCategory />} />
          <Route path="/brand" element={<BrandPage />} />
          <Route path="/brand/:brand" element={<DisplayBrand />} />
          <Route path="/createBrand" element={<CreateBrand />} />
          <Route path="/createCategory" element={<CreateCategory />} />
          <Route path="/getProductOnBrandAndCategory" element={<ProductsPage />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
