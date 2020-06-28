<template>
    <q-layout class="gallery">
        <q-page-container class="toolbar row justify-center">
            <div class="col-12">
                <toolbar title="Video Gallery" />
            </div>
        </q-page-container>        
        <q-page-container class="tab row justify-center">        
            <div class="col-12 col-sm-12">
                <tab-galerry />
            </div>
        </q-page-container>
    </q-layout>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';
import TabGallery from '@/components/TabGallery.vue';

export default {
  name: 'Gallery',
  components: {
      'toolbar' : Toolbar,
      'tab-galerry' : TabGallery
  }
};
</script>

<style>
.toolbar {
    position: absolute;
}

.tab {
    margin-top: 50px;
}
</style>
