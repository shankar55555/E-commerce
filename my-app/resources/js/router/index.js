import { createRouter, createWebHistory } from "vue-router";
import invoicehome from "../pages/home.vue";
import cart from "../pages/cart.vue";
import profile from "../pages/profile.vue";
import product from "../pages/product-view.vue";
import view_all from "../pages/view_all.vue";
import orders from "../pages/oders.vue";
// import notfound from "../pages/notfound.vue";
 
// Define Routes, Each route should map toa component
const routes = [
    { path: "/", name: "Home", component: invoicehome },
    { path: "/cart", component: cart },
    { path: "/profile", component: profile },
    // { path: '/product-view.vue', name: 'product', component: product, props: true },
    { path: "/view_all.vue", component: view_all },
    { path: "/product-view", component: product },
    { path: "/product-view/oders", name:orders, component: orders },
    // { path: "/:pathMatch(.*)*", component: notfound },
    
];

// creat router instance and pass the `route option`
const router = createRouter({
    // provide the history implemetion to use
    history: createWebHistory(),
    routes,
});

export default router;
