<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="100"
    height="100"
    class="transition-svg"
  >
    <defs>
      <clipPath id="clip">
        <rect width="100" height="100" x="0" y="0"></rect>
      </clipPath>
    </defs>
    <g clip-path="url(#clip)">
      <g :class="{ 'shape-a': isVShape, 'shape-diamond': !isVShape }">
        <path
          v-if="isVShape"
          d="M50 85 L15 15 H35 L50 45 L65 15 H85 Z"
          fill="rgb(6,6,8)"
        ></path>
        <path v-else d="M50 15 L85 50 L50 85 L15 50 Z" fill="rgb(6,6,8)"></path>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "CustomShapeTransition",
  data() {
    return {
      isVShape: true,
    };
  },
  mounted() {
    // Interval untuk mengganti bentuk setiap 2 detik
    setInterval(() => {
      this.isVShape = !this.isVShape;
    }, 2000); // 2000 ms = 2 detik
  },
};
</script>

<style scoped>
.transition-svg {
  width: 3%; /* Ukuran SVG yang diinginkan */
  height: 3%; /* Ukuran SVG yang diinginkan */
}

.shape-a {
  animation: shapeTransition 4s ease-in-out; /* Menggunakan ease-in-out */
}

.shape-diamond {
  animation: shapeTransition 4s ease-in-out; /* Menggunakan ease-in-out */
}
</style>
