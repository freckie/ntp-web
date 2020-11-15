<template>
  <v-container id="payment-cards-wrapper">
    <v-card
      v-for="(item, idx) in cards"
      :key="idx"
      class="payment-card"
      color="#28DF99"
      outlined
    >
      <v-card-text style="color: white !important">
        <p style="margin: 0">#{{ idx + 1 }}</p>
        <div
          class="headline text--primary font-weight-light text-right payment-item-text"
          style="color: white !important"
        >
          {{ item.brand }}
        </div>
        <p
          class="headline text--primary font-weight-bold text-right payment-item-text"
          style="color: white !important"
        >
          {{ item.number }}
        </p>
        <div style="float: right">
          <v-btn
            outlined
            color="white"
          >
            관&nbsp;리
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'PaymentCards',
  data: () => {
    return {
      cards: [
        {
          number: '1111-2222-3333-4444',
          company: 'Shinhan',
          brand: 'Visa',
          registration: '2020-11-01'
        },
        {
          number: '5555-6666-7777-8888',
          company: 'KakaoBank',
          brand: 'Mastercard',
          registration: '2020-11-03'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#payment-cards-wrapper {
  background-color: #99F3BD;
}

.payment-card {
  width: 100%;
  margin: 10px 0;
  height: 170px;
  border-radius: 20px;

  .payment-card-text {
    color: white !important;
  }
}
</style>
