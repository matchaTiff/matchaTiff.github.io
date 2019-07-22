<template>
  <div class="container">
    <div class="item-info-container">
      <div class="item-description">
        <h2>Fireside Open: Graphics</h2>
        <p>Fireside Open was a competitive intercollegiate BYOC LAN event hosted by Rutgers Esports. A total of 700 attended the event. This was my first major event that I've ever been a part of and I was in charge of designing the flyer.</p>
      </div>

      <ul class="item-info">
        <li>
          <span style="font-weight: bold;">Graphic: </span>
          <p>Flyer</p>
        </li>
        <li>
          <span style="font-weight: bold;">Completed: </span>
          <p>November 2018</p>
        </li>
        <li>
          <span style="font-weight: bold;">Skill: </span>
          <p>Adobe Photoshop</p>
        </li>
      </ul>
    </div>

    <div class="item-photos">
      <div class="photo">
        <img src="@/assets/images/fireside-flyer.png">
      </div>
      <p class="draft">Rough draft of flyer</p>
      <div class="photo">
        <img src="@/assets/images/fireside-flyer-test.png">
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
  box-shadow: 6px 9px 7px 0px rgba(0,0,0,0.4);
}

</style>
