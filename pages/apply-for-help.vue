<template>
    <div class="background-container">
      <div class="closeButton">
        <ButtonComponent buttonName="Close" navigate="/" />
      </div>
      <form class="formContent">
        <h1>Please apply if you need our help</h1>
        <div class="input">
          <label for="role">Who are you?</label>
          <select id="role">
            <option value="animalOwner">Animal Owner</option>
            <option value="volunteers">Volunteers</option>
            <option value="Shelter">Shelter</option>
            <option value="otherOrganization">Other Organization</option>
          </select>
        </div>
        <div class="input">
          <label for="name">Name</label>
          <input id="name" />
        </div>
        <div class="input">
          <label for="email">Email Address</label>
          <input id="email" />
        </div>
        <div class="input">
          <label for="Phone">Phone Number</label>
          <input id="Phone" />
        </div>
        <div class="input">
          <label for="City">City</label>
          <input id="City" />
        </div>
        <div class="input">
          <label for="animal">Number of Animals</label>
          <input id="animal" type="number" />
        </div>
        <div class="submitButtonWrapper">
          <button class="submitButton" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </template>
  
  <script lang="ts" setup>
  import ButtonComponent from "@/component/ButtonComponent.vue";
  </script>
  
  <style scoped>
  .background-container {
    font-family: sans-serif;
    background-color: transparent;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
      ),
      url("https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/62645696be0723edc0b15145_pattern-small.svg");
    background-size: 50px;
    background-repeat: repeat;
    height: auto;
    padding-bottom: 5rem;
    margin: auto
  }
  
  .closeButton {
    padding-top: 5em;
    padding-left: 5em; 
  }
  
  .formContent {
    margin: 1em 5em;
    border: 3px solid black;
    background-color: #fcf944;
    width:fit-content;
    padding: 1.5rem; 
    box-sizing: border-box; 
  }
  
  .input {
    width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .input label {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 1.5em;
    font-weight: bold;
  }
  
  .input input,
  .input select {
    margin: 0;
    padding: 10px;
    font-size: 1em;
    border: 2px solid black;
    outline: none;
    border-radius: 0;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .input input:focus,
  .input select:focus {
    border-color: blue;
    box-shadow: 0 0 5px 2px lightblue; 
    border-width: 3px; 
  }
  
  .submitButtonWrapper {
    display: flex;
    justify-content: flex-start; 
  }
  
  .submitButton {
    margin-top: 20px;
    padding: 0.5rem 1.5rem; 
    background-color: white;
    color: black;
    border: 2px solid black;
    cursor: pointer;
    font-size: 1.2em;
    transition: background-color 0.3s ease;
  }
  
  .submitButton:hover {
    background-color: #f0f0f0;
  transform: scale(1.1) translate(10px, -10px);
  transition: all 0.5s ease-in-out;
  }
  </style>
  