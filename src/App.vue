<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!-- Website Header -->
    <div class = "font-illusion bg-dark h-[8vh] min-h-[4.2rem] shadow-inner shadow-innerxl">
      <div class="absolute text-darkest font-bold italic text-3xl top-[2.5vh] left-[2vw] sm:2xl:opacity-70 opacity-0"> HP </div>
      
      <div class = "flex flex-row justify-end opacity-70 md:2xl:px-5 h-[8vh] items-end sm:px-0 min-h-[4.2rem]" > 
        <RouterLink to="/" class = "
                                    lg:2xl:text-lg text-white md:text-base sm:text-sm w-[13vw] text-center p-4
                                    mt-0 mr-5 bg-darkest opacity-70 hover:opacity-90 
                                    hover:bg-darkest active:opacity-100 focus:opacity-100 min-w-36">
                                    Home</RouterLink>
        
        <RouterLink to="/projects" class = "lg:2xl:text-lg text-white md:text-base sm:text-sm w-[13vw] text-center p-4
                                      mt-0 mr-5 bg-darkest opacity-70 hover:opacity-90 
                                      hover:bg-darkest active:opacity-100 focus:opacity-100 min-w-36">
                                      Projects</RouterLink>
      

        <RouterLink to="/contact" class = "lg:2xl:text-lg text-white md:text-base sm:text-sm w-[13vw] text-center p-4
                                            mt-0 bg-darkest opacity-70 hover:opacity-90 
                                            hover:bg-darkest active:opacity-100 focus:opacity-100 min-w-36">
                                            Contact</RouterLink>
       
      </div>

    </div>




  </header>
  <RouterView />
</template>

<style>
</style>
