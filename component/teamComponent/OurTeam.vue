<template>
  <div class="teamContainer">
    <h1>Our team</h1>
    <p>consists of completely different people who are united by a</p>
    <p>common desire - to help</p>
    <div class="team-cards">
      <TeamCard
        v-for="member in teamMembers"
        :key="member.name"
        :imageUrl="member.imageUrl"
        :name="member.name"
        :role="member.role"
      />
    </div>
  </div>
</template>

<script>
import TeamCard from "./TeamCard.vue";
export default{
  components:{
    TeamCard
  },
  data(){
    return{
     teamMembers: [
  {
    imageUrl:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744ee9fce7fbaf400c22f8_2.jpg",
    name: "Daryna Deriy",
    role: "Chairman of the Board",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744edaac91b4183ac27e10_5.jpg",
    name: "Polina Snisarenko-Kulchytska",
    role: "Curator of the Foundation",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744ec97586a996f48f7a85_1.jpg",
    name: "Bohdan Kulchytsky",
    role: "Executive Manager",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744eae22e10d8a15f909ef_9.jpg",
    name: "Mykhaylo Deriy",
    role: "Operation Manager",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744e8e05f6c22bac85252a_7.jpg",
    name: "Ksenia Nikishina",
    role: "Office manager",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744f0eb7cd3462ef475ebf_6.jpg",
    name: "Anna Andriychuk",
    role: "SMM-manager",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744e6761e425c6956af3a5_3.jpg",
    name: "Anastasia Kovalchuk",
    role: "Director",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/626ae0bcd92bf48017c14083_basil-square.png",
    name: "Basil Gloo",
    role: "Web Developer",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/626ae01da2a805d176b1606b_%D0%AF%D0%BA%D0%BE%D0%B1%D1%87%D1%83%D0%BA.jpg",
    name: "Lina Yakobchuk",
    role: "Designer",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fc796cf3602b53a7512cf_4.jpg",
    name: "Anastasia Yevchenko",
    role: "Translator",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fc7fcdc0f8e9cbcc8ffed_isa-logo-dog-clean.svg",
    name: "Office Manager",
    role: "open vacancy",
  },
  {
    imageUrl:
      "https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fc81139e6f5dca2d02054_isa-logo-cat-clean.svg",
    name: "SEO specialist",
    role: "open vacancy",
  },
]
    }
  },
  mounted(){
  const ScrollMagic = this.$scrollmagic;
  const controller = new ScrollMagic.Controller();

  const teamCards = this.$el.querySelector(".team-cards")

  if (teamCards) {
      const teamCardsScene = new ScrollMagic.Scene({
        triggerElement: teamCards,
        triggerHook: 0.9,
        duration: "200%",
        offset: 50,
      })
        .setClassToggle(".team-cards", "visible")
        .addTo(controller);
    }
  }
}
</script>

<style>
.teamContainer {
  font-family: sans-serif;
  margin:3rem 7rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.teamContainer h1 {
  font-size: 2.5rem;
  font-family: sans-serif;
}
.teamContainer p {
  font-size: 1.5rem;
  font-family: sans-serif;
}



.team-cards {
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  opacity: 0; 
  transform: translateY(30px); 
  transition: opacity 0.6s, transform 0.6s;
}

.team-cards.visible{
  opacity: 1;
  transform: translateX(0);
}
</style>
