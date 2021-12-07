import Notification from "element-ui/packages/notification/src/main";
import {cartRepository} from "@/app/cart/cart.repository";

class CartService {
    
    async createOrder (requestData) {
        try {
            const data = await cartRepository.createOrder(requestData)
            Notification.success({ title: 'Успех', message: 'Заказ успешно отправлен. Ожидайте звонка оператора' })
            return data
        } catch (error) {
            console.log(error)
            if (error.response.data.message) Notification.error({ title: 'Ошибка', message: error.response.data.message })
            else Notification.error({ title: 'Error', message: 'Заказ не был отправлен' })
            throw error
        }
    }
    
}

export const cartService = new CartService()
