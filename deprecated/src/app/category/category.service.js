import {categoryRepository} from "@/app/category/category.repository";
import store from "@/config/store";


class CategoryService {
    
    async getList() {
        try {
            const data = await categoryRepository.getList()
            store.commit('setListCategories', data)
            return data
        } catch (error) {
            console.log(error)
            throw error
        }
    }
    
}

export const categoryService = new CategoryService()
