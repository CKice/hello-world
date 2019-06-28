class StackSolution {
    constructor() { }

    //十进制转任意进制
    public static baseConverter(value: number, base: number) {
        let stack = new Stack();
        let rem: number = 0;
        let baseString: string = "";
        while (value > 0) {
            rem = Math.floor(value % base);
            stack.push(rem);
            value = Math.floor(value / base);
        }
        while (!stack.isEmpty()) {
            baseString += stack.pop().toString();
        }
        return baseString;
    }
}