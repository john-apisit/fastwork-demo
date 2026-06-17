<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import OverviewSection from './components/OverviewSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import DashboardPreview from './components/DashboardPreview.vue'
import TechStackSection from './components/TechStackSection.vue'
import ResultsSection from './components/ResultsSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <Navbar />
    <main>
      <HeroSection />
      <OverviewSection />
      <FeaturesSection />
      <DashboardPreview />
      <TechStackSection />
      <ResultsSection />
    </main>
    <FooterSection />
  </div>
</template>
