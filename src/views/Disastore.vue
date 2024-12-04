<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    
    <RouterLink to="/projects" class = "absolute font-illusion top-[12vh] left-[85vw] lg:2xl:text-lg text-white md:text-base sm:text-sm w-[13vw] text-center p-4
                                      mt-0 mr-5 bg-darkest opacity-100 hover:opacity-90 
                                      hover:bg-darkest active:opacity-100 focus:opacity-100 min-w-36">
                                      Back</RouterLink>

    <h1 class="font-illusion m-5 ml-10 font-bold leading-[6rem] text-darker text-4xl">Disastore</h1>


    <div class="flex flex-row ">
        <div>
                <div class="h-[30vh] w-[55vh] left-[2vw] mx-10">
                <img src="/Disastore/DisastoreThumbnail.png" class="absolute object-cover h-[30vh] w-[55vh] shadow-innerxl">
                <div class ="h-[30vh] w-[55vh] absolute opacity-50 shadow-xl z-[50]"></div>
            </div>

            <div class="h-[30vh] w-[55vh] left-[2vw] m-10">
                <img src="/Disastore/DisastoreDialogue.png" class="absolute object-cover h-[30vh] w-[55vh] shadow-innerxl">
                <div class ="h-[30vh] w-[55vh] absolute opacity-50 shadow-xl z-[50]"></div>
            </div>

            <div class="h-[30vh] w-[55vh] left-[2vw] m-10">
                <img src="/Disastore/Gameplay.png" class="absolute object-cover h-[30vh] w-[55vh] shadow-innerxl">
                <div class ="h-[30vh] w-[55vh] absolute opacity-50 shadow-xl z-[50]"></div>
            </div>
        </div>
        <div class="text-normal font-illusion text-xl leading-[4rem]">
            <h1 class="font-bold text-3xl text-dark leading-[5rem]">Summary</h1>
            <div class="mx-5">Languages: C#</div>
            <div class="mx-5">Softwares: Godot</div>
            <div class="mx-5">Skills Learned: GitHub</div>
            <div class="mx-5">Link: <a href="https://github.com/hailey-pham/ConbiniGame/releases/tag/v1.0.3-Open-Alpha" class="text-accent hover:bg-accentLighter">x</a></div>


            <h1 class="font-bold text-3xl text-dark leading-[5rem]">Process</h1>
            <p class="mx-5">I was a programmer on this game that was created over a period of 9 weeks by a team of 4 programmers and 1 artists in Kyoto, Japan.
                We created this for UF's study abroad program "UF In Japan: Cross Cultural Engineering."
            </p>
            <p class="m-5">This was my first game that I had created in a large team environment, so I had to properly learn how to use GitHub. I had used it
                before for various small scale projects but I wasn't quite aware of all the ins and outs of the tool. I had to learn about branching and resolving
                merge conflicts finally. 
            </p>
            <p class="m-5">For this game I programmed the UI elements and the upgrades system. In this game we really focused on making modular and versatile
                features. For example our upgrades system could handle many different kinds of upgrades that could modify any part of the game- from the player's 
                speed to the layout of the store. 
            </p>
            <p class="m-5">I also learned how to package the game into an installer so that it can be easily and properly installed on a computer. Overall
                the entire experience was incredible and I learned a lot from creating the games and especially from working with my teammates.
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
