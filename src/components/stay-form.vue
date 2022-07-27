<template>
  <section class="stay-form">
    <section :class="formForDisplay">
      <section class="form-header-small header-details-layout">
        <div class="titles-small">
          <a>Photos</a>
          <a>Amenities</a>
          <a>Reviews</a>
          <a href="">Location</a>
        </div>
        <nav>
          <div v-if="isSeen" class="form-container-small">
            <div class="form-title-small">
              <div class="form-price-small">
                <h3>{{ $filters.currencyUSD(stay.price) }}</h3>
                <span class="word-night-small"> / night</span>
              </div>
              <div class="form-header-rate-small">
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
                <span class="rate-form-small">{{ rating }} </span> •
                <span class="reviews-form-small"
                  >{{ stay.numOfReviews }} reviews
                </span>
              </div>
            </div>
            <button class="btn-form-reserve-small" @click="goToOrder(stay._id)">
              Check availability
            </button>
          </div>
        </nav>
      </section>
    </section>
    <section class="form-main">
      <div class="form-header">
        <div class="form-price">
          <h2>{{ $filters.currencyUSD(stay.price) }}</h2>
          <span class="word-night"> / night</span>
        </div>
        <nav class="form-header-rate">
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
          <span class="rate-form">{{ rating }} </span> •
          <span class="reviews-form">{{ stay.numOfReviews }} reviews </span>
        </nav>
      </div>

      <section class="form-container">
        <section class="form-date-picker">
          <v-date-picker v-model="form.order.range" color="gray" is-range>
            <template v-slot="{ inputValue, inputEvents }">
              <div class="flex">
                <label class="label1">
                  CHECK-IN
                  <input
                    :value="inputValue.start"
                    v-on="inputEvents.start"
                    class="
                      input1
                      border
                      px-2
                      py-1
                      w-32
                      rounded
                      focus:outline-none focus:border-indigo-300
                    "
                    placeholder="Add date"
                  />
                </label>
                <label class="label2">
                  CHECK-OUT
                  <input
                    :value="inputValue.end"
                    v-on="inputEvents.end"
                    class="
                      input2
                      border
                      px-2
                      py-1
                      w-32
                      rounded
                      focus:outline-none focus:border-indigo-300
                    "
                    placeholder="Add date"
                  />
                </label>
              </div>
            </template>
          </v-date-picker>
        </section>

        <Popper>
          <div class="guest-container">
            <div class="flex">
              <label>
                GUESTS
                <input type="text" :placeholder="addGuests" disabled />
              </label>
            </div>
          </div>
          <template #content>
            <div class="guests-modal flex flex-column">
              <div class="guest-type-label flex space-between align-center">
                <div class="guest-label flex flex-column">
                  <h3 class="type-guest">Adults</h3>
                  <p class="age-guest">Ages 13+</p>
                </div>
                <div class="guest-btns flex align-center space-between">
                  <button
                    class="btn-minus"
                    :class="disableAdultBtn"
                    @click="countAdults(-1)"
                  >
                    <span class="material-icons-sharp"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dash"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                        /></svg
                    ></span>
                  </button>
                  <span class="guests-num">{{ adultCount }}</span>
                  <button class="guest-btn btn-plus" @click="countAdults(1)">
                    <span class="material-icons-sharp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#222222"
                        class="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div class="guest-type-label flex space-between align-center">
                <div class="guest-label flex flex-column">
                  <h3 class="type-guest">Children</h3>
                  <p class="age-guest">Ages 2-12</p>
                </div>
                <div class="guest-btns flex align-center space-between">
                  <button
                    class="btn-minus"
                    :class="disableKidBtn"
                    @click="countKids(-1)"
                  >
                    <span class="material-icons-sharp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dash"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                        />
                      </svg>
                    </span>
                  </button>
                  <span class="guests-num">{{ kidCount }}</span>
                  <button class="guest-btn btn-plus" @click="countKids(1)">
                    <span class="material-icons-sharp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#222222"
                        class="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </template>
        </Popper>

        <button
          v-if="isClicked"
          @click="isClicked = !isClicked"
          class="btn-form-reserve"
        >
          {{ "Check availability" }}
        </button>

        <button v-else @click="goToOrder(stay._id)" class="btn-form-reserve">
          {{ "Reserve" }}
        </button>

        <div v-if="!isClicked" class="total-price-order">
          <div class="msg-charged">You won't be charged yet</div>
          <div class="type-price">
            <div class="type-pay">
              {{ stay.price }} x {{ numberOfNights }} nights
            </div>
            <span class="price"> {{ $filters.currencyUSD(totalPrice) }}</span>
          </div>
          <div class="type-price">
            <div class="type-pay">Cleaning fee</div>
            <span class="price">{{ $filters.currencyUSD(150) }}</span>
          </div>
          <div class="type-price">
            <div class="type-pay">Service fee</div>
            <span class="price">{{ $filters.currencyUSD(200) }}</span>
          </div>
          <hr />
          <div class="type-price">
            <div class="pay-total">Total</div>
            <span class="price-total">{{
              $filters.currencyUSD(totalPay)
            }}</span>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>


<script>
import Popper from "vue3-popper";

export default {
  props: {
    stay: {},
  },
  components: {
    Popper,
  },
  data() {
    return {
      form: {
        dates: [],
        guests: 1,
        order: {
          range: {
            start: "",
            end: "",
            numOfNights: 0,
          },
        },
      },
      adults: 1,
      kids: 0,
      isScroll: false,
      pagePos: null,
      isClicked: true,
      isSeen: false,
    };
  },
  created() {
    this.isScroll = false;
    window.addEventListener("scroll", this.scrollToggle);
  },
  mounted() {
    let observer = new IntersectionObserver((entries) => {
      this.isSeen = entries[0].isIntersecting ? false : true;
    });

    observer.observe(document.querySelector(".form-main"));
  },

  methods: {
    scrollToggle() {
      this.isScroll = true;
      this.pagePos = window.scrollY;
      // console.log(this.pagePos);
    },

    countAdults(diff) {
      if (!this.adults && diff < 0) return;
      this.form.guests += diff;
      this.adults += diff;
    },
    countKids(diff) {
      if (!this.kids && diff < 0) return;
      this.form.guests += diff;
      this.kids += diff;
    },
    goToOrder(id) {
      // this.$emit("set-order", { ...this.form });
      this.$router.push("/order/" + id);
    },
  },
  computed: {
    rating() {
      return (this.stay.reviewScores.rating / 20).toFixed(2);
    },
    adultCount() {
      return this.adults;
    },
    kidCount() {
      return this.kids;
    },
    disableAdultBtn() {
      return { "disabled-btn": !this.adults || this.adults === 1 };
    },
    disableKidBtn() {
      return { "disabled-btn": !this.kids };
    },
    addGuests() {
      return this.form.guests + " guests";
    },
    formForDisplay() {
      return {
        "hide-form-header-small": !this.pagePos,
      };
    },
    numberOfNights() {
      let dayStart = this.form.order.range.start;
      let dayEnd = this.form.order.range.end;
      this.form.order.numOfNights = dayEnd.getDate() - dayStart.getDate();
      return this.form.order.numOfNights;
    },
    totalPrice() {
      return new Intl.NumberFormat("en-US").format(
        this.stay.price * this.form.order.numOfNights
      );
    },
    totalPay() {
      return new Intl.NumberFormat("en-US").format(
        this.stay.price * this.form.order.numOfNights + 150 + 200
      );
    },
  },
};
</script>
<style>
</style>
