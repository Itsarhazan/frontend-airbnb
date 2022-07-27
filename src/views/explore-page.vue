<template>
  <section v-if="stays" class="explore-page stay-app main-layout">
  <app-header v-if="stays" :stays="stays" />
    <stay-filter @setFilter="setFilter" :prices="prices" :stays="stays"/>
    <stay-list :stays="stays" />
  </section>
</template>

<script>
import appHeader from "../components/app-header.vue";
import stayList from "../components/stay-list.vue";
import stayFilter from "../components/stay-filter.vue";
import carousel from "../components/carousel.vue";

export default {
  name: "stay-app",
  data() {
    return {  
    };
  },
  created() {
    if (this.$route.query.destination || this.$route.query.capacity  || this.$route.query.start_date || this.$route.query.end_date) {
      const { destination } = this.$route.query;
      const { capacity } = this.$route.query;
      const { start_date } = this.$route.query;
      const { end_date } = this.$route.query;
      const copyFilter = JSON.parse(
        JSON.stringify(this.$store.getters.getFilterBy)
      );
      copyFilter.city = destination;
      copyFilter.capacity = capacity;
      this.$store.commit({ type: "setFilter", filterBy: copyFilter });
    }
    this.$store.dispatch({ type: "loadStays" });
  },
  computed: {
    stays() {
      return this.$store.getters.stays;
    },
    prices() {
      const prices = this.stays.reduce((acc, stay) => {
        acc.push(stay.price);
        return acc;
      }, []);
      // console.log("prices :>> ", prices);
      return prices;
    },
  },
  methods: {
    setFilter(filterBy) {
      const copyfilter = JSON.parse(JSON.stringify(filterBy));
      this.$store.dispatch({ type: "setFilter", filterBy: copyfilter });
    },
  },
  watch: {
    "$route.params"() {
      if (this.$route.query) {
        const filterBy = {
          propertyType: "",
          city: "",
          price: [0, 595],
          amenities: [],
          WiFi: "",
          capacity: 0,
        };
        this.$store.dispatch({ type: "setFilter", filterBy: filterBy });
      }
      if (this.$route.query.destination || this.$route.query.capacity) {
        const { destination } = this.$route.query;
        const { capacity } = this.$route.query;
        const copyFilter = JSON.parse(
          JSON.stringify(this.$store.getters.getFilterBy)
        );
        copyFilter.city = destination;
        copyFilter.capacity = capacity;
        this.$store.commit({ type: "setFilter", filterBy: copyFilter });
      }
      this.$store.dispatch({ type: "loadStays" });
    },
  },
  components: {
    appHeader,
    stayList,
    stayFilter,
    carousel,
  },
};
</script>


