<template>
  <router-view/>
  <app-footer/>
</template>

<script>
// import appHeader from "./components/app-header.vue";
import appFooter from "./components/app-footer.vue";

export default {
  name: "app",
  components: {
    // appHeader,
    appFooter
  },
};
</script>
