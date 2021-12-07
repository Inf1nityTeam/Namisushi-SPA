const state = () => ({
    list: []
})

const mutations = {
    pushArrToProductsList (state, data) {
        data.array.forEach(item => {
            item.categoryId = data.categoryId
            state.list.push(item)
        })
    }
}

export default { state, mutations }
