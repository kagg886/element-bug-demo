import {onMounted, ref, Ref} from "vue";

export async function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export function delayLoadingGetter<T>(getter: () => T): Ref<T | undefined> {
    const value = ref<T>()
    onMounted(() => {
        value.value = getter()
    })
    return value
}