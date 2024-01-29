// const button = document.querySelector("#button");
const buttons: HTMLCollection = document.getElementsByClassName("button")!;
// console.log(button);

const display = document.querySelector("#display") as HTMLDivElement;
let displayValue: string = "";

let symbols: string[] = ["*", "-", "+", ".", "/"];

for (let i = 0; i < buttons.length; i++) {
  //   const value = (buttons[i] as HTMLButtonElement).value;
  //   console.log(value);
  buttons[i].addEventListener("click", () => {
    let value = (buttons[i] as HTMLButtonElement).value;
    // const endValue = displayValue.slice(-1);

    if (value === "c") {
      displayValue = "";
      display.innerHTML = displayValue;
      return;
    } else if (value === "=") {
      const value = eval(displayValue);
      displayValue = value;
      display.innerHTML = value;
      return;
    }

    if (
      (symbols.includes(value) && displayValue.slice(-1) === "*") ||
      (symbols.includes(value) && displayValue.slice(-1) === "+") ||
      (symbols.includes(value) && displayValue.slice(-1) === "-")
    ) {
      return;
    } else {
      displayValue = displayValue + value;
      console.log(displayValue);
      display.innerHTML = displayValue;
    }

    // console.log(endValue);
  });
}
