<template>
 <div class="home-container">
    <h1>Welcome to MediConnect</h1>
    <p class="sub-text">Your go-to platform for booking doctor appointments online.</p>

    <div class="card-grid">
      <div class="card">
        <h3>Find a Doctor</h3>
        <p>Browse through a list of trusted specialists.</p>
        <router-link to="/doctors">
          <button>View Doctors</button>
        </router-link>
      </div>

      <div class="card">
        <h3>Book Appointment</h3>
        <p>Choose date and time that suits you best.</p>
        <router-link to="/login">
          <button>Book Now</button>
        </router-link>
      </div>

      <div class="card">
        <h3>About Us</h3>
        <p>Learn more about how MediConnect works.</p>
        <router-link to="/about">
          <button>About</button>
        </router-link>
      </div>
    </div>
  </div>
</template>