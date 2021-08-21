import store from "@/config/store";
import {productRepository} from "@/app/product/product.repository";

class ProductService {
    
    async getList (categoryId) {
        try {
            const data = await productRepository.getList(categoryId)
            store.commit('pushArrToProductsList', {
                categoryId: categoryId,
                array: data.products
            })
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    
}

export const productService = new ProductService()
