<template>
  <div class="type-filter-container">
    <!-- <span>Type of place</span> -->
    <div class="type-filter">
    <!-- <input class="dropdown-input" id="toggle" type="checkbox" checked /> -->
    <div class="type-of-place">
      <label class="container">
        <div class="type">
          <div class="type-header">Entire place</div>
          <div class="type-title">Have a place to yourself</div>
        </div>
        <input type="checkbox" id="entire place" :value="modelValue" @click="changeSection('Entire home/apt')" />
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="type-of-place">
      <label class="container">
        <div class="type">
          <div class="type-header">Private room</div>
          <div class="type-title">
            Have your own room and share some common spaces
          </div>
        </div>
        <input type="checkbox" id="private room" :value="modelValue" @click="changeSection('Private room')" />
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="type-of-place">
      <label class="container">
        <div class="type">
          <div class="type-header">Hotel room</div>
          <div class="type-title">
            Have a private or shared room in a boutique hotel, hostel, and more
          </div>
        </div>
        <input type="checkbox" id="hotel room" :value="modelValue" @click="changeSection('Hotel room')" />
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="type-of-place">
      <label class="container">
        <div class="type">
          <div class="type-header">Shared room</div>
          <div class="type-title">
            Stay in a shared space, like a common room
          </div>
        </div>
        <input type="checkbox" id="shared room" :value="modelValue" @click="changeSection('shared room')" />
        <span class="checkmark"></span>
      </label>
    </div>
    </div>
    <hr />
    <div class="type-save">
      <button class="clear">Clear</button>
      <button class="save">Save</button>
    </div>
  </div>
   
</template>

<script>
export default {
  props: ["modelValue"],
  methods: {
    changeSection(section) {
      this.$emit("update:modelValue", section);
      console.log(section);
    },
  },
};
</script>

<style>

</style>