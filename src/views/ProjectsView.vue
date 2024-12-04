<script>
import projectsJson from '../assets/projects/projects.json'
import ProjectSummary from './ProjectSummary.vue'

export default {
  name: "projects",
  components: {
    ProjectSummary
  },
  data: function() {
    return{
      projects: projectsJson.projects
    }
  }
};

</script>

<template>
  <h1 class="font-illusion m-5 ml-10 font-bold leading-[6rem] text-darkest text-4xl">Projects</h1>
    <div>
    <ProjectSummary v-for="project in projects" :key="project.name" :project="project" />
    </div>
</template>
