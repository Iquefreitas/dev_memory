

export const formatTimeElapsed = (secunds: number) => {
    let minutes = Math.floor(secunds / 60);
    secunds -= (minutes * 60);

    let secString = `${secunds < 10 ? '0' + secunds : secunds}`;
    let minStrng = `${minutes < 10 ? '0' + minutes : minutes}`;

    return `${minStrng}:${secString}`;

}