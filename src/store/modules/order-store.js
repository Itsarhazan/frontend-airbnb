import { orderService } from '../../services/order-service'

export default {
    state: {
        orders: null,
    },
    getters: {
        orders(state) {
            return state.orders
        },
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders
        },
        saveOrder(state, { order }) {
            const idx = state.orders.findIndex((o) => o._id === order._id)
            if (idx !== -1) state.orders.splice(idx, 1, order)
            else state.orders.unshift(order)
        },
    },
    actions: {
        async getOrders({ commit }, { filterBy }) {
            try {
                const orders = await orderService.query(filterBy)
                commit({ type: 'setOrders', orders })
                console.log('orders from Store:', orders);
                return orders
            } catch (err) {
                console.log('err :>> ', err)
            }
        },
        async saveOrder({ commit }, { order }) {
            console.log('saving order...');
            try {
                const savedOrder = await orderService.saveOrder(order)
                commit({ type: 'saveOrder', order: savedOrder })
            } catch (err) {
                console.log('err :>> ', err)
            }
        },
    },
}