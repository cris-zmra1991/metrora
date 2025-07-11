<template>
  <header class="w-full bg-gray-900 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      <!-- Logo -->
      <div class="font-bold text-xl text-white">{{ $t('logo') }}</div>

      <!-- Menú central -->
      <nav class="hidden md:flex space-x-6 text-base text-white">
        <a href="#" class="hover:text-gray-300">{{ $t('product') }}</a>
        <a href="#" class="hover:text-gray-300">{{ $t('socialMedia') }}</a>
        <a href="#" class="hover:text-gray-300">{{ $t('pricing') }}</a>
        <a href="#" class="hover:text-gray-300">{{ $t('agencies') }}</a>
        <a href="#" class="hover:text-gray-300">{{ $t('academy') }}</a>
      </nav>

      <!-- Botones y selector -->
      <div class="flex items-center space-x-3">
        <button class="text-base px-4 py-1 border border-gray-400 rounded hover:bg-gray-700 text-white">
          {{ $t('login') }}
        </button>
        <button class="text-base px-4 py-1 bg-white text-gray-900 rounded hover:bg-gray-300">
          {{ $t('signup') }}
        </button>

        <!-- Selector de idioma -->
        <select v-model="$i18n.locale" class="ml-4 bg-gray-800 text-white border border-gray-600 text-sm rounded">
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    </div>
  </header>
</template>
