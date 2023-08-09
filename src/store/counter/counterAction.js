import counterType from "./counterType"


export const incrementCounter = () => {
    return {
        type: counterType.INCREMENT
    }
}

