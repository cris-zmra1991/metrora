<template>
  <div class="w-full bg-gradient-to-r from-yellow-400 to-rose-500 font-extrabold text-black text-sm text-center py-2">
  NEW: The 2025 Social Ads Study! Insights from +500,000 campaigns.
  <a href="#" class="underline ml-1">Get your FREE copy!</a>
  </div>
  <header class="w-full sticky top-0 z-40 bg-gray-900 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      <!-- Logo -->
      <div class="h-10 flex items-center"><img class="h-8 w-auto max-h-full" src="@/assets/logo-metrora-white.webp" alt="Logo de la agencia metrora"></div>

      <!-- Botón hamburguesa -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <!-- Menú de navegación en pantallas medianas o mayores -->
      <nav class="hidden md:flex space-x-6 text-base text-white">
        <a href="#" class="hover:text-gray-300">{{ $t('services') }}</a>
        <a href="#" class="hover:text-gray-300">{{ $t('pricing') }}</a>
      </nav>

      <!-- Botones + idioma (solo visible en md+) -->
      <div class="hidden md:flex items-center space-x-3">
        <RouterLink
        to="/login"
        class="text-base px-4 py-1 border border-gray-400 rounded hover:bg-gray-700 text-white whitespace-nowrap"
      >
        {{ $t('login') }}
      </RouterLink>

      <RouterLink
        to="/register"
        class="text-base px-4 py-1 bg-white text-gray-900 rounded hover:bg-gray-300 whitespace-nowrap"
      >
        {{ $t('signup') }}
      </RouterLink>

      <select v-model="$i18n.locale" class="w-full bg-gray-700 text-white border border-gray-600 text-sm rounded whitespace-nowrap">
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
      </div>
    </div>

    <!-- Menú desplegable móvil -->
    <div v-if="isMenuOpen" class="md:hidden bg-gray-800 text-white px-4 pt-4 pb-6 space-y-3">
      <a href="#" class="block">{{ $t('services') }}</a>
      <a href="#" class="block">{{ $t('pricing') }}</a>

      <hr class="my-2 border-gray-700" />

      <RouterLink
        to="/login"
        class="text-base px-4 py-1 border border-gray-400 rounded hover:bg-gray-700 text-white whitespace-nowrap"
      >
        {{ $t('login') }}
      </RouterLink>

      <RouterLink
        to="/register"
        class="text-base px-4 py-1 bg-white text-gray-900 rounded hover:bg-gray-300 whitespace-nowrap"
      >
        {{ $t('signup') }}
      </RouterLink>

      <select v-model="$i18n.locale" class="mt-4 w-full bg-gray-700 text-white border border-gray-600 text-sm rounded">
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

</script>