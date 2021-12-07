import axios from "axios";

class CartRepository {

    async createOrder(requestData) {
        const response = axios.post(`/api/order`, requestData)
        return response.data
    }
    
}

export const cartRepository = new CartRepository()
