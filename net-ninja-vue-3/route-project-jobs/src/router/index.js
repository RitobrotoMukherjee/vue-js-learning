import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/errors/404View.vue'
import AboutView from '../views/AboutView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobDetails from '../views/jobs/JobdetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/job/details/:id',
    name: 'jobdetails',
    component: JobDetails,
    props: true
  },
  // redirect routes
  // Used if old routes changes
  // Practical usage, for ads route changing for SEO
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // error view
  // For now only All page will go to 404
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
