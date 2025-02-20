import PropTypes from "prop-types";
import "../style/Container.css";
import Button from "./Button.jsx";

const ImcTable = ({ data, eraseInfo, imc, info, infoClass }) => {
	return (
		<div className="container">
			<h2>
				Seu IMC é de: <span className={infoClass}>{imc}</span>
			</h2>
			<h3>
				A Classificação é: <span className={infoClass}>{info}</span>
			</h3>
			<div id="table">
				<div id="table-header">
					<h4>Classificação</h4>
					<h4>Info</h4>
					<h4>Obesidade</h4>
				</div>
				{data.map((item) => {
					const refValue = item.info === info ? "selected-data" : "";
					return (
						<div className="table-data" key={item.info}>
							<p className={refValue}>{item.classification}</p>
							<p className={refValue}>{item.info}</p>
							<p className={refValue}>{item.obesity}</p>
						</div>
					);
				})}
			</div>
			<Button text="Voltar" action={eraseInfo} />
		</div>
	);
};

ImcTable.propTypes = {
	data: PropTypes.string.isRequired,
	eraseInfo: PropTypes.func.isRequired,
	imc: PropTypes.string.isRequired,
	info: PropTypes.string.isRequired,
	infoClass: PropTypes.string.isRequired,
};

export default ImcTable;
