<template>
    <q-layout class="profile">
        <q-page-container class="row justify-center">
            <div class="col-12 col-sm-12">
                <toolbar class="toolbar" title="Profile" />  
                <profile-detail class="pd text-center" />
            </div>
        </q-page-container>
        <q-page-container>
            
        </q-page-container>
        <q-page-container class="card flex justify-center">
            <div class="row justify-center items-center">
                <div class="col-6">
                    <card url="https://www.youtube.com/embed/hGalqf_D8To"
                        title="Get Ready Fast For Fall Leaf Viewing Trips"
                        subtitle="Travel" />                
                </div>
                <div class="col-6">
                    <card url="https://www.youtube.com/embed/ZY3-MFxVdEw"
                        title="Getting Cheap Airfare For Last Minute Travel"
                        subtitle="Adventure" />
                </div>
            </div>
            <div class="row justify-center items-center">
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
import ProfileDetail from '@/components/ProfileDetail.vue';
import Card from '@/components/Card.vue';

export default {
  name: 'Profile',
  components: {
      'toolbar' : Toolbar,
      'profile-detail' : ProfileDetail,
      'card' : Card
  }
};
</script>

<style>
.toolbar {
    position: absolute;
}

.card {
    margin-top: -140px;
}

@media screen and (min-width: 425px) {
  .card {
      margin-top: -80px;
  }
}

@media screen and (min-width: 768px) {
  .card {
      margin-top: 0;
  }
}

@media screen and (min-width: 992px) {
  .card {
      margin-top: -120px;
  }
}

@media screen and (min-width: 1200px) {
  .card {
      margin-top: -180px;
  }
}
</style>
