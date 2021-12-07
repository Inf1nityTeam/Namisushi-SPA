import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '@/app/NotFound'
import Home from '@/app/home/Home'
import Delivery from '@/app/delivery/Delivery'
import MainWrapper from '@/components/MainWrapper'
import Contacts from '@/app/contacts/Contacts'
import Stocks from '@/app/stocks/Stocks'
import SuccessfulOrder from '@/app/successfulOrder/SuccessfulOrder'
import Product from '@/app/product/Product'
import store from "@/config/store";
import Page404 from "@/components/Page404";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '',
            name: 'main-wrapper',
            component: MainWrapper,
            children: [{
                path: '/',
                name: 'main',
                component: Home
            }, {
                path: '/delivery',
                name: 'delivery',
                component: Delivery
            }, {
                path: '/contacts',
                name: 'contacts',
                component: Contacts
            }, {
                path: '/stocks',
                name: 'stocks',
                component: Stocks
            }, {
                path: '/not-found',
                name: 'not-found',
                component: NotFound
            }, {
                path: '/successful-order',
                name: 'successful-order',
                component: SuccessfulOrder
            }, {
                path: '/product/:productId',
                name: 'product',
                component: Product
            }, {
                path: '*',
                name: 'page-404',
                component: Page404
            }]
        }
    ]
})

export default router

router.beforeEach(async (to, from, next) => {
    if (from.name === 'product' && from.params.productId && to.name === 'main') {
        await next()
        const product = store.state.products.list.find(item => item._id === from.params.productId)
        await router.push({
            query: { scrollTo: from.params.productId, categoryId: product.categoryId }
        })
        return
    } else {
        next()
    }
    if (to.name === 'main' && from.name !== null && from.name !== 'main') scroll(0, 0)
});
