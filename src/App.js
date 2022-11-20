import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./maincomponent/Header";
import "./App.css";
import Navbar from "./maincomponent/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/adminpages/Admin";
import ProductList from "./pages/adminpages/ProductList";
import UserList from "./pages/adminpages/UserList";
import Footer from "./maincomponent/Footer";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Product from "./pages/Product";
import AboutUser from "./pages/userpages/AboutUser";
import HeaderUser from "./maincomponent/user/HeaderUser";
import FooterUser from "./maincomponent/user/FooterUser";
import NavbarUser from "./maincomponent/user/NavbarUser";
import ContactUsUser from "./pages/userpages/ContactUsUser";
import AllProduct from "./pages/AllProduct";
import AddProduct from "./pages/adminpages/AddProduct";
import ProductTypeList from "./pages/adminpages/ProductTypeList";
import AddProductType from "./pages/adminpages/AddProductType";
import AddAdmin from "./pages/adminpages/AddAdmin";
import ProductUser from "./pages/userpages/ProductUser";
import UpdateProduct from "./pages/adminpages/UpdateProduct";
import ProductDetails from "./pages/ProductDetails";
import AdminHeader from "./pages/adminpages/AdminHeader";
import MyAccount from "./pages/userpages/MyAccount";
import UpdateUserDetails from "./pages/userpages/UpdateUserDetails";
import ProductDetailsUser from "./pages/userpages/ProductDetailsUser";
import SearchProducts from "./pages/SearchProducts";
import SearchProductsUser from "./maincomponent/user/SearchProductsUser";
import UserFeedback from "./pages/adminpages/UserFeedback";
import DeliveryAddress from "./pages/userpages/DeliveryAddress";
import OrderDetails from "./pages/userpages/OrderDetails";
import AllProductUser from "./pages/userpages/AllProductUser";
import UpdateAddress from "./pages/userpages/UpdateAddress";
import Cart from "./pages/userpages/Cart";
import AllOrders from "./pages/userpages/AllOrders";
import ConfirmOrder from "./pages/userpages/ConfirmOrder";
import HomeUser from "./pages/userpages/HomeUser";
import Auth from "./maincomponent/Auth";
import AuthAdmin from "./maincomponent/AuthAdmin";
import OrderList from "./pages/adminpages/OrderList";
import AdminPageHeader from "./pages/adminpages/AdminPageHeader";
import UpdateAdminDetails from "./pages/adminpages/UpdateAdminDetails";
import MyAccountAdmin from "./pages/adminpages/MyAccountAdmin";
import ChangePassword from "./pages/userpages/ChangePassword";
import AdminPassword from "./pages/adminpages/AdminPassword";
import LoginPharma from "./pages/pharmacistpages/LoginPharma";
import RegisterPharma from "./pages/pharmacistpages/RegisterPharma";
import HomePharma from "./pages/pharmacistpages/HomePharma";
import NavbarPharma from "./pages/pharmacistpages/NavbarPharma";
import ProductPharma from "./pages/pharmacistpages/ProductPharma";
import AuthPharma from "./pages/pharmacistpages/AuthPharma";
import HeaderPharma from "./pages/pharmacistpages/HeaderPharma";
import ProductDetailsPharma from "./pages/pharmacistpages/ProductDetailsPharma";
import AboutPharma from "./pages/pharmacistpages/AboutPharma";
import AllProductPharma from "./pages/pharmacistpages/AllProductPharma";
import ContactUsPharma from "./pages/pharmacistpages/ContactUsPharma";
import FooterPharma from "./pages/pharmacistpages/FooterPharma";
import PharmaAccount from "./pages/pharmacistpages/PharmaAccount";
import UpdatePharmaDetails from "./pages/pharmacistpages/UpdatePharmaDetails";
import ChangePasswordPharma from "./pages/pharmacistpages/ChangePasswordPharma";
import PharmaList from "./pages/adminpages/PharmaList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home}>
            <Header></Header>
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/homeuser">
            <Auth></Auth>
            <HeaderUser></HeaderUser>
            <NavbarUser></NavbarUser>
            <HomeUser />
            <FooterUser />
          </Route>
          <Route path="/about" component={About}>
            <Header></Header>
            <Navbar></Navbar>
            <About></About>
            <Footer></Footer>
          </Route>
          <Route path="/allproduct" component={AllProduct}>
            <Header></Header>
            <Navbar></Navbar>
            <AllProduct />
            <Footer></Footer>
          </Route>
          <Route path="/allproductuser" component={AllProductUser}>
            <Auth></Auth>
            <HeaderUser />
            <NavbarUser />
            <AllProductUser />
            <FooterUser />
          </Route>
          <Route path="/search" component={SearchProducts}>
            <Header></Header>
            <Navbar></Navbar>
            <SearchProducts />
            <Footer></Footer>
          </Route>
          <Route path="/searchuser" component={SearchProductsUser}>
            <Auth></Auth>
            <HeaderUser />
            <NavbarUser />
            <SearchProducts />
            <Footer></Footer>
          </Route>
          <Route path="/productlistuser" component={AllProduct}>
            <HeaderUser />
            <NavbarUser />
            <AllProduct />
            <Footer></Footer>
          </Route>
          <Route path="/aboutuser" component={AboutUser}>
            <Auth></Auth>
            <HeaderUser />
            <NavbarUser />
            <AboutUser />
            <FooterUser />
          </Route>
          <Route path="/login" component={Login}>
            <Header></Header>
            <Login></Login>
            <Footer></Footer>
          </Route>
          <Route path="/myaccount" component={MyAccount}>
            <Auth></Auth>
            <HeaderUser />
            <NavbarUser />
            <MyAccount />
            <Footer></Footer>
          </Route>
          <Route path="/updatedetails" component={UpdateUserDetails}>
            <Auth></Auth>
            <HeaderUser />
            <UpdateUserDetails />
            <Footer></Footer>
          </Route>
          <Route path="/changepassword" component={ChangePassword}>
            <Auth></Auth>
            <HeaderUser />
            <NavbarUser />
            <ChangePassword />
            <Footer></Footer>
          </Route>
          <Route path="/products" component={Product}>
            <Header></Header>
            <Navbar></Navbar>
            <Product></Product>
            <Footer></Footer>
          </Route>
          <Route path="/productsuser" component={ProductUser}>
            <Auth></Auth>
            <HeaderUser />
            <NavbarUser />
            <ProductUser />
            <FooterUser />
          </Route>
          <Route path="/productdetails" component={ProductDetails}>
            <Header />
            <Navbar />
            <ProductDetails />
            <Footer></Footer>
          </Route>
          <Route path="/productdetailsuser" component={ProductDetailsUser}>
            <Auth></Auth>
            <HeaderUser />
            <NavbarUser />
            <ProductDetails />
            <Footer></Footer>
          </Route>
          <Route path="/cartitems" component={Cart}>
            <Auth></Auth>
            <HeaderUser />
            <NavbarUser />
            <Cart />
            <Footer></Footer>
          </Route>
          <Route path="/deliveryaddress" component={DeliveryAddress}>
            <Auth></Auth>
            <HeaderUser />
            <NavbarUser />
            <DeliveryAddress />
            <Footer></Footer>
          </Route>
          <Route path="/updateaddress" component={UpdateAddress}>
            <Auth></Auth>
            <HeaderUser />
            <NavbarUser />
            <UpdateAddress />
            <Footer></Footer>
          </Route>
          <Route path="/confirmorder" component={ConfirmOrder}>
            <Auth></Auth>
            <HeaderUser />
            <NavbarUser />
            <ConfirmOrder />
            <Footer></Footer>
          </Route>
          <Route path="/orderdetails" component={OrderDetails}>
            <Auth></Auth>
            <HeaderUser />
            <NavbarUser />
            <OrderDetails />
            <Footer></Footer>
          </Route>
          <Route path="/allorders" component={AllOrders}>
            <Auth></Auth>
            <HeaderUser />
            <NavbarUser />
            <AllOrders />
            <Footer></Footer>
          </Route>

          <Route path="/contactus" component={ContactUs}>
            <Header></Header>
            <Navbar></Navbar>
            <ContactUs></ContactUs>
            <Footer></Footer>
          </Route>
          <Route path="/contactususer" component={ContactUsUser}>
            <Auth></Auth>
            <HeaderUser />
            <NavbarUser />
            <ContactUsUser />
            <FooterUser />
          </Route>
          <Route path="/register" component={Register}>
            <Header></Header>
            <Register />
            <Footer></Footer>
          </Route>
          <Route path="/admin" component={Admin}>
            <AuthAdmin></AuthAdmin>
            <AdminHeader></AdminHeader>
            <Admin></Admin>
          </Route>
          <Route path="/producttypelist" component={ProductTypeList}>
            <AuthAdmin></AuthAdmin>
            <AdminHeader></AdminHeader>
            <AdminPageHeader></AdminPageHeader>
            <ProductTypeList />
          </Route>
          <Route path="/addproducttype" component={AddProductType}>
            <AuthAdmin></AuthAdmin>
            <AdminHeader></AdminHeader>
            <AddProductType></AddProductType>
          </Route>
          <Route path="/productlist" component={ProductList}>
            <AuthAdmin></AuthAdmin>
            <AdminHeader></AdminHeader>
            <AdminPageHeader></AdminPageHeader>
            <ProductList></ProductList>
          </Route>
          <Route path="/orderlist" component={OrderList}>
            <AuthAdmin></AuthAdmin>
            <AdminHeader></AdminHeader>
            <AdminPageHeader></AdminPageHeader>
            <OrderList></OrderList>
          </Route>
          <Route path="/feedback" component={UserFeedback}>
            <AuthAdmin></AuthAdmin>
            <AdminHeader></AdminHeader>
            <AdminPageHeader></AdminPageHeader>
            <UserFeedback></UserFeedback>
          </Route>
          <Route path="/userlist" component={UserList}>
            <AuthAdmin></AuthAdmin>
            <AdminHeader></AdminHeader>
            <AdminPageHeader></AdminPageHeader>
            <UserList></UserList>
          </Route>
          <Route path="/addadmin" component={AddAdmin}>
            <AuthAdmin></AuthAdmin>
            <AdminHeader></AdminHeader>
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/addproduct" component={AddProduct}>
            <AuthAdmin></AuthAdmin>
            <AdminHeader></AdminHeader>
            <AddProduct></AddProduct>
          </Route>
          <Route path="/updateproduct" component={UpdateProduct}>
            <AuthAdmin></AuthAdmin>
            <AdminHeader></AdminHeader>
            <UpdateProduct></UpdateProduct>
          </Route>
          <Route path="/adminprofile">
            <AuthAdmin></AuthAdmin>
            <AdminHeader></AdminHeader>
            <MyAccount />
          </Route>
          <Route path="/adminupdate" component={UpdateAdminDetails}>
            <AuthAdmin></AuthAdmin>
            <AdminHeader></AdminHeader>
            <AdminPageHeader></AdminPageHeader>
            <UpdateAdminDetails />
          </Route>
          <Route path="/adminpassword" component={AdminPassword}>
            <AuthAdmin></AuthAdmin>
            <AdminHeader></AdminHeader>
            <AdminPassword />
          </Route>
          <Route path="/loginpharma" component={LoginPharma}>
            <Header></Header>
            <LoginPharma></LoginPharma>
            <Footer></Footer>
          </Route>
          <Route path="/registerpharma" component={RegisterPharma}>
            <Header></Header>
            <RegisterPharma />
            <Footer></Footer>
          </Route>
          <Route path="/homepharma" component={HomePharma}>
            <HeaderPharma></HeaderPharma>
            <NavbarPharma></NavbarPharma>
            <HomePharma></HomePharma>
            <FooterPharma />
          </Route>
          <Route path="/productspharma" component={ProductPharma}>
            <AuthPharma></AuthPharma>
            <HeaderPharma />
            <NavbarPharma />
            <ProductPharma />
            <FooterPharma />
          </Route>
          <Route path="/productdetailspharma" component={ProductDetailsPharma}>
            <AuthPharma></AuthPharma>
            <HeaderPharma />
            <NavbarPharma />
            <ProductDetailsPharma />
            <FooterPharma />
          </Route>
          <Route path="/aboutpharma" component={AboutPharma}>
            <AuthPharma></AuthPharma>
            <HeaderPharma />
            <NavbarPharma />
            <AboutPharma />
            <FooterPharma />
          </Route>
          <Route path="/productlistpharma" component={AllProductPharma}>
            <HeaderPharma />
            <NavbarPharma />
            <AllProductPharma />
            <FooterPharma />
          </Route>
          <Route path="/contactuspharma" component={ContactUsPharma}>
            <AuthPharma></AuthPharma>
            <HeaderPharma />
            <NavbarPharma />
            <ContactUsPharma />
            <FooterPharma />
          </Route>
          <Route path="/pharmaaccount" component={PharmaAccount}>
            <AuthPharma></AuthPharma>
            <HeaderPharma />
            <NavbarPharma />
            <PharmaAccount />
            <br></br>
            <br></br>
            <br></br>
            <FooterPharma />
          </Route>
          <Route path="/updatedetailspharma" component={UpdatePharmaDetails}>
            <AuthPharma></AuthPharma>
            <HeaderPharma />
            <UpdatePharmaDetails />
            <FooterPharma />
          </Route>
          <Route path="/changepasswordpharma" component={ChangePasswordPharma}>
            <AuthPharma></AuthPharma>
            <HeaderPharma />
            <NavbarPharma />
            <ChangePasswordPharma />
            <FooterPharma />
          </Route>
          <Route path="/pharmalist" component={PharmaList}>
            <AuthAdmin></AuthAdmin>
            <AdminHeader></AdminHeader>
            <AdminPageHeader></AdminPageHeader>
            <PharmaList></PharmaList>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
