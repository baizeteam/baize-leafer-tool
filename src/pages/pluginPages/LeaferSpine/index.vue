<template>
  <div class="leafer-dom" ref="leaferDom"></div>
  <div>
    <el-button v-for="item in skeletonData?.animations" :key="item.name" @click="handleAnimateClick(item.name)">{{
      item.name
      }}</el-button>
  </div>
  <code-demo />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Leafer, Rect } from 'leafer-ui'
import { Spine, loadAsset } from '@leafer-in/spine/src'
const leaferDom = ref<HTMLDivElement>()
const spine = ref<Spine>()
const skeletonData = ref<any>(null)

onMounted(() => {
  init()
})

const init = async () => {
  skeletonData.value = await loadAsset({
    baseUrl: '/models/spineboy/',
    skelName: 'spineboy.skel',
    atlasName: 'spineboy.atlas',
  })

  const leafer = new Leafer({ view: leaferDom.value })
  spine.value = new Spine({
    x: 200,
    y: 200,
    scale: 0.3,
    skeletonData: skeletonData.value,
  })
  const rect = new Rect({
    x: 200,
    y: 200,
    width: 400,
    height: 400,
    fill: '#32cd79',
    draggable: true,
  })

  leafer.add(rect)
  leafer.add(spine.value)

}

const handleAnimateClick = (name: string) => {
  spine.value?.animationState.setAnimation(0, name, true)
}

</script>

<style scoped>
.leafer-dom {
  width: 600px;
  height: 600px;
  border: 1px solid #eee;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
}
</style>
