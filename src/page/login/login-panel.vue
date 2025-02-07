<script setup lang="ts">
import {reactive} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()

const emits = defineEmits<{
  (e: 'register'): void
}>()

const form = reactive({
  username: '',
  password: ''
})

function handleSubmit() {
  emits('register')
}
</script>

<template>
  <el-card class="h-full" :shadow="false">
    <template #header>
      <div class="flex justify-center items-center">
        <el-text size="large" type="primary">
          登录
        </el-text>
      </div>
    </template>
    <el-form :model="form">
      <el-space direction="vertical" class="w-full" fill size="large">
        <el-form-item label="邮箱">
          <el-input v-model="form.username"/>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"/>
        </el-form-item>
      </el-space>
    </el-form>
    <template #footer>
      <el-row justify="center">
        <el-button type="primary">登录</el-button>
        <div class="w-8"></div>
        <el-link type="primary" @click="handleSubmit">注册</el-link>
      </el-row>
    </template>
  </el-card>
</template>

<style scoped>

</style>