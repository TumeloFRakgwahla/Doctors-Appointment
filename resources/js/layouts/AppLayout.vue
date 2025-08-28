<template>
  <nav class="bg-blue-600 shadow">
    <div class="container mx-auto flex items-center justify-between p-4">
      <!-- Logo -->
      <a href="/" class="text-white text-2xl font-bold">🏥 DoctorApp</a>

      <!-- Hamburger (Mobile) -->
      <button
        @click="open = !open"
        class="md:hidden text-white focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Nav Links -->
      <ul
        :class="{'flex flex-col absolute top-16 left-0 w-full bg-blue-600 p-4 md:flex-row md:static md:w-auto md:bg-transparent md:p-0': true, 'hidden': !open && !isDesktop }"
        class="text-white gap-4 items-center"
      >
        <li>
          <Link
            href="/"
            class="hover:text-gray-200"
            :class="{ active: isActive('/') }"
          >Home</Link>
        </li>
        <li>
          <Link
            href="/doctors"
            class="hover:text-gray-200"
            :class="{ active: isActive('/doctors') }"
          >Doctor List</Link>
        </li>
        <li>
          <Link
            href="/about"
            class="hover:text-gray-200"
            :class="{ active: isActive('/about') }"
          >About</Link>
        </li>
        <li>
          <Link
            href="/contact"
            class="hover:text-gray-200"
            :class="{ active: isActive('/contact') }"
          >Contact</Link>
        </li>
        <li>
          <Link href="/register">
            <button class="border border-white text-white px-3 py-1 rounded hover:bg-white hover:text-blue-600">
              Register
            </button>
          </Link>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Page Content -->
  <main class="p-5">
    <slot />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'

const open = ref(false)
const page = usePage()

// Detect desktop size for hiding mobile menu
const isDesktop = ref(false)
const checkDesktop = () => {
  isDesktop.value = window.innerWidth >= 768
}

onMounted(() => {
  checkDesktop()
  window.addEventListener('resize', checkDesktop)
})

const isActive = (path) => page.url.startsWith(path)
</script>
