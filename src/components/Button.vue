<template>
  <q-btn unelevated rounded class="full-width" style="font-size: 1.2rem;letter-spacing: 1px;" color="primary" type="submit" :label="title" no-caps />
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      
    }
  },
  props: ['title']
}
</script>