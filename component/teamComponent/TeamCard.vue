<template>
  <div class="cardBackground">
    <div class="card" @mouseover="hover = true" @mouseleave="hover = false">
      <img style="filter: grayscale(100%);" :src="imageUrl" :alt="name" class="team-photo" />
      <div class="info">
        <p class="team-name">{{ name }}</p>
        <p class="team-role">{{ role }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const hover = ref(false);
</script>

<style scoped>
.cardBackground {
  background-color: #FCF944;
  width: 250px;
  height: 370px;
  text-align: center;
  transition: transform 0.2s ease;
  cursor: pointer;
}

.card {
  background-color: #FCF944;
  border: 3px solid black;
  width: 250px;
  height: 370px;
  text-align: center;
  transition: transform 0.2s ease;
  cursor: pointer;
}

.card:hover {
  transform: scale(0.9);
  transition: all 0.5s ease-in-out;
}

.team-photo {
  margin-top: 10%;
  width: 80%;
  height: auto;
}

.info {
  margin-top: 12px;
}

.team-name {
  font-size: 1.2rem;
}

.team-role {
  font-size: 1.2rem;
}
</style>
