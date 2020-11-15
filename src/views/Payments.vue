<template>
  <div id="payments">
    <div id="green-container">
      <h2>결제 수단 관리</h2>
      <payment-cards id="payments-container"></payment-cards>

      <div id="btn-container">
        <v-btn id="btn-new" color="#28DF99" block depressed>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentCards from '../components/Payments/PaymentCards'
export default {
  name: 'Payments',
  components: {
    PaymentCards
  }
}
</script>

<style lang="scss" scoped>
#payments {
  height: 100%;
  background-color: #99F3BD;

  #green-container {
    background-color: #99F3BD;

    #payments-container {
      width: 90%;
      margin: 10px auto;
      margin-top: 50px;
    }
  }

  #btn-container {
    width: 50%;
    margin: 0 auto;

    #btn-new {
      color: white !important;
      border-radius: 8px;
    }
  }
}
</style>
