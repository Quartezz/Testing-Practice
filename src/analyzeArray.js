function analyzeArray(array) {
    if (!Array.isArray(array) || array.length === 0) return null;

    const min = Math.min(...array);
    const max = Math.max(...array);
    const sum = array.reduce((acc, prev) => acc + prev, 0);
    const average = sum / array.length;

    return {
        average,
        min,
        max,
        length: array.length
    };
}

module.exports = analyzeArray;