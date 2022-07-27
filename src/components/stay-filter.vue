<template>
  <section v-if="filterBy" class="stay-filter flex">
    <button @click="isPriceOpen = !isPriceOpen" class="explore-btn">
      <span class="filter-arrow flex align-center">
        Price
        <svg
          :class="isPriceOpen ? 'rotate' : ''"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style="
            display: block;
            fill: none;
            height: 12px;
            width: 12px;
            stroke: currentcolor;
            stroke-width: 5.33333;
            overflow: visible;
          "
        >
          <g fill="none">
            <path
              d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"
            ></path>
          </g>
        </svg>
      </span>
    </button>
    <div class="price-filter-container">
      <div v-if="isPriceOpen" class="slider-demo-block">
        <p class="avg">The average nightly price is {{ priceAvg }}</p>
        <HistogramSlider
          v-model="filterBy.price"
          @change="setFilterPrice"
          primaryColor="rgb(176,176,176)"
          hide-from-to="true"
          barRadius="1"
          :width="400"
          :bar-height="120"
          :data="prices"
        />
        <div class="price-select-container flex align-items space-evenly">
          <div class="price-select">
            <div class="price-label">min price</div>
            <div class="price-change">
              <div class="dollar">$</div>
              <input placeholder="curr" :value="filterBy.price[0]" />
            </div>
          </div>
          <h3>–</h3>
          <div class="price-select">
            <div class="price-label">max price</div>
            <div class="price-change">
              <div class="dollar">$</div>
              <input placeholder="curr" :value="filterBy.price[1]" />
            </div>
          </div>
        </div>
        <div class="price-save flex align-center space-between">
          <button class="clear">Clear</button>
          <button class="save" @click="isPriceOpen = false">Save</button>
        </div>
      </div>
    </div>

    <div class="room-filter-container">
      <button @click="isTypeOpen = !isTypeOpen" class="explore-btn">
        <span class="filter-arrow flex align-center">
          Type of place
          <svg
            :class="isTypeOpen ? 'rotate' : ''"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="
              display: block;
              fill: none;
              height: 12px;
              width: 12px;
              stroke: currentcolor;
              stroke-width: 5.33333;
              overflow: visible;
            "
          >
            <g fill="none">
              <path
                d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"
              ></path>
            </g>
          </svg>
        </span>
      </button>
      <div v-if="isTypeOpen">
        <custom-type-filter
          v-model="filterBy.roomType"
          @setFilter="setFilter"
        />
      </div>
    </div>

    <span class="buffer">|</span>

    <amenity-picker v-model="filterBy.amenities" @setFilter="setFilter" />
  </section>
</template>

<script>
import { utilService } from "../services/util-service";
import customTypeFilter from "./custom-type-filter.vue";
import amenityPicker from "./amenity-picker.vue";

export default {
  components: { customTypeFilter, amenityPicker },
  name: "stay-filter",
  props: {
    prices: Array,
    stays: Array,
  },
  data() {
    return {
      filterBy: null,
      isTypeOpen: false,
      isPriceOpen: false,
      isClicked: false,
    };
  },
  created() {
    this.setFilter = utilService.debounce(this.setFilter, 500);
    this.filterBy = JSON.parse(JSON.stringify(this.$store.getters.getFilterBy));
  },
  methods: {
    setFilter() {
      this.$emit("set-filter", { ...this.filterBy });
    },
    setFilterPrice(ev) {
      this.filterBy.price[0] = ev.from;
      this.filterBy.price[1] = ev.to;
      this.setFilter();
    },
  },
  computed: {
    priceAvg() {
      const pricesSum = this.stays.reduce((acc, stay) => {
        acc += stay.price;
        return acc;
      }, 0);
      // console.log("pricesSum:", pricesSum);
      return (
        "$" +
        new Intl.NumberFormat("en-US").format(pricesSum / this.stays.length)
      );
    },
  },
};
</script>
