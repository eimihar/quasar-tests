<template>
  <div style="padding: 20px;">
    <div>
      Process env mode is {{ mode }}
    </div>
    <div>
      Env mode from boot is {{ bootMode }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import * as process from 'process'

export default defineComponent({
  computed: {
    mode() {
      return !!process ? process.env.MODE : '-'
    },
    bootMode() {
      return this.$envMode;
    }
  }
})
</script>
