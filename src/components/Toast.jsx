import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Componente que encapsula o ToastContainer
const Toast = () => {
	return (
		<ToastContainer className="toast"
			position="top-center"
			autoClose={2000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss={false}
			draggable={false}
			pauseOnHover
			theme="colored"
			transition={Bounce}
		/>
	);
};

export default Toast;
