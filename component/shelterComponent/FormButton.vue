<template>
  <div class="background-block" ref="donateButton">
    <a href="/apply-for-help" class="button-link w-inline-block">
      <div class="button-inner">
        <div class="button-text no-margins">apply for help</div>
        <img
          style="width: 44px; height: 30px"
          src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6273a272fe3407579aa3d6c9_PngItem_344959.png"
          class="icon"
        />
      </div>
    </a>
    <link rel="prerender" href="/apply-for-help" />
  </div>
</template>

<style scoped>
.background-block {
  font-family: sans-serif;
  background-color: #ff97d0;
  border: 3px solid black;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

a {
  text-decoration: none;
  color: black;
}

.button-inner {
  background-color: transparent;
  padding: 0.5rem 1.5em;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease-out;
}

.button-text.no-margins {
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
}

.icon {
  margin-left: 20px;
  transform: scaleX(-1);
  transition: transform 0.3s ease;
}

.background-block:hover .icon {
  transform: scaleX(-1) translateX(-20px);
}
</style>
