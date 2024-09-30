<template>
  <div class="aboutContainer">
    <h1>We are</h1>
    <p>
      team of like-minded people, socially active companies, media
      personalities, volunteers who help low-income shelters and foster carers
      to support homeless animals.
    </p>
    <h1>Our primary goal</h1>
    <p>
      is to provide animals with the most necessary things - food, medicine, and
      urgent needs for the livelihood of shelters. We believe in our power and
      the power of conscious citizens who care about the environment and their
      health, who understand the importance of helping each other, especially
      our little friends. Growth begins with your care for your loved ones.
      Animals are one of the closest creatures to humans who remain with us
      throughout our lives. We all know the healing power of warmth, grace, and
      big loving eyes.
    </p>
    <div class="quotes">
      <p>"Animals need to have friends. Just like humans."</p>
      <p>- James Herriot, All Creatures Great and Small</p>
    </div>
    <p>
      Who else if not we should support our younger brothers, especially in
      difficult times? Let's be friends!
    </p>

    <div class="videoContainer">
      <iframe
        src="https://www.youtube.com/embed/5Wk1rp99B7o"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const ScrollMagic = this.$scrollmagic;
    const controller = new ScrollMagic.Controller();

    const videoContainer = this.$el.querySelector(".videoContainer");
    const videoContainerScene = new ScrollMagic.Scene({
      triggerElement: videoContainer,
      triggerHook: 0.9,
      duration: "90%",
      offset: 70,
    })
      .setClassToggle(".videoContainer", "visible")
      .addIndicators()
      .addTo(controller);
  },
};
</script>

<style>
.aboutContainer {
  background-color: white;
  padding: 5rem 10rem;
  font-family: sans-serif;
}
.aboutContainer h1 {
  margin: 20px 0;
  font-size: 3em;
  font-weight: bold;
}
.aboutContainer p {
  margin: 10px 0;
  font-size: 2em;
  font-weight: 100;
  text-align: left;
}
.quotes {
  border-left: 3px solid salmon;
  margin: 50px 20px 50px 100px;
  padding: 20px;
}
.videoContainer {
  display: flex;
  justify-content: center;
  transform: translateY(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  margin-top: 2rem;
  padding: 0; 
  overflow: hidden;
  border: 3px solid black; 
  position: relative; 
  width: 1020px;
  height: 580px;
}
.videoContainer iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.videoContainer.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
