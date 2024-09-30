<template>
    <div class="icon-container">
      <div v-for="(item, index) in socialIcons" :key="index" class="icon">
        <img :src="item.src" :alt="item.alt" />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
   const socialIcons = [
          { src: "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274433d06989d76edcff015_9055867_youtube_bxl.svg", alt: "YouTube" },
          { src: "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274449bf840c377311f2e08_9055851_instagram_bxl.svg", alt: "Instagram" },
          { src: "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg", alt: "Facebook" },
          { src: "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg", alt: "Patreon" },
          { src: "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg", alt: "Telegram" },
        ]
  </script>
  
  <style scoped>
  .icon-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .icon {
    margin: 0 0px;
  }
  .icon img {
    width: 50px;
    height: 50px;
    transition: transform 0.2s;
  }
  .icon img:hover {
    transform: scale(0.7);
  }
  </style>
  