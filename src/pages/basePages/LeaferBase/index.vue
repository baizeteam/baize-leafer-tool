<template>
  <div class="leafer-dom" ref="leaferDom"></div>
  <code-demo />
</template>

<script setup lang="ts">
import { Leafer, Rect } from 'leafer-ui'
import { ref, onMounted } from 'vue'
const leaferDom = ref<HTMLDivElement>()

onMounted(() => {
  init()
})

const init = () => {
  const leafer = new Leafer({ view: leaferDom.value })
  const rect = new Rect({
    x: 100,
    y: 100,
    width: 400,
    height: 400,
    fill: '#32cd79',
    draggable: true,
  })

  leafer.add(rect)
}
</script>

<style lang="scss" scoped>
.leafer-dom {
  width: 600px;
  height: 600px;
  border: 1px solid #eee;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
}
</style>
