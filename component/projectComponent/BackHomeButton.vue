<template>
    <router-link to="/" class="mainContainer">
        <img 
            style="width: 44px; height: 30px;" 
            src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6273a272fe3407579aa3d6c9_PngItem_344959.png"
            class="icon" 
        />
        <h3>
            back to homepage
        </h3>
    </router-link>
</template>

<style>
.mainContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    text-decoration: none;
    color:black;
    margin-top: 50px;
    margin-bottom: 50px
}

.icon {
    transition: transform 0.3s ease;
}

.mainContainer:hover .icon {
    transform: translateX(-20px); 
}
</style>
