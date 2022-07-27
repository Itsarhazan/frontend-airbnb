<template>
  <app-header />
  <section class="home-page main-layout" @scroll="checkScroll">
    <section class="main-hero main-layout full">
      <h1>Let your curiosity do the booking</h1>
      <button @click="goToExplore()"><h3>Explore</h3></button>
    </section>

    <h1 class="gallery-title">Popular Destinations</h1>
    <div class="home-page-gallery">
      <article class="dest-card" v-for="(city, idx) in cities" :key="city">
        <img
          :src="getImageJpg(idx + 1)"
          @click="goToExploreCity(city)"
        />
        <h3>{{ city }}</h3>
      </article>
    </div>

    <h1 class="gallery-title">Top Rated</h1>
    <div class="home-page-gallery">
      <article class="top-rated-card" v-for="stay in topStays" :key="stay._id">
        <custom-card @click="goToStay(stay._id)">
          <template #default>
            <img :src="getImage(stay.imgUrls[0])" />
          </template>

          <template #footer>
            <div class="stay-name">
              <h3>{{ stay.name }}, {{ stay.address.country }}</h3>
            </div>
          </template>
        </custom-card>
      </article>
    </div>

    <section class="host-container full">
      <div class="host-cta">
        <h1>Become a host!</h1>
        <button @click="goToHost()">Learn more</button>
      </div>
    </section>
  </section>
</template>

<script>
import customCard from "../components/custom-card.vue";
import appHeader from "../components/app-header.vue";

export default {
  name: "home-page",
  data() {
    return {
      cities: ["Barcelona", "New York", "Hong Kong", "Sydney"],
    };
  },
  created() {
    this.$store.dispatch({ type: "loadStays" });
  },
  computed: {
    stays() {
      return this.$store.getters.staysToShow;
    },
    topStays() {      
      if (!this.stays) return;
      const topStays = this.stays.sort((s1, s2) => {
        return s2.reviewScores.rating - s1.reviewScores.rating;
      });
      return topStays.slice(0, 4);
    },
    getImageJpg() {
      return (imgName) => new URL(`../assets/Images/${imgName}.jpg`, import.meta.url).href
    },
    getImage() {
      return (imgName) => new URL(`../assets/Images/${imgName}`, import.meta.url).href
    }
  },
  methods: {
    goToStay(stayId) {
      this.$router.push(`/stay/${stayId}`);
    },
    goToExploreCity(city) {
      this.$router.push(`/explore?${new URLSearchParams({ destination: city }).toString()}`)
    },
    goToExplore() {
      let copyFilter = JSON.parse(JSON.stringify(this.$store.getters.getFilterBy))
      copyFilter = { propertyType: '', city: '', price: [0, 3000], amenities: [], WiFi: '' }
      this.$store.commit({ type: 'setFilter', filterBy: copyFilter })
      this.$router.push(`/explore`)
    },
    goToHost() {
      this.$router.push("/host");
    },
  },
  components: {
    customCard,
    appHeader,
  },
};
</script>

<style></style>
