<template>
  <div id="credit">
    <h2>크레딧 관리</h2>
    <div id="credit-container">
      <v-card
        class="credit-card"
        color="#28DF99"
        outlined
      >
        <v-card-text style="color: white !important">
          <p
            class="headline text--primary font-weight-bold text-left credit-item-text"
            style="color: white !important"
          >
            잔여 크레딧
          </p>
          <br>
          <p
            class="display-1 text--primary font-weight-light text-right credit-item-text"
            style="color: white !important"
          >
            {{ credits }} ￦
          </p>
        </v-card-text>
      </v-card>
    </div>

    <div id="btn-container">
      <v-btn id="btn-charge" color="#28DF99" block depressed @click="chargeModal = true">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>

    <!-- Modal for New Payment -->
    <v-bottom-sheet
      v-model="chargeModal"
      inset
    >
      <v-sheet
        class="text-center charge-sheet"
        height="500px"
      >
        <div id="charge-inner">
          <h2>크레딧 충전</h2>
          <br>
          <v-select
            :items="cards"
            label="결제 수단 선택"
            outlined
          ></v-select>

          <v-text-field
            label="충전 금액"
            value="10000"
            postfix="￦"
          ></v-text-field>

          <v-row>
            <v-col cols="6">
              <v-btn block elevation="0" color="error">
                취소
              </v-btn>
            </v-col>

            <v-col cols="6">
              <v-btn block elevation="0" color="success">
                추가
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-sheet> <!-- End of new-payment-sheet -->
    </v-bottom-sheet> <!-- End of newPaymentModal -->
  </div>
</template>

<script>
export default {
  name: 'Credit',
  data: () => {
    return {
      credits: 80000,
      chargeModal: false,
      cards: [
        {
          text: '결제 수단을 선택해주세요.',
          value: '',
          disabled: true
        },
        {
          text: '#1 Shinhan || Visa',
          value: '0',
          disabled: false
        },
        {
          text: '#2 Shinhan || Visa',
          value: '1',
          disabled: false
        },
        {
          text: '#3 Shinhan || Visa',
          value: '2',
          disabled: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#credit {
  height: 100%;
  background-color: #99F3BD;

  #credit-container {
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;

    .credit-card {
      width: 100%;
      margin: 10px 0;
      height: 170px;
      border-radius: 20px;

      .credit-card-text {
        color: white !important;
      }
    }
  }

  #btn-container {
    width: 50%;
    margin: 0 auto;

    #btn-charge {
      color: white !important;
      border-radius: 8px;
    }
  }
}

.charge-sheet {
  padding-top: 20px;
  border-radius: 30px 30px 0 0;

  #charge-inner {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
