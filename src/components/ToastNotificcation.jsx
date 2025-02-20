import { Bounce, toast } from "react-toastify";

// Função para notificação de sucesso
export const notifySuccess = (message) => {
	toast.success(message, {
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: false,
		progress: undefined,
		theme: "colored",
		transition: Bounce,
	});
};

// Função para notificação de erro
export const notifyError = (message) => {
	toast.error(message, {
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: false,
		progress: undefined,
		theme: "colored",
		transition: Bounce,
	});
};

// Você pode criar outras funções (info, warning, etc.) seguindo o mesmo padrão
export const notifyInfo = (message) => {
	toast.info(message, {
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: false,
		progress: undefined,
		theme: "colored",
		transition: Bounce,
	});
};
