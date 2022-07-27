<template>
  <app-header :orders="orders" />
  <section class="dashboard-page orders-layout">
    <section class="dashboard-container">
      <div class="main-container flex flex-column">
        <section class="dash-header flex space-between">
          <div class="dash-nav flex flex-column space-evenly">
            <button @click="openStays">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-house-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
              My Stays
            </button>
            <button @click="openOrders">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-list-ul"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
              </svg>
              My Orders
            </button>
          </div>
          <div class="stats-container flex space-between">
            <div class="dash-stat">
              <h3>Total Rate</h3>
              <div class="rates-data flex flex-column space-between">
                <div>
                  <span class="flex align-center">
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
                    4.65</span
                  >
                </div>
              </div>
            </div>
            <div class="dash-stat">
              <h3>Total Reviews</h3>
              <span class="total-review">112<small> reviews</small></span>
            </div>
            <div class="dash-stat">
              <h3>Total Revenues</h3>
              <span class="total-revenue">{{ $filters.currencyUSD(new Intl.NumberFormat("en-US").format(revenueSum)) }}</span>
            </div>
            <div class="dash-stat">
              <h3>Total orders</h3>
              <span>{{ orderCount }}<small> orders</small></span>
            </div>
            <div class="dash-stat">
              <h3>Total guests</h3>
              <span>{{ guestSum }}<small> guests</small></span>
            </div>
          </div>
        </section>
        <section class="info-container">
          <section v-if="!isOpen" class="order-list">
            <div class="order-table">
              <div class="thead">
                <div class="thead-container gray-box-shadow">
                  <span class="guest-title">Guest</span>
                  <span class="stay-title">Place</span>
                  <span class="dates-title">Trip Dates</span>
                  <span>Nights</span>
                  <span>Guests</span>
                  <span>Amount</span>
                  <span class="status-title">Status</span>
                </div>
              </div>
            </div>
            <div class="tbody">
              <order-list :orders="orders" :updateOrder="updateOrder"/>
            </div>
          </section>
          <section v-else class="host-stay-list">
            <div class="stay-table">
              <div class="thead">
                <div class="thead-container gray-box-shadow">
                  <span>Name</span><span>Price per night</span>
                  <span>Address</span>
                  <span class="stay-actions">Actions</span>
                </div>
              </div>
              <div class="tbody">
                <host-stay-list :stays="hostStays" />
              </div>
            </div>
          </section>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
import appHeader from "../components/app-header.vue";
import orderList from "../components/order-list.vue";
import hostStayList from "../components/host-stay-list.vue";

export default {
  name: "dashboard",
  data() {
    return {
      isOpen: false,
      hostStays: [],
    };
  },
  created() {
    this.$store.dispatch({ type: "getOrders" });
    console.log('this.orders:', this.orders);
    
  },
  methods: {
    openStays() {
      this.isOpen = true;
    },
    openOrders() {
      this.isOpen = false;
    },
    updateOrder(order) {
      this.$store.dispatch({ type: "saveOrder" , order  })
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    orders() {
      return this.$store.getters.orders;
    },
    revenueSum() {
      const revenue = this.orders.reduce((acc, order) => {
        acc += order.amount;
        return acc;
      }, 0);
      return revenue;
    },
    orderCount() {
      const orders = this.orders.reduce((acc, order) => {
        if (order.status === 'approved') acc++;
        return acc;
      }, 0);
      return orders;
    },
    guestSum() {
      const guests = this.orders.reduce((acc, order) => {
        acc += order.guests;
        return acc;
      }, 0);
      return guests;
    },
  },
  components: {
    appHeader,
    orderList,
    hostStayList,
  },
};
</script>

