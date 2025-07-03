<template>
  <div>
    <h1>Contact Us</h1>
    <p>If you have any questions or issues, please get in touch.</p>

    <form @submit.prevent="submitForm">
      <label>Name:<br /><input type="text" v-model="name" /></label><br /><br />
      <label>Email:<br /><input type="email" v-model="email" /></label><br /><br />
      <label>Message:<br /><textarea v-model="message"></textarea></label><br /><br />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      alert('Message sent! We will contact you soon.');
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
};
</script>
