<template>
  <div class="leafer-dom" ref="leaferDom"></div>
</template>

<script setup lang="ts">
import { Leafer, Rect } from 'leafer-ui'
import { ref, onMounted } from 'vue'
const leaferDom = ref<HTMLDivElement>()
const _leafer = ref<Leafer>()


onMounted(() => {
  init()
  window.addEventListener('message', handleMessage)
})

const handleMessage = (e: MessageEvent) => {
  if (e.data.type === 'leafer-change') {
    const { code } = e.data.data;

    // 确保 leaferDom、Leafer 和 Rect 已经定义
    if (typeof Leafer !== 'undefined' && typeof Rect !== 'undefined' && leaferDom.value) {
      try {
        // 执行传入的代码
        const leafer = _leafer.value
        leafer.clear()
        eval(code);
      } catch (error) {
        console.error('Error executing code inside iframe:', error);
      }
    } else {
      console.error('Required variables (Leafer, Rect, leaferDom) are not defined.');
    }
  }
}

const init = () => {
  _leafer.value = new Leafer({ view: leaferDom.value })
}
</script>

<style lang="scss" scoped>
.leafer-dom {
  width: 100%;
  height: 100%;
}
</style>