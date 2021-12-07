const state = () => ({
    list: []
})

const mutations = {
    setListCategories (state, data) {
        state.list.push(...data)
    }
}

export default { state, mutations }
