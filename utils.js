// utils.js
function convertToTime(time) {
    const minutes = String(Math.floor(time / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
    return `${minutes}:${seconds}`;
}

module.exports = {
    convertToTime
};