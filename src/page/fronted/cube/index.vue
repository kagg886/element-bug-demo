<template>
  <div class="w-full flex">
    <div class="w-2/5">
      <el-card class="w-4/5 float-right">
        <el-descriptions title="竞赛类别"/>
        <el-text tag="strong">工科</el-text>
        <el-space wrap>
          <el-checkbox>数学建模</el-checkbox>
          <el-checkbox>船舶海洋</el-checkbox>
          <el-checkbox>材料高分子</el-checkbox>
          <el-checkbox>环境能源</el-checkbox>
          <el-checkbox>大数据</el-checkbox>
        </el-space>
        <el-text tag="strong">文体</el-text>
        <el-space wrap>
          <el-checkbox>外语</el-checkbox>
          <el-checkbox>艺术素养</el-checkbox>
          <el-checkbox>UI设计</el-checkbox>
          <el-checkbox>演讲主持</el-checkbox>
          <el-checkbox>科技文化艺术节</el-checkbox>
          <el-checkbox>体育</el-checkbox>
          <el-checkbox>模特</el-checkbox>
        </el-space>
        <el-divider/>
        <el-descriptions title="竞赛级别"/>
        <el-space wrap>
          <el-check-tag>校级</el-check-tag>
          <el-check-tag>市级</el-check-tag>
          <el-check-tag>省级</el-check-tag>
          <el-check-tag>国家级</el-check-tag>
          <el-check-tag>国际级</el-check-tag>
          <el-check-tag>自由</el-check-tag>
          <el-check-tag>其他</el-check-tag>
        </el-space>
      </el-card>
    </div>
    <div class="w-6"/>
    <div class="w-3/5">
      <el-timeline>
        <el-timeline-item timestamp="2025-02-03" placement="top">
          <el-card shadow="never">
            <div class="w-full flex items-start">
              <el-image :src="contest" class="w-64"/>
              <span class="w-5"></span>
              <el-space direction="vertical" alignment="normal" class="flex-auto">
                <strong class="text-xl">第二届全国大学生外交英语阅读大赛</strong>
                <el-descriptions column="1">
                  <el-descriptions-item label="主办方" >商务印书馆《英语世界》杂志社</el-descriptions-item>
                  <el-descriptions-item label="竞赛级别">省级</el-descriptions-item>
                  <el-descriptions-item label="报名时间">2024年11月14日 ~ 2025年02月15日</el-descriptions-item>
                  <el-descriptions-item label="比赛时间">2025年02月16日 ~ 2025年02月16日</el-descriptions-item>
                </el-descriptions>
              </el-space>
              <el-space direction="vertical" alignment="flex-end">
                <el-text tag="strong" type="primary">报名未开始</el-text>
              </el-space>
            </div>
          </el-card>
        </el-timeline-item>

        <el-timeline-item timestamp="2025-02-02" placement="top">
          <el-card shadow="never">
            <div class="w-full flex items-start">
              <el-image :src="contest" class="w-64"/>
              <span class="w-5"></span>
              <el-space direction="vertical" alignment="normal" class="flex-auto">
                <strong class="text-xl">第二届全国大学生外交英语阅读大赛</strong>
                <el-descriptions column="1">
                  <el-descriptions-item label="主办方" >商务印书馆《英语世界》杂志社</el-descriptions-item>
                  <el-descriptions-item label="竞赛级别">省级</el-descriptions-item>
                  <el-descriptions-item label="报名时间">2024年11月14日 ~ 2025年02月15日</el-descriptions-item>
                  <el-descriptions-item label="比赛时间">2025年02月16日 ~ 2025年02月16日</el-descriptions-item>
                </el-descriptions>
              </el-space>
              <el-space direction="vertical" alignment="flex-end">
                <el-text tag="strong" type="success">报名进行中</el-text>
                <el-text>距离报名截止还有 <el-text type="primary">1</el-text> 天</el-text>
              </el-space>
            </div>
          </el-card>
        </el-timeline-item>

        <el-timeline-item timestamp="2025-02-01" placement="top">
          <el-card shadow="never">
            <div class="w-full flex items-start">
              <el-image :src="contest" class="w-64"/>
              <span class="w-5"></span>
              <el-space direction="vertical" alignment="normal" class="flex-auto">
                <strong class="text-xl">第二届全国大学生外交英语阅读大赛</strong>
                <el-descriptions column="1">
                  <el-descriptions-item label="主办方" >商务印书馆《英语世界》杂志社</el-descriptions-item>
                  <el-descriptions-item label="竞赛级别">省级</el-descriptions-item>
                  <el-descriptions-item label="报名时间">2024年11月14日 ~ 2025年02月15日</el-descriptions-item>
                  <el-descriptions-item label="比赛时间">2025年02月16日 ~ 2025年02月16日</el-descriptions-item>
                </el-descriptions>
              </el-space>
              <el-space direction="vertical" alignment="flex-end">
                <el-text tag="strong" type="danger">比赛进行中</el-text>
                <el-text>距离比赛结束还有 <el-text type="danger">1</el-text> 天</el-text>
              </el-space>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script setup lang="ts">
import contest from '@/assets/contest.png'
</script>