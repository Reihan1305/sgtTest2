<template>
    <div class="background-block" :style="{ backgroundColor: backgroundColor}">
      <div class="button-inner">
        <div class="button-text no-margins">
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
        </div>
      </div>
      <link rel="prerender" href="/donate" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      backgroundColor: {
        type: String,
        default: 'black',
      },
    },
  };
  </script>
  
  <style scoped>
  .background-block {
    width: 100%;
    font-family: sans-serif;
    border: 3px solid white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  .background-block:hover {
    border: none;
  }
  
  .button-inner {
    width: 100%;

    background-color: transparent;
    padding: 0.5rem 1.5em; 
    display: flex;
    align-items: center;
    transition: transform 0.2s ease-out;
  }
  
  .button-inner:hover {
    border: 3px solid white; 
    transform: translate(10px, -10px); 
  }
  
  .button-text.no-margins {
    margin: 0;
    font-size: 1em;
    font-weight: bold; 
    transition: transform 0.2s ease; 
  }
  </style>
  