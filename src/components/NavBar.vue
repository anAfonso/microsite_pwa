<template>
  <div>

<div class="header">
  <img src="../assets/img/zalando1.svg" alt="">
  <h1>Hello Ana,</h1>
  <p>Thank you for your interest in our company. Here you can find more about us, our products and have access to exclusive offers.</p>
  <br>
</div>

  </div>
  <!--<header class="navbar" :class="{ offline: !networkOnLine }">
    <router-link to="/home">
      <img alt="logo-bento" class="logo" src="@/assets/img/zalando.svg" />
   <span class="site-name title-desktop">{{ appTitle }}</span>
      <span class="site-name title-mobile">{{ appShortTitle }}</span>
    </router-link>
    <div class="links">
      <nav class="nav-links">
        <div class="nav-item">
          <router-link to="/products">Products</router-link>
        </div>
        <div v-if="!isUserLoggedIn && networkOnLine" class="nav-item">
          <router-link to="/login">Login</router-link>
        </div>
        <div
          v-if="isUserLoggedIn && networkOnLine"
          class="nav-item logout-item"
          @click="logout"
        >
          <a>Logout</a>
        </div>
        <div v-if="!networkOnLine" class="nav-item offline-label">Offline</div>
      </nav>-->

</template>

<script>
import firebase from 'firebase/app'
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters('authentication', ['isUserLoggedIn']),
    ...mapState('authentication', ['user']),
    ...mapState('app', ['networkOnLine', 'appTitle', 'appShortTitle'])
  },
  methods: {
    async logout() {
      await firebase.auth().signOut()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.header {
  height: 360px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: #fff;
  justify-content: flex-start;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3em 2em 1em 2em;
}
h1,p {
  color: #000;
  text-align: center;
}

h1 {
  font-weight: 700;
  margin-bottom: 0;

}

p {
  font-weight: 500;
  font-size: 18px;
}
 img {
   padding-bottom: 1em;
   width: 130px;
 }

</style>
