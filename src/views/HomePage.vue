<template>
  <HeaderPage />
  <div id="app" >
    <PinterestGrid />
  </div>

</template>

<script>
import PinterestGrid from '../components/PinGrid.vue';
import HeaderPage from '../components/HeaderPage.vue';

export default {
  name: 'HomePage',
  components: {
    HeaderPage,
    PinterestGrid
  },
};
</script>