<template>
  <div class="container">
    <img
      class="responsive-image"
      src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6273b2a73c4d0c566c9e7578_65f90aa5-41ee24d6fde6952e18f17433e84f6789.jpeg"
      alt="Project Image"
    />
    <div class="textContainer">
      <div class="mainContent">
        <h1>Emergency Aid. WAR 2022.</h1>
        <p>
          24.02.2022 - the day when the world got divided into Before and After.
        </p>
        <p>
          Life would never be the same. Russia attacked Ukraine. Thousands of
          victims, children, and vast numbers of dead animals or those who have
          lost their homes.
        </p>
        <p>
          We are incredibly grateful to the People, despite everything, who did
          not leave their little friends behind, but unfortunately, there are
          many examples to the contrary. Sometimes it happened due to owners’
          ignorance or death, and other times because of other terrible
          circumstances that forced animals to become homeless. A humanitarian
          catastrophe has begun. Thousands of lost and wounded animals are
          wandering the deserted cities and villages, searching for some kind of
          salvation.
        </p>
        <p>
          Even before the war, we kept the records of shelters and guardians in
          Ukraine; therefore, we have much information from urgent needs to
          food, medicine, and other necessary services. Since the beginning of
          the full-scale war, the database was joined by: a massive number of
          homeless animals, relocated animals from hot spots to more peaceful
          regions, and increased needs during an unstable economic situation in
          the country. Shortage of animal feed, medicine, volunteers.
        </p>
      </div>
      <div class="goals">
        <h1>Our goal</h1>
        <p>
          To provide emergency humanitarian aid from abroad; implement logistics
          in Ukraine; assist in coordinating evacuations, transportation, and
          financial aid.
        </p>
      </div>
      <div>
        <div class="carousel-container">
          <img
            :src="imageCarousel[currentIndex]"
            alt="Carousel Image"
            class="carousel-image"
          />
          <button class="carousel-button" @click="prevSlide">❮</button>
          <button class="carousel-button" @click="nextSlide">❯</button>
          <div class="indicators">
            <span
              v-for="(image, index) in imageCarousel"
              :key="index"
              :class="['indicator', { active: index === currentIndex }]"
              @click="goToSlide(index)"
            ></span>
          </div>
        </div>
        <BackHomeButton/>
      </div>
    </div>
  </div>
  <DonateButton />
  <FooterComponent />
</template>

<script lang="js" setup>
import DonateButton from "@/component/DonateButton.vue";
import FooterComponent from "@/component/FooterComponent.vue";
import BackHomeButton from "@/component/projectComponent/BackHomeButton.vue";

const imageCarousel = [
  "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62742134883b5304a7292750_1.jpeg",
  "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6273b2a73c4d0c566c9e7578_65f90aa5-41ee24d6fde6952e18f17433e84f6789.jpeg",
  "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62742134da736f8366975b31_311ac291f707ff4c2150a5036ce6f7ff.jpeg",
  "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62742134ba5fd0863630c995_01000n3e-a982_1280x720.jpeg",
  "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62742134fb5f3e365d6c2fa4_208804.jpeg",
  "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6274213417980bd532a6f1cf_773119CB-AD7C-45E3-A821-6C9DDC8F2BED_w1023_r1_s.jpeg",
  "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62742134174964bb4f26ee8a_8605194-zoopatrul-755.jpeg",
  "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6274213424a60b17b4cd4a4a_60909991_303.jpeg",
  "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62742134d8b715805dbba6e1_61145165_303.jpeg",
  "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62742134f7e8209705b0d0c8_61145173_303.jpeg",
  "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62742134b2eac31636abc7ef_61145262_303.jpeg",
  "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627421355340f7fb9f894f14_61145278_303.jpeg",
  "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62742134502a7a0dbb885334_d00b9c843f06ad19bc523b0fd16f9cd3.png",
  "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62742134c2a1ff09183aea97_Obkladynka-2.jpeg",
  "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627421340a98b64e4a213f7d_tvarini.jpeg"
];

const currentIndex = ref(0);
let intervalId;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % imageCarousel.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + imageCarousel.length) % imageCarousel.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

const startAutoSlide = () => {
  intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds
};

const stopAutoSlide = () => {
  clearInterval(intervalId);
};

onMounted(startAutoSlide);
onBeforeUnmount(stopAutoSlide);
</script>

<style scoped>
.container {
  font-family: sans-serif;
}

.responsive-image {
  width: 100%; /* Image will take full width */
  height: 80vh; /* Image will take full height of the container */
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

.carousel-container {
  border: 3px solid black;
  position: relative;
  width: 100%;
  height: 60vh;
}

.carousel-image {
  width: 60%; /* Image fills the container */
  height: 100%; /* Image fills the container */
  object-fit: fill; /* Cover the container while maintaining aspect ratio */
  position: absolute;
  top: 50%; /* Position it vertically in the middle */
  left: 50%; /* Position it horizontally in the middle */
  transform: translate(-50%, -50%);
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent background */
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 24px; /* Size of the arrows */
}

.carousel-button:hover {
  background-color: rgba(255, 255, 255, 1); /* Change background on hover */
}

.carousel-button:first-of-type {
  left: 10px; /* Position the left button */
}

.carousel-button:last-of-type {
  right: 10px; /* Position the right button */
}

.indicators {
  position: absolute;
  bottom: 10px; /* Position at the bottom */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Centering */
  display: flex;
  justify-content: center;
  margin: 0; /* No margin */
}

.indicator {
  width: 12px;
  height: 12px;
  background-color: rgb(54, 51, 51);
  margin: 0 5px;

  cursor: pointer;
}

.indicator.active {
  background-color: black; /* Color for active dot */
}
</style>
