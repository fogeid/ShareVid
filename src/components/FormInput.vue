<template>
   <q-input dark class="input" label-color="white" v-model="text" :type="type" :label="title" />
</template>

<script>
export default {
  name: 'Form-Input',
  data() {
    return {
      text: ''
    }
  },
  props: ['title', 'type']
}
</script>

<style>
</style>