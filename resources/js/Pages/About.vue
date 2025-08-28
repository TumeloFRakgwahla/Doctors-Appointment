<template>
  <AppLayout>
    <div class="about-container max-w-3xl mx-auto py-12 px-6 text-center">
    <!-- Title -->
    <h1 class="text-4xl font-bold text-gray-800 mb-6">About MediConnect</h1>

    <!-- Paragraphs -->
    <p class="text-lg text-gray-700 mb-4 leading-relaxed">
      MediConnect is a simple and smart appointment booking platform for patients and doctors.
      We connect people with medical professionals to save time, reduce waiting, and improve care.
    </p>
    <p class="text-lg text-gray-700 leading-relaxed">
      This app was built using <span class="font-semibold">Laravel</span>,
      <span class="font-semibold">Vue.js</span>, and
      <span class="font-semibold">MySQL</span> for a smooth and fast experience.
    </p>
  </div>

  </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
</script>
