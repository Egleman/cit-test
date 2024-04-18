import Inputmask from "inputmask";
import { ref } from 'vue';
export const useMask = (element) => {
    const im = new Inputmask({
        mask: '+7 (999) 999-99-99',
        showMaskOnHover: false,
        showMaskOnFocus: false,
        jitMasking: true,
        inputmode: 'tel'
    })
    im.mask(element);
}