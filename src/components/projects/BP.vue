<template>
  <div class="container">
    <div class="item-info-container">
      <div class="item-description">
        <h2>Bubble in Paradise: Logo</h2>
        <p>I created the logo for a client that was opening up a cafe. The client asked for something cute but was also open to new and modern ideas. They also asked for the the logo to be "paradise" themed. I came up with a few ideas that revolved around a cute concept as well as some modern designs.</p>
      </div>

      <ul class="item-info">
        <li>
          <span style="font-weight: bold;">Graphic: </span>
          <p>Logo</p>
        </li>
        <li>
          <span style="font-weight: bold;">Completed: </span>
          <p>July 2019</p>
        </li>
        <li>
          <span style="font-weight: bold;">Skill: </span>
          <p>Adobe Illustrator</p>
        </li>
      </ul>
    </div>

    <div class="item-photos">
      <div class="photo">
        <img src="@/assets/images/bip-logo.png">
      </div>
      <p class="draft">Other logo concepts</p>
      <div class="grid">
        <div class="concept">
          <img src="@/assets/images/logo0.png">
        </div>
        <div class="concept">
          <img src="@/assets/images/logo2.png">
        </div>
        <div class="concept">
          <img src="@/assets/images/logo3.png">
        </div>
        <div class="concept">
          <img src="@/assets/images/logo4.png">
        </div>
        <div class="concept">
          <img src="@/assets/images/logo6.png">
        </div>
        <div class="concept">
          <img src="@/assets/images/logo7.png">
        </div>
        <div class="concept">
          <img src="@/assets/images/logo8.png">
        </div>
        <div class="concept">
          <img src="@/assets/images/logo10.png">
        </div>
        <div class="concept">
          <img src="@/assets/images/logo11.png">
        </div>
        <div class="concept">
          <img src="@/assets/images/logo12.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.container {
  line-height: 20px;
  /* padding-top: 50px;
  padding-bottom: 50px; */
  /*
  grid-auto-rows: minmax(100px, auto);
  */
}

p {
  font-size: 18px;
  font-weight: 500;
}

.draft {
  margin-top: 100px;
  margin-bottom: 0;
}

h2 {
  margin: 0;
}

li {
  list-style: none;
}

.item-description {
  float: left;
  width: 70%;
  padding-right: 50px;
}

.item-info {
  padding-left: 50px;
}

.item-info > li > p {
  display: inline;
}
.item-info > li > span{
  float: left;
  width: 110px;
}

.item-photos {
  clear: both;
  text-align: center;
}

.item-photos > .photo > img {
  margin-top: 100px;
  width: 70%;
}

.concept > img {
  margin-top: 50px;
  width: 100%;
}

.grid {
  display: grid;
  grid-template-columns:repeat(4, 1fr);
  grid-gap: 15px;
}

</style>
