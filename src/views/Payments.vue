<template>
  <div id="payments">
    <div id="green-container">
      <h2>결제 수단 관리</h2>

      <payment-cards
        @paymentCardsEvent="openUpdatePaymentModal"
        id="payments-container"
      >
      </payment-cards>

      <div id="btn-container">
        <v-btn id="btn-new" color="#28DF99" block depressed @click="newPaymentModal = true">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- Modal for New Payment -->
    <v-bottom-sheet
      v-model="newPaymentModal"
      inset
    >
      <v-sheet
        class="text-center new-payment-sheet"
        height="500px"
      >
        <div id="new-payment-inner">
          <h2>새로운 결제 수단 등록</h2>
          <br>
          <v-select
            :items="brands"
            label="카드사 선택"
            outlined
          ></v-select>

          <label for="cardNumbersRow">카드 번호</label>
          <v-row name="cardNumbersRow">
            <v-col
              v-for="(item, idx) in cardNumbers"
              :key="idx"
              cols="3"
            >
              <v-text-field outlined dense v-model="cardNumbers[idx]"></v-text-field>
            </v-col>
          </v-row>

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

    <!-- Modal for Updating Payment -->
    <v-bottom-sheet
      v-model="updatePaymentModal"
      inset
    >
      <v-sheet
        class="text-center update-payment-sheet"
        height="500px"
      >
        <div id="update-payment-inner">
          <h2>결제 수단 관리</h2>
          <br>

          <div class="text-left">
            <p class="title">{{ cardForManaging.company }} || {{ cardForManaging.brand }}</p>
            <p class="headline">{{ cardForManaging.number }}</p>
            <p class="headline">등록일 : {{ cardForManaging.registration }}</p>
          </div>

          <v-row>
            <v-col cols="6">
              <v-btn block elevation="0" color="error">
                삭제
              </v-btn>
            </v-col>

            <v-col cols="6">
              <v-btn block elevation="0" color="success">
                닫기
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-sheet> <!-- End of update-payment-modal -->
    </v-bottom-sheet> <!-- End of updatePaymentModal -->
  </div>
</template>

<script>
import PaymentCards from '../components/Payments/PaymentCards'
export default {
  name: 'Payments',
  components: {
    PaymentCards
  },
  data: () => {
    return {
      newPaymentModal: false,
      updatePaymentModal: false,
      cardNumbers: ['', '', '', ''],
      brands: [
        {
          text: '카드 브랜드를 선택해주세요.',
          value: '',
          disabled: true
        },
        {
          text: 'Visa',
          value: 'visa',
          disabled: false
        },
        {
          text: 'MasterCard',
          value: 'mastercard',
          disabled: false
        },
        {
          text: 'UnionPay',
          value: 'unionpay',
          disabled: false
        }
      ],
      cardForManaging: {}
    }
  },
  methods: {
    openUpdatePaymentModal (card) {
      this.updatePaymentModal = true
      this.cardForManaging = card
    }
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

.new-payment-sheet {
  padding-top: 20px;
  border-radius: 30px 30px 0 0;

  #new-payment-inner {
    width: 90%;
    margin: 0 auto;
  }
}

.update-payment-sheet {
  padding-top: 20px;
  border-radius: 30px 30px 0 0;

  #update-payment-inner {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
