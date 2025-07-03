<template>
  <div id="app">
    <div class="container-fluid p-0 user-select-none">
      <!-- Top Navbar -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <a class="navbar-brand fs-4" href="#">🏥 DoctorApp</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link active" :to="'/'" :class="{ active: isActive('/home') }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/doctors'" :class="{ active: isActive('/doctors') }">Doctor List</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/about'" :class="{ active: isActive('/about') }">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/contact'" :class="{ active: isActive('/contact') }">Contact</router-link>
            </li>
          </ul>
          <button><router-link to="/register">Register</router-link></button>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="main-content p-5">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const isActive = (path) => route.path.startsWith(path);
</script>
