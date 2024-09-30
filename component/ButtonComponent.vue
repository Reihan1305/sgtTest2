<template>
  <div class="background-block white" ref="donateButton">
    <a :href="navigate" class="button-link w-inline-block">
      <div class="button-inner">
        <div class="button-text no-margins">{{ buttonName }}</div>
      </div>
    </a>
    <link rel="prerender" :href="navigate" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  buttonName: string;
  navigate: string;
}>();
</script>

<style scoped>
.background-block {
  font-family: sans-serif;
  background-color: white;
  border: 3px solid black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.background-block:hover {
  border: none;
}

a {
  text-decoration: none;
  color: black;
}

.button-inner {
  background-color: transparent;
  padding: 0.5rem 1.5em; /* Memberikan padding untuk ukuran tombol yang sesuai */
  display: flex; /* Memungkinkan teks untuk diatur dengan baik */
  align-items: center; /* Vertikal align teks */
  transition: transform 0.2s ease-out; /* Transisi transformasi */
}

.button-inner:hover {
  border: 3px solid black; /* Menambahkan border saat di-hover */
  transform: translate(10px, -10px); /* Menggeser ke kiri atas */
}

.button-text.no-margins {
  margin: 0;
  font-size: 1.5em; /* Ukuran font sesuai dengan h3 */
  font-weight: bold; /* Membuat teks menjadi bold */
  transition: transform 0.2s ease; /* Transisi untuk teks */
}
</style>
