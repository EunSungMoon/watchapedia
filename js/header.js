import { sel } from "./common.js";

let createDom = () => {
  let $headerWrap = sel.el('.headerWrap');
  let headerDom=`
    <nav>
      <div class = "navbar">
        <ul>
          <li class = "headLogo"><a href=""></a></li>
          <li>
          <button class = "headBtn"><a href=""></a><a href=""></a>영화</button>
          </li>
          <li>
            <button class = "headBtn"><a href=""></a>TV 프로그램</button>
          </li>
          <li>
            <button class = "headBtn"><a href=""></a>책</button>
          </li>
        </ul>
      </div>
    </nav>
  `
  $headerWrap.innerHTML=headerDom
}

let init = () => {
  createDom()
}
init()