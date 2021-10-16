import { sel } from "./common.js";

let createDom = () => {
  let $headerWrap = sel.el('.headerWrap');
  let headerDom=`
    <nav>
      <div class = "navbar">dfdf
        <ul>
          <li>
          
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