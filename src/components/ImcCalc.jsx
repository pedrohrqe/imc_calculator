import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./Button";
import "../style/Container.css";

const ImcCalc = ({ calcIMC }) => {
	const [height, setHeight] = useState("");
	const [weight, setWeight] = useState("");

	const valueFormat = (text) => {
		return text.replace(/\D/g, "");
	};

	const formatValue = (text, maxLength, pointLenght) => {
		let newText = valueFormat(text);

		if (newText.length > maxLength) {
			newText = newText.slice(0, maxLength);
		}
		if (newText.length > pointLenght) {
			newText =
				newText.slice(0, -(pointLenght + 1)) +
				"." +
				newText.slice(-(pointLenght + 1));
		}

		return newText;
	};

	const clearForm = () => {
		setHeight("");
		setWeight("");
	};

	const handleHeight = (e) => {
		let value = e.target.value;
		value = formatValue(value, 3, 1);
		setHeight(value);
	};

	const handleWeight = (e) => {
		let value = e.target.value;
		value = formatValue(value, 6, 2);
		setWeight(value);
	};

	return (
		<div className="container">
			<h2>Calculadora IMC</h2>
			<label>
				<span>Insira sua altura</span>
				<input
					type="text"
					placeholder="Exemplo 1.75"
					name="height"
					value={height}
					onChange={(e) => handleHeight(e)}
				/>
			</label>
			<label>
				<span>Insira seu peso</span>
				<input
					type="text"
					placeholder="Exemplo 69.200"
					name="weight"
					value={weight}
					onChange={(e) => handleWeight(e)}
				/>
			</label>
			<div className="action-container">
				<Button text="Limpar" action={clearForm} />
				<Button
					text="Calcular"
					action={(e) => calcIMC(e, height, weight)}
				/>
			</div>
		</div>
	);
};

ImcCalc.propTypes = {
	calcIMC: PropTypes.func.isRequired,
};

export default ImcCalc;
