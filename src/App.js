
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Home from './Pages/MainHome/Home/Home';
import Order from './Pages/MainHome/Order/Order';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';



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
        <Route path='order' element={<Order></Order>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
