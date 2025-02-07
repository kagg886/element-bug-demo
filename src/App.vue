<template>
<!--  <anim-router-view v-loading.fullscreen.lock="loading"/>-->
<!--  <el-dialog :model-value="openErrorDialog"-->
<!--             title="提示" width="30%"-->
<!--             :close-on-click-modal="false"-->
<!--             :show-close="false"-->
<!--             :close-on-press-escape="false">-->
<!--    <el-text>服务器连接失败</el-text>-->
<!--    <template #footer>-->
<!--      <el-button @click="retryPing">重试</el-button>-->
<!--    </template>-->
<!--  </el-dialog>-->

  <anim-router-view/>
</template>

<script setup lang="ts">
import AnimRouterView from "@/componments/anim-router-view.vue";
import {useLoading} from "@/util/loading.ts";
import {ping} from "@/api/ping.ts";
import {computed, onMounted, ref} from "vue";
import {RequestError} from "@/util/request.ts";

const success = ref(false)
const {loading, func: retryPing} = useLoading(async () => {
  await ping().then(() => {
    success.value = true
  }).catch((e: RequestError) => {
    ElMessage.error(e.message)
  })
})

const openErrorDialog = computed(() => !loading.value && !success.value)

onMounted(retryPing)

</script>