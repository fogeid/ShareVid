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
        <q-tab name="latest" label="Latest" />
        <q-tab name="popular" label="Popular" />
        <q-tab name="playlist" label="Playlist" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel class="q-pa-none" name="latest">            
            <div>
                <div class="row justify-center items-center">
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/ZY3-MFxVdEw"
                                title="Get Ready Fast For Fall Leaf Viewing Trips"
                                subtitle="Travel" />
                        </a>
                    </div>
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/uraDZaRAjT0"
                                title="Getting Cheap Airfare For Last Minute Travel"
                                subtitle="Adventure" />       
                        </a>                 
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/uraDZaRAjT0"
                                title="Get Ready Fast For Fall Leaf Viewing Trips"
                                subtitle="Travel" />       
                        </a>         
                    </div>
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/TWy2rxyZLrE"
                                title="Getting Cheap Airfare For Last Minute Travel"
                                subtitle="Adventure" />
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/uraDZaRAjT0"
                                title="Get Ready Fast For Fall Leaf Viewing Trips"
                                subtitle="Travel" />     
                        </a>           
                    </div>
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/TWy2rxyZLrE"
                                title="Getting Cheap Airfare For Last Minute Travel"
                                subtitle="Adventure" />
                        </a>
                    </div>
                </div>
            </div>
        </q-tab-panel>

        <q-tab-panel class="q-pa-none" name="popular">            
            <div>
                <div class="row">
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/ZY3-MFxVdEw"
                                title="Get Ready Fast For Fall Leaf Viewing Trips"
                                subtitle="Travel" />   
                        </a>
                    </div>
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/uraDZaRAjT0"
                                title="Getting Cheap Airfare For Last Minute Travel"
                                subtitle="Adventure" />        
                        </a>                
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/uraDZaRAjT0"
                                title="Get Ready Fast For Fall Leaf Viewing Trips"
                                subtitle="Travel" />   
                        </a>           
                    </div>
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/TWy2rxyZLrE"
                                title="Getting Cheap Airfare For Last Minute Travel"
                                subtitle="Adventure" />
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/uraDZaRAjT0"
                                title="Get Ready Fast For Fall Leaf Viewing Trips"
                                subtitle="Travel" />          
                        </a>      
                    </div>
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/TWy2rxyZLrE"
                                title="Getting Cheap Airfare For Last Minute Travel"
                                subtitle="Adventure" />
                        </a>
                    </div>
                </div>
            </div>
        </q-tab-panel>

        <q-tab-panel class="q-pa-none" name="playlist">            
            <div>
                <div class="row">
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/ZY3-MFxVdEw"
                                title="Get Ready Fast For Fall Leaf Viewing Trips"
                                subtitle="Travel" />   
                        </a>
                    </div>
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/uraDZaRAjT0"
                                title="Getting Cheap Airfare For Last Minute Travel"
                                subtitle="Adventure" />        
                        </a>                
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/uraDZaRAjT0"
                                title="Get Ready Fast For Fall Leaf Viewing Trips"
                                subtitle="Travel" />   
                        </a>           
                    </div>
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/TWy2rxyZLrE"
                                title="Getting Cheap Airfare For Last Minute Travel"
                                subtitle="Adventure" />
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/uraDZaRAjT0"
                                title="Get Ready Fast For Fall Leaf Viewing Trips"
                                subtitle="Travel" />          
                        </a>      
                    </div>
                    <div class="col-6">
                        <a href="/detail">
                            <card url="https://www.youtube.com/embed/TWy2rxyZLrE"
                                title="Getting Cheap Airfare For Last Minute Travel"
                                subtitle="Adventure" />
                        </a>
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
      tab: 'latest',
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