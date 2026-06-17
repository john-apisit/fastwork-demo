<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import RoomsSection from './components/RoomsSection.vue'
import GallerySection from './components/GallerySection.vue'
import AmenitiesSection from './components/AmenitiesSection.vue'
import AttractionsSection from './components/AttractionsSection.vue'
import BookingSection from './components/BookingSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <RoomsSection />
    <GallerySection />
    <AmenitiesSection />
    <AttractionsSection />
    <BookingSection />
    <ContactSection />
  </main>
  <AppFooter />
</template>
