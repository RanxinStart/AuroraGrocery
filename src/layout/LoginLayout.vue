<template>
  <div class="login-layout-container" />
  <router-view />
</template>
<style scoped>
.login-layout-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  /* background-image: url(https://img.ffis.me/images/2018/06/14/58898122_p0.jpg); */
  background-position: center center;
  background-size: cover;
  /* filter: blur(5px); */
  z-index: -1;
}
</style>