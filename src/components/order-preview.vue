<template>
  <section class="order-preview">
    <tr class="order-info" :class="pendingColor">
      <td class="user-info flex align-center">
        <img class="avatar" :src="order.imgUrl" /><span class="user-info">{{ order.booker }}</span>
      </td>
      <td class="stay-name">{{ order.stay }}</td>
      <td>{{ order.tripDates }}</td>
      <td>
        <span>{{ order.nights }}</span> nights
      </td>
      <td>
        <span>{{ order.guests }}</span> guests
      </td>
      <td>
        {{
          $filters.currencyUSD(
            new Intl.NumberFormat("en-US").format(order.amount)
          )
        }}
      </td>
      <td class="status flex justify-center">
        <button class="approve-btn" v-if="isApproved || isPending" @click="changeApproveStatus">
          {{ approveStatus }}
        </button>
        <button class="decline-btn" v-if="isDeclined || isPending" @click="changeRejectStatus">
          {{ declineStatus }}
        </button>
      </td>
    </tr>
  </section>
</template>

<script>
export default {
  props: {
    order: Object,
  },
  data() {
    return {
      isApproved: false,
      isDeclined: false,
      isPending: true,
    };
  },
  created() {
    switch (this.order.status) {
      case "approved":
        this.isApproved = true;
        this.isPending = false;
        break;
      case "rejected":
        this.isDeclined = true;
        this.isPending = false;
        break;
      case "pending":
        this.isPending = true;
        break;
    }
  },
  methods: {
    changeApproveStatus() {
      this.isApproved = true;
      this.isPending = false;
      this.order.status === 'approved'
      this.$emit('updateOrder', this.order)
    },
    changeRejectStatus() {
      this.isDeclined = true;
      this.isPending = false;
      this.order.status === 'rejected'
      this.$emit('updateOrder', this.order)
    },
  },
  computed: {
    pendingColor() {
      return { pending: this.isPending };
    },
    approveStatus() {
      return this.isPending ? 'Approve' : 'Approved'
    },
    declineStatus() {
      return this.isPending ? 'Decline' : 'Declined'
    },
    // getImage() {
    //   return (path) => new URL(`${path}`, import.meta.url).href
    // }
  },
};
</script>