<template>
  <q-layout class="login">
    <q-page-container class="row justify-center">
      <div class="form col-10 col-sm-4">
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
    background: url("../../assets/background-login.png");
    background-size: cover;
    height: 100vh;    
}

.login:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(77,16,138,.6);
}
h1 {
  margin: 100px 0;
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
</style>
