import Vue from 'vue'
import Vuex from 'vuex'

import products from '@/app/product/product.store'
import category from '@/app/category/category.store'
import cart from '@/app/cart/cart.store'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        host: process.env.VUE_APP_BACKEND_HOST,
        isMenu: false,
        isShowCart: false,
        isShowLoginModal: false,
        isShowHeaderCollapse: false,
        windowScroll: false,
        windowWidth: null
    },
    mutations: {
        setIsMenu (state, data) { state.isMenu = data },
        setWindowScroll (state, data) { state.windowScroll = data },
        showHeaderCollapse(state) { state.isShowHeaderCollapse = true },
        hideHeaderCollapse(state) { state.isShowHeaderCollapse = false },
        showCart(state) { state.isShowCart = true },
        hideCart(state) { state.isShowCart = false },
        showLoginModal(state) { state.isShowLoginModal = true },
        hideLoginModal(state) { state.isShowLoginModal = false },
        setWindowWidth(state, width) { state.windowWidth = width }
    },
    actions: { },
    modules: { products, category, cart }
})
