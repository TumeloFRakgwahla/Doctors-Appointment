<template>
  <AppLayout>
    <div class="doctors-list-container max-w-5xl mx-auto py-10 px-4 text-center">
    <!-- Heading -->
    <h1 class="text-4xl font-bold text-gray-800 mb-2">Our Doctors</h1>
    <p class="text-gray-600 mb-8">Meet the doctors available for appointments.</p>

    <!-- Doctors List -->
    <ul class="space-y-4 text-left max-w-md mx-auto">
      <li class="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition">
        <span class="font-semibold text-gray-800">Dr. Jane Smith</span> - Cardiologist
      </li>
      <li class="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition">
        <span class="font-semibold text-gray-800">Dr. John Doe</span> - Dermatologist
      </li>
      <li class="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition">
        <span class="font-semibold text-gray-800">Dr. Sarah Lee</span> - Pediatrician
      </li>
    </ul>
  </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
</script>
