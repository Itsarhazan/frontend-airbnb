<template>
  <section class="carousel">
    <div class="block">
      <span class="demonstration"></span>
      <el-carousel :autoplay="false" :interval="600000" height="262px">
        <el-carousel-item v-for="item in stay.imgUrls" :key="item">
          <img class="stay-img" :src="getImage(item)" />
       
        </el-carousel-item>
      </el-carousel>
    </div>
  </section>
</template>

 
<script>
// import { computed } from "@vue/runtime-core";
export default {
  name: "carousel",
  props: {
    stay: Object,
  },
  computed: {
    getImage() {
      return (path) => new URL(`../assets/Images/${path}`, import.meta.url).href
    }
  }
};
</script>

