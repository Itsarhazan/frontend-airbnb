import { reviewService } from '../../services/review-service'

export default {
  state: {
    reviews: null,
  },
  getters: {
    reviews(state) {
      return state.reviews
    },
  },
  mutations: {
    setReviews(state, { reviews }) {
      state.reviews = reviews
    },
    addReview(state, { review }) {
      state.reviews.push(review)
    },
    removeReview(state, { reviewId }) {
      const idx = state.reviews.findIndex((review) => review._id === reviewId)
      state.reviews.splice(idx, 1)
    },
  },
  actions: {
    async getReviews({ commit }, { filterBy }) {
      try {
        const reviews = await reviewService.query(filterBy)
        commit({ type: 'setReviews', reviews })
        return reviews
      } catch (err) {
        console.log('err :>> ', err)
      }
    },
    async addReview({ commit }, { review }) {
      try {
        const addedReview = await reviewService.addReview(review)
        commit({ type: 'addReview', review: addedReview })
      } catch (err) {
        console.log('err :>> ', err)
      }
    },
    async removeReview({ commit }, { reviewId }) {
      try {
        await reviewService.removeReview(reviewId)
        commit({ type: 'removeReview', reviewId })
      } catch (err) {
        console.log('err :>> ', err)
      }
    },
  },
}
