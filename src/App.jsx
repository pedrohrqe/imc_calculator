import { useState } from "react";
import "./App.css";
import ImcCalc from "./components/ImcCalc";
import { data } from "./data/data.js";
import ImcTable from "./components/ImcTable.jsx";
import AnimatedPage from "./components/AnimatedPage.jsx";
import { AnimatePresence } from "motion/react";
import Toast from "./components/Toast.jsx";
import { notifyError } from "./components/ToastNotificcation.jsx";

function App() {
	const [imc, setIMC] = useState("");
	const [info, setInfo] = useState("");
	const [infoClass, setInfoClass] = useState("");

	const valueToNumber = (value) => {
		const newValue = +value.replace(",", ".");
		return newValue;
	};

	const setInfos = (imc) => {
		if (!imc) {
			return;
		}
		const value =
			data.filter((item) => imc >= item.min && imc <= item.max) || null;
		if (value) {
			setInfo(value[0].info);
			setInfoClass(value[0].infoClass);
		}
	};

	const calcIMC = (e, height, weight) => {
		e.preventDefault();

		if (!height || !weight) {
			notifyError("Valores não preenchidos!");
			return;
		}

		if (height < 1.01 || weight < 10) {
			notifyError("Preencha com os valores corretos!");
			return;
		}

		const valueHeight = valueToNumber(height);
		const valueWeight = valueToNumber(weight);

		const result = +(valueWeight / (valueHeight * valueHeight)).toFixed(1);

		setIMC(result);
		setInfos(result);
	};

	const eraseInfo = () => {
		setIMC("");
		setInfo("");
		setInfoClass("");
	};

	return (
		<>
			<AnimatePresence mode="wait">
				{!imc ? (
					<AnimatedPage key="imcTable">
						<ImcCalc calcIMC={calcIMC} />
					</AnimatedPage>
				) : (
					<AnimatedPage key="imcCalc">
						<ImcTable
							data={data}
							eraseInfo={eraseInfo}
							imc={imc}
							info={info}
							infoClass={infoClass}
						/>
					</AnimatedPage>
				)}
			</AnimatePresence>
			<Toast />
		</>
	);
}

export default App;
