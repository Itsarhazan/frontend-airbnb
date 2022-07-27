<template>
  <app-header :stay="stay" />
  <section v-if="stay" class="order-details details-layout">
    <section class="order-details-container flex space-between">
      <div class="order-date-guest">
        <div class="order-title flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="green"
            class="bi bi-check-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
            />
          </svg>
          <h1>Reserved successfully!</h1>
        </div>
        <div class="rare-stay">
          <h4>This is a rare find.</h4>
          <p>{{ stay.host.fullname }}'s place is usually booked</p>
        </div>
        <div class="dates-order-container flex flex-column space-between">
          <h2>Your trip</h2>
          <div class="dates-order">
            <div>
              <h3>Dates:</h3>
              <span>May 1 – 4</span>
            </div>
            <router-link class="btn-edit" to="/">Edit</router-link>
          </div>
          <div class="guests-order">
            <div>
              <h3>Guests:</h3>
              <span>2 guest</span>
            </div>
            <router-link class="btn-edit" to="/">Edit</router-link>
          </div>
        </div>
        <hr />
        <div class="payment-logos-container flex space-between align-center">
          <img
            class="payment-logo"
            src="https://res.cloudinary.com/lanzi/image/upload/v1648985077/visa_uzipid.png"
          />
          <img
            class="payment-logo"
            src="https://res.cloudinary.com/lanzi/image/upload/v1648999379/masterCard_icgvum.png"
          />
          <img
            class="payment-logo"
            src="https://res.cloudinary.com/lanzi/image/upload/v1648985726/AE_barp6g.png"
          />
          <img
            class="payment-logo"
            src="https://res.cloudinary.com/lanzi/image/upload/v1649000954/1614983543481-Isracard_x9ktns.png"
          />
          <img
            class="payment-logo"
            src="https://res.cloudinary.com/lanzi/image/upload/v1649000671/cal_ciiy9m.png"
          />
        </div>
      </div>

      <div class="total-price-order">
        <div class="order-img-rate flex">
          <img :src="getImage(stay.imgUrls[0])" />
          <div class="order-rate-container flex flex-column space-between">
            <div class="order-rate">
              <small>{{ stay.roomType }}</small>
              <p class="stay-name">{{ stay.name }}</p>
            </div>
          </div>
        </div>
        <h2>Price Details</h2>
        <div class="type-price">
          <div class="type-pay">
            {{ $filters.currencyUSD(this.stay.price) }} x 3 nights
          </div>
          <span class="price">{{ $filters.currencyUSD(totalPrice) }}</span>
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
          <span class="price-total">{{ $filters.currencyUSD(totalPay) }}</span>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { stayService } from "../services/stay-service";
import appHeader from "../components/app-header.vue";

export default {
  name: "order-details",
  data() {
    return {
      stay: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.stay = await stayService.getById(id);
    const user = this.$store.getters.user;

  },
  computed: {
    totalPrice() {
      return this.stay.price * 3;
    },
    totalPay() {
      return new Intl.NumberFormat("en-US").format(
        this.stay.price * 3 + 150 + 200
      );
    },
    getImage() {
      return (img) => new URL(`../assets/Images/${img}`, import.meta.url).href;
    },
  },
  components: {
    appHeader,
  },
};
</script>