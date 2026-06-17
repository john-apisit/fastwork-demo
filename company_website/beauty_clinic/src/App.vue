<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import HeroSection from './components/HeroSection.vue'
import DoctorsSection from './components/DoctorsSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import PromotionsSection from './components/PromotionsSection.vue'
import AppointmentSection from './components/AppointmentSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <AppHeader />
    <main>
      <HeroSection />
      <DoctorsSection />
      <ServicesSection />
      <ReviewsSection />
      <PromotionsSection />
      <AppointmentSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
