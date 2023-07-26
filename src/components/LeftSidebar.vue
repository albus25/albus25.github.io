<script setup>

</script>

<template>
  <div class="left-sidebar">
    <div class="sidebar-header d-flex align-items-center justify-content-between">
      <h2>Saurabh Sali</h2>
      <span class="designation">Framer Designer & Developer</span>
    </div>
    <img alt="Me" class="me" src="/src/assets/images/me.png">
    <h2 class="email">saurabhjerry2@gmail.com</h2>
    <h2 class="address">India</h2>
    <ul class="social-profile d-flex align-items-center flex-wrap justify-content-center">
      <li>
        <RouterLink href="https://in.linkedin.com/in/saurabh-sali-401b5b161/" target="_blank" to=""><i
            class="lab la-linkedin"></i></RouterLink>
      </li>
      <li>
        <RouterLink href="https://github.com/albus25" target="_blank" to=""><i class="lab la-github"></i>
        </RouterLink>
      </li>
    </ul>
    <RouterLink class="theme-btn" href="#" tag="a" to="/contact">
      <i class="las la-envelope"></i> Contact Me!
    </RouterLink>
  </div>
</template>

<style scoped>

</style>