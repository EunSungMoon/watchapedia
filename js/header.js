import { sel } from "./common.js";
export { headObj }

let headObj = {
  createDom() {
    let $headerWrap = sel.el('.headerWrap');
    let headerDom = `
      <nav>
        <div class = "navbar">
          <ul>
            <li class = "headLogo">
            <button class = "headBtn" value = "home"><a href="#"></a>홈</button>
            </li>
            <li>
            <button class = "headBtn" value = "home"><a href="#"></a>영화</button>
            </li>
            <li>
              <button class = "headBtn" value = "drama"><a href="#"></a>TV 프로그램</button>
            </li>
            <li>
              <button class = "headBtn" value = "book"><a href="#"></a>책</button>
            </li>
          </ul>
        </div>
      </nav>
    `
    $headerWrap.innerHTML = headerDom
  },
  menuEvt() {
    let tabSel = sel.elAll('.headBtn');

    for (const tab of tabSel) {
      tab.addEventListener('click', e => {
        location.href = `${e.currentTarget.value}.html`
      })
    }
  }
}

let init = () => {
  headObj.createDom();
  headObj.menuEvt();
}
init();