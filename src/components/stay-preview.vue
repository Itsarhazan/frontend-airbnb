<template>
  <section>
        <slot></slot>
  </section>
</template>

<script>
import customLabel from './custom-label.vue'

export default {
  name: 'stay-preview',
  props: {
    stay: Object,
  },
  components: {
    customLabel,
  },
}
</script>

