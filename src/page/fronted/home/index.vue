<script setup lang="ts">
import carousel from '@/assets/carousel.png'
import logo from '@/assets/logo.png'

// onMounted(() => {
//   const dom = document.getElementById('qwq')!
//
//   const scene = new THREE.Scene();
//
//   const camera = new THREE.PerspectiveCamera(14, 1, 0.1, 1000);
//
//   const light = new THREE.DirectionalLight(0xffffff, 20);
//   light.position.set(0, 0, 10);
//   scene.add(light);
//
//   const renderer = new THREE.WebGLRenderer({
//     canvas: dom,
//     antialias: true,
//     alpha: true
//   });
//
//   renderer.setSize(dom.clientHeight, dom.clientHeight);
//
//   const loader = new GLTFLoader();
//
//   loader.load('/a.glb', (gltf: GLTF) => {
//     const model = gltf.scene;
//
//     // 计算包围盒和中心
//     const bbox = new THREE.Box3().setFromObject(model);
//     const center = bbox.getCenter(new THREE.Vector3());
//
//     // 把模型整体移动，使得它的中心点对齐到 (0,0,0)
//     model.position.sub(center);
//
//     // 创建一个空的 pivot 作为模型的父级
//     const pivot = new THREE.Group();
//     pivot.add(model);
//     scene.add(pivot);
//
//     // 计算合适的相机位置
//     const size = bbox.getSize(new THREE.Vector3());
//     camera.position.set(0, 0, size.length() * 4);
//     camera.lookAt(new THREE.Vector3(0, 0, 0));
//
//     function animate() {
//       requestAnimationFrame(animate);
//       pivot.rotation.z = 0.5
//       pivot.rotation.y -= 0.02
//       pivot.rotation.x = 0.5
//       renderer.render(scene, camera);
//     }
//
//     animate();
//
//   })
//
// })
</script>

<template>
  <div>
    <div class="w-full flex" style="height: calc(100vh - 60px - 40px)">
      <div class="flex-auto flex items-center justify-center flex-col">
        <div style="line-height: 4rem">
          <el-text type="primary" style="font-size: 1.5em">睿赛云析</el-text>
          <div class="font-bold text-5xl">您的竞赛路上好帮手</div>
          <el-text type="info">your assist for your contest</el-text>
        </div>
        <div class="h-1/3"></div>
      </div>
<!--      <canvas style="aspect-ratio: 1/1" class="h-full" id="qwq">-->
<!--      </canvas>-->
      <div class="h-full flex items-center justify-center" style="aspect-ratio: 1/1">
        <el-image :src="logo" class="h-2/3" style="aspect-ratio: 1/1"/>
      </div>
    </div>

    <div class="w-full mt-40">
      <el-space direction="vertical" fill class="w-full">
       <el-descriptions title="A类竞赛">
         <el-descriptions-item>
           <el-carousel motion-blur class="w-full">
             <el-carousel-item v-for="item in 4" :key="item">
               <el-image :src="carousel" class="w-full h-full" fit="cover"/>
             </el-carousel-item>
           </el-carousel>
         </el-descriptions-item>
       </el-descriptions>

        <el-descriptions title="B类竞赛">
          <el-descriptions-item>
            <el-carousel motion-blur class="w-full">
              <el-carousel-item v-for="item in 4" :key="item">
                <el-image :src="carousel" class="w-full h-full" fit="cover"/>
              </el-carousel-item>
            </el-carousel>
          </el-descriptions-item>
        </el-descriptions>

        <el-descriptions title="C类竞赛">
          <el-descriptions-item>
            <el-carousel motion-blur class="w-full">
              <el-carousel-item v-for="item in 4" :key="item">
                <el-image :src="carousel" class="w-full h-full" fit="cover"/>
              </el-carousel-item>
            </el-carousel>
          </el-descriptions-item>
        </el-descriptions>
