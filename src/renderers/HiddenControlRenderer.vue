<template>
  <hidden class="hidden">{{ control.data }}</hidden>
</template>
  
<style scoped>
  .hidden {
    display: none;
  }
</style>

<script lang="ts">
import { ControlElement } from '@jsonforms/core';
import { defineComponent } from 'vue';
import { rendererProps, useJsonFormsControl } from '@jsonforms/vue';

const controlRenderer = defineComponent({
  name: "HiddenControlRenderer",
  props: {
    ...rendererProps<ControlElement>()
  },
  setup(props) {
    return useJsonFormsControl(props);
  },
});

export default controlRenderer;
</script>