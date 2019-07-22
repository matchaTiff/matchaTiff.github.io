<template>
  <div class="main">

    <div class="photo">
      <img src="@/assets/images/eSports.gif">
      <div class="overlay"></div>
      <div class="text">Rutgers Esports Logo Animation</div>
    </div>
    <router-link to="/the-scarlet-classic-v">
      <div class="photo">
        <img src="@/assets/images/scvCover.png">
        <div class="overlay"></div>
        <div class="text">The Scarlet Classic V: Graphics</div>
      </div>
    </router-link>

    <router-link to="/fireside-open">
      <div class="photo">
        <img src="@/assets/images/foCover.png">
        <div class="overlay"></div>
        <div class="text">Fireside Open: Flyer</div>
      </div>
    </router-link>

    <router-link to="/its-just-a-game">
      <div class="photo">
        <img src="@/assets/images/ijagCover.png">
        <div class="overlay"></div>
        <div class="text">It's Just a Game: Flyer</div>
      </div>
    </router-link>

    <router-link to="/rhythm-games-club">
      <div class="photo">
        <img src="@/assets/images/rgcCover1.png">
        <div class="overlay"></div>
        <div class="text">Rhythm Games Club</div>
      </div>
    </router-link>

    <div class="photo">
      <img src="@/assets/images/llc-logo.png">
      <div class="overlay"></div>
      <div class="text">CS Living-Learning Community: Logo</div>
    </div>

    <router-link to="/built-by-girls">
      <div class="photo">
        <img src="@/assets/images/phone-cover.png">
        <div class="overlay"></div>
        <div class="text">Built By Girls: Phone Case Design Contest</div>
      </div>
    </router-link>

    <router-link to="/bubble-in-paradise">
      <div class="photo">
        <img src="@/assets/images/bip-logo.png">
        <div class="overlay"></div>
        <div class="text">Bubble in Paradise: Logo</div>
      </div>
    </router-link>

  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

.slideanim {
    visibility:hidden;
    visibility:visible\9;/*For old IE browsers IE6-8 */
}
.slideanim.slide {
    visibility: visible;
    animation: slide 1s;
}
.slideanim::after {
    /* useful when its child elements are float:left; */
    content: "";
    display: table;
    clear: both;
}
@keyframes slide {
    0% {
        opacity: 0;
        transform: translateY(50%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.main {
  /* padding-top: 50px;
  padding-bottom: 50px; */
  display: grid;
  grid-template-columns:repeat(4, 1fr);
  grid-gap: 15px;
  /*
  grid-auto-rows: minmax(100px, auto);
  */
}

.photo {
  position: relative;
}

.photo:hover{
  filter: grayscale(50%);
}

.photo:hover .overlay{
  opacity: 0.7;
}

.photo:hover .text{
  opacity: 1;
}

.photo > img {
  object-fit: cover;
  width: 100%;
  transition: 0.3s;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .3s ease;
  background-color: #000000;
}

.text {
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 20px;
  text-transform: uppercase;
  opacity: 0;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
