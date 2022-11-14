<template>
    <GoogleMap
      api-key="AIzaSyD_YI43iurQRwwp1o8z5TfHzCQEzvfzT58"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="15"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { GoogleMap, Marker } from "vue3-google-map";
  
  export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
      const center = { lat: 37.5453230, lng: 126.9251152 };
  
      return { center };
    },
  });
  </script>