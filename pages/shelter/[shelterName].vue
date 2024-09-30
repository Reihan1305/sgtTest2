<template>
  <div class="shelterContainer">
    <img class="shelterImg" :src="shelter?.imageHeader" alt="Shelter Header Image" />
    
    <div>
      <div class="shelterDesc">
        <h1>{{ shelter?.title }}</h1>

        <div class="petsCardContainer">
          <div class="backgroundCard">
            <div class="dogsCard petCard">
              <img
                style="width: 150px"
                src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6265332e63b917130ca8d702_isa-logo-dog-clean.svg"
                alt="Dog Icon"
              />
              <h1>{{ shelter?.dogs }}</h1>
              <h1>Dogs</h1>
            </div>
          </div>
          <div class="backgroundCard">
            <div class="catsCard petCard">
              <img
                style="width: 150px"
                src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6264275680ed1a3a363d12d8_isa-logo-cat-clean.svg"
                alt="Cat Icon"
              />
              <h1>{{ shelter?.cats }}</h1>
              <h1>Cats</h1>
            </div>
          </div>
        </div>

        <h1>
          Address : <span>{{ shelter?.address }}</span>
        </h1>

        <div v-if="shelter?.foodNeedsPerMonth">
          <h1>
            Food Needs Per Month : <span>{{ shelter.foodNeedsPerMonth }}</span>
          </h1>
        </div>
        
        <div v-if="shelter?.medicineNeeds">
          <h1>
            Medicine Needs : <span>{{ shelter.medicineNeeds }}</span>
          </h1>
        </div>

        <div v-if="shelter?.otherNeeds">
          <h1>
            Other Needs : <span>{{ shelter.otherNeeds }}</span>
          </h1>
        </div>
      </div>
    </div>

    <div v-if="shelter?.images">
      <div class="shelterCarousel">
        <img :src="shelter.images[currentIndex]" alt="Carousel Image" class="carousel-image" />
        <button class="carousel-button" @click="prevSlide">❮</button>
        <button class="carousel-button" @click="nextSlide">❯</button>
        <div class="indicators">
          <span
            v-for="(image, index) in shelter?.images"
            :key="index"
            :class="['indicator', { active: index === currentIndex }]"
            @click="goToSlide(index)"
          ></span>
        </div>
      </div>
    </div>

    <BackHomeButton />
  </div>

  <DonateButton />
  <FooterComponent />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import DonateButton from "@/component/DonateButton.vue";
import FooterComponent from "@/component/FooterComponent.vue";
import BackHomeButton from "@/component/projectComponent/BackHomeButton.vue";

const route = useRoute();
const shelterName = route.params.shelterName;
const shelter = ref(null);

const fetchShelterData = async () => {
  try {
    const response = await fetch("/shelter.json");
    const data = await response.json();
    shelter.value = data.find(
      (item) =>
        item.title.replace(/\s+/g, "-").toLowerCase() === shelterName.toLowerCase()
    );
  } catch (error) {
    console.error("Error fetching shelter data:", error);
  }
};

onMounted(fetchShelterData);

const currentIndex = ref(0);
let intervalId;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % shelter?.images.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + shelter?.images.length) % shelter?.images.length;
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
.shelterContainer {
  font-family: sans-serif;
}

.shelterDesc {
  padding: 5rem 7rem;
}

.shelterDesc span {
  font-weight: 500;
}

.shelterImg {
  width: 100%;
  height: 80vh;
  object-fit: cover;
}

.petsCardContainer {
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 5rem;
}

.petsCardContainer h1 {
  margin: 0;
}

.petCard {
  background-color: #fcf944;
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  padding: 40px 80px;
  gap: 10px;
  height: 100%;
}

.backgroundCard {
  background-color: #fcf944;
  display: flex;
  flex-direction: column;
}

.petCard:hover {
  transform: scale(0.9);
  transition: all 0.5s ease-in-out;
}

.shelterCarousel {
  border: 3px solid black;
  position: relative;
  width: 100%;
  height: 60vh;
}

.carousel-image {
  width: 60%;
  height: 100%;
  object-fit: fill;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 24px;
}

.carousel-button:hover {
  background-color: rgba(255, 255, 255, 1);
}

.carousel-button:first-of-type {
  left: 10px;
}

.carousel-button:last-of-type {
  right: 10px;
}

.indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
}

.indicator {
  width: 12px;
  height: 12px;
  background-color: rgb(54, 51, 51);
  margin: 0 5px;
  cursor: pointer;
}

.indicator.active {
  background-color: black;
}
</style>
