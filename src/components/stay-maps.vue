<template>
<section class="stay-maps">
    <h1>Where you’ll be</h1>
  <GMapMap
    :center="center"
    :zoom="12"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
  >
    <GMapCluster>
      <GMapMarker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap>
  
</section>
</template>

<script>
export default {
  name: "app",
  props: {
    stay: {}
  },
  data() {
    return {
      center: { lat: 41.37479, lng: 2.15566 },
      locs: [{name: 'Barcelona', pos: {lat:  41.37479, lng: 2.15566 }},
  
    ],
      markers: 
        {
          position: {
            lat:  41.37479,
            lng: 2.15566 ,
          },
        }, // Along list of clusters
         // Along list of clusters
       // Along list of clusters
    };
  },
};
</script>

<style>
.vue-map-container {
  height: 300px;
  width: 58.5vw;
}

/* .stay-maps{
  margin-top: 30px;
} */
</style>
