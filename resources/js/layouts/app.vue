<template>
  <div id="app">
    <div class="container-fluid p-0 user-select-none">
      
      <!-- Top Navbar -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow px-4 py-2">
        <a class="navbar-brand fs-4 fw-bold" href="#">🏥 DoctorApp</a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto d-flex align-items-center gap-2">
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: isActive('/') }" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: isActive('/doctors') }" to="/doctors">Doctor List</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: isActive('/about') }" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: isActive('/contact') }" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: isActive('/register') }" to="/register">
                <button class="btn btn-outline-light">Register</button>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="main-content p-5">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

// Returns true if the current route path starts with the given path
const isActive = (path) => route.path.startsWith(path)
</script>
