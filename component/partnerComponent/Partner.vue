<template>
  <div class="companyMain" style="margin: 5rem 7rem">
    <div class="companyContainer">
      <h1>Our partners</h1>
      <p>are take care of our fund and help us with many questions</p>
      <div class="companyList w-dyn-list">
        <div role="list" class="companyCards" ref="companyList">
          <div
            v-for="(partner, index) in partnerLogos"
            :key="index"
            role="companyListItem"
            class="companyCardSwap"
            ref="companyItems"
          >
            <div class="companyCard centered">
              <img
                style="filter: grayscale(100%);width: 700px; height: 70px;"
                :src="partner.src"
                :alt="partner.alt"
                loading="lazy"
                class="companyLogo"
              />
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
      partnerLogos: [
        {
          src: "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62aa3401042d425391235aaa_Logo-adviRES.jpg",
          alt: "Logo-adviRES"
        },
        {
          src: "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62aa33e1380de680b7110ebf_ovid-wind-logo.png",
          alt: "ovid-wind-logo"
        },
        {
          src: "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d803f32677c8352bc485_tbs_logo1-02.png",
          alt: "TBS Industry",
          sizes: "",
        },
        {
          src: "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d7edf0c46ce38f559328_download.png",
          alt: "Accurl"
        },
        {
          src: "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d7d930a5c2377aedf9d4_logo_laudis_accountancy.png",
          alt: "Laudis"
        },
        {
          src: "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d7c51ad96b1cbf31b0c0_photo_2022-04-21%2020.43.09.jpeg",
          alt: "Kickbite"
        },
      ],
    };
  },
  methods: {
    initScrollMagic() {
      const ScrollMagic = this.$scrollmagic;
      const controller = new ScrollMagic.Controller();

      // Select all the partner item references
      const companyItems = this.$refs.companyItems;

      // Loop through each item reference and create scenes
      companyItems.forEach((item) => {
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
.companyMain {
  margin: 2rem 0; /* Added vertical margin */
}

.companyContainer h1 {
  font-size: 2.5rem;
  font-family: sans-serif;
}
.companyContainer p {
  font-size: 1.5rem;
  font-family: sans-serif;
}

.companyCards {
  margin:5rem 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Four columns */
  gap: 20px; /* Space between logos */
}

.companyCardSwap {
  opacity: 0; /* Start with transparency */
  transform: translateY(20px); /* Shift down for entrance effect */
  transition: opacity 0.5s ease, transform 0.5s ease; /* Transition */
}

.companyCardSwap.visible {
  opacity: 1; /* Show logo */
  transform: translateY(0); /* Return to original position */
}

.companyLogo {
  max-width: 100%; /* Ensure logo doesn't overflow */
  height: auto; /* Maintain aspect ratio */
}
</style>
