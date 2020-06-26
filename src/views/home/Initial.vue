<template>
  <q-layout class="initial">
    <q-page-container class="row justify-center">
      <div class="main col-10 col-sm-4">
        <btn class="btn" title="login" />
        <btn class="btn" title="register" />
      </div>
    </q-page-container>
    <q-page-container class="row justify-center">
      <div class="carousel col-12 col-sm-4">
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

.initial:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(51,51,51,.29);
}

.main {
    width: 100%;
    padding-top: 50px;
}

.main .btn + .btn {
    margin-top: 10px;
}

.carousel {
    margin-top: 120px;
}
</style>
