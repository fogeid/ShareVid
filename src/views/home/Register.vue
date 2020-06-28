<template>
  <q-page class="register">
    <q-page-container class="row justify-center">
      <div class="form col-10 col-sm-6 col-md-4">
        <h1 class="text-h4 text-center text-white">Register</h1>
        <form-input class="input" title="Email" type="email" />
        <form-input class="input" title="Full Name" type="text" />
        <form-input class="input" title="Password" type="password" />
        <form-input class="input" title="Confirm Password" type="password" />
        <btn class="btn" title="Register" />
        <a href="#">Already have a registration?</a>
      </div>
    </q-page-container>    
  </q-page>
</template>

<script>
import Button from '@/components/Button.vue';
import FormInput from '@/components/FormInput.vue';

export default {
  name: 'Register',
  components: {
    'btn' : Button,
    'form-input' : FormInput
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
</style>
