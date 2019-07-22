<template>
  <div class="resume-container">
    <!-- FONTS -->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Raleway:100' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>

    <!-- PAGE STUFF -->
    <div class="rela-block page">
        <div class="rela-block top-bar">
            <div class="caps name"><div class="abs-center">Tiffany Chen</div></div>
        </div>
        <div class="side-bar">
            <div class="mugshot">
                <div class="logo">
                    <svg viewbox="0 0 80 80" class="rela-block logo-svg">
                        <path d="M 10 10 L 52 10 L 72 30 L 72 70 L 30 70 L 10 50 Z" stroke-width="2.5" fill="none"/>
                    </svg>
                    <!-- <p class="logo-text">kj</p> -->
                </div>
            </div>
            <p>Passaic, New Jersey</p>
            <p>973-931-0128</p>
            <p>tmc242@rutgers.edu</p>
            <!-- <p class="rela-block social twitter">Twitter stuff</p>
            <p class="rela-block social pinterest">Pinterest things</p>
            <p class="rela-block social linked-in">Linked-in man</p> -->
            <p class="rela-block caps side-header">Education</p>
            <p class="rela-block list-thing bold-it">Rutgers University</p>
            <p class="rela-block list-thing">Bachelor of Science: Computer Science</p>
            <p class="rela-block list-thing">Class of 2021</p>
            <ul class="rela-block list-thing">
              <li>School of Arts and Sciences</li>
              <li>Douglass Residential College</li>
              <li>Douglass-SAS-DIMACS Computer Science Living Learning Community</li>
            </ul>
            <p class="rela-block caps side-header">Skills</p>
            <p class="rela-block list-thing bold-it">Programming Languages</p>
            <p class="rela-block list-thing">Java, C, HTML, CSS, JavaScript, Python</p>
            <p class="rela-block list-thing bold-it">Technologies</p>
            <p class="rela-block list-thing">Git, Pygame, Three.js, Vue.js</p>
            <p class="rela-block list-thing bold-it">Applications</p>
            <p class="rela-block list-thing">Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Eclipse, Microsoft Office, Vega Pro</p>
            <p class="rela-block list-thing bold-it">Interests</p>
            <p class="rela-block list-thing">Esports, Graphic Design, Drawing, Tennis, Animation</p>
        </div>
        <div class="rela-block content-container">
            <h2 class="rela-block caps title">Graphic Designer/Programmer</h2>
            <div class="rela-block separator"></div>

            <div class="rela-block caps greyed">EXPERIENCE</div>
            <h3>STUDENT ASSISTANT</h3>
            <p class="light">Rutgers University - Central Technical Services Department | September 2017 - May 2019</p>
            <ul class="justified">
              <li>Used tools such as SirsiDynix Symphony Workflows, and OCLC WorldCat for cataloging and correcting errors in the Rutgers University Libraries database.</li>
              <li>Handled placement of security tape, labeling using SpineOMatic, and stamping on over 1000+ books, 100 books each week.</li>
              <li>Provided general assistance to co-workers when given tasks to complete with the use of a specific technology.</li>
            </ul>

            <div class="rela-block caps greyed">EXTRACURRICULAR</div>
            <h3>RUTGERS ESPORTS - GRAPHIC DESIGNER/WEB DEVELOPER</h3>
            <p class="light">Rutgers University | September 2018 - Present</p>
            <ul class="justified">
              <li>Produced promotional material such as logos, flyers, banners, and other related graphics for the organization and its major events.</li>
              <li>Frequently communicate with members of other committees such as the partnership committee to obtain necessary information of sponsors that are to be put on promotional material and the systems and technology committee for live stream graphics.</li>
              <li>Provide updates such as appropriate visual representation to the organization website using WordPress.</li>
            </ul>


            <div class="rela-block caps greyed">PROJECTS</div>
            <h3>MUSIC VISUALIZER</h3>
            <ul class="justified">
              <li>Developed an in-browser visualization tool based on audio input using JavaScript, HTML, and the Three.js library.</li>
              <li>Implemented the Web Audio API to obtain frequency data to determine each individual bar’s height.</li>
              <li>Created a menu of select songs for the user to choose from. In the process of developing an instance where the user can choose any song from SoundCloud, a music streaming platform.</li>
            </ul>

            <h3>100 COINS</h3>
            <ul class="justified">
              <li>Designed a short simulation game in Python using the Pygame library. The player must collect at least 100 coins to play at the arcade. They are presented with multiple locations and course of actions that they can choose to obtain coins.</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  transition: 0.35s ease;
}
.rela-block {
  display: block;
  position: relative;
  margin: auto;
}
.rela-inline {
  display: inline-block;
  position: relative;
  margin: auto;
}
.floated {
  display: inline-block;
  position: relative;
  margin: false;
  float: left;
}
.abs-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 88%;
}
body {
  font-family: lato, sans-serif;
  font-size: 18px;
  letter-spacing: 0px;
  font-weight: 400;
  line-height: 28px;
  background-size: cover;
}
body:before {
  content: "";
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255,255,255,0.92);
}
ul {
  line-height: 18px;
}
.caps {
  text-transform: uppercase;
}
.justified {
  font-size: 14px;
  text-align: justify;
}
.light {
  font-size: 14px;
  color: #777;
}
h2 {
  font-family: lato, sans-serif;
  font-size: 19px;
  letter-spacing: 5px;
  font-weight: 600;
  color: #000;
}
h3 {
  font-family: lato, sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 600;
  line-height: 28px;
  color: #000;
}
.page {
  width: 90%;
  max-width: 1200px;
  background-color: #fff;
  box-shadow: 6px 9px 7px 0px rgba(0,0,0,0.4);
}
.top-bar {
  height: 220px;
  background-color: #848484;
  color: #fff;
}
.name {
  position: absolute;
  left: calc(350px + 5%);
  right: 0;
  bottom: 0;
  height: 120px;
  text-align: center;
  font-family: 'Raleway';
  font-size: 58px;
  letter-spacing: 8px;
  font-weight: 100;
  line-height: 60px;
}
.name div {
  width: 94%;
}
.side-bar {
  position: absolute;
  top: 60px;
  left: 5%;
  bottom: 0;
  width: 350px;
  background-color: #695551;
  color: white;
  padding: 320px 30px 50px;
}
.mugshot {
  position: absolute;
  top: 50px;
  left: 70px;
  height: 210px;
  width: 210px;
}
.mugshot .logo {
  margin: -23px;
}
.logo {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  margin: 0;
  color: #000;
  height: 250px;
  width: 250px;
}
.logo .logo-svg {
  height: 100%;
  width: 100%;
  cursor: pointer;
}
.logo .logo-text {
  position: absolute;
  top: 58%;
  right: 16%;
  cursor: pointer;
  font-family: "Montserrat";
  font-size: 55px;
  letter-spacing: 0px;
  font-weight: 400;
  line-height: 58.333333333333336px;
}

.side-header {
  font-family: lato, sans-serif;
  font-size: 18px;
  letter-spacing: 4px;
  font-weight: 600;
  line-height: 28px;
  margin: 60px auto 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #888;
}
.list-thing {
  font-size: 14px;
  margin-bottom: 10px;
}

.bold-it {
  font-weight: bold;
}

.content-container {
  margin-right: 0;
  width: calc(95% - 350px);
  padding: 25px 40px 50px;
}
.content-container > * {
  margin: 0 auto 25px;
}
.content-container > h3 {
  margin: 0 auto 5px;
}
.long-margin {
  margin: 0 auto 50px;
}
.title {
  width: 80%;
  text-align: center;
}
.separator {
  width: 240px;
  height: 2px;
  background-color: #999;
}
.greyed {
  background-color: #ddd;
  width: 100%;
  max-width: 580px;
  text-align: center;
  font-family: lato, sans-serif;
  font-size: 18px;
  letter-spacing: 6px;
  font-weight: 600;
  line-height: 28px;
}
@media screen and (max-width: 1150px) {
  .name {
    color: #fff;
    font-family: 'Raleway';
    font-size: 38px;
    letter-spacing: 6px;
    font-weight: 100;
    line-height: 48px;
  }
}

</style>
