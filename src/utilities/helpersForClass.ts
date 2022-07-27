export function CSSString2CSSStyleSheet(css: string) {
    const style = document.createElement('style');
    style.innerText = css;
    document.head.appendChild(style);
    const { sheet } = style;
    document.head.removeChild(style);
    return sheet;
}

export function clearClassesSx(classesSx: string) {
    let sx = classesSx.split(' ').find((i: string) => i.includes('sx'));
    let sxStyles = document.getElementsByTagName('head')[0].querySelectorAll(`.${sx}`);

    sxStyles.forEach(s => s.remove());
}

export function createClass(name: string, rules: any, bp?: string) {
    const style: HTMLStyleElement = document.createElement('style');

    style.className = name.split('.')[1];
    document.getElementsByTagName('head')[0].appendChild(style);

    const { sheet } = style;

    console.log(sheet);

    if (sheet) {
        bp ?
            sheet!.insertRule(
                `@media screen and (min-width: ${bp}){${name + "{" + rules + "}"}}`, 0
            ) :
            sheet!.insertRule(name + "{" + rules + "}", 0);
    }
}

export function createDeclaration(classJSS: string) {

    let classCSS = '';

    for (let i of classJSS) {
        if (i.charCodeAt(0) >= 65 && i.charCodeAt(0) <= 90) {
            classCSS += `-${i.toLowerCase()}`;
        } else {
            classCSS += i;
        }
    }

    return classCSS;
}