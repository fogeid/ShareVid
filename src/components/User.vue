<template>
    <div class="user row justify-around items-center q-py-md">
        <div class="avatar row flex justify-center items-center">
            <q-avatar size="60px" class="">
                <img src="../assets/photo-profile.png">
            </q-avatar>
            <div class="q-ml-md">
                <p class="q-mb-none text-secondary">{{ name }}</p>
                <p class="q-mb-none text-secondary">{{ views }} Views</p>
            </div>
        </div>
        <btn-outline title="Subscribe" />
    </div>
</template>

<script>
import ButtonOutline from '@/components/ButtonOutline.vue';

export default {
  name: 'User',
  data() {
      return {
          name: 'Maud Conner',
          views: '76k'
      }
  },
  components: {
      'btn-outline' : ButtonOutline,
  }
};
</script>

<style>
</style>