<template>
    <div class="dashboard">
        <div class="row justify-center">
            <div class="col-12 col-sm-12">
                <toolbar title="Dashboard" />
            </div>
        </div>
    </div>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';

export default {
  name: 'Dashboard',
  components: {
      'toolbar' : Toolbar,
  }
};
</script>

<style>
</style>
