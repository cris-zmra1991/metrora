<template>
  <DefaultLayout>
    <section class="bg-white pt-10 pb-10 relative overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 lg:px-8 gap-10">
        <!-- Columna izquierda: Texto -->
        <div class="max-w-xl">
          <h1 class="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {{ $t('landing.title.line1') }} <br class="hidden md:block" />
            {{ $t('landing.title.line2') }}
          </h1>
          <p class="text-lg text-gray-700 mb-6">
            {{ $t('landing.description') }}
          </p>
          <button class="px-6 py-3 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition">
            {{ $t('landing.cta') }} →
          </button>

          <!-- Logos de aliados -->
          <div class="mt-10 text-xs text-gray-600">
            {{ $t('landing.partners.text') }}
          </div>
          <div class="flex items-center gap-6 mt-4">
            <img src="/logos/meta.svg" alt="Meta" class="h-6" />
            <img src="/logos/twitter.svg" alt="X" class="h-6" />
            <img src="/logos/pinterest.svg" alt="Pinterest" class="h-6" />
          </div>
        </div>

        <!-- Columna derecha: Imagen -->
        <div class="w-full h-full flex justify-end">
          <img
            src="/src/assets/home-header.png"
            alt="Vista previa de la aplicación"
            class="max-h-[600px] w-full object-contain"
          />
        </div>
      </div>
    </section>
    <section class="bg-gray-100 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Título -->
        <h2 class="text-3xl font-extrabold text-gray-900 mb-4">
          {{ $t('benefits.title') }}
        </h2>
        <!-- Descripción -->
        <p class="text-gray-600 text-lg mb-12">
          {{ $t('benefits.description') }}
        </p>
  
        <!-- Iconos con beneficios -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <!-- Beneficio 1 -->
          <div class="flex flex-col items-center">
            <img src="/src/assets/icons/analytics.svg" alt="Analytics" class="h-16 w-16 mb-4" />
            <h3 class="text-xl font-semibold text-gray-800">{{ $t('benefits.analytics.title') }}</h3>
            <p class="text-gray-600 text-sm mt-2">{{ $t('benefits.analytics.description') }}</p>
          </div>
          <!-- Beneficio 2 -->
          <div class="flex flex-col items-center">
            <img src="/src/assets/icons/schedule.svg" alt="Scheduler" class="h-16 w-16 mb-4" />
            <h3 class="text-xl font-semibold text-gray-800">{{ $t('benefits.scheduler.title') }}</h3>
            <p class="text-gray-600 text-sm mt-2">{{ $t('benefits.scheduler.description') }}</p>
          </div>
          <!-- Beneficio 3 -->
          <div class="flex flex-col items-center">
            <img src="/src/assets/icons/team.svg" alt="Collaboration" class="h-16 w-16 mb-4" />
            <h3 class="text-xl font-semibold text-gray-800">{{ $t('benefits.team.title') }}</h3>
            <p class="text-gray-600 text-sm mt-2">{{ $t('benefits.team.description') }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <!-- Texto -->
      <div>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          {{ $t('hero2.title') }}
        </h2>
        <p class="text-xl font-semibold text-gray-800 mb-4">
          {{ $t('hero2.subtitle') }}
        </p>
        <p class="text-base text-gray-700 mb-8">
          {{ $t('hero2.description') }}
        </p>
        <button class="px-6 py-3 bg-black text-white rounded-md text-sm hover:bg-gray-800 transition">
          {{ $t('hero2.cta') }} →
        </button>
      </div>

      <!-- Imagen -->
      <div class="w-full h-auto">
        <img
          src="/src/assets/hero-section-analytics.webp"
          alt="App analytics preview"
          class="w-full h-auto object-contain"
        />
      </div>

    </div>
  </section>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
