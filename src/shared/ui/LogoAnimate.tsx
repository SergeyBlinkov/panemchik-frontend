import React from 'react';
import logoPanem from '../../assets/konveer_elements_rosetka.png';
import '../style/SS/LogoAnimate.css';

const LogoAnimate: React.FC = () => {
    const logoName: string = 'ПАНЭМ';
    return (
        <div className={'LogoAnimate'}>
            <p className={'LogoAnimate_text'}>
                {logoName.split('').map((data) => {
                    return (
                        <span className={`LogoAnimate__letter`} key={data}>
                            {data}
                        </span>
                    );
                })}
            </p>
            <div className={'logoPanem'}>
                <img
                    width={'200px'}
                    height={'200px'}
                    src={logoPanem}
                    alt={'panemLogotip'}
                />
            </div>
        </div>
    );
};

export default LogoAnimate;
