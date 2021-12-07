const state = () => ({
    loading: true,
    phoneNumber: null,
    list: []
})

const mutations = {
    setPhoneNumber(state, phoneNumber) {
        state.phoneNumber = phoneNumber
    },
    pushProductToCart (state, productId) { // id or object ?
        state.list.push({ _id: productId, count: 1 })
    },
    removeProductFromCartByIndex (state, index) {
        state.list.splice(index, 1)
    },
    setCountForProductCartById (state, data) {
        let item = state.list.find(item => item._id === data._id)
        item.count = data.count
    },
    clearCartProducts (state) {
        state.list.splice(0)
    }
}

const actions = {
    removeProductFromCart({state, commit}, id) {
        let index = state.list.findIndex(item => item._id === id)
        if(index !== null && index !== undefined)
            commit('removeProductFromCartByIndex', index)
    }
}

export default { state, mutations, actions }
