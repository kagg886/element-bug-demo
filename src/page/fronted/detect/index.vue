<script setup lang="ts">
import {useFileDialog} from "@vueuse/core";
import {useRouter} from "vue-router";

// interface UseFileDialogReturn {
//   files: Ref<FileList | null>;
//   open: (localOptions?: Partial<UseFileDialogOptions>) => void;
//   reset: () => void;
//   onChange: EventHookOn<FileList | null>;
//   onCancel: EventHookOn;
// }
const {open, onChange} = useFileDialog()
const nav = useRouter()

onChange((files) => {
  nav.push('/detect/result')
  console.log(files)
})
</script>

<template>
  <div class="w-full flex" style="height: calc(100vh - 60px - 40px)">
    <div class="w-1/2 flex justify-center items-center">
      <el-button style="width: 33%;height: 33%" @click="open">上传成绩</el-button>
    </div>

    <div class="w-1/2 flex justify-center items-center">
      <el-button style="width: 33%;height: 33%" @click="open">上传简历</el-button>
    </div>
  </div>
</template>

<style scoped>

</style>