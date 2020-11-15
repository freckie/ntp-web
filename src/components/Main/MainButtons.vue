<template>
  <v-container id="main-buttons-wrapper">
    <v-row
      align="center"
      style="height: 120px"
    >
      <v-col class="main-button">
        <v-btn
          class="main-button-inner"
          elevation="0"
          x-large fab tile
          color="white"
          block
          @click="btnClick('/app/payments')"
        >
          <v-icon x-large>mdi-credit-card-outline</v-icon>
        </v-btn>
      </v-col>

      <v-col class="main-button">
        <v-btn
          class="main-button-inner"
          elevation="0"
          x-large fab tile
          color="white"
          block
          @click="btnClick('/app/details')"
        >
          <v-icon x-large>mdi-format-list-bulleted</v-icon>
        </v-btn>
      </v-col>

      <v-col class="main-button">
        <v-btn
          class="main-button-inner"
          elevation="0"
          x-large fab tile
          color="white"
          block
          @click="btnClick('/app/credit')"
        >
          <v-icon x-large>mdi-currency-usd</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MainButtons',
  methods: {
    btnClick (uri) {
      this.$router.push(uri)
    }
  }
}
</script>

<style lang="scss" scoped>
.main-button {
  text-align: center;
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: 10px;
  background-color: white !important;

  .main-button-inner {
    width: 100%;
    height: 100%;
    background-color: white !important;
  }
}
</style>
