<template>
  <section class="app-filter">
    <section class="filter-container flex align-center justify-center">
      <el-form
        class="max-filter flex space-between align-center"
        :model="form"
        label-width="120px"
        @submit.prevent
      >
        <section class="input-container">
          <div class="search-container">
            <label class="search-label flex flex-column"
              >Location
              <input
                class="search-location"
                type="text"
                list="location"
                v-model="form.city"
                placeholder="Where are you going?"
              />
              <datalist id="location">
                <option value="Tel Aviv"></option>
                <option value="Barcelona"></option>
                <option value="Paris"></option>
                <option value="Santorini"></option>
                <option value="New York"></option>
                <option value="Bali"></option>
              </datalist>
            </label>
          </div>
        </section>

        <section class="input-container-dates">
          <div class="check-in-out">
            <v-date-picker v-model="form.range" color="gray" is-range>
              <template v-slot="{ inputValue, inputEvents }">
                <div class="flex">
                  <label>
                    Check in
                    <input
                      :value="inputValue.start"
                      v-on="inputEvents.start"
                      class="
                        input1
                        border
                        px-2
                        py-1
                        w-32
                        rounded
                        focus:outline-none focus:border-gray-500
                      "
                      placeholder="Add date"
                    />
                  </label>

                  <label>
                    Check out
                    <input
                      :value="inputValue.end"
                      v-on="inputEvents.end"
                      class="
                        input2
                        border
                        px-2
                        py-1
                        w-32
                        rounded
                        focus:outline-none focus:border-gray-500
                      "
                      placeholder="Add date"
                    />
                  </label>
                </div>
              </template>
            </v-date-picker>
          </div>
        </section>

        <section class="input-container">
          <Popper>
            <div class="guest-container flex align-center">
              <label
                >Guests
                <input type="text" :placeholder="addGuest" disabled />
              </label>
              <el-form-item>
                <button class="submit-btn" type="primary" @click="onSubmit">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="17"
                      fill="#ffffff"
                      stroke="#ffffff"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                      />
                    </svg>
                  </span>
                </button>
              </el-form-item>
            </div>
            <template #content>
              <div class="guests-modal flex flex-column">
                <div class="guest-type-label flex space-between align-center">
                  <div class="guest-label flex flex-column">
                    <h3>Adults</h3>
                    <p>Ages 13 or above</p>
                  </div>
                  <div class="guest-btns flex align-center space-between">
                    <button :class="disableAdultBtn" @click="countAdults(-1)">
                      <span class="material-icons-sharp"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-dash"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                          /></svg
                      ></span>
                    </button>
                    <span class="guests-num">{{ adultCount }}</span>
                    <button class="guest-btn" @click="countAdults(1)">
                      <span class="material-icons-sharp">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#222222"
                          class="bi bi-plus"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>

                <hr />

                <div class="guest-type-label flex space-between align-center">
                  <div class="guest-label flex flex-column">
                    <h3>Children</h3>
                    <p>Ages 2-12</p>
                  </div>
                  <div class="guest-btns flex align-center space-between">
                    <button :class="disableKidBtn" @click="countKids(-1)">
                      <span class="material-icons-sharp">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-dash"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                          /></svg
                      ></span></button
                    ><span class="guests-num">{{ kidCount }}</span
                    ><button class="guest-btn" @click="countKids(1)">
                      <span class="material-icons-sharp">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#222222"
                          class="bi bi-plus"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </template>
          </Popper>
        </section>
      </el-form>
    </section>
  </section>
</template>

<script>
import Popper from "vue3-popper";
export default {
  data() {
    return {
      form: {
        city: "",
        range: {
          start: '',
          end: '',
        },
        guests: 0,
      },
      adults: 0,
      kids: 0,
      placeholder: "Add guests",
    };
  },
  created() {
    if (this.$route.query.destination) {
      const { destination } = this.$route.query;
      this.form.city = destination;
    }
    if (this.$route.query.capacity) {
      const {capacity} = this.$route.query;
      this.form.guests = capacity
    }
  },
  methods: {
    onSubmit() {
      if (!this.form.guests) this.form.guests = "";
      this.$router.push(
        `/explore?${new URLSearchParams({
          destination: this.form.city,
          capacity: this.form.guests,
          start_date: this.form.range.start,
          end_date: this.form.range.end
        }).toString()}`
      );
    },
    countAdults(diff) {
      this.placeholder = this.form.guests
        ? `${this.form.guests} Guests`
        : "Add guests";
      if (!this.adults && diff < 0) return;
      this.form.guests += diff;
      this.adults += diff;
    },
    countKids(diff) {
      this.placeholder = this.form.guests
        ? `${this.form.guests} Guests`
        : "Add guests";
      if (!this.kids && diff < 0) return;
      this.form.guests += diff;
      this.kids += diff;
    },
  },
  computed: {
    adultCount() {
      return this.adults;
    },
    kidCount() {
      return this.kids;
    },
    disableAdultBtn() {
      return { "disabled-btn": !this.adults };
    },
    disableKidBtn() {
      return { "disabled-btn": !this.kids };
    },
    addGuest() {
      if (this.form.guests === 0) return "Add guests";
      return this.form.guests + " guests";
    },
  },
  components: {
    Popper,
  },
};
</script>
