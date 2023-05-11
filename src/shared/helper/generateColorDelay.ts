export const GenerateColorDelay = () => {
    let color = '#';
    let delay = (Math.random() * 3).toFixed(2);
    const abc =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const abcLength = abc.length;
    let counter = 0;
    while (counter < 6) {
        color += abc.charAt(Math.floor(Math.random() * abcLength));
        counter += 1;
    }
    return { color, delay };
};
