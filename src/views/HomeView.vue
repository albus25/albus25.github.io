<script setup>
import MainView from "@/views/MainView.vue";
</script>

<template>
  <div id="page-loader" class="page-loader">
    <div class="bounceball"></div>
  </div>

  <span class="icon-menu">
    <span class="bar"></span>
    <span class="bar"></span>
  </span>

  <div class="responsive-sidebar-menu">
    <div class="overlay"></div>
    <div class="sidebar-menu-inner">
      <div class="menu-wrap">
        <p>Menu</p>
        <ul class="menu scroll-nav-responsive d-flex">
          <li>
            <RouterLink active-class="class-to active" class="scroll-to" href="#home" tag="a" to="/">
              <i class="las la-home"></i> <span>Home</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink active-class="class-to active" class="scroll-to" href="#about" tag="a" to="/about">
              <i class="lar la-user"></i> <span>About</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink active-class="class-to active" class="scroll-to" href="#resume" tag="a" to="/resume">
              <i class="las la-briefcase"></i> <span>Resume</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink active-class="class-to active" class="scroll-to" href="#services" tag="a" to="/services">
              <i class="las la-stream"></i> <span>Services</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink active-class="class-to active" class="scroll-to" href="#skills" tag="a" to="/skills">
              <i class="las la-shapes"></i> <span>Skills</span>
            </RouterLink>
          </li>
          <!--          <li>-->
          <!--            <RouterLink active-class="class-to active" class="scroll-to" href="#contact" tag="a" to="/contact">-->
          <!--              <i class="las la-envelope"></i> <span>Contact</span>-->
          <!--            </RouterLink>-->
          <!--          </li>-->
        </ul>
      </div>

      <div class="sidebar-social">
        <p>Social</p>
        <ul class="social-links d-flex align-items-center">
          <li>
            <RouterLink href="https://in.linkedin.com/in/saurabh-sali-401b5b161/" target="_blank" to=""><i
                class="lab la-linkedin"></i></RouterLink>
          </li>
          <li>
            <RouterLink href="https://github.com/albus25" target="_blank" to=""><i class="lab la-github"></i>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <ul class="menu scroll-nav d-flex">
    <li>
      <RouterLink active-class="active" class="scroll-to" href="#home" tag="a" to="/">
        <i class="las la-home"></i> <span>Home</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink active-class="active" class="scroll-to" href="#about" tag="a" to="/about">
        <i class="lar la-user"></i> <span>About</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink active-class="active" class="scroll-to" href="#resume" tag="a" to="/resume">
        <i class="las la-briefcase"></i> <span>Resume</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink active-class="active" class="scroll-to" href="#services" tag="a" to="/services">
        <i class="las la-stream"></i> <span>Services</span>
      </RouterLink>
    </li>
    <li>
      <RouterLink active-class="active" class="scroll-to" href="#skills" tag="a" to="/skills">
        <i class="las la-shapes"></i> <span>Skills</span>
      </RouterLink>
    </li>
    <!--    <li>-->
    <!--      <RouterLink active-class="active" class="scroll-to" href="#contact" tag="a" to="/contact">-->
    <!--        <i class="las la-envelope"></i> <span>Contact</span>-->
    <!--      </RouterLink>-->
    <!--    </li>-->
  </ul>

  <div class="left-sidebar">
    <div class="sidebar-header d-flex align-items-center justify-content-between">
      <h2>Saurabh Sali</h2>
      <span class="designation">Full-Stack Developer</span>
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
        <RouterLink href="https://github.com/albus25" target="_blank" to=""><i class="lab la-github"></i></RouterLink>
      </li>
    </ul>
    <!--    <RouterLink class="theme-btn" href="#" tag="a" to="/contact">-->
    <!--      <i class="las la-envelope"></i> Contact Me!-->
    <!--    </RouterLink>-->
  </div>

  <main class="body-main">
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <MainView/>
      </div>
    </div>
  </main>
</template>
