import {ref} from "vue";
import Fetch from "@/api/api";
export const useBookHelper = (url) => {
    const data = ref([]);
    const isLoading = ref(true);
    const getData = async () => {
        const response = await Fetch.get(url)
        data.value.push(...response);
        isLoading.value = false;
    }
    getData()
    return {
        data,
        isLoading
    }
}