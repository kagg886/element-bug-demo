<script setup lang="ts">

import {delayLoadingGetter} from "@/util/delay.ts";
import anime from 'animejs/lib/anime.es.js';
import LoginPanel from "@/page/login/login-panel.vue";
import RegisterPanel from "@/page/login/register-panel.vue";
import {ArrowLeft} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";

const nav = useRouter()

const enableAnim = delayLoadingGetter(() => {
  return anime.timeline({
    easing: "easeInOutExpo",
    duration: 700,
    autoplay: false,
  })

      .add({
        targets: '.overlay',
        translateX: ['0%', '100%'],
      },0)
      .add({
        targets: '.panelA',
        opacity: 1,
      }, 0)
      .add({
        targets: '.panelB',
        opacity: 0,
      }, 0)
})
let initial = false
const toggle = () => {
  let animation = enableAnim.value!!
  if (initial) {
    animation.reverse()
  }
  initial = true
  animation!!.play()
}
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center flex-col">
    <div class="w-2/3 h-4/5 relative flex">
      <div class="w-1/2 h-full left-0 top-0 panelA">
        <register-panel @register="toggle"/>
      </div>
      <div class="w-1/2 h-full left-1/2 top-0 panelB">
        <login-panel @register="toggle"/>
      </div>

      <div class="absolute overlay w-1/2 h-full" style="background-color: azure"></div>
    </div>
    <div class="h-2"></div>
    <el-link @click="nav.back()"><el-icon><arrow-left/></el-icon> 回到主站</el-link>
  </div>
</template>

<style scoped>

</style>