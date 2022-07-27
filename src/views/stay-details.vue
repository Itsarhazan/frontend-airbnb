
<template>
  <app-header :stay="stay" />
  <section v-if="stay" class="stay-details details-layout">
    <stay-preview :stay="stay">
      <section class="main-details">
        <div class="titles-details">
          <h1>{{ stay.name }}</h1>
          <div>
            <span class="star">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#E01661"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </span>
            <span class="title-rate">{{ rating }}</span> •
            <span class="title-num-reviews"
              >{{ stay.numOfReviews }} reviews
            </span>
            •
            <span class="title-address">{{ stay.address.street }}</span>
          </div>
        </div>
        <div class="gallery-details">
          <img class="center-img" :src="getImage(stay.imgUrls[0])" />
          <img class="side-img1" :src="getImage(stay.imgUrls[1])" />
          <img class="side-img2" :src="getImage(stay.imgUrls[2])" />
          <img class="side-img3" :src="getImage(stay.imgUrls[3])" />
          <img class="side-img4" :src="getImage(stay.imgUrls[4])" />
        </div>

        <section class="details-flex-form flex space-between">
          <section class="host-form">
            <div class="host-details">
              <div class="host-title">
                <h2>{{ stay.roomType }} by {{ stay.host.fullname }}</h2>
                <span>
                  {{ stay.capacity }} guests • {{ stay.bedrooms }} bedroom •
                  {{ stay.beds }} bed • {{ stay.bathrooms }} bath
                </span>
              </div>
              <img class="img-host" :src="`${stay.host.pictureUrl}`" />
            </div>
            <hr />
            <div class="info-check">
              <section>
                <img src="../assets/Icons/Location.png" />
                <div>
                  <h4>Great location</h4>
                  <p>100% of recent guests gave the location a 5-star rating</p>
                </div>
              </section>
              <section>
                <img src="../assets/Icons/House-key.png" />
                <div>
                  <h4>Great check-in experience</h4>
                  <p>
                    90% of recent guests gave the check-in process a 5-star
                    rating
                  </p>
                </div>
              </section>
              <section>
                <img src="../assets/Icons/Pool.png" />
                <div>
                  <h4>Pool</h4>
                  <p>Guests often search for this popular amenity</p>
                </div>
              </section>
            </div>
            <hr />
            <div class="stay-disc">
              <h3>Info:</h3>
              <p>
                {{ stay.summary }}
              </p>
            </div>

            <hr />
            <h2 class="title-amenities">What this place offers</h2>
            <section class="amenities-details">
              <div class="amenities-side">
                <div
                  class="amenities-details-left"
                  v-for="amenitie in stay.amenities.slice(0, 5)"
                  :key="amenitie"
                >
                  <img :src="getIcon(amenitie)" alt="" />
                  <span> {{ amenitie }}</span>
                </div>
              </div>
              <div class="amenities-side">
                <div
                  class="amenities-details-right"
                  v-for="amenitie in stay.amenities.slice(5, 10)"
                  :key="amenitie"
                >
                  <img :src="getIcon(amenitie)" alt="" />
                  <span> {{ amenitie }}</span>
                </div>
              </div>
            </section>
          </section>
          <nav>
            <stay-form :stay="stay" @setOrder="setOrder" />
          </nav>
        </section>

        <hr class="long-hr" />
        <section class="rating-Categories">
          <div class="title-reviews">
            <h3>
              <span class="star">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#E01661"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  />
                </svg>
              </span>
              <span class="rating-reviews" :rating="rating">{{ rating }}</span>
              • {{ stay.numOfReviews }} reviews
            </h3>
          </div>
          <section class="slider-rate">
            <div class="left-side-rating">
              <div>
                <div>Cleanliness</div>
                <div>Communication</div>
                <div>Check-in</div>
              </div>
              <div class="slider-left">
                <div class="slider flex">
                  <vue3-slider
                    class="slider1"
                    v-model="stay.reviewScores.cleanliness"
                    color="#fffff"
                    track-color="#000000"
                  />
                  <span>{{ ratingReview }}</span>
                </div>
                <div class="slider flex">
                  <vue3-slider
                    class="slider2"
                    v-model="stay.reviewScores.communication"
                    color="#fffff"
                    track-color="#000000"
                  />
                  <span>{{ ratingReview }}</span>
                </div>
                <div class="slider flex">
                  <vue3-slider
                    class="slider3"
                    v-model="stay.reviewScores.checkin"
                    color="#fffff"
                    track-color="#000000"
                    position="static"
                  />
                  <span>{{ ratingReview }}</span>
                </div>
              </div>
            </div>
            <div class="right-side-rating">
              <div>
                <div>Accuracy</div>
                <div>Location</div>
                <div>Value</div>
              </div>
              <div class="slider-right">
                <div class="slider flex">
                  <vue3-slider
                    class="slider4"
                    v-model="stay.reviewScores.accuracy"
                    color="#fffff"
                    track-color="#000000"
                  />
                  <span>{{ ratingReview }}</span>
                </div>
                <div class="slider flex">
                  <vue3-slider
                    class="slider5"
                    v-model="stay.reviewScores.location"
                    color="#fffff"
                    track-color="#000000"
                  />
                  <span>{{ ratingReview }}</span>
                </div>
                <div class="slider flex">
                  <vue3-slider
                    class="slider6"
                    v-model="stay.reviewScores.value"
                    color="#fffff"
                    track-color="#000000"
                  />
                  <span>{{ ratingReview }}</span>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section class="list-reviews">
          <article v-for="review in stay.reviews.slice(0, 6)" :key="review._id">
            <img class="img-user-review" :src="`${review.by.imgUrl}`" />
            <div>
              <h4>{{ review.by.fullname }}</h4>
              <p class="date-review">{{ review.at.slice(0, 10) }}</p>
            </div>
            <p class="content-review">{{ review.txt.slice(0, 150) }}</p>
          </article>
        </section>
        <button class="btn-show-more">
          show all <span> {{ stay.reviews.length }}</span> reviews
        </button>
      </section>
    </stay-preview>
    <hr />
    <stay-maps :stay="stay" />
  </section>
