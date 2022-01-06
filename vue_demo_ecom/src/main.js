import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import ProductDetail from "./pages/ProductDetail.vue";
import TheSlider from "./pages/Slider.vue";
import AboutUs from './pages/AboutUs.vue'
import ContactUs from './pages/ContactUs.vue'
import AddToCart from './pages/AddToCart.vue'
import Checkout from './pages/Checkout.vue'
import AllProducts from './pages/AllProducts.vue'
import BreadCrumb from './pages/BreadCrumb.vue'
import "bootstrap";
// import "bootstrap/dist/js/bootstrap.min.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/productdetail", component: ProductDetail },
    { path: "/slider", component: TheSlider },
    {path:'/aboutus',component:AboutUs},
    {path:'/contactus',component:ContactUs},
    {path:'/cart',component:AddToCart},
    {path:'/checkout',component:Checkout},
    {path:'/allproducts',component:AllProducts},
    {path:'/breadcrumb',component:BreadCrumb},
  ],
});

const app = createApp(App);

app.use(router);
app.mount("#app");
