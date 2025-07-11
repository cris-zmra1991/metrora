<template>
    <div>
      <TopBanner />
      <Header />
      <main>
        <slot />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import TopBanner from '@/components/TopBanner.vue'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  </script>
  