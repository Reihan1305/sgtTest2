<template>
  <div class="background">
    <div class="firstContainer">
      <h1>Contact us</h1>
      <p>Kyiv, Ukraine</p>
      <div class="email-container">
      <div class="email">
      <p><a href="mailto:mail@isa.co.ua?subject=You've%20got%20an%20email!">mail@isa.co.ua</a></p>
      </div>
      
    </div>
      <SosmedComponent />
    </div>
    <div class="secondContainer">
      <img
        style="width: 600px; height: 300px"
        src="https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/62647f9fbe07235ba9b28d67_star-white-with-animals.svg"
      />
    </div>
  </div>
</template>

<script>
import SosmedComponent from "@/component/SosmedComponent.vue";

export default {
  components: {
    SosmedComponent,
  },
  mounted() {
    const ScrollMagic = this.$scrollmagic;
    const controller = new ScrollMagic.Controller();

    const secondContainer = this.$el.querySelector(".secondContainer");

    const secondContainerScene = new ScrollMagic.Scene({
      triggerElement: secondContainer,
      triggerHook: 0.9,
      duration: "80%",
      offset: 50,
    })

      .setClassToggle(".secondContainer", "visible")
      .addIndicators()
      .addTo(controller);
  },
};
</script>

<style scoped>
.background {
  background-color: #31be32;
  padding: 5rem 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.firstContainer {
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.firstContainer h1 {
  margin: 0;
  font-size: 5em;
}

.secondContainer {
  margin-bottom: 5rem;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.secondContainer.visible {
  opacity: 1;
  transform: translateY(0);
}
.email-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .email {
    margin: 0 0px;
  }
  .email p {
    transition: transform 0.2s;
  }
  .email p:hover {
    transform: scale(0.9);
  }
  .email a{
    text-decoration: none;
    color :black;
  }
</style>
