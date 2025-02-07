<script setup lang="ts">

</script>

<template>
  <el-space fill direction="vertical">
    <el-descriptions title="信息科学与工程学院" v-for="i in 3" :key="i">
      <el-descriptions-item>
        <div class="grid grid-cols-3 gap-2">
          <el-card shadow="hover" v-for="i in 5" :key="i" class="h-52" body-style="display:flex; height: 100%;">
            <el-image src="qwq" class="h-full mr-5" style="aspect-ratio: 5/7"/>
            <el-descriptions class="flex-auto h-full" title="冯壮" column="1">
              <el-descriptions-item label="简介">
                <el-text>在信息科学与工程学院担任教师</el-text>
              </el-descriptions-item>

              <el-descriptions-item label="芳龄">
                <el-text>48</el-text>
              </el-descriptions-item>

              <el-descriptions-item class="">
                <el-space class="w-full" wrap>
                  <el-tag type="success">互联网+大赛负责人</el-tag>
                  <el-tag type="success">蓝桥杯指导教师</el-tag>
                  <el-tag type="success">计算机设计大赛指导教师</el-tag>
                </el-space>
              </el-descriptions-item>

              <template #extra>
                <el-link>查看更多</el-link>
              </template>
            </el-descriptions>
          </el-card>
        </div>
      </el-descriptions-item>
    </el-descriptions>
  </el-space>
</template>

<style scoped>

</style>