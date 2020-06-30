<template>
  <q-layout view="lHh Lpr lFf">
      <q-header elevated class="glossy">
        <q-toolbar class="text-white text-center bg-primary">
          <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
            icon="menu"
          />

          <q-toolbar-title>
            {{ title }}
          </q-toolbar-title>

          <q-btn flat round dense icon="more_vert" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        content-class="bg-primary"
      >
        <q-list>
          <q-item class="q-mb-lg">
              <q-item-section avatar>                
                  <q-avatar size="120px" class="q-mb-md q-mt-lg">
                      <img src="../assets/photo-profile.png">
                  </q-avatar>
                  <div class="text-weight-bold text-white text-h5">{{ name }}</div>
                  <div class="text-white">{{ job }}</div>
              </q-item-section>            
          </q-item>

          <q-item clickable tag="a" href="#/profile">
            <q-item-section avatar>
              <q-icon class="text-white" name="person" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-white">My Profile</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable tag="a" href="#">
            <q-item-section avatar>
              <q-icon class="text-white" name="stars" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-white">Activity</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable tag="a" href="#">
            <q-item-section avatar>
              <q-icon class="text-white" name="notifications" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-white">Notifications</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable tag="a" href="#/following">
            <q-item-section avatar>
              <q-icon class="text-white" name="peoples" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-white">Friends</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable tag="a" href="#">
            <q-item-section avatar>
              <q-icon class="text-white" name="messages" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-white">Messages</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable tag="a" href="#/gallery">
            <q-item-section avatar>
              <q-icon class="text-white" name="collections" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-white">Gallery</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable tag="a" href="#">
            <q-item-section avatar>
              <q-icon class="text-white" name="settings" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-white">Settings</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
  </q-layout>
</template>

<script>
export default {
  name: 'Button',
  data () {
    return {
      leftDrawerOpen: false,
      name: 'Lizzie Aguilar',
      job: 'Web Developer'
    }
  },
  props: ['title']
};
</script>