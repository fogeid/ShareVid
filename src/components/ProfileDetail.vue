<template>
    <q-page>
        <div class="row justify-center content-start">        
            <div class="avatar col-12 col-sm-8 col-md-4">
                <img src="../assets/photo-profile.png">
                <div class="description">
                    <h1 class="text-h4 text-white">{{ name }}</h1>
                    <p class="text-white">Video Editor</p>
                </div>                
            </div>
        </div>
        <div class="row justify-center content-start">
            <div class="stats rounded-borders q-pa-md bg-primary col-10 col-xs-10 col-sm-6 col-md-3 text-white">
                <q-list dense class="rounded-borders row justify-around">
                <q-item clickable v-ripple>
                    <q-item-section>
                    <span>231</span>
                    <span>Likes</span>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                    <q-item-section>
                    <span>654</span>
                    <span>Following</span>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                    <q-item-section>
                    <span>456</span>
                    <span>Followers</span>
                    </q-item-section>
                </q-item>
                </q-list>
            </div>      
        </div>  
    </q-page>
</template>

<script>
export default {
  name: 'ProfileDetail',
  data() {
      return {
          name: 'Lizzie Aguilar',
      }
  }
};
</script>

<style>
.avatar img {
    max-width: 100%;
}

.description {
    z-index: 10;
    margin: -150px 0 0 50px;
    text-align: left;
}

.description h1 {
    margin-bottom: 0px;
}
</style>