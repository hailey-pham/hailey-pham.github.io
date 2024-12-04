<script>
import { ref, computed } from 'vue'
const image = ref("../assets/Disastore/DisastoreThumbnail.png");

const project =ref('');
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },

  methods: {
    thumbnailUrl() {
      return ('/'+this.project.thumbnail)
    },
    pageURL() {
      return('/'+this.project.url)
    }
  }
  
  
}
</script>

<template>        
  <div class = "text-dark md:max-xl:h-[18vw] w-[100vw] justify-evenly font-illusion relative min-h-64 sm:h-[20vw]">
      <!-- background -->
      <div v-show="project.index%2 === 0" class = "h-[30vw] md:h-[18vw] w-[100vw] bg-white opacity-30 relative z-0 min-h-64"></div>

      <!-- image -->
      <div class="h-[15vh] w-[13.5vw] overflow-hidden">
        <img :src="thumbnailUrl()" class="object-cover h-[15vh] w-[13.5vw] left-[2vw] absolute top-[3.5vh]">
        <div class ="h-[15vh] w-[13.5vw] left-[2vw] absolute top-[3.5vh] bg-lighter opacity-10 shadow-innerxl"></div>
        <div class ="h-[15vh] w-[13.5vw] left-[2vw] absolute top-[3.5vh] opacity-50 shadow-innerxl"></div>
      </div>

      <!-- view button -->
      <RouterLink :to=pageURL() class = "
        text-md text-white w-56 text-center p-5 px-[5vw] w-[13.5vw]
        mt-0 mr-5 bg-darker left-[2vw] top-[21.5vh] absolute
        hover:bg-darkest">
        View </RouterLink>
      
      <!-- body -->
      <div class = "px-[8vw] absolute top-[3vh] left-[11vw] z-10">
          <div class = "text-3xl font-bold leading-[4rem] opacity-100">{{ project.name }}</div>
          <div class = "text-xl text-normal leading-[3rem] tracking-wider">Date: {{ project.date }}</div>
          <div class = "text-xl text-normal leading-[3rem] tracking-wider">{{ project.summary }}</div>

      </div>
  </div>

    
</template>
  
<style>
</style>
  