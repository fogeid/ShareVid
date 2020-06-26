<template>
    <q-page class="profile">
        <div class="row justify-center">
            <div class="col-12 col-sm-12">
                <toolbar title="Profile" />
            </div>
            <q-page-container>
                <profile-detail />
            </q-page-container>
        </div>
    </q-page>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';
import ProfileDetail from '@/components/ProfileDetail.vue';

export default {
  name: 'Profile',
  components: {
      'toolbar' : Toolbar,
      'profile-detail' : ProfileDetail
  }
};
</script>

<style>
</style>
