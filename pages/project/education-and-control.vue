<template>
  <div class="container">
    <div class="textContainer">
      <div class="mainContent">
        <h1>Education and Control</h1>
        <p>
          Based on our experience, we understand the importance of using the aid
          efficiently. We chose the main types of volunteering, guardianship,
          and shelter management problems. There are several issues that we
          believe need to be addressed in the first place:
        </p>
        <ul>
          <li>
            education of volunteers and their communication with the shelters,
            foundations, private donors;
          </li>
          <li>social media management and email marketing;</li>
          <li>control over shelter care and wild flocks;</li>
          <li>
            recommendations on the arrangement of space, purchase of medicine,
            distribution of financial or other aid.
          </li>
        </ul>
        <p>
          We want to start online meetings with the animal community to discuss
          various issues, solutions, and strategy plans, because, after all, in
          our opinion, dialogue is crucial in contemporary life.
        </p>
      </div>
      <div class="goals">
        <h1>Our goal</h1>
        <p>
          Organize lectures on communication, invite guest speakers, coordinate
          processes, set up effective aid management.
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
.textContainer ul li {
  font-size: 1.5em;
}
</style>
