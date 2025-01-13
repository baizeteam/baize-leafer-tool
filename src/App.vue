<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import CommonMenu from './components/CommonMenu.vue';
const hideMenu = ref(false);
const router = useRouter();
onMounted(() => {
  router.afterEach((to) => {
    const path = to.path.split('/')
    const curPath = path[path.length - 1]
    if (curPath === 'iframe-page') {
      hideMenu.value = true;
    }
  })
});
</script>

<template>
  <div class="flex">
    <div v-if="!hideMenu" class="left">
      <CommonMenu />
    </div>
    <div class="right" :style="{ padding: hideMenu ? '0' : '24px' }">
      <RouterView />
    </div>
  </div>

</template>

<style scoped>
.flex {
  display: flex;
}

.left {
  width: 200px;
  height: 100vh;
  overflow: auto;
  border-right: 1px solid #eee;
  user-select: none;
}

.right {
  flex: 1;
  padding: 24px;
  height: 100vh;
  box-sizing: border-box;
  overflow: auto;
}
</style>
