import {ref} from "vue";
import Http from "@/http/http";
export const useBookHelper = (url) => {
    const data = ref([]);
    const isLoading = ref(true);
    const getData = async () => {
        const response = await Http.get(url)
        data.value.push(...response);
        isLoading.value = false;
    }
    getData()
    return {
        data,
        isLoading
    }
}