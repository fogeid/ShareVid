<template>
    <div class="following">
        <div class="row justify-center">
            <div class="col-12 col-sm-12">
                <toolbar title="Following" />
            </div>
        </div>
    </div>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';

export default {
  name: 'Following',
  components: {
      'toolbar' : Toolbar,
  }
};
</script>

<style>
</style>
