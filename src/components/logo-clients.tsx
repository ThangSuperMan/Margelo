import React from "react";
import SliderContainer from "./slider";
import "../styles/logo-clients.scss";

const LogoClients: React.FC = () => {
	return (
		<SliderContainer initalOffsetX={0} contentWidth={1759}>
			<div className="logo-container">
				<div className="logo-container__item">
					<img src="/assets/logo-clients/shopify.webp" alt="shopify" />
				</div>
				<div className="logo-container__item">
					<img src="/assets/logo-clients/coinbase.webp" alt="coinbase" />
				</div>
				<div className="logo-container__item">
					<img src="/assets/logo-clients/rainbow.webp" alt="rainbow" />
				</div>
				<div className="logo-container__item">
					<img
						src="/assets/logo-clients/walletconnect.webp"
						alt="walletconnect"
					/>
				</div>
				<div className="logo-container__item">
					<img src="/assets/logo-clients/exodus.webp" alt="exodus" />
				</div>
				<div className="logo-container__item logo-container__item-modified">
					<img src="/assets/logo-clients/picnic.webp" alt="picnic" />
				</div>
				<div className="logo-container__item">
					<img src="/assets/logo-clients/status.webp" alt="status" />
				</div>
				<div className="logo-container__item">
					<img src="/assets/logo-clients/extra.webp" alt="extra" />
				</div>
				<div className="logo-container__item">
					<img src="/assets/logo-clients/stori.webp" alt="stori" />
				</div>
			</div>
		</SliderContainer>
	);
};

export default LogoClients;
