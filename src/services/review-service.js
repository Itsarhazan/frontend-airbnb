import { httpService } from './http-service'

const ENDPOINT = 'review'

export const reviewService = {
  query,
  addReview,
  removeReview,
  getEmptyReview,
}

async function query(filterBy) {
  return await httpService.get(ENDPOINT, filterBy)
}

async function addReview(review) {
  return await httpService.post(ENDPOINT, review)
}

async function removeReview(reviewId) {
  return await httpService.delete(`${ENDPOINT}/${reviewId}`, reviewId)
}

function getEmptyReview() {
  return Promise.resolve({
    userId: '',
    stayId: '',
    content: '',
    rate: 0,
  })
}
