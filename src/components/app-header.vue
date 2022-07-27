<template>
  <section class="app-header" :class="headerStyles">
    <div class="app-header-container flex space-between">
      <div class="logo-container">
        <router-link to="/">
          <img
            v-if="pagePos || stays || stay || orders"
            class="logo-svg"
            :src="getImage('logo-pink.png')"
          />
          <img v-else class="logo-svg" :src="getImage('logo-white.png')" />
        </router-link>
      </div>

      <button
        v-if="(stay && !isFullHeader) || (pagePos && !isFullHeader)"
        @click="openFilter"
        class="mini-filter flex space-between align-center"
      >
        <p>{{ searchTitle }}</p>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="32"
            fill="#ffffff"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </span>
      </button>

      <div class="main-nav-container">
        <nav class="main-nav flex align-center">
          <router-link to="/explore">Explore</router-link>
          <router-link to="/dashboard">Become a Host</router-link>

          <Popper>
            <div class="notification-icon">
              <svg
                v-if="pagePos || stays || stay || orders"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#222222"
                class="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ffffff"
                class="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
                />
              </svg>
            </div>
            <template #content>
              <div class="notifications-modal">
                <h2>Notifications</h2>
                <div class="no-notifications">
                  <div class="separator"></div>
                  <div>You have no new notifications</div>
                </div>
              </div>
            </template>
          </Popper>

          <Popper>
            <button class="user-menu">
              <div class="btn-svg flex align-center space-evenly">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#222222"
                  class="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>

                <svg v-if="!user"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#5d5d5d"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
                <img v-else :src="user.imgUrl" />
              </div>
            </button>
            <template #content>
              <div v-if="!user" class="user-nav flex flex-column">
                <a href="#/login">Log in</a>
                <hr />
                <a href="#/dashboard">Host your home</a>
                <hr />
                <a href="#/about">About</a>
              </div>
              <div v-else class="user-nav flex flex-column">
                <a v-if="user.isHost" href="#/dashboard">Dashboard</a>
                <a v-else href="#/dashboard">Trips</a>
                <hr />
                <a href="#/about">About</a>
                <hr />
                <a>Logout</a>
              </div>
            </template>
          </Popper>
        </nav>
      </div>
    </div>
    <app-filter v-if="(!pagePos && !stay && !orders) || isFullHeader"/>
  </section>
</template>
<script>
import appFilter from "./app-filter.vue";
import Popper from "vue3-popper";
export default {
  props: {
    stays: Array,
    stay: Object,
    orders: Array,
  },
  data() {
    return {
      city: null,
      dates: [],
      isScroll: false,
      isFullHeader: false,
      pagePos: null,
    };
  },
  created() {
    this.isScroll = false;
    window.addEventListener("scroll", this.scrollToggle);
    if (this.$route.query.destination) {
        const { destination } = this.$route.query;
        this.city = destination;
      }
    if (this.$route.query.start_date && this.$route.query.end_date) {
        const { start_date} = this.$route.query;
        const { end_date} = this.$route.query;
        this.dates = [ start_date , end_date ]
      }
  },
  components: {
    appFilter,
    Popper,
  },
  methods: {
    scrollToggle() {
      this.isScroll = true;
      this.pagePos = window.scrollY;
      this.isFullHeader = false;
    },
    openFilter() {
      this.isFullHeader = true;
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    headerStyles() {
      return {
        "full-header": this.isFullHeader && !this.orders || !this.pagePos && !this.orders ,
        top: !this.pagePos,
        "explore-page": this.stays,
        details: this.stay || this.orders,
        "main-layout": !this.stay && !this.orders, 
        "details-layout": this.stay,
        "orders-layout": this.orders
      };
    },
    getImage() {
      return (path) =>
        new URL(`../assets/${path}`, import.meta.url).href;
    },
    searchTitle() {
      if (this.city) return this.city;
      else return "Start your Search";
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToggle);
  },
}
</script>
<style></style>
