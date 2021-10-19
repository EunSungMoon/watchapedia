import { sel } from "./common.js";
export { secObj };

let secObj = {
  createDom() {
    let $sectionWrap = sel.el('.sectionWrap');

    let secDOm = `
    <div>
      <ul>
        <li>
          <a>
            <div class = "contentImg"></div>
            <div class = "rankNumber"></div>
            <div>
              <div class = "contentTitle"></div>
              <div class = "yearAndNation"></div>
              <div class = "contentStatus"></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    `

    $sectionWrap.innerHTML = secDOm
  }
}

let init=()=>{
  secObj.createDom();
}

init();