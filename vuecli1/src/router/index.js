import { createRouter, createWebHistory } from 'vue-router'
import home from '@/view/home.vue'
import Project from '@/view/Project.vue'
import ProductDetailse from '@/view/ProductDetailse.vue'
import Blog from '@/view/Blog.vue'
import BlogDetails from '@/view/BlogDetails.vue'
import errow404 from '@/view/errow404.vue'
const routes = [
    {
        path: '/',
        name: 'homepage',
        component: home,
        
    },
    {
        path: '/Project',
        name: 'projectpage',
        component: Project,
    },
    {
        path: '/ProductDetailse',
        name: 'profuctdetailspage',
        component: ProductDetailse,
    },
    {
        path: '/Blog',
        name: 'blogpage',
        component: Blog,
    },
    {
        path: '/BlogDetails',
        name: 'blogedetailpage',
        component: BlogDetails,
    },
    {
        path: '/:CatchAll(.*)',
        name: 'error',
        component: errow404,
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router