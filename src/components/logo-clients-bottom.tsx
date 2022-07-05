import React from "react";
import SliderContainer from "./slider";
import "../styles/logo-clients.scss";

const LogoClientsBottom: React.FC = () => {
    return (
        <SliderContainer initalOffsetX={80} contentWidth={1759} marginTop={24}>
            <div className="logo-container logo-container-bottom">
                <div className="logo-container__item">
                    <img src="/assets/logo-clients/slingshot.webp" alt="slingshot" />
                </div>
                <div className="logo-container__item">
                    <img src="/assets/logo-clients/showtime.webp" alt="showtime" />
                </div>
                <div className="logo-container__item">
                    <img src="/assets/logo-clients/steakwallet.webp" alt="steakwallet" />
                </div>
                <div className="logo-container__item">
                    <img src="/assets/logo-clients/expensify.webp" alt="expensify" />
                </div>
                <div className="logo-container__item">
                    <img src="/assets/logo-clients/pinkpanda.webp" alt="pinkpanda" />
                </div>
                <div className="logo-container__item">
                    <img src="/assets/logo-clients/litentry.webp" alt="litentry" />
                </div>
                <div className="logo-container__item">
                    <img src="/assets/logo-clients/scribeware.webp" alt="scribeware" />
                </div>
                <div className="logo-container__item">
                    <img src="/assets/logo-clients/snapcalorie.webp" alt="snapcalorie" />
                </div>
                <div className="logo-container__item">
                    <img src="/assets/logo-clients/tocsen.webp" alt="tocsen" />
                </div>
                <div className="logo-container__item">
                    <img src="/assets/logo-clients/audubon.webp" alt="audubon" />
                </div>
            </div>
        </SliderContainer>
    );
};

export default LogoClientsBottom;
