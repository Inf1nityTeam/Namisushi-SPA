import axios from "axios";


class CategoryRepository {
    
    async getList () {
        const response = await axios.get(`/api/categories`)
        return response.data.categories
    }
    
}

export const categoryRepository = new CategoryRepository()
