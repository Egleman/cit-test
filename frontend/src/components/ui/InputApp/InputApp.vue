<template>
  <input
      type="text"
      :placeholder="placeholder"
      class="input"
      :class="{'input_small': small}"
      @input="(e) => emit('update:modelValue', e.target.value)"
  >
</template>
<script setup>
import { defineProps } from 'vue';
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  placeholder: {
    type: String,
  },
  small: {
    type: Boolean,
    default: false
  },

});
const {placeholder} = props;
</script>