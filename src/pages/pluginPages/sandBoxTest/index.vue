<template>
  <div class="flex">
    <div class="left">
      <el-button @click="handleChange">change</el-button>
      <div class="leafer-code">
        <MonacoEditor :code="code" ref="monacoEditor" />
      </div>

    </div>
    <div class="right" v-loading="loading">
      <iframe ref="iframeDom" :src="iframeUrl" @load="onFrameLoad" />
    </div>

  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import MonacoEditor from '@/components/MonacoEditor.vue'
const iframeUrl = ref('')
const url = window.location.href;
const hashIndex = url.indexOf('#'); 
const contentBeforeHash = hashIndex !== -1 ? url.substring(0, hashIndex) : url;
iframeUrl.value = contentBeforeHash + '#/iframe-page'

const monacoEditor = ref<typeof MonacoEditor>()

const loading = ref(true)
const iframeDom = ref<HTMLIFrameElement>()
const code = ref(`
const rect = new Rect({
  x: 100,
  y: 100,
  width: 400,
  height: 400,
  fill: '#32cd79',
  draggable: true,
})
leafer.add(rect)
`)

const onFrameLoad = () => {
  setTimeout(() => {
    loading.value = false
    handleChange()
  }, 100)
}

const handleChange = () => {
  code.value = monacoEditor.value?.saveCode()
  iframeDom.value?.contentWindow?.postMessage({
    type: 'leafer-change',
    data: {
      code: code.value
    }
  }, '*')
}

</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  height: 100%;

  .left {
    width: 50%;
    display: flex;
    flex-direction: column;

    .leafer-code {
      width: 100%;
      height: 100%;
      white-space: pre-wrap;
      overflow: auto;
    }
  }

  .right {
    flex: 1;
    border-radius: 6px;
    padding: 0;
    height: 100%;

    iframe {
      width: 100%;
      height: 100%;
      border: 1px solid #eee;
    }
  }
}
</style>