<!--        <el-descriptions title="热点竞赛">-->
<!--          <el-descriptions-item>-->
<!--            <div class="flex items-start">-->
<!--              <el-carousel class="w-4/5" motion-blur>-->
<!--                <el-carousel-item v-for="item in 4" :key="item">-->
<!--                  <el-image :src="carousel" class="w-full h-full" fit="cover"/>-->
<!--                </el-carousel-item>-->
<!--              </el-carousel>-->
<!--              <span class="w-5"></span>-->
<!--              <el-space direction="vertical" fill class="flex-auto" :size="33">-->
<!--                <el-card shadow="never" header="找不到适合自己的比赛？">-->
<!--                  <el-button class="w-full" type="success">上传简历，让我帮您匹配！</el-button>-->
<!--                </el-card>-->
<!--                <el-card shadow="never" header="不知道自己的优势？">-->
<!--                  <el-button class="w-full" type="success">点我开始分析！</el-button>-->
<!--                </el-card>-->
<!--              </el-space>-->
<!--            </div>-->
<!--          </el-descriptions-item>-->
<!--        </el-descriptions>-->
<!--        <el-descriptions title="为你推荐">-->
<!--          <template #extra>-->
<!--            <el-button type="primary" size="small">查看更多</el-button>-->
<!--          </template>-->
<!--          <el-descriptions-item>-->
<!--            <el-space size="large" wrap>-->
<!--              <el-tag type="primary" @click="console.log(1)">微信小程序开发大赛</el-tag>-->
<!--              <el-tag type="primary">计算机设计大赛</el-tag>-->
<!--              <el-tag type="primary">蓝桥杯</el-tag>-->
<!--            </el-space>-->
<!--          </el-descriptions-item>-->
<!--        </el-descriptions>-->

<!--        <el-descriptions title="A类竞赛">-->
<!--          <template #extra>-->
<!--            <el-link type="primary" size="small">全部</el-link>-->
<!--          </template>-->
<!--          <el-descriptions-item>-->
<!--            <el-space size="large" wrap>-->
<!--              <el-tag type="success">中国国际"互联网+"大学生创新创业大赛</el-tag>-->
<!--              <el-tag type="success">全国大学生数字建模竞赛</el-tag>-->
<!--              <el-tag type="success">国际大学生程序设计竞赛（ICPC）</el-tag>-->
<!--              <el-tag type="success">中国高校计算机大赛-大数据挑战赛</el-tag>-->
<!--              <el-tag type="success">"挑战杯"全国大学生课外学术科技作品竞赛和中国大学生创业计划竞赛</el-tag>-->
<!--              <el-tag type="success">全国大学生电子设计竞赛</el-tag>-->
<!--            </el-space>-->
<!--          </el-descriptions-item>-->
<!--        </el-descriptions>-->

<!--        <el-descriptions title="B类竞赛">-->
<!--          <template #extra>-->
<!--            <el-link type="primary" size="small">全部</el-link>-->
<!--          </template>-->
<!--          <el-descriptions-item>-->
<!--            <el-space size="large" wrap>-->
<!--              <el-tag type="warning">中国大学生计算机设计大赛</el-tag>-->
<!--              <el-tag type="warning">CCF大学生计算机系统与程序设计竞赛（CCSP）</el-tag>-->
<!--              <el-tag type="warning">"中国软件杯"大学生软件设计大赛</el-tag>-->
<!--              <el-tag type="warning">外研社全国大学生英语系列赛-英语演讲、英语辩论、英语写作、英语阅读</el-tag>-->
<!--            </el-space>-->
<!--          </el-descriptions-item>-->
<!--        </el-descriptions>-->

<!--        <el-descriptions title="C类竞赛">-->
<!--          <template #extra>-->
<!--            <el-link type="primary" size="small">全部</el-link>-->
<!--          </template>-->
<!--          <el-descriptions-item>-->
<!--            <el-space size="large" wrap>-->
<!--              <el-tag type="danger">中国国际"互联网+"大学生创新创业大赛</el-tag>-->
<!--              <el-tag type="danger">全国大学生数字建模竞赛</el-tag>-->
<!--              <el-tag type="danger">"挑战杯"全国大学生课外学术科技作品竞赛和中国大学生创业计划竞赛</el-tag>-->
<!--              <el-tag type="danger">全国大学生电子设计竞赛</el-tag>-->
<!--            </el-space>-->
<!--          </el-descriptions-item>-->
<!--        </el-descriptions>-->
      </el-space>
    </div>
  </div>

</template>

<style scoped>

</style>