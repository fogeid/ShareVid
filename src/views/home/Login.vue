<template>
  <q-layout class="login">
    <q-page-container class="row justify-center">
      <div class="form col-10 col-sm-6 col-md-4">
        <h1 class="text-h4 text-center text-white">Login</h1>
        <form-input class="input" title="Email" type="email" />
        <form-input class="input" title="Senha" type="password" />
        <btn class="btn" title="Log In" />
        <a href="#">I forgot the password</a>
        <a href="#">Register</a>
      </div>
    </q-page-container>    
  </q-layout>
</template>

<script>
import Button from '@/components/Button.vue';
import FormInput from '@/components/FormInput.vue';

export default {
  name: 'login',
  components: {
    'btn' : Button,
    'form-input' : FormInput
  }
};
</script>

<style>
.login {
    background: url("../../assets/background-login.jpg");
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

a + a {
  margin-top: 10px;
}

@media screen and (min-width: 768px) {
  .login {
    background-image: none;
    background-color: rgb(78, 18, 132);
  }
}

@media screen and (min-width: 1200px) {
  .form {
    margin-top: 100px;
  }
}
</style>
