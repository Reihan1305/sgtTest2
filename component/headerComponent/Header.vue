<template>
  <div class="headerContainer">
    <div class="firstContainer">
      <div class="imageContainer">
        <img
          class="animalLogo logo-dog"
          src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6265332e63b917130ca8d702_isa-logo-dog-clean.svg"
        />
        <img
          class="animalLogo logo-cat"
          src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6264275680ed1a3a363d12d8_isa-logo-cat-clean.svg"
        />
      </div>
      <div class="titleContainer">
        <h1 class="digit">Innovative</h1>
        <h1 class="digit">Solutions</h1>
        <h1 class="digit">For</h1>
        <h1 class="digit">Animals</h1>
      </div>
    </div>
    <div class="secondContainer">
      <h2>Charity Organization</h2>
      <SosmedComponent />
    </div>
    <LottieScrollDown />
  </div>
</template>

<script>
import LottieScrollDown from "@/component/headerComponent/LottieScrollDown.vue";
import SosmedComponent from "@/component/SosmedComponent.vue";

export default {
  components: {
    LottieScrollDown,
    SosmedComponent,
  },
  mounted() {
    const ScrollMagic = this.$scrollmagic;
    const controller = new ScrollMagic.Controller();

    // Animasi untuk titleContainer
    const revealTitleElements = document.getElementsByClassName("digit");
    const titleContainer = this.$el.querySelector(".titleContainer");

    const titleScene = new ScrollMagic.Scene({
      triggerElement: titleContainer, // elemen pemicu scroll
      triggerHook: 0.9, // pemicu munculnya animasi saat elemen 90% terlihat di viewport
      duration: "80%", // durasi 80% dari viewport untuk menentukan kapan animasi selesai
      offset: 50, // memindahkan pemicu ke tengah elemen
    })
      .setClassToggle(".digit", "visible")
      .addIndicators()
      .addTo(controller);

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
.headerContainer {
  font-family: sans-serif;
  height: 100%;
  padding-top: 10rem;
  padding-bottom: 1rem;
  background-color: #fcf944;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.firstContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.imageContainer {
  position: relative;
  width: 150px;
  height: 150px;
}

.animalLogo {
  position: absolute;
  height: 150px;
  opacity: 0;
  animation: fadeInOut 6s infinite;
}

@keyframes fadeInOut {
  0%,
  20% {
    opacity: 0;
    transform: translateY(-50px);
  }
  30%,
  70% {
    opacity: 1;
    transform: translateY(0);
  }
  80%,
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
}

.logo-dog {
  animation-delay: 0s;
}

.logo-cat {
  animation-delay: 3s;
}

.titleContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.titleContainer h1 {
  margin: 0;
  font-size: 2.5rem;
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.titleContainer h1.visible {
  opacity: 1;
  transform: translateX(0);
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
</style>
