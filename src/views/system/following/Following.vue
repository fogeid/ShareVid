<template>
    <q-layout class="following">
        <q-page-container class="toolbar row justify-center">
            <div class="col-12">
                <toolbar title="Following" />
            </div>
        </q-page-container>        
        <q-page-container class="card">     
            <div class="row">
                <div class="col-6 col-sm-4">
                    <card-following />
                </div>
                <div class="col-6 col-sm-4 col-md-4">
                    <card-following />
                </div>
                <div class="col-6 col-sm-4 col-md-4">
                    <card-following />
                </div>
                <div class="col-6 col-sm-4 col-md-4">
                    <card-following />
                </div>
                <div class="col-6 col-sm-4 col-md-4">
                    <card-following />
                </div>
                <div class="col-6 col-sm-4 col-md-4">
                    <card-following />
                </div>
                <div class="col-6 col-sm-4 col-md-4">
                    <card-following />
                </div>
                <div class="col-6 col-sm-4 col-md-4">
                    <card-following />
                </div>
                <div class="col-6 col-sm-4 col-md-4">
                    <card-following />
                </div>
                <div class="col-6 col-sm-4 col-md-4">
                    <card-following />
                </div>
            </div>            
        </q-page-container>
    </q-layout>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';
import CardFollowing from '@/components/CardFollowing.vue';

export default {
  name: 'Following',
  components: {
      'toolbar' : Toolbar,
      'card-following' : CardFollowing
  }
};
</script>

<style>
.toolbar {
    position: absolute;
}

.card {
    margin-top: 50px;
}
</style>
