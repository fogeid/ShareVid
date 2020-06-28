<template>
  <div class="col-12">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="home" label="Home" />
        <q-tab name="trending" label="Trending" />
        <q-tab name="popular" label="Popular" />
        <q-tab name="playlist" label="Playlist" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel class="q-pa-none" name="home">
            <div class="row justify-center">
                <div class="col-12 col-sm-8 col-md-6">
                    <q-video :ratio="16/9" src="https://www.youtube.com/embed/hGalqf_D8To" />
                    <div class="title row justify-between items-end q-my-sm q-mx-md">
                        <h1 class="text-h6 text-secondary col-9 q-my-none">Stair Lifts Feel The Freedom Of Your Home</h1>
                        <q-icon  name="share"  class="text-primary col-1" style="font-size: 1rem;" />
                        <q-icon name="favorite" class="text-primary col-1" style="font-size: 1rem;" />
                    </div>                    
                    <p class="text-subtitle2 text-secondary q-mx-md q-mb-sm">Decoration</p>
                </div>                
            </div>
            <div>
                <div class="row">
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
                <div class="row">
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
            </div>
        </q-tab-panel>

        <q-tab-panel class="q-pa-none" name="trending">
            <div class="row justify-center">
                <div class="col-12 col-sm-8 col-md-6">
                    <q-video :ratio="16/9" src="https://www.youtube.com/embed/hGalqf_D8To" />
                    <div class="title row justify-between items-end q-my-sm q-mx-md">
                        <h1 class="text-h6 text-secondary col-9 q-my-none">Stair Lifts Feel The Freedom Of Your Home</h1>
                        <q-icon  name="share"  class="text-primary col-1" style="font-size: 1rem;" />
                        <q-icon name="favorite" class="text-primary col-1" style="font-size: 1rem;" />
                    </div>                    
                    <p class="text-subtitle2 text-secondary q-mx-md q-mb-sm">Decoration</p>
                </div>                
            </div>
            <div>
                <div class="row">
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
                <div class="row">
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
            </div>
        </q-tab-panel>

        <q-tab-panel class="q-pa-none" name="popular">
            <div class="row justify-center">
                <div class="col-12 col-sm-8 col-md-6">
                    <q-video :ratio="16/9" src="https://www.youtube.com/embed/hGalqf_D8To" />
                    <div class="title row justify-between items-end q-my-sm q-mx-md">
                        <h1 class="text-h6 text-secondary col-9 q-my-none">Stair Lifts Feel The Freedom Of Your Home</h1>
                        <q-icon  name="share"  class="text-primary col-1" style="font-size: 1rem;" />
                        <q-icon name="favorite" class="text-primary col-1" style="font-size: 1rem;" />
                    </div>                    
                    <p class="text-subtitle2 text-secondary q-mx-md q-mb-sm">Decoration</p>
                </div>                
            </div>
            <div>
                <div class="row">
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
                <div class="row">
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
            </div>
        </q-tab-panel>

        <q-tab-panel class="q-pa-none" name="playlist">
            <div class="row justify-center">
                <div class="col-12 col-sm-8 col-md-6">
                    <q-video :ratio="16/9" src="https://www.youtube.com/embed/hGalqf_D8To" />
                    <div class="title row justify-between items-end q-my-sm q-mx-md">
                        <h1 class="text-h6 text-secondary col-9 q-my-none">Stair Lifts Feel The Freedom Of Your Home</h1>
                        <q-icon  name="share"  class="text-primary col-1" style="font-size: 1rem;" />
                        <q-icon name="favorite" class="text-primary col-1" style="font-size: 1rem;" />
                    </div>                    
                    <p class="text-subtitle2 text-secondary q-mx-md q-mb-sm">Decoration</p>
                </div>                
            </div>
            <div>
                <div class="row">
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
                <div class="row">
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
            </div>            
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
    name: 'TabDashboard',
  data () {
    return {
      tab: 'home',
      splitterModel: 20
    }
  },
  components: {
      'card' : Card
  }
}
</script>

<style>
</style>