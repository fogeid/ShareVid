<template>
  <q-layout class="initial">
    <q-page-container class="row justify-center">
      <div class="main col-10 col-sm-6 col-md-4">
        <a href="/login">
          <btn class="btn btn1" title="login" />
        </a>
        <a href="/register">
          <btn class="btn" title="register" />
        </a>
      </div>
    </q-page-container>
    <q-page-container class="row justify-center">
      <div class="carousel col-12 col-sm-6 col-md-4">
        <carousel />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import Button from '@/components/Button.vue';
import Carousel from '@/components/Carousel.vue';

export default {
  name: 'Initial',
  components: {
    'btn' : Button,
    'carousel' : Carousel
  }
};
</script>

<style>
.initial {
    background: url("../../assets/background-initial.png");
    background-size: cover;
    height: 100vh;    
}

.main {
    width: 100%;
    padding-top: 50px;
}

.carousel {
    margin-top: 50px;
}

a {
  text-decoration: none;
}

.btn1 {
  margin-bottom: 20px;
}

@media screen and (min-width: 425px) {
  .card {
      margin-top: -80px;
  }
}

@media screen and (min-width: 768px) {
  .initial {
    background-image: none;
    background-color: rgb(204, 156, 136);
  }
}

@media screen and (min-width: 1200px) {
  .main {
    padding-top: 120px;
  }
}
</style>
