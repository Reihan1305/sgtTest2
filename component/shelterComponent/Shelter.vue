<template>
    <div class="backgroundShelter">
      <div class="shelterDesc">
        <h1>We want to help</h1>
        <p>homeless packs, volunteers, guardians, overstayers, shelters, and</p>
        <p>other organisations</p>
      </div>
      <div class="buttonContainer">
        <ButtonComponent
          v-for="(shelter, index) in shelters"
          :key="index"
          :buttonName="shelter.title"
          :navigate="navigateToShelter(shelter.title)"
        />
      </div>
      <FormButton/>
    </div>
  </template>
  
  <script>
  import ButtonComponent from '../ButtonComponent.vue';
import FormButton from './FormButton.vue';
  export default {
    components: {
      ButtonComponent,
      FormButton
    },
    data() {
      return {
        shelters: [],
      };
    },
    methods: {
      async fetchShelters() {
        try {
          const response = await fetch('/shelter.json');
          this.shelters = await response.json();
        } catch (error) {
          console.error('Error fetching shelters:', error);
        }
      },
      navigateToShelter(title) {
        const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
        return `/shelter/${formattedTitle}`;
      },
    },
    mounted() {
      this.fetchShelters();
    },
  };
  </script>
  
  <style>
  .backgroundShelter {
    background-color: #fcf944;
    font-family: sans-serif;
    padding: 2rem 14rem; /* Margin untuk induk */
  }
  
  .shelterDesc{
    margin-bottom: 20px
  }

  .shelterDesc h1{
    font-size: 2em;
    font-weight: bold;
}
  .shelterDesc p{
    font-size: 1em;
    margin: 0
}

  .buttonContainer {
    display: flex;
    flex-wrap: wrap; /* Mengizinkan baris baru untuk tombol */
    gap: 1rem; /* Jarak antara tombol */
    margin-bottom: 5rem;
  }
  
  .buttonContainer > * {
    flex: 1 1 calc(25% - 1rem); /* Menampilkan 4 tombol per baris */
    box-sizing: border-box; /* Menghitung padding dan margin dalam ukuran total */
  }
  </style>
  
