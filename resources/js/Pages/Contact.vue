<template>
  <AppLayout>
    <div class="contact-container max-w-2xl mx-auto py-12 px-6">
    <!-- Heading -->
    <h1 class="text-4xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
    <p class="text-gray-600 mb-8 text-center">
      If you have any questions or issues, please get in touch.
    </p>

    <!-- Contact Form -->
    <form @submit.prevent="submitForm" class="bg-white shadow-md rounded-lg p-6 space-y-6">
      <!-- Name -->
      <div>
        <label class="block text-gray-700 font-semibold mb-1">Name</label>
        <input
          type="text"
          v-model="name"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your name"
          required
        />
      </div>

      <!-- Email -->
      <div>
        <label class="block text-gray-700 font-semibold mb-1">Email</label>
        <input
          type="email"
          v-model="email"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your email"
          required
        />
      </div>

      <!-- Message -->
      <div>
        <label class="block text-gray-700 font-semibold mb-1">Message</label>
        <textarea
          v-model="message"
          rows="4"
          class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your message here..."
          required
        ></textarea>
      </div>

      <!-- Submit Button -->
      <div class="text-center">
        <button
          type="submit"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </form>
  </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  alert('Message sent! We will contact you soon.')
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>
