<script setup lang="ts">

</script>

<template>
  <el-result title="你来到了内容的荒原" icon="warning" sub-title="这里没有任何东西">
    <template #extra>
      <router-link to="/">
        <el-button type="primary">返回首页</el-button>
      </router-link>
    </template>
  </el-result>
</template>

<style scoped>

</style>