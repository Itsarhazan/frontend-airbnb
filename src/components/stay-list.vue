<template>
  <section class="home-cities">
    
        <stay-preview v-for="stay in stays" :key="stay._id" :stay="stay">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="like-stay" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: rgba(0, 0, 0, 0.5); height: 24px; width: 24px; stroke: #fff; stroke-width: 2; overflow: visible;"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
      <article @click="$router.push(`/stay/${stay._id}`)" >
        <div>
          <carousel :stay="stay" />
          <div>
            <span class="star"
              ><svg
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
            <span class="space-star">{{rating(stay)}} </span>
              <!-- {{rating}}  -->
            <span class="num-rew"> ({{ stay.numOfReviews }} reviews)</span>
          </div>
          <span>{{ stay.propertyType }} • {{ stay.address.city }} </span>

          <div>{{ stay.name }}</div>
          <div class="stay-price">
            <span class="bold">{{$filters.currencyUSD(stay.price)}}
</span> / night
          </div>
        </div>
        <div>
          <custom-label
            v-for="label in stay.labels"
            :key="label"
            :label="label"
          />
        </div>
      </article>
    </stay-preview>
  </section>
</template>

<script>
import customLabel from "./custom-label.vue";
import stayPreview from "./stay-preview.vue";
import carousel from "./carousel.vue";
import { computed } from "@vue/runtime-core";
import { rateEmits } from "element-plus";

export default {
  name: "stay-list",
  props: {
    stays: Array,
  },
  components: {
    stayPreview,
    customLabel,
    carousel,
  },

  computed: {
    rating() {
      return (stay) => ((stay.reviewScores.rating) / 20).toFixed(2)
      // console.log(this.stay.reviewScores.rating);
      // return (this.)/20;
    },
  },
};
</script>
