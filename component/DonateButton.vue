<template>
    <div class="background-block white" ref="donateButton">
      <a href="/donate" class="button-link w-inline-block">
        <div class="button-inner">
          <div class="button-text no-margins">donate</div>
        </div>
      </a>
      <link rel="prerender" href="/donate" />
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const ScrollMagic = this.$scrollmagic; 
      const controller = new ScrollMagic.Controller();
  
      // Scene untuk donateButton
      const donateButtonScene = new ScrollMagic.Scene({
        triggerElement: this.$el, 
        triggerHook: 0.9,
      })
        .on('enter', () => {
          this.$refs.donateButton.classList.add('visible'); // Tambahkan kelas 'visible'
        })
        .addTo(controller);
    },
  };
  </script>
  
  <style scoped>
  .background-block {
  font-family: sans-serif;
    background-color: white;
    border: 3px solid black;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 2em; /* Posisi dari atas */
    right: 2em; /* Posisi dari kanan */
    z-index: 1000; /* Memastikan elemen berada di atas elemen lainnya */
    opacity: 0; /* Awalnya tidak terlihat */
    transform: translateY(-50px); /* Pindahkan ke atas */
    transition: opacity 0.5s ease-out, transform 0.5s ease-out; /* Transisi untuk efek */
  }
  
  .background-block.visible {
    opacity: 1; /* Menjadi terlihat */
    transform: translateY(0); /* Kembali ke posisi normal */
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
  