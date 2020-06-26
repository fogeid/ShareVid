<template>
    <div class="gallery">
        <div class="row justify-center">
            <div class="col-12 col-sm-12">
                <toolbar title="Video Gallery" />
            </div>
        </div>
    </div>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';

export default {
  name: 'Gallery',
  components: {
      'toolbar' : Toolbar,
  }
};
</script>

<style>
</style>
