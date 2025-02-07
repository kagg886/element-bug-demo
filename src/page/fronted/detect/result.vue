<script setup lang="ts">
import {use} from "echarts/core";
import {CanvasRenderer} from "echarts/renderers";
import {RadarChart} from "echarts/charts";
import {GridComponent, LegendComponent, TitleComponent, TooltipComponent, RadarComponent} from "echarts/components";
import {EChartOption, ECharts} from "echarts";
import VChart from 'vue-echarts';
import {onMounted, ref} from "vue";

use([
  RadarChart,
  CanvasRenderer,
  GridComponent,
  TooltipComponent,
  RadarComponent,
  LegendComponent,
  TitleComponent,
]);

const tags = [
  '教育背景与学术成绩',
  '工作经验与职业成就',
  '专业技能与资格认证',
  '项目经历与创新成果',
  '团队能力和沟通协调',
  '简历格式和语言呈现'
]
const data = [
  {
    value: Math.random() * 70 + 30,
    avgValue: 50,
    summary: '详细说明院校优势、专业成绩、奖学金及培训经历，提升学术含金量。',
    content: '目前得分偏低，建议在简历中更详细地描述您的教育经历。可以补充说明所就读院校的特色、专业排名以及与目标岗位相关的核心课程。若在校期间有参加科研项目、发表论文或获得奖学金、竞赛荣誉，均应列出具体成果和数据，突出学术实力。另外，如有继续教育、在线课程或专业培训，也可适当提及，以展示不断学习和自我提升的态度，从而增强简历的竞争力。',
  },
  {
    value: Math.random() * 70 + 30,
    avgValue: 50,
    summary: '量化业绩与成果，突出关键职责及职业晋升历程。',
    content: '此项得分较高，说明您具备较丰富的工作经历。建议在现有基础上进一步突出工作成果和量化数据，如详细描述具体职责、项目成果、销售额提升百分比或成本降低数据等。可以采用项目实例说明如何解决问题、带领团队或完成高难度任务，以增强说服力。同时，合理安排工作经历的时间顺序和逻辑结构，使招聘者能够一目了然地看到您的职业成长轨迹和关键成就。',
  },
  {
    value: Math.random() * 70 + 30,
    avgValue: 50,
    summary: '详列岗位关键技能、认证资质及实践应用，凸显专业水平。',
    content: '建议进一步丰富和细化专业技能部分。明确列出与目标岗位高度相关的技能和工具，如软件、编程语言或行业特定技术，并附上相应的认证信息（如证书名称、颁发机构及时间）。此外，您还可以说明在实际工作中如何运用这些技能解决问题，最好能用具体项目或业绩进行佐证。对于尚未掌握但行业需求较高的技能，可以考虑适时参加培训，未来在简历中更新相关信息，提升专业竞争力。',
  },
  {
    value: Math.random() * 70 + 30,
    avgValue: 50,
    summary: '描述项目背景、创新解决方案及成果数据，展示实践能力。',
    content: '虽然该项得分较高，但仍有提升空间。建议在描述项目经历时，详细说明项目背景、目标、执行过程及取得的成果，尽量使用数据或具体指标量化成果（如提升效率、降低成本、增加收入等）。重点突出您在项目中发挥的创新作用和关键贡献，说明如何解决难题、推动项目进展以及从中获得的经验教训。这样的描述不仅能展示您的实战能力，也能反映出您具备较强的问题解决和创新能力。',
  },
  {
    value: Math.random() * 70 + 30,
    avgValue: 50,
    summary: '补充团队协作、沟通技巧、协调经验及冲突解决实例。',
    content: '此项得分偏低，建议补充更多与团队协作、跨部门沟通及冲突解决相关的经历。详细描述在团队项目中所承担的具体角色、如何有效协调团队成员、调动资源及推动项目进展的案例。强调在沟通中运用的策略和技巧，以及通过合作取得的实际成果。可以适当添加一些领导或协调小组任务的实例，让招聘者看到您在团队中的积极作用和良好的沟通、协作能力，从而弥补这一短板。',
  },
  {
    value: Math.random() * 70 + 30,
    avgValue: 50,
    summary: '优化排版设计、语言表达与视觉效果，增强整体专业度。',
    content: '简历整体的格式和语言表达需要大幅提升。建议首先优化排版设计，确保简历整体布局简洁清晰，标题、段落分明，重点信息突出。文字上应做到精准、专业，避免语法错误和冗长描述，可适当使用项目符号或图表来增强可读性。同时，关注视觉效果，选择统一的字体和颜色搭配，使简历在第一眼就能给招聘者留下专业、细致的印象。参考优秀简历模板进行调整，将大大提升整体竞争力。',
  },
]

const options: EChartOption = {
  legend: {
    data: ['您', '平均水平']
  },
  radar: {
    shape: 'circle',
    indicator: [
      {name: '教育背景与学术成绩', max: 100},
      {name: '工作经验与职业成就', max: 100},
      {name: '专业技能与资格认证', max: 100},
      {name: '项目经历与创新成果', max: 100},
      {name: '团队能力和沟通协调', max: 100},
      {name: '简历格式和语言呈现', max: 100}
    ]
  },
  series: [
    {
      name: '1',
      type: 'radar',
      data: [
        {
          value: data.map((v) => v.value),
          name: '您'
        },
        {
          value: data.map((v) => v.avgValue),
          name: '平均水平'
        }
      ]
    }
  ],
}

const chart = ref<ECharts>()

onMounted(() => {
  console.log(chart.value)
  chart.value!!.setOption(options)
})

const calcType = (msg: number) => {
  if (msg > 80) {
    return "success"
  }
  if (msg > 60) {
    return "warning"
  }
  return "error"
}
</script>

<template>
  <div>
    <div class="grid grid-rows-2 grid-cols-5 w-full area" style="height: calc((100vh - 100px) / 1.5)">
      <v-chart ref="chart" class="w-full h-full" style="grid-area: a"/>
      <div style="grid-area: b" class="grid grid-cols-3 gap-2">
        <el-card v-for="i in 6" :key="i">
          <template #header>
            <el-text tag="strong" size="large">{{ tags[i - 1] }}</el-text>
            <el-text class="ml-auto float-end" :type="calcType(data[i-1].value)">{{ data[i - 1].value.toFixed(2) }}</el-text>
          </template>
          {{data[i-1].summary}}
        </el-card>
      </div>
    </div>
    <el-space direction="vertical" fill>
      <el-descriptions v-for="i in 6" :title="tags[i-1]">
        <el-descriptions-item>
          {{data[i-1].content}}
        </el-descriptions-item>
      </el-descriptions>
    </el-space>
  </div>
</template>

<style scoped>
.area {
  grid-template-areas: 'a a b b b'
                       'a a b b b'
}
</style>