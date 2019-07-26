import { AjaxError } from "rxjs/internal-compatibility";
import * as toastr from "toastr";

const WARNING_PREFIX = "WARNING:";

export class Toast {

    public static resetToastOptions() {
        Toast.options = Toast.defaultOptions;
    }

    public static setToastOptions(options: ToastrOptions) {
        Toast.options = options;
    }

    public static showSuccessToast(message: string) {
        Toast.toast.options = Toast.options;
        return Toast.toast.success(message);
    }

    public static showSpecifiedSuccessToast(message: string, title: string, toastrOptions: ToastrOptions) {
        const specifiedOptions = {...this.options, ...toastrOptions};
        return Toast.toast.success(message, title, specifiedOptions);
    }

    public static showInfoToast(message: string) {
        Toast.toast.options = Toast.options;
        return Toast.toast.info(message);
    }

    public static showWarningToast(message: string) {
        Toast.toast.options = Toast.options;
        return Toast.toast.warning(message);
    }

    public static showFailToast(message: string) {
        Toast.toast.options = Toast.options;
        return Toast.toast.error(message);
    }

    public static showFailToastAjax(error: AjaxError, message?: string) {
        Toast.toast.options = Toast.options;
        let text: string = message || (error.response && error.response.message) || error.message || "";
        // If exception message from backend startWith "WARNING:" then we know to show a warning instead of red toast
        if (text.startsWith(WARNING_PREFIX)) {
            text = text.replace(WARNING_PREFIX, "");
            return Toast.toast.warning(text);
        }
        return Toast.toast.error(text);
    }

    private static toast: Toastr = toastr;
    private static defaultOptions: ToastrOptions = {
        hideMethod: "slideUp",
        positionClass: "toast-bottom-left",
        showMethod: "slideDown",
        timeOut: 2000,
    };

    private static options: ToastrOptions = Toast.defaultOptions;
}
