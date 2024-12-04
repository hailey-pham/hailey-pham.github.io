<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>

    <RouterLink to="/projects" class = "absolute font-illusion top-[12vh] left-[85vw] lg:2xl:text-lg text-white md:text-base sm:text-sm w-[13vw] text-center p-4
                                      mt-0 mr-5 bg-darkest opacity-100 hover:opacity-90 
                                      hover:bg-darkest active:opacity-100 focus:opacity-100 min-w-36">
                                      Back</RouterLink>

    <h1 class="font-illusion m-5 ml-10 font-bold leading-[6rem] text-darker text-4xl">Through The Window</h1>


    <div class="flex flex-row ">
        <div>
                <div class="h-[30vh] w-[55vh] left-[2vw] mx-10">
                <img src="/ThroughTheWindow/bt14he.png" class="absolute object-cover h-[30vh] w-[55vh] shadow-innerxl">
                <div class ="h-[30vh] w-[55vh] absolute opacity-50 shadow-xl z-[50]"></div>
            </div>

            <div class="h-[30vh] w-[55vh] left-[2vw] m-10">
                <img src="/ThroughTheWindow/TTWThumbnail.png" class="absolute object-cover h-[30vh] w-[55vh] shadow-innerxl">
                <div class ="h-[30vh] w-[55vh] absolute opacity-50 shadow-xl z-[50]"></div>
            </div>

            <div class="h-[30vh] w-[55vh] left-[2vw] m-10">
                <img src="/ThroughTheWindow/image.png" class="absolute object-cover h-[30vh] w-[55vh] shadow-innerxl">
                <div class ="h-[30vh] w-[55vh] absolute opacity-50 shadow-xl z-[50]"></div>
            </div>
        </div>
        <div class="text-normal font-illusion text-xl leading-[4rem]">
            <h1 class="font-bold text-3xl text-dark leading-[5rem]">Summary</h1>
            <div class="mx-5">Languages: GDScript</div>
            <div class="mx-5">Software: Godot Engine</div>
            <div class="mx-5">Skills Learned: Procedural Generation</div>
            <div class="mx-5">Link: <a href="https://yugi3844.itch.io/through-the-window" class="text-accent hover:bg-accentLighter">x</a></div>
                

            <h1 class="font-bold text-3xl text-dark leading-[5rem]">Process</h1>
            <p class="mx-5">I worked as a programmer on this short game for a class project that spanned about three weeks. I was in charge of
                programming and designing the world generation and the UI.
            </p>
            <p class="m-5">The procedural generation is very simple. It picks a random section out of a handful of pre-made modules and generates it just off-screen
                to give the illusion of an infinite world.
            </p>
            <p class="m-5">
                I worked in a team of 2 programmers and 3 artists. It was fun to work in a team of mostly artists and to be able to work soley on the programming.
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
