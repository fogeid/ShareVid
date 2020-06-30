<template>
    <q-layout class="gallery">
        <q-page-container class="toolbar row justify-center">
            <div class="col-12">
                <toolbar title="Video Detail" />
            </div>
        </q-page-container>
        <q-page-container class="video row justify-center">
            <div class="col-12 col-sm-8 col-md-8">
                <q-video :ratio="16/9" src="https://www.youtube.com/embed/hGalqf_D8To" />
            </div>
        </q-page-container>
        <q-page-container class="row justify-center">
            <div class="col-12">
                <user />
            </div>
        </q-page-container>
        <q-page-container>
            <div class="row justify-center">
                <div class="col-6">
                    <card url="https://www.youtube.com/embed/ZY3-MFxVdEw"
                        title="Get Ready Fast For Fall Leaf Viewing Trips"
                        subtitle="Travel" />   
                </div>
                <div class="col-6">
                    <card url="https://www.youtube.com/embed/uraDZaRAjT0"
                        title="Getting Cheap Airfare For Last Minute Travel"
                        subtitle="Adventure" />                        
                </div>
            </div>
            <div class="row justify-center">
                <div class="col-6">
                    <card url="https://www.youtube.com/embed/uraDZaRAjT0"
                        title="Get Ready Fast For Fall Leaf Viewing Trips"
                        subtitle="Travel" />                
                </div>
                <div class="col-6">
                    <card url="https://www.youtube.com/embed/TWy2rxyZLrE"
                        title="Getting Cheap Airfare For Last Minute Travel"
                        subtitle="Adventure" />
                </div>
            </div>

        </q-page-container>
    </q-layout>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';
import User from '@/components/User.vue';
import Card from '@/components/Card.vue';

export default {
  name: 'Detail',
  components: {
      'toolbar' : Toolbar,
      'user' : User,
      'card' : Card
  }
};
</script>

<style>
.toolbar {
    position: absolute;
}

.video {
    margin-top: 50px;
}
</style>
