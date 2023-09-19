import { updateButtonState } from "./updateButtonStateScrip";

export function upgradeBtn(commonElements) {
  for (let i = 0; i < commonElements.length; i++) {
    let btnElementID = commonElements[i].id;
    const button = document.querySelector(`.id${btnElementID}`);
    updateButtonState(button, true);
  }
}