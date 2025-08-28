<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 relative"
  >
    <!-- Logo -->
    <!-- <div>
      <Link href="/">
        <ApplicationLogo class="h-20 w-20 fill-current text-gray-500" />
      </Link>
    </div> -->

    <!-- Card -->
    <div
      class="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg relative"
    >
      <!-- Close Link -->
      <Link
        href="/"
        class="absolute top-3 right-3 hover:text-red-600 text-2xl font-bold transition"
        aria-label="Close"
      >
        ✕
      </Link>

      <!-- Slot Content -->
      <slot />
    </div>
  </div>
</template>
