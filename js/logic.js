import { print } from './utils/print.js'
const main = () => {
    let result = 0

    const IsString = (result) => {
        return Number.isNaN(Number(result));
    }

    return (state) => {

        switch (state){
            case "АС":
                result = 0;
                break;
            case "С":
                (result.length === 1 || result === 0) ? result = 0 : result = result.slice(0, -1);
                break;
            case ".":
            case "/":
            case "x":
            case "-":
            case "+":
                !(IsString(result.slice(-1))) ? result += state : false;
                break;
            case "=":
                if ( !(IsString(result.slice(-1))) ){
                    result = result.trim().split("")
                    result.forEach((el) => { el === "x" ? result.splice(result.indexOf(el), 1, "*") : false; })
                    result = String(eval(result.join("")))
                }
                break;

            default:
                !(IsString(state)) ? (Number(result) === 0 ? result = state : result += state) : false;
        }

        print(result)
    }
}

export default main