<template>
  <div class="q-pa-md flex justify-center">
    <q-card class="my-card">
      <q-video :ratio="16/9" :src="url" />

      <q-card-section>
        <div class="title text-secondary">{{ title }}</div>
        <div class="subtitle text-secondary">{{ subtitle }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['url', 'title', 'subtitle']
};
</script>

<style>
.my-card {
  width: 100%;
  max-width: 500px;
}

.title {
  font-size: 1rem;
}

.subtitle {
  font-size: .8rem;
}
</style>