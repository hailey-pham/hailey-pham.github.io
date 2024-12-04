<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>

    <RouterLink to="/projects" class = "absolute font-illusion top-[12vh] left-[85vw] lg:2xl:text-lg text-white md:text-base sm:text-sm w-[13vw] text-center p-4
                                      mt-0 mr-5 bg-darkest opacity-100 hover:opacity-90 
                                      hover:bg-darkest active:opacity-100 focus:opacity-100 min-w-36">
                                      Back</RouterLink>

    <h1 class="font-illusion m-5 ml-10 font-bold leading-[6rem] text-darker text-4xl">Early Morning</h1>


    <div class="flex flex-row ">
        <div>
                <div class="h-[30vh] w-[55vh] left-[2vw] mx-10">
                <img src="/EarlyMorning/EarlyMorning.png" class="absolute object-cover h-[30vh] w-[55vh] shadow-innerxl">
                <div class ="h-[30vh] w-[55vh] absolute opacity-50 shadow-xl z-[50]"></div>
            </div>

            <div class="h-[30vh] w-[55vh] left-[2vw] m-10">
                <img src="/EarlyMorning/image.png" class="absolute object-cover h-[30vh] w-[55vh] shadow-innerxl">
                <div class ="h-[30vh] w-[55vh] absolute opacity-50 shadow-xl z-[50]"></div>
            </div>

            <div class="h-[30vh] w-[55vh] left-[2vw] m-10">
                <img src="/EarlyMorning/EM.png" class="absolute object-cover h-[30vh] w-[55vh] shadow-innerxl">
                <div class ="h-[30vh] w-[55vh] absolute opacity-50 shadow-xl z-[50]"></div>
            </div>
        </div>
        <div class="text-normal font-illusion text-xl leading-[4rem]">
            <h1 class="font-bold text-3xl text-dark leading-[5rem]">Summary</h1>
            <div class="mx-5">Languages: C#</div>
            <div class="mx-5">Software: Unity Engine</div>
            <div class="mx-5">Skills Learned: Unity3D, Shader Graphs, Fullscreen Shaders</div>
                

            <h1 class="font-bold text-3xl text-dark leading-[5rem]">Process</h1>
            <p class="mx-5">I created this game demo for a class over the course of about a month. I created all of the models, textures, and code from scratch.
            </p>
            <p class="m-5">I programmed a feature that highlights whatever object you are looking at using rays and Unity's shader graphs. This would let you
                interact with any object and give you a small piece of text associated with the object. 
            </p>
            <p class="m-5">
                I wanted this game demo to feel very cozy and warm, so I played a lot with fullscreen shaders for the first time. I put a yellow-ish filter over
                the entire game, and had a slight white vignette in order to make it feel like a sort of memory. Lastly I created a pixel shader to give it a
                retro aesthetic. Playing around with shaders for the first time is super fun and after this I want to learn more about actually programming shaders.
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
