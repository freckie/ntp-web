<template>
  <div id="main-carousel">
    <v-carousel
      :show-arrows="false"
      hide-delimiters
      hide-delimiter-background
      cycle
      interval="5000"
      height="200px"
    >
      <v-carousel-item
        v-for="(item, idx) in carousels"
        :key="idx"
      >
        <v-card
          class="carousel-item"
          color="#28DF99"
          outlined
        >
          <v-card-text>
            <p
              class="headline text--primary font-weight-bold carousel-item-title"
              style="color: white !important"
            >
              {{ item.title }}
            </p>
            <br>
            <div
              class="display-1 text--primary font-weight-light text-right carousel-item-text"
              style="color: white !important"
            >
              {{ item.value }}
            </div>
          </v-card-text>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      carousels: [
        {
          title: '잔여 크레딧',
          value: '80,000 ￦',
          link: '/app/credit'
        },
        {
          title: '결제 수단',
          value: '3 건',
          link: '/app/payments'
        },
        {
          title: '최근 1개월 결제',
          value: '11 건',
          link: '/app/details'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#main-carousel {
  background-color: #99F3BD;

  .carousel-item {
    width: 90%;
    margin: 0 auto;
    height: 160px;
    border-radius: 20px;

    .carousel-item-title {
      color: white !important;
      margin-left: 10px;
      margin-top: 5px;
    }

    .carousel-item-text {
      color: white !important;
    }
  }
}
</style>
