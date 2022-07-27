import { httpService } from './http-service'

const ENDPOINT = 'order'

export const orderService = {
  query,
  saveOrder,
  getEmptyOrder,
}

async function query(filterBy) {
  return await httpService.get(ENDPOINT, filterBy)
}

async function saveOrder(order) {
  return order._id
    ? await httpService.put(`${ENDPOINT}/${order._id}`, order)
    : await httpService.post(ENDPOINT, order)
}

function getEmptyOrder() {
  return Promise.resolve({
    date: Date.now(),
    booker: '',
    imgUrl: '',
    hostId: '',
    stay: '',
    tripDates: '',
    nights: 0,
    guests: 0,
    amount: 0,
    status: 'pending',
  })
}
