
import './App.css';

// BT - Step3: import the below

import { Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'

import { Navbar } from './components/Navbar'
import { OrderSummary } from './views/OrderSummary';
import { NoMatchRoute } from './views/NoMatchRoute';
import { Products } from './views/Products';
import { NewFeatureProducts } from './components/NewFeatureProducts';
import { NewProducts } from './components/NewProducts';
import { Users } from './views/Users';
import { UserDetails } from './components/UserDetails';
import { Profile } from './views/Profile';
import { AuthProvider } from './components/auth'
import { Login } from './views/Login';
import { RequireAuth } from './components/RequireAuth';


//######################################################################################
//BT - Step4: Create a view folder and also create two views: Home.js and About.js.
//            These are the two pages that we will try to navigates to.
//######################################################################################

function App() {

  return (

    <>
    {/* BT - AuthProvider will allow us to access all the variables, function (user,login,logout)
             from any our own component.
     */}
    <AuthProvider>
      <Navbar />
      
      {/* BT - Create a parent Routes and child Route. The child Route will be for your route.*/}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='order-summary' element={<OrderSummary />}></Route>
          <Route path='products' element={<Products />}>
            {/* BT - Route index means - it will automatically display the index page when you go
                     to /products. Normally, when you want to see the NewFeatureProducts page, you
                     will have to go to /products/new-feature. 
                     But with the index setup below. When you go to /products, it will automatically
                     displaying the NewFeatureProducts page.
            */}
            <Route index element={<NewFeatureProducts />} />
            <Route path='new-feature' element={<NewFeatureProducts />} />
            <Route path='new-product' element={<NewProducts />} />
          </Route>
          <Route path='users' element={<Users />} />
          {/* BT - When there is matched with this route, it will call the corresponding component and
                   pass in the userid. Look at the UserDetails for how extract out the userId from the url
                   and use it in the UserDetails component.
           */}
          <Route path='users/:userid' element={<UserDetails />} />
          
          <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
          
          <Route path='login' element={<Login />} />
          {/* BT - The below is no match route. Meaning, it can not find any match route in this list */}
          <Route path='*' element={<NoMatchRoute />}></Route>
        </Routes>
        </AuthProvider>
      </>  
  );
}

export default App;
