import {useToast} from "vue-toastification";
import {computed, ref, watch} from "vue";
import Http from "../../../http/http.js";

const toast = useToast();
const response_message = ref('');
const isSendForm = ref(false);
const formBody = ref({
    name: '',
    phone: '',
    email: ''
})
const formErrors = ref({
    name: false,
    phone: false,
    email: false
})
export const useSendSubscribe = () => {
    const sendData = async () => {
        const formData = new FormData();
        for (const key in formBody.value) {
            if (formBody.value[key] !== "" && formBody.value[key] !== " ") {
                formData.append(key, formBody.value[key]);
                formErrors.value[key] = false;
            } else {
                formErrors.value[key] = true;
            }
        }
        if (Object.values(formErrors.value).every(error => error === false)) {
            const response = await Http.post('3TyrL3huibQ_/data', formData)
            if (response.status) {
                response_message.value = response.message;
                isSendForm.value = true;
            }
        } else {
            toast.warning('Не все обязательные поля заполнены')
        }
    }
    return {
        response_message,
        isSendForm: computed(() => isSendForm.value),
        formBody: computed(() => formBody.value),
        formErrors: computed(() => formErrors.value),
        sendData
    }
}