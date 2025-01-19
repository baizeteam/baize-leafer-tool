<template>
  <el-row class="tac">
    <el-col>
      <div class="flex header">
        <img src="@/assets/leafer.svg" />
        <div class="title">LeaferJS</div>
      </div>
      <el-menu class="el-menu-vertical-demo" router :default-openeds="['base', 'plugin']" :default-active="selectIndex">
        <el-menu-item index="leafer-base">
          <el-icon>
            <House />
          </el-icon>
          <span>基础用法</span>
        </el-menu-item>
        <el-sub-menu index="plugin">
          <template #title>
            <el-icon>
              <Tools />
            </el-icon>
            <span>插件</span>
          </template>
          <el-menu-item route="/plugin/leafer-spine" index="leafer-spine">leafer-spine</el-menu-item>
          <!-- <el-menu-item route="/plugin/sand-box-test" index="sand-box-test">sand-box-test</el-menu-item>
          <el-menu-item route="/plugin/sand-box-plugin" index="sand-box-plugin">sand-box-plugin</el-menu-item> -->
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  House,
  Tools,
} from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
const router = useRouter()

const selectIndex = ref('base')

onMounted(() => {
  router.afterEach((to, from) => {
    const path = to.path.split('/')
    selectIndex.value = path[path.length - 1]
    console.log(selectIndex.value)
  })
})
</script>

<style scoped>
.flex {
  display: flex;
  align-items: center;

  .title {
    margin-left: 10px;
    font-size: 20px;
  }

  img {
    width: 24px;
    height: 24px;
  }

  .header {
    padding: 12px 20px;
  }
}

.el-menu {
  border-right: none;
}
</style>
