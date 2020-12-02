// export default () => {

    let qwerty = 1;

    const higherOrderFunction = () => {
        let num = 'a';
        const manyConsoleLogs = (wer) => {
            num += wer;
            qwerty += 2;
            console.log(num);
            console.log(qwerty);
        };

        return {
            manyConsoleLogs
        };
    };
    const func1 = higherOrderFunction();
    func1.manyConsoleLogs('b');
    func1.manyConsoleLogs('c');
    func1.manyConsoleLogs('d');
    func1.manyConsoleLogs('e');
    func1.manyConsoleLogs('f');

    const func2 = higherOrderFunction();
    func2.manyConsoleLogs('g');
    func2.manyConsoleLogs('h');

console.log(process.env.NODE_ENV);
    /* -------------------------- */
// };