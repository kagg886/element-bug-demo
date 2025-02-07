<script setup lang="ts">
import AnimRouterView from "@/componments/anim-router-view.vue";
import {useRoute, useRouter} from "vue-router";
import {Search} from "@element-plus/icons-vue";
import logo from '@/assets/logo.png'

const router = useRouter()
const route = useRoute()

function go(path: string) {
  router.push(path)
}
</script>

<template>
  <el-container>
    <el-header>
      <el-menu
          :ellipsis="false"
          class="w-full"
          router
          :default-active="route.path"
          mode="horizontal">
        <el-card shadow="never" style="border: none" :body-style="{'padding': 0,'height':'100%', 'display': 'flex','align-items':'center'}">
          <el-image :src="logo" style="width: 50px; height: 50px"/>
          <span class="w-4"></span>
          <span class="text-xl font-bold">睿赛云析</span>
        </el-card>
        <span class="w-1/5"></span>
        <el-menu-item index="/">推荐竞赛</el-menu-item>
        <el-menu-item index="/cube">赛程规划</el-menu-item>
        <el-menu-item index="/detect">竞力云图</el-menu-item>
        <el-menu-item index="/teachers">名师推荐</el-menu-item>

        <div class="ml-auto flex flex-row items-center justify-end">
          <el-input>
            <template #prefix>
              <el-icon><Search/></el-icon>
            </template>
          </el-input>
          <span class="w-4"></span>
          <el-button type="primary" @click="go('/login')">登录</el-button>
          <el-button>注册</el-button>
        </div>
      </el-menu>

    </el-header>
    <el-main>
      <anim-router-view/>
    </el-main>
  </el-container>
</template>

<style scoped>
</style>