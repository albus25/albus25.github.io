import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutSection from "@/components/AboutSection.vue";
import ResumeSection from "@/components/ResumeSection.vue";
import ServicesSection from "@/components/ServicesSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import ContactSection from "@/components/ContactSection.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutSection
        },
        {
            path: '/resume',
            name: 'resume',
            component: ResumeSection
        },
        {
            path: '/services',
            name: 'services',
            component: ServicesSection
        },
        {
            path: '/skills',
            name: 'skills',
            component: SkillsSection
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactSection
        },
    ]
})

export default router
