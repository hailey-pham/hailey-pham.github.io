<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    
    <RouterLink to="/projects" class = "absolute font-illusion top-[12vh] left-[85vw] lg:2xl:text-lg text-white md:text-base sm:text-sm w-[13vw] text-center p-4
                                      mt-0 mr-5 bg-darkest opacity-100 hover:opacity-90 
                                      hover:bg-darkest active:opacity-100 focus:opacity-100 min-w-36">
                                      Back</RouterLink>

    <h1 class="font-illusion m-5 ml-10 font-bold leading-[6rem] text-darker text-4xl">NutrionNexus</h1>


    <div class="flex flex-row ">
        <div>
                <div class="h-[30vh] w-[55vh] left-[2vw] mx-10">
                <img src="/NutritionNexus/image.png" class="absolute object-cover h-[30vh] w-[55vh] shadow-innerxl">
                <div class ="h-[30vh] w-[55vh] absolute opacity-50 shadow-xl z-[50]"></div>
            </div>

            <div class="h-[30vh] w-[55vh] left-[2vw] m-10">
                <img src="/NutritionNexus/Profile.png" class="absolute object-cover h-[30vh] w-[55vh] shadow-innerxl">
                <div class ="h-[30vh] w-[55vh] absolute opacity-50 shadow-xl z-[50]"></div>
            </div>

            <div class="h-[30vh] w-[55vh] left-[2vw] m-10">
                <img src="/NutritionNexus/image2.png" class="absolute object-cover h-[30vh] w-[55vh] shadow-innerxl">
                <div class ="h-[30vh] w-[55vh] absolute opacity-50 shadow-xl z-[50]"></div>
            </div>
        </div>
        <div class="text-normal font-illusion text-xl leading-[4rem]">
            <h1 class="font-bold text-3xl text-dark leading-[5rem]">Summary</h1>
            <div class="mx-5">Languages: C++</div>
            <div class="mx-5">Softwares: React</div>
            <div class="mx-5">Skills Learned: Working with APIs and large data sets</div>
            <div class="mx-5">Link: <a href="https://www.youtube.com/watch?v=8emoGZO8df4" class="text-accent hover:bg-accentLighter">x</a></div>


            <h1 class="font-bold text-3xl text-dark leading-[5rem]">Process</h1>
            <p class="mx-5">This project was my final project for my Data Structures and Algorithims class. We created a program which would take recipes from an online
                api and sort them based on your inputed food preferences.
            </p>
            <p class="mx-5">I worked on creating the algorithim which determines how relevant a recipe is to you based on your food preferences, and I also worked on
                one of the algorithims which sorts the recipes based on how relevant they are to you. 
            </p>


        </div>
    </div>
    




    <!-- <img src="/Clouds/StratusClouds1.png" class="absolute opacity-70 scale-[5] disable-blur z-[-10] top-32 left-[8w]">
    <img src="/Clouds/StratusClouds3.png" class="absolute opacity-70 scale-[5] disable-blur z-[-10] top-56 left-[80vw]">
    <img src="/Clouds/StratusClouds4.png" class="absolute opacity-70 scale-[5] disable-blur z-[-10] top-80 left-[30vw]">
    <img src="/Clouds/CumulusClouds1.png" class="absolute opacity-70 scale-[5] disable-blur z-[-10] top-[60vh] left-[10vw]">
    <img src="/Clouds/CumulusClouds2.png" class="absolute opacity-70 scale-[5] disable-blur z-[-10] top-[80vh] left-[50vw]">
    <img src="/Clouds/CumulusClouds3.png" class="absolute opacity-70 scale-[5] disable-blur z-[-10] top-[50vh] left-[80vw]"> -->
    

  </main>


<!-- <div class = "content-center justify-center bg-darkest w-[50vw] h-56"></div> -->

</template>