</template>

<script>
import appHeader from "../components/app-header.vue";
import { stayService } from "../services/stay-service";
import { reviewService } from "../services/review-service";
import { orderService } from "../services/order-service";
import stayPreview from "../components/stay-preview.vue";
import stayForm from "../components/stay-form.vue";
import stayMaps from "../components/stay-maps.vue";
import slider from "vue3-slider";

// import stayReview from './stay-review.vue'
export default {
  components: {
    appHeader,
    stayPreview,
    stayForm,
    stayMaps,
    "vue3-slider": slider,
    //   stayReview
  },
  name: "stay-details",
  // props: {
  //   stay: Object,
  // },
  data() {
    return {
      stay: null,
      reviewToAdd: null,
      myNumber: 10,
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.stay = await stayService.getById(id);
    const user = this.$store.getters.user;

    // review-store
    await this.$store.dispatch({
      type: "getReviews",
      filterBy: { stayId: this.stay._id },
    });

    if (user) {
      this.reviewToAdd = await reviewService.getEmptyReview();
      this.reviewToAdd.userId = user._id;
      this.reviewToAdd.stayId = this.stay._id;
    }

    if (user) {
      this.orderToAdd = await orderService.getEmptyOrder();
      this.orderToAdd.booker = user.username;
      this.orderToAdd.imgUrl = user.imgUrl;
      this.orderToAdd.hostId = this.stay.host._id;
      this.orderToAdd.stay = this.stay.name;
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    reviews() {
      return this.$store.getters.reviews;
    },
    getIcon() {
      return (amenitie) =>
        new URL(`../assets/Icons/${amenitie}.png`, import.meta.url).href;
    },
    rating() {
      return (this.stay.reviewScores.rating / 20).toFixed(2);
    },
    ratingReview() {
      return this.stay.reviewScores.rating / 20;
    },
    getImage() {
      return (img) => new URL(`../assets/Images/${img}`, import.meta.url).href;
    },
  },
  methods: {
    setOrder(form) {
      const copyForm = JSON.parse(JSON.stringify(form))
      // this.orderToAdd.tripDates = copyForm.order.range;
      this.orderToAdd.tripDates = '05/01/22-05/04/22';
      this.orderToAdd.nights = copyForm.order.numOfNights;
      this.orderToAdd.guests = copyForm.guests;

      this.$store.dispatch({
        type: "saveOrder",
        order: this.orderToAdd,
      });
    },
    async addReview() {
      if (!this.reviewToAdd.content) return;
      await this.$store.dispatch({
        type: "addReview",
        review: this.reviewToAdd,
      });
      await this.$store.dispatch({
        type: "getReviews",
        filterBy: { toyId: this.toy._id },
      });
    },
    async removeReview(reviewId) {
      await this.$store.dispatch({ type: "removeReview", reviewId });
      await this.$store.dispatch({
        type: "getReviews",
        filterBy: { toyId: this.toy._id },
      });
    },
  },
};
</script>
<style>
.vue3-slider {
  margin: 3px 0;
  position: static;
  cursor: pointer;
  font-family: inherit;
}
</style>