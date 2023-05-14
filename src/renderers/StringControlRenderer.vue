<template>
  <v-text-field variant="outlined" :class="{'error': control.errors}" :label="control.label" outlined @change="onChange" :model-value="control.data">
    <template v-slot:details v-if="control.data?.length && control.errors || control.required && !control.data.length">
      <span color="red">
          <template v-if="control.required && !control.data.length">
            This field is required
          </template>
          <template v-else>
            {{ control.errors }}
          </template>
      </span>
    </template>
  </v-text-field>
</template>

<script lang="ts">
import { ControlElement } from '@jsonforms/core';
import { defineComponent } from 'vue';
import { rendererProps, useJsonFormsControl } from '@jsonforms/vue';

const controlRenderer = defineComponent({
  name: "StringControlRenderer",
  props: {
    ...rendererProps<ControlElement>()
  },
  setup(props) {
    return useJsonFormsControl(props);
  },
  methods: {
    onChange(event: Event) {
      this.handleChange(
        this.control.path,
        (event.target as HTMLInputElement).value
      );
    }
  },
});

export default controlRenderer;
</script>