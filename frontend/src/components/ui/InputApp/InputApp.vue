<template>
  <input
      type="text"
      :placeholder="placeholder"
      class="input"
      :class="{'input_small': small, 'error': getError}"
      @input="(e) => emit('update:modelValue', e.target.value)"
      @focus="emit('update:error', false);"
      ref="mask"
      autocomplete="masked"
  >
</template>
<script setup>
import {computed, defineProps, onMounted, ref} from 'vue';
import { useMask } from '@/hooks/useMask';
const emit = defineEmits(['update:modelValue', 'update:error']);
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
  },
  error: {
    type: Boolean,
    default: false
  }
});
const {placeholder, small, phoneMask, error} = props;
const mask = ref(null);
const getError = computed(() => props.error);
onMounted(() => {
  if (phoneMask) useMask(mask.value);
})
</script>