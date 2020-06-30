<template>
    <q-layout class="dashboard">
        <q-page-container class="toolbar row justify-center">
            <div class="col-12">
                <toolbar title="Dashboard" />
            </div>
        </q-page-container>        
        <q-page-container class="tab row justify-center">        
            <div class="col-12 col-sm-12">
                <tab-dashboard />
            </div>
        </q-page-container>
    </q-layout>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';
import TabDashboard from '@/components/TabDashboard.vue';

export default {
  name: 'Dashboard',
  components: {
      'toolbar' : Toolbar,
      'tab-dashboard' : TabDashboard
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
