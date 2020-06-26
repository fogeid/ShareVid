<template>
    <div class="detail">
        <div class="row justify-center">
            <div class="col-12 col-sm-12">
                <toolbar title="Video Detail" />
            </div>
        </div>
    </div>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';

export default {
  name: 'Detail',
  components: {
      'toolbar' : Toolbar,
  }
};
</script>

<style>
</style>
