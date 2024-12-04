import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import PersonalWebsite from '@/views/PersonalWebsite.vue'
import ThroughTheWindow from '@/views/ThroughTheWindow.vue'
import EarlyMorning from '@/views/EarlyMorning.vue'
import Disastore from '@/views/Disastore.vue'
import NutritionNexus from '@/views/NutritionNexus.vue'
import BunQuest from '@/views/BunQuest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/PersonalWebsite',
      name: 'PersonalWebsite',
      component: PersonalWebsite
      
    },
    {
      path: '/ThroughTheWindow',
      name: 'ThroughTheWindow',
      component: ThroughTheWindow
    },
    {
      path: '/EarlyMorning',
      name: 'EarlyMorning',
      component: EarlyMorning
    },
    {
      path: '/Disastore',
      name: 'Disastore',
      component: Disastore
    },
    {
      path: '/NutritionNexus',
      name: 'NutritionNexus',
      component: NutritionNexus
    },
    {
      path: '/BunQuest',
      name: 'BunQuest',
      component: BunQuest
    }
  ],
})

export default router
