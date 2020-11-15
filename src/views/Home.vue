<template>
  <div id="home">
    <div id="green-container">
      <h2>LOGO</h2>
      <br>
      <main-carousel id="main-carousel"></main-carousel>
    </div>
    <main-buttons id="main-buttons"></main-buttons>
  </div>
</template>

<script>
import MainCarousel from '../components/Main/MainCarousel.vue'
import MainButtons from '../components/Main/MainButtons.vue'

export default {
  name: 'Home',
  components: {
    MainCarousel,
    MainButtons
  }
}
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
  background-color: #f4f4f4;

  #green-container {
    background-color: #99F3BD;

    #main-carousel {
      margin-top: 50px;
    }
  }

  #main-buttons {
    width: 95%;
    margin: 30px auto;
    margin-top: 30px;

  }
}
</style>
