<template>
  <DefaultLayout>
    <section class="bg-white pt-20 pb-16 relative overflow-hidden">
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
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
