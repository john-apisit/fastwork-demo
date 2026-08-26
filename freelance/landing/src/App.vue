<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import TechSection from './components/TechSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <a
    href="#main-content"
    class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
  >
    ข้ามไปเนื้อหาหลัก
  </a>
  <AppHeader />
  <main id="main-content">
    <HeroSection />
    <ServicesSection />
    <PortfolioSection />
    <TechSection />
    <ContactSection />
  </main>
  <AppFooter />
</template>
