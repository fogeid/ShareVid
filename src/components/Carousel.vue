<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      swipeable
      animated
      :navigation-position="navPos"
      navigation
      padding
      height="300px"
      class="bg-transparent text-white rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <div class="q-mt-md text-center">
          <h2 class="text-h4">{{ title }}</h2>
          <p class="text-h5">{{ description }}</p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <div class="q-mt-md text-center">
          <h2 class="text-h4">{{ title }}</h2>
          <p class="text-h5">{{ description }}</p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <div class="q-mt-md text-center">
          <h2 class="text-h4">{{ title }}</h2>
          <p class="text-h5">{{ description }}</p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <div class="q-mt-md text-center">
          <h2 class="text-h4">{{ title }}</h2>
          <p class="text-h5">{{ description }}</p>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navPos: 'bottom',
      navigationPositions: [
        { value: 'top', label: 'top' },
        { value: 'right', label: 'right' },
        { value: 'bottom', label: 'bottom (default)' },
        { value: 'left', label: 'left' }
      ],

      slide: 'style',
      title: 'ShareVid',
      description: 'Best Video Sharing Platform around the globe'
    }
  }
}
</script>