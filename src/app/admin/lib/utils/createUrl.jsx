
export const createUrl = (pathname, params) => {
    const paramsString = params.toString();
    const quaryString = `${paramsString.length ? "?" : ""}${paramsString}`;

    return `${pathname}${quaryString}`;
}