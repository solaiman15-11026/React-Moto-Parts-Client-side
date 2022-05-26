
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard'
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Home from './Pages/MainHome/Home/Home';
import Part from './Pages/MainHome/Part/Part';
import Products from './Pages/MainHome/Products/Products';
import ProductsDetails from './Pages/MainHome/ProductsDetails/ProductsDetails';
import NotFound from './Pages/NotFound/NotFound';
import Portfolio from './Pages/Portfolio/Portfolio';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

import Orders from './Pages/Dashboard/Orders'
import MyProfile from './Pages/Dashboard/MyProfile'
import Users from './Pages/Dashboard/Users'
import AddReview from './Pages/Dashboard/AddReview'
import Order from './Pages/Dashboard/Order';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageOrder from './Pages/Dashboard/ManageOrder';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/part' element={<Part></Part>}></Route>

        <Route path='/part/:id' element={<RequireAuth><ProductsDetails></ProductsDetails></RequireAuth>}></Route>


        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<Orders></Orders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='order' element={<Order></Order>}></Route>
          <Route path='manageorder' element={<ManageOrder></ManageOrder>}></Route>
          <Route path='users' element={<RequireAuth><Users></Users></RequireAuth>}></Route>

        </Route>


        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes >
      <Footer></Footer>
    </div >
  );
}

export default App;
