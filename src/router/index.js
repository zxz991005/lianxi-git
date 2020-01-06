import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../view/Home.vue';
import Address from '../view/addresslist.vue';
import Add from '../view/add.vue';
import Redact from '../view/redact.vue';
import Login from '../view/login.vue';
import Registry from '../view/registry.vue';
import Tab from '../view/tab.vue';
import Aaa from '../view/aaa.vue';
import Delete from '../view/delete.vue';
import Type from "../view/type/type.vue";
import Homes from '../view/homes/homes.vue';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/address',
        name: 'address',
        component: Address,
    },
    {
        path: '/add',
        name: 'add',
        component: Add,
    },
    {
        path: '/redact',
        name: 'redact',
        component: Redact,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/registry',
        name: 'registry',
        component: Registry,
    },
    {
        path: '/tab',
        name: 'tab',
        component: Tab,
    },
    {
        path: '/aaa',
        name: 'aaa',
        component: Aaa,
    },

    {
        path: '/delete',
        name: 'delete',
        component: Delete,
    },
    {
        path: '/type',
        name: 'type',
        component:Type,
    },
    {
        path: '/homes',
        name: 'homes',
        component: Homes,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
