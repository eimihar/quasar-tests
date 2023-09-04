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
  mounted() {
    // not showing when this is tested through quasar dev (spa) or npm run dev
    console.log(process.env.DEV);
  },
  computed: {
    mode() {
      return process.env.MODE;
    },
    bootMode() {
      return this.$envMode;
    }
  }
})
</script>
