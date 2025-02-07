import {ref, Ref} from "vue";

export type AsyncFunction<T> = (...args: any[]) => Promise<T>

export type UseLoadingCallback<F extends AsyncFunction<void>, P extends Parameters<F>> = {
    loading: Ref<boolean>
    func: (...args: P) => Promise<void>
}

export function useLoading<F extends AsyncFunction<void>>(
    inner: F
): UseLoadingCallback<F, Parameters<F>> {
    const loading = ref(false)
    const wrapped = async (...args: Parameters<F>) => {
        loading.value = true
        inner(...args)
            .catch(console.error)
            .finally(() => loading.value = false)
    }

    return {
        loading,
        func: wrapped
    }
}