<template>
  <div id="app">
    <div class="site-content">
      <header class="site-header">
        <div class="container">
          <div id="logo">
            <p><span class="highlight">TIFFANY CHEN</span></p>
          </div>
          <nav>
            <ul>
              <router-link to="/" class="home">Home</router-link>
              <router-link to="about" class="about">About</router-link>
              <router-link to="resume" class="resume">Resume</router-link>
              <!-- <router-link to="contact" class="contact">Contact</router-link> -->
              <!-- <li class="current"><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="resume.html">Resume</a></li>
              <li><a href="Contact.html">Contact</a></li> -->
            </ul>
          </nav>
        </div>
      </header>
      <transition
        name="fade"
        mode="out-in">
        <router-view/>
      </transition>
      <!-- <grid /> -->
      <footer>
        <div class="icon-container">
          <div class="icon">
            <a href="https://github.com/matchaTiff"><i class="fab fa-github"></i></a>
          </div>
          <div class="icon">
            <a href="https://www.linkedin.com/in/tiffany-chen-683643160/"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <div class="icon">
            <a href="mailto: tmc242@rutgers.edu"><i class="fas fa-envelope"></i></a>
          </div>
        </div>
        <p>&copy; 2019 Tiffany Chen.</p>
      </footer>
    </div>
  </div>
</template>

<script>
// import grid from './components/grid.vue'

export default {
  name: 'app',
  // components: {
  //   grid
  // }
}
</script>


<style>

.container {
  font-family: quicksand, sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.site-content {
  overflow:hidden;
}

.site-header {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
}

ul {
  margin: 0;
  padding: 0;
}

/* Header */
header {
  padding-top: 6em;
  padding-bottom: 6em;
  min-height: 45px;
}

header a {
  float: left;
  display: inline;
  text-decoration: none;
  transition: 0.3s;
  opacity: 1;
  color: black;
}

.home {
  padding-right: 20px;
}

.about {
  padding: 0 20px 0 20px;
}

.resume {
  padding: 0 20px 0 20px;
}

.contact {
  padding-left: 20px;
}

/* header router-link {
  float: left;
  display: inline;
  padding: 0 20px 0 20px;
} */

header #logo {
  float: left;
}

/* header #logo h1{
  margin: 0;
} */

header nav {
  float: right;
  margin-top: 14px;
}

header .highlight, header .current a {
  color: #695551;
}

header a:hover {
  color: #cccccc;
  opacity: 0.6;
}

footer {
  font-weight: 500;
  padding-top: 4em;
  padding-bottom: 4em;
}

footer > p {
  color: #333333;
  padding-top: 20px;
  text-align: center;
}

.icon-container {
  text-align: center;
  color: #333333;
}

.icon:hover{
  color: #cccccc;
  opacity: 0.6;
}

.icon > a {
  color: #333333;
}

.icon {
  font-size: 25px;
  display: inline-block;
  padding: 0 20px 0 20px;
  opacity: 1;
  transition: 0.3s;
}

</style>
