<template>
    <div class="flex justify-center q-pa-md">
        <q-card class="card-following bg-primary text-center q-py-lg">
            <div class="avatar">
                <q-avatar class="text-center" size="80px">
                    <img src="../assets/photo-profile.png">
                </q-avatar>
                <q-card-section class="q-pa-none q-py-md">
                    <span class="text-white">{{ name }}</span><br>
                    <span class="text-white">{{ job }}</span>
                </q-card-section>
            </div>
            <btn-outline class="text-white" title="Unfollow" />
        </q-card>        
    </div>
</template>

<script>
import ButtonOutline from '@/components/ButtonOutline.vue';


export default {
  name: 'CardFollowing',
  data() {
      return {
          name: 'Jared Morrison',
          job: 'Designer'
      }
  },
  components: {
      'btn-outline' : ButtonOutline,
  }
};
</script>

<style>
.card-following {
    width: 100%;
    max-width: 300px;
}
</style>