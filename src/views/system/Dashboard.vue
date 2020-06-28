<template>
    <q-layout class="dashboard">
        <q-page-container class="toolbar row justify-center">
            <div class="col">
                <toolbar title="Dashboard" />
            </div>
        </q-page-container>        
        <q-page-container class="tab row justify-center">        
            <div class="col-12 col-sm-12">
                <tab />
            </div>
        </q-page-container>
    </q-layout>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';
import Tab from '@/components/Tab.vue';

export default {
  name: 'Dashboard',
  components: {
      'toolbar' : Toolbar,
      'tab' : Tab
  }
};
</script>

<style>
.toolbar {
    position: absolute;
}

.tab {
    margin-top: 45px;
}
</style>
