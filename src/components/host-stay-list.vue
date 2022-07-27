<template>
  <section v-if="stays" class="host-stay-list">
    <tr v-for="stay in stays" :key="stay.name">
      <host-stay-preview :stay="stay" v-if="stay" />
    </tr>
  </section>
</template>
<script>
import hostStayPreview from "./host-stay-preview.vue";
export default {
  props: {
    stays: Array,
  },
  components: {
    hostStayPreview
  },
};
</script>