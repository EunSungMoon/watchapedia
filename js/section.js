import { sel } from "./common.js";
import { d, fn } from "./movie.js";

export { secObj };

/*
문제가..for이 원하는데로 안돌아가는거도 있고 탭별로 돌아가야하는데 그거도 ...문제고
영화 정보 보여주는 거..
*/
let secObj = {
  createDom() {
    let $sectionWrap = sel.el('.sectionWrap');

    for (const key in fn) {
      let secDom = `
      <div>
        <div class = "contentSubject">${fn[key].subject}</div>
        <div class = "content">
          <ul></ul>
        </div>
      </div>
    `
      $sectionWrap.insertAdjacentHTML('afterbegin', secDom);

      secObj.contentDom();
    }
  },

  contentDom() {
    let $contentLi = sel.el('.content ul');

    for (const key in d) {
      let content = `
      <li>
        <a href="#">
          <div>
            <div class = "contentImg" style = "width: 240px; height: 300px; border: 1px solid"></div>
            <div class = "rankNumber">${d[key].rankNum}</div>
          </div>
          <div>
            <div class = "contentTitle">${d[key].contentTitle}</div>
            <div class = "yearAndNation">${d[key].yearAndNation}</div>
            <div class = "contentStatus">${d[key].contentStatus}</div>
          </div>
        </a>
      </li>
    `
      $contentLi.insertAdjacentHTML('afterbegin', content);
    }
  }
}

let init = () => {
  secObj.createDom();
}
init();