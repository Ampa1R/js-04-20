const pow = (a, n) => {
    if (a === null || n === null) {
        return null;
    }
    let res = 1;
    for (let i = 0; i < n; i++) {
        res *= a;
    }
    return res;
};

export default { pow };
