import axios from "axios";

class ProductRepository {

    async getList(categoryId) {
        const response = await axios.get(`/api/products`,
            { params: { category: categoryId } })
        return response.data
    }
    
}

export const productRepository = new ProductRepository()
