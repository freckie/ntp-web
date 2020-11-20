<template>
  <div id="details">
    <h2>결제 내역</h2>
    <br>

    <div id="detail-container">
      <v-select
        :items="cards"
        label="결제 수단"
        outlined
      ></v-select>
      <br>
      <detail-list id="detail-list" :payment="payment"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailList from '../components/Details/DetailList.vue'
export default {
  name: 'Details',
  components: {
    DetailList
  },
  data: () => {
    return {
      payment: 1,
      cards: [
        {
          text: '#1 Shinhan || Visa',
          value: '0'
        },
        {
          text: '#2 Shinhan || Visa',
          value: '1'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#details {
  height: 100%;
  background-color: #99F3BD;

  #detail-container {
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
  }
}
</style>
