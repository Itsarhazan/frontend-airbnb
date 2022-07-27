<template>
  <section class="host-stay-preview">
    <tr class="stay-info">
      <td>{{ stay.name }}</td>
      <td>
        {{ $filters.currencyUSD(stay.amount)}}
      </td>
      <td>{{ stay.address.street }}</td>
      <td>
        <!-- <button>Edit</button> -->
        <button>Remove</button>
      </td>
    </tr>
  </section>
</template>

<script>
export default {
  props: {
    stay: Object,
  },
  created(){
        console.log('this.stay:', this.stay);
  }
};
</script>