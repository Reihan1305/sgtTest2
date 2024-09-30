<template>
  <div class="paddingVertical">
    <div class="container">
      <h2>Socially active citizens</h2>
      <p>support us</p>
      <div class="collectionListWrap w-dyn-list">
        <div role="list" class="cardContainer">
          <div
            v-for="(partner, index) in partners"
            :key="index"
            class="collectionItem---partner w-dyn-item"
            ref="partnerItems"
          >
            <div class="partnerWrap">
              <img
              style="filter: grayscale(100%);"
                :src="partner.imageUrl"
                loading="lazy"
                :alt="partner.name"
                class="partnerLogo"
              />
              <div class="teamName">{{ partner.name }}</div>
              <div class="teamTitle">{{ partner.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          name: "Oleksiy Tritenko",
          title: "theater and film actor",
          imageUrl:
            "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/628398012a964488bb09078d_13.jpg",
        },
        {
          name: "Stanislav Boklan",
          title: "People's Artist of Ukraine",
          imageUrl:
            "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/628397b3f06d2066cfe8e9a2_14.jpg",
        },
        {
          name: "Alexander Rudinsky",
          title: "theater and film actor",
          imageUrl:
            "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcdfcb2137dcf7db53e7f_12.jpg",
        },
        {
          name: "Oksana Zhdanova",
          title: "theater and film actress",
          imageUrl:
            "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcdd72d729d8ecacf6de7_11.jpg",
        },
        {
          name: "Natalka Denisenko",
          title: "theater and film actress",
          imageUrl:
            "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcdaedc0f8eea17c92429_10.jpg",
        },
        {
          name: "Maksym Samchyk",
          title: "theater and film actor",
          imageUrl:
            "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcd87d51b9051dfcbf349_09.jpg",
        },
        {
          name: "Kateryna Vyshneva",
          title: "theater and film actress",
          imageUrl:
            "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcd5ca9508410b3a0d824_08.jpg",
        },
        {
          name: "Irma Vitovska",
          title: "Honored Actress of Ukraine",
          imageUrl:
            "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcd3288758547e6ee0e22_07.jpg",
        },
        {
          name: "Igor Portyanko",
          title: "actor of theater and cinema",
          imageUrl:
            "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcd1790c298c49bc7c436_06.jpg",
        },
        {
          name: "Dmytro Surzhikov",
          title: "Honored Artist of Ukraine",
          imageUrl:
            "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fccf0fc672a5dcfa87ee9_05.jpg",
        },
        {
          name: "Daria Barihashvili",
          title: "theater and film actress",
          imageUrl:
            "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fccc57c3cb5177369015e_04.jpg",
        },
        {
          name: "Vera Kobzar",
          title: "theater and film actress",
          imageUrl:
            "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcc9bc50d7acc036982a9_03.jpg",
        },
        {
          name: "Andriy Fedynchyk",
          title: "theater and film actor",
          imageUrl:
            "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcc7339e6f5389ed03013_02.jpg",
        },
        {
          name: "Anastasia Nesterenko",
          title: "theater and film actress",
          imageUrl:
            "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcc4b694dfd4d65a13230_01.jpg",
        },
      ],
    };
  },
  methods: {
    initScrollMagic() {
      const ScrollMagic = this.$scrollmagic;
      const controller = new ScrollMagic.Controller();
      this.$refs.partnerItems.forEach((item) => {
        new ScrollMagic.Scene({
          triggerElement: item,
          triggerHook: 0.9,
        })
          .setClassToggle(item, "visible") // add class to reveal
          .addTo(controller);
      });
    },
  },
  mounted() {
    this.initScrollMagic();
  },
};
</script>

<style>
.paddingVertical {
  padding: 2rem 0;
  background-color: #ff97d0;
  font-family: sans-serif;
  padding-bottom: 5rem
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.container h1 {
  font-size: 2.5rem;
  font-family: sans-serif;
}
.container p {
  font-size: 1.5rem;
  font-family: sans-serif;
}

.collectionListWrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Align items to the left */
}

.cardContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* Space between cards */
}

.collectionItem---partner {
  width: calc(25% - 1rem); /* Max 4 cards per row */
  opacity: 0;
  transform: translateY(50px);
  gap:10px;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.collectionItem---partner.visible {
  opacity: 1;
  transform: translateY(0);
}

.partnerWrap {
  text-align: center;
}

.partnerLogo {
  max-width: 100%;
  height: auto;
  font-family: sans-serif;
}

.teamName {
  font-weight: bold;
  font-family: sans-serif;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
}

.teamTitle {
  font-family: sans-serif;
  margin-top: 0.5rem;
  margin-bottom: 0; 
}
</style>
