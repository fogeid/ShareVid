<template>
  <q-layout class="register">
    <q-page-container class="row justify-center">
      <div class="form col-10 col-sm-6 col-md-4">
        <h1 class="text-h4 text-center text-white">Register</h1>
        <form @submit.prevent="submit()" action="">        
          <q-input dark
              class="input"
              label-color="white"
              v-model="form.email"
              type="email"
              label="Email" />

          <q-input dark
              class="input"
              label-color="white"
              v-model="form.fullName"
              type="text"
              label="Full Name" />

          <q-input dark
              class="input"
              label-color="white"
              v-model="form.password"
              type="password"
              label="Password" />

          <q-input dark
              class="input"
              label-color="white"
              v-model="form.confirmPassword"
              type="password"
              label="Confirm Password" />

          <btn class="btn" title="Register" />
        </form>
        <a href="#">Already have a registration?</a>
      </div>
    </q-page-container>    
  </q-layout>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'Register',
  data() {
    return {
      form: {
        email: '',
        fullName: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods : {
    submit() {
      console.log(this.form);
    }
  },
  components: {
    'btn' : Button
  }
};
</script>

<style>
.register {
    background: url("../../assets/background-register.png");
    background-size: cover;
    height: 100vh;    
}

h1 {
  margin: 50px 0;
}

.input + .input {
  margin-top: 10px;
}

.btn {
  margin-top: 40px;
}

a {
  display: block;
  text-align: center;
  text-decoration: none;
  color: white;
  margin-top: 20px;
}

@media screen and (min-width: 768px) {
  .register {
    background-image: none;
    background-color: rgb(78, 18, 132);
  }
}

@media screen and (min-width: 1200px) {
  .form {
    margin-top: 80px;
  }
}
</style>
