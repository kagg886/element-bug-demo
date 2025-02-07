<script setup lang="ts">
import {reactive} from "vue";

const emits = defineEmits<{
  (e: 'register'): void
}>()

const form = reactive({
  username: '',
  password: '',
  verify: ''
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
          注册
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
        <el-form-item label="验证码">
          <el-input v-model="form.verify">
            <template #append>
              <el-button type="primary">发送验证码</el-button>
            </template>
          </el-input>
        </el-form-item>
      </el-space>
    </el-form>
    <template #footer>
      <el-row justify="center">
        <el-button type="primary">注册</el-button>
        <div class="w-8"></div>
        <el-link type="primary" @click="handleSubmit">去登录</el-link>
      </el-row>
    </template>
  </el-card>
</template>

<style scoped>

</style>