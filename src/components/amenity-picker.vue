<template>
  <span class="amenity-picker">
    <button
      class="explore-btn"
      v-for="amenity in dataset"
      :key="amenity.value"
      :value="amenity.value"
      @click="toggleAmenity(amenity)"
      :class="{active: amenity.isActive}"
    >
      {{ amenity.value }}
    </button>
  </span>
</template>

<script>
export default {
  name: "amenity-picker",
  data() {
    return {
      isClicked: false,
      amenities: [],
      dataset: [
        {value: 'Internet', isActive: false},
        {value: 'TV', isActive: false},
        {value: 'Kitchen', isActive: false},
        {value: 'Air conditioning', isActive: false},
        {value: 'Iron', isActive: false},
        {value: 'Pool', isActive: false},
      ]
    };
  },

  methods: {
    toggleAmenity(amenity) {
     amenity.isActive = !amenity.isActive
      if (this.amenities.includes(amenity.value)) {
        const idx = this.amenities.findIndex((a) => a.value === amenity.value);
        this.amenities.splice(idx, 1);
      } else {
        this.amenities.push(amenity.value);
      }
      this.$emit("update:modelValue", this.amenities);
      this.$emit("setFilter");
    },
  },
  
};
</script>

