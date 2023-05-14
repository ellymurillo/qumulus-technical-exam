import { 
  isControl, 
  isLayout, 
  isDateControl, 
  isObjectControl, 
  isNumberControl 
} from "@jsonforms/core";

import StringControlRenderer from "./StringControlRenderer.vue";
import LayoutRenderer from "./LayoutRenderer.vue";
import DateControlRenderer from "./DateControlRenderer.vue";
import ButtonControlRenderer from "./ButtonControlRenderer.vue";
import HiddenControlRenderer from "./HiddenControlRenderer.vue";

export default [
  {
    renderer: StringControlRenderer,
    type: isControl,
  }, 
  {
    renderer: LayoutRenderer,
    type: isLayout,
  }, 
  {
    renderer: DateControlRenderer,
    type: isDateControl,
    rank: 3
  }, 
  {
    renderer: ButtonControlRenderer, 
    type: isObjectControl,
    rank: 3, 
  },
  {
    renderer: HiddenControlRenderer,
    type: isNumberControl,
    rank: 3
  }
];