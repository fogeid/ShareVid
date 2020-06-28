<template>
  <q-btn outline rounded style="font-size: .8rem;letter-spacing: 1px;" color="primary" type="submit" :label="title" no-caps />
</template>

<script>
export default {
  name: 'ButtonOutline',  
  props: ['title']
};
</script>