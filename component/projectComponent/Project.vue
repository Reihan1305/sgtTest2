<template>
  <div class="backgroundProject">
    <h1>Our Projects</h1>
    <p>
      are very different in terms of priority, scale and complexity of
      implementation
    </p>
    <div class="projectContainer">
      <div
        class="card"
        v-for="(project, index) in projects"
        :key="index"
        @click="navigateToProject(project.title)"
      >
        <ProjectCard
          :title="project.title"
          :description="project.goals"
          :backgroundColor="project.background"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          title: "Emergency Aid WAR 2022",
          goals: "providing food and medicine to the shelters and animals which lost their homes and families due to the war",
          background: "#000000",
        },
        {
          title: "Non-commercial feed line",
          goals: "construction of industrial production base where food for shelters will be produced on a free basis ",
           background: "#31BE32",
        },
        {
          title: "Education and Control",
          goals: "lectures on communication, organisation and coordination of processes, control over the use of aid" ,background: "#FD97D1",
        },
      ],
    };
  },
  methods: {
    navigateToProject(title) {
      const formattedTitle = title.toLowerCase().replace(/\s+/g, "-");
      this.$router.push(`/project/${formattedTitle}`);
    },
  },
  mounted() {
    const ScrollMagic = this.$scrollmagic;
    const controller = new ScrollMagic.Controller();

    const projectContainer = this.$el.querySelector(".projectContainer");

    if (projectContainer) {
      const projectContainerScene = new ScrollMagic.Scene({
        triggerElement: projectContainer,
        triggerHook: 0.9,
        duration: "100%",
        offset: 50,
      })
        .setClassToggle(".projectContainer", "visible")
        .addTo(controller);
    }
  }

};
</script>

<style>
.backgroundProject {
  color: white;
  font-family: sans-serif;
  background-color: #3e88ff;
  height: auto;
  padding: 5rem 10rem;
  padding-bottom: 5rem;
}
.backgroundProject h1 {
  margin: 20px 0;
  font-size: 3em;
  font-weight: bold;
}
.projectContainer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.projectContainer.visible {
  opacity: 1;
  transform: translateX(0);
}

.card {
  cursor: pointer;
}

</style>
