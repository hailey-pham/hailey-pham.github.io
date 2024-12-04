<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    
    <RouterLink to="/projects" class = "absolute font-illusion top-[12vh] left-[85vw] lg:2xl:text-lg text-white md:text-base sm:text-sm w-[13vw] text-center p-4
                                      mt-0 mr-5 bg-darkest opacity-100 hover:opacity-90 
                                      hover:bg-darkest active:opacity-100 focus:opacity-100 min-w-36">
                                      Back</RouterLink>

    <h1 class="font-illusion m-5 ml-10 font-bold leading-[6rem] text-darker text-4xl">Personal Website</h1>


    <div class="flex flex-row ">
        <div>
                <div class="h-[30vh] w-[55vh] left-[2vw] mx-10">
                <img src="/PersonalWebsite/home.png" class="absolute object-cover h-[30vh] w-[55vh] shadow-innerxl">
                <div class ="h-[30vh] w-[55vh] absolute opacity-50 shadow-xl z-[50]"></div>
            </div>

            <div class="h-[30vh] w-[55vh] left-[2vw] m-10">
                <img src="/PersonalWebsite/image.png" class="absolute object-cover h-[30vh] w-[55vh] shadow-innerxl">
                <div class ="h-[30vh] w-[55vh] absolute opacity-50 shadow-xl z-[50]"></div>
            </div>

            <div class="h-[30vh] w-[55vh] left-[2vw] m-10">
                <img src="/PersonalWebsite/contact.png" class="absolute object-cover h-[30vh] w-[55vh] shadow-innerxl">
                <div class ="h-[30vh] w-[55vh] absolute opacity-50 shadow-xl z-[50]"></div>
            </div>
        </div>
        <div class="text-normal font-illusion text-xl leading-[4rem]">
            <h1 class="font-bold text-3xl text-dark leading-[5rem]">Summary</h1>
            <div class="mx-5">Languages: HTML, CSS, JS</div>
            <div class="mx-5">Frameworks: Vue3, Tailwind</div>
            <div class="mx-5">Skills Learned: Front-End Development, Website Deployment, Utility-First CSS</div>

            <h1 class="font-bold text-3xl text-dark leading-[5rem]">Process</h1>
            <p class="mx-5">I first designed the website in Figma to make sure I had a clean and professional design. 
                I had previously made a website in pure HTML and CSS and made the mistake of not deciding on a design beforehand.
                This led to a very noisy and disorganized design.</p>
            <p class="m-5">I used a series of videos in order to learn the Vue3 framework. This was my first time working with a
                web application framework by myself so it was a steep learning curve. 
            </p>
            <p class="m-5">I also experimented with a few different features such as using json files to store project information
                and reactive elements that change based on the size of the webpage. 
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
