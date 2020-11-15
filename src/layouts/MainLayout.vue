<template>
  <v-app>

    <!-- Content -->
    <v-content id="content">
      <router-view></router-view>
    </v-content>

    <!-- Footer -->
    <div id="footer">
      <v-bottom-navigation
        :value="footerValue"
        color="#2899DF"
        height="70px"
        grow
        app
      >
        <v-btn
          class="footer-btn"
          to="/app/home"
        >
          <v-icon>mdi-home-outline</v-icon>
        </v-btn>

        <v-btn
          class="footer-btn"
          to="/app/payments"
        >
          <v-icon>mdi-credit-card-outline</v-icon>
        </v-btn>

        <v-btn
          class="footer-btn"
          to="/app/details"
        >
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-btn>

        <v-btn
          class="footer-btn"
          to="/app/credit"
        >
          <v-icon>mdi-currency-usd</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div> <!-- End of footer -->
  </v-app>

</template>

<script>
export default {
  name: 'MainLayout',
  data: () => {
    return {
      footerValue: 1
    }
  },
  methods: {
    routeTo (uri) {
      this.$router.push(uri)
    }
  }
}
</script>

<style lang="scss" scoped>
#footer {
  max-width: 100%;

  .footer-btn {
    text-align: center;
    height: 100%;
  }
}
</style>
