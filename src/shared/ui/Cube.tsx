import React, { useEffect, useRef } from 'react';
import { CubeType } from '../types/sharedTypes';
import '../style/SS/Cube.css';
import { GenerateColorDelay } from '../helper/generateColorDelay';
export const Cube: React.FC<CubeType> = ({
    firstChildren,
    secondChildren,
    isSwitch,
    type,
    isLoading,
}) => {
    const refCube = useRef(null);
    useEffect(() => {
        const cubeId = refCube.current as HTMLElement | null;
        const allSpans = document.querySelectorAll('#spanId');

        if (isLoading) {
            allSpans.forEach((item) => {
                const items = item as HTMLElement;
                const { color, delay } = GenerateColorDelay();
                items.style.backgroundColor = color;
                items.style.animationDelay = `${delay}s`;
            });
            cubeId?.classList.add('LoadingAnimation');
        } else {
            cubeId?.classList.remove('LoadingAnimation');
        }
    }, []);

    return (
        <div className={'Scene'}>
            <div className={'Cube'} id={'cube'} ref={refCube}>
                <section className={'Cube_top'}>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    <span id={'spanId'}></span>
                    {/*<span data-delay={0}></span>*/}
                    {/*<span data-delay={0.25}></span>*/}
                    {/*<span data-delay={0.5}></span>*/}
                    {/*<span data-delay={0.75}></span>*/}
                    {/*<span data-delay={1}></span>*/}
                </section>
                <section className={'Cube_left'}></section>
                <section className={'Cube_center'}>
                    <div className={'Cube_center__item'}>{firstChildren}</div>
                </section>
                <section className={'Cube_right'}></section>
                <section className={'Cube_back'}>
                    <div className={'Cube_back__item'}>{secondChildren}</div>
                </section>
                <section className={'Cube_bottom'}></section>
            </div>
        </div>
    );
};
