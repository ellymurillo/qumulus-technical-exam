<template>
  <v-row class="layout-wrapper">
    <v-col
      v-for="(element, index) in layout.uischema.elements"
      :key="`${layout.path}-${index}`"
      :cols="`${element.type == 'HorizontalLayout' ? 6 : 12}`"
    > 
      <dispatch-renderer
        :schema="layout.schema"
        :uischema="element"
        :path="layout.path"
        :enabled="layout.enabled"
        :renderers="layout.renderers"
        :cells="layout.cells"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
  import { Layout } from '@jsonforms/core';
  import { defineComponent } from 'vue';
  import { DispatchRenderer, rendererProps, useJsonFormsLayout } from '@jsonforms/vue';
  
  const layoutRenderer = defineComponent({
    name: "LayoutRenderer",
    components: {
      DispatchRenderer
    },
    props: {
      ...rendererProps<Layout>()
    },
    setup(props) {
      return useJsonFormsLayout(props);
    }
  });
  
  export default layoutRenderer;
</script>