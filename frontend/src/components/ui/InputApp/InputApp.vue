<template>
  <input
      type="text"
      :placeholder="placeholder"
      class="input"
      :class="{'input_small': small}"
      @input="(e) => emit('update:modelValue', e.target.value)"
      ref="mask"
  >
</template>
<script setup>
import './input.scss';
import { defineProps, onMounted, ref } from 'vue';
import { useMask } from '@/hooks/useMask';
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  placeholder: {
    type: String,
  },
  small: {
    type: Boolean,
    default: false
  },
  phoneMask: {
    type: Boolean,
    default: false
  }
});
const {placeholder, small, phoneMask} = props;
const mask = ref(null);
onMounted(() => {
  if (phoneMask) useMask(mask.value);
})
</script>