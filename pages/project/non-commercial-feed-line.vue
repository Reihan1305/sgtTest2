<template>
  <div class="container">
    <img
      class="responsive-image"
      src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fd13c3c64c42da73c9534_food-line.jpg"
      alt="Project Image"
    />
    <div class="textContainer">
      <div class="mainContent">
        <h1>Non-commercial feed line</h1>
        <p>
          The ISA team has provided social assistance to homeless animals for
          many years. We have come a long way in understanding the basic
          everyday problems with the maintenance and treatment of street dogs
          and cats, namely the purchase of food, medicine, veterinary services,
          and volunteer household needs.
        </p>
        <p>
          For a long time, we observed the tendencies of the charitable
          volunteer community and analyzed the main issues of our business
          today. We believe that every year Ukrainians become more responsible
          and aware of what concerns our environment, so charitable funds should
          not go to commerce, taxes, and low-quality products. Based on our
          experience and thanks to the support of socially active companies,
          volunteers, and citizens - we are launching the first manufacturing
          project in Ukraine. We can build a line for manufacturing the
          non-commercial feed, not for sale but to support low-budget shelters,
          volunteers, and guardians throughout Ukraine.
        </p>
      </div>
      <div class="goals">
        <h1>Our goal</h1>
        <p>
          To establish the seamless operation of the line to manufacture a
          high-protein complete feed diet for dogs and cats with the possibility
          of processing wet meat and raw fish materials.
        </p>
      </div>
      <BackHomeButton />
    </div>
  </div>
  <DonateButton />
  <FooterComponent />
</template>

<script lang="js" setup>
import DonateButton from "@/component/DonateButton.vue";
import FooterComponent from "@/component/FooterComponent.vue";
import BackHomeButton from "@/component/projectComponent/BackHomeButton.vue";
</script>

<style scoped>
.container {
  font-family: sans-serif;
}

.responsive-image {
  width: 100%;
  height: 80vh;
  object-fit: cover;
}

.textContainer {
  padding: 1rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: start;
}

.textContainer h1 {
  font-size: 3em;
}
.textContainer p {
  font-size: 1.5em;
}
</style>
