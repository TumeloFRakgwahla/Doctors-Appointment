<template>
  <AppLayout>
    <div class="home-container text-center py-12 px-4">
    <!-- Headings -->
    <h1 class="text-4xl font-bold text-gray-800 mb-2">Welcome to MediConnect</h1>
    <h3 class="text-xl text-gray-600 mb-2">Your Health, Our Priority</h3>
    <p class="text-gray-500 mb-8">Leading the Way in Medical Excellence</p>

    <!-- Cards Grid -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      <!-- Card 1: Working Hours -->
      <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
        <h3 class="text-lg font-semibold mb-4">Working Hours</h3>
        <table class="w-full text-gray-700 text-sm">
          <tr class="border-b">
            <td class="py-1">Mon-Fri</td>
            <td class="py-1 text-right">08:00 - 17:00</td>
          </tr>
          <tr class="border-b">
            <td class="py-1">Sat</td>
            <td class="py-1 text-right">08:00 - 13:00</td>
          </tr>
          <tr>
            <td class="py-1">Sun</td>
            <td class="py-1 text-right">Closed</td>
          </tr>
        </table>
      </div>

      <!-- Card 2: Book Appointment -->
      <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
        <h3 class="text-lg font-semibold mb-4">Book Appointment</h3>
        <p class="text-gray-600 mb-4">
          Get 24 hours emergency support. We have introduced the principle of family medicare.
        </p>
        <Link href="/login" class="inline-block">
          <button
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </Link>
      </div>

      <!-- Card 3: Emergency Contact -->
      <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
        <h3 class="text-lg font-semibold mb-4">015-753-8777</h3>
        <p class="text-gray-600">
          Get 24 hours emergency support. We have introduced the principle of family medicine.
          Get connected with us for any urgency.
        </p>
      </div>
    </div>
  </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { Link } from '@inertiajs/vue3'
</script>
