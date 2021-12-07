import store from "@/config/store";
import {productRepository} from "@/app/product/product.repository";
import {categoryService} from "@/app/category/category.service";

class ProductService {
    
    async getAll() {
        try {
            const categories = await categoryService.getList()
            const promises = []
            categories.forEach(category => {
                promises.push(this.getList(category._id))
            })
            return await Promise.all(promises)
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    
    async getList (categoryId) {
        try {
            const data = await productRepository.getList(categoryId)
            store.commit('pushArrToProductsList', {
                categoryId: categoryId,
                array: data.products
            })
            return data
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    
}

export const productService = new ProductService()
