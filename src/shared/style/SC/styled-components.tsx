import styled from 'styled-components';

export const H2 = styled.h2`
    font-family: 'Playfair Display', serif;
    font-size: 27px;
    margin: 35px 0;
    font-weight: 500;
    letter-spacing: 3px;
    text-align: center;
`;

export const P = styled.p``;

export const BackgroundGradient = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20%;
    width: 100%;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    margin: 0;
    padding: 0;
    background: linear-gradient(320deg, #cdc1ff, #bcf4de, #0ad3ff, #7371fc);
`;
export const BackgroundGradient2 = styled.div`
    width: 100%;
    top: 0;
    transition: max-height 2s linear;
    left: 0;
    right: 0;
    max-height: 100%;
    position: absolute;
    margin: 0;
    padding: 0;
    min-height: 100%;
    background: linear-gradient(320deg, #cdc1ff, #bcf4de, #0ad3ff, #7371fc);
`;

export const GradientLine = styled.span`
    background: linear-gradient(
        320deg,
        rgba(115, 113, 252, 0.5),
        #bcf4de,
        #7371fc
    );
    display: flex;
    margin: 35px auto;
    width: 650px;
    height: 4px;
    content: '';
    border-radius: 50%;
`;
