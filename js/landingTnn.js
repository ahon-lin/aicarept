// ── 專業團隊互動 ──
const IMG = "https://www.aicarept.com/image/member/AT/";
// enc=URL 編碼檔名, s=頭像(-s)副檔名, l=大圖副檔名, lead=職稱標籤, z=專長, x=學經歷
const TEAM = {
  陳威翰: {
    enc: "%E9%99%B3%E5%A8%81%E7%BF%B0",
    s: "jpg",
    l: "jpg",
    lead: "院長",
    z: [
      "肌肉骨骼系統疾病治療預防",
      "肌筋膜評估與矯正",
      "脊椎矯正治療",
      "動作控制分析與訓練",
      "骨科術後復健",
      "運動傷害與防護",
    ],
    x: [
      "高雄醫學大學運動醫學系碩士",
      "臺中榮總復健醫學部物理治療師",
      "臺中榮總復健醫學部臨床教學教師",
      "澄清復健醫院復健科物理治療師",
      "樹人醫專物理治療科兼任教師",
    ],
  },
  許嘉峻: {
    enc: "%E8%A8%B1%E5%98%89%E5%B3%BB",
    s: "jpg",
    l: "jpg",
    lead: "",
    z: [
      "疼痛治療",
      "無痛舒壓",
      "徒手關節脊椎調整",
      "肌肉骨骼評估",
      "徒手肌筋膜放鬆",
      "運動傷害",
      "肌內效貼紮技術",
      "動作控制與功能性運動訓練",
    ],
    x: ["中山醫學大學物理治療學系學士", "中山醫學中心治療師"],
  },
  高于鈞: {
    enc: "%E9%AB%98%E4%BA%8E%E9%88%9E",
    s: "jpg",
    l: "jpg",
    lead: "",
    z: ["肌肉骨骼系統疾病治療", "運動傷害治療", "疼痛控制"],
    x: [
      "國立成功大學 物理治療學系 學士",
      "國立陽明交通大學 物理治療暨輔助科技學系 碩士",
    ],
  },
  王禹智: {
    enc: "%E7%8E%8B%E7%A6%B9%E6%99%BA",
    s: "jpg",
    l: "webp",
    lead: "",
    z: ["肌筋膜張力調整", "動作控制", "運動傷害"],
    x: ["中華醫事科技大學調理保健系學士", "樹人醫專物理治療科副學士"],
  },
  房達奇: {
    enc: "%E6%88%BF%E9%81%94%E5%A5%87",
    s: "webp",
    l: "webp",
    lead: "",
    z: [
      "骨骼肌肉疾病復健",
      "全身系統性功能評估",
      "姿勢矯正及動作再訓練",
      "手法治療及運動貼紮",
    ],
    x: ["輔英科技大學物理治療學系"],
  },
  陳佳琳: {
    enc: "%E9%99%B3%E4%BD%B3%E7%90%B3",
    s: "jpg",
    l: "webp",
    lead: "",
    z: [
      "骨骼肌肉系統評估及徒手治療",
      "肌筋膜及軟組織放鬆與調整",
      "功能性動作分析與運動訓練",
      "肩頸腰背酸痛治療與訓練",
      "急慢性疼痛治療",
      "姿態調整、核心訓練、肌貼應用",
    ],
    x: [
      "高雄醫學大學物理治療學系學士",
      "台南市立安南醫院 物理治療師",
      "台南市立安南醫院 臨床教師",
      "延緩失能方案指導員",
    ],
  },
  王俊儼: {
    enc: "%E7%8E%8B%E4%BF%8A%E5%84%BC",
    s: "jpg",
    l: "webp",
    lead: "",
    z: ["骨科術後復健（十字韌帶、骨折）", "骨骼肌肉疾病復健", "疼痛治療"],
    x: ["高雄醫學大學物理治療學系學士", "聯新國際醫院復健治療科物理治療師"],
  },
  林芯譁: {
    enc: "%E6%9E%97%E8%8A%AF%E8%AD%81",
    s: "jpg",
    l: "webp",
    lead: "",
    z: [
      "球類相關運動傷害處理與貼紮",
      "落枕、頸因性頭痛處理與訓練",
      "神經相關疾病物理治療",
      "肌力、動作控制、本體感覺運動訓練",
      "十字韌帶、半月板術後復健",
      "椎間盤突出復健",
      "足部評估與矯正",
    ],
    x: [
      "陽明交通大學 物理治療暨輔助科技學系 碩士",
      "中國醫藥大學 運動醫學與物理治療學系 雙學士",
      "2023 亞洲滑輪溜冰錦標賽 雙金 物理治療師",
      "天母力康診所 物理治療師",
      "新北市立明志國中校隊 物理治療師",
      "聽障奧運種子培訓營 防護員",
    ],
  },
  李威甫: {
    enc: "%E6%9D%8E%E5%A8%81%E7%94%AB",
    s: "jpg",
    l: "jpg",
    lead: "",
    z: ["骨骼肌肉系統物理治療專業", "徒手物理治療", "運動治療"],
    x: ["高雄醫學大學物理治療學系"],
  },
  蔡昀儒: {
    enc: "%E8%94%A1%E6%98%80%E5%84%92",
    s: "jpg",
    l: "webp",
    lead: "",
    z: ["運動傷害處理", "動作控制優化訓練", "骨骼肌肉疾病復健"],
    x: [
      "高雄醫學大學物理治療學系",
      "聯新運醫國際聯合診所 物理治療師",
      "臺灣體育運動大學 物理治療師",
      "台南市立安南醫院 物理治療師",
      "114年全運會 台南市滑輪溜冰代表隊 隨隊物理治療師",
      "114年全大運 大會防護站物理治療師",
      "114年全中會 隨隊物理治療師",
    ],
  },
};
const BRANCH = {
  ximen: ["陳威翰", "許嘉峻", "高于鈞", "王禹智", "房達奇"],
  haian: [
    "陳威翰",
    "許嘉峻",
    "高于鈞",
    "陳佳琳",
    "王俊儼",
    "林芯譁",
    "李威甫",
    "蔡昀儒",
  ],
};
const rosterEl = document.getElementById("teamRoster");
const featureEl = document.getElementById("teamFeature");
const listHtml = (arr) => arr.map((t) => "<li>" + t + "</li>").join("");

let currentLabel = "西門分院";

function renderFeature(name) {
  const p = TEAM[name];
  const roleSpan = currentLabel + (p.lead ? " " + p.lead : "");
  featureEl.innerHTML =
    '<div class="tf-photo"><img src="' +
    IMG +
    p.enc +
    "." +
    p.l +
    '" alt="' +
    name +
    '" loading="lazy"></div>' +
    '<div class="tf-info">' +
    '<div class="tf-name">' +
    name +
    " <span>" +
    roleSpan +
    "</span></div>" +
    '<div class="tf-title">物理治療師</div>' +
    '<div class="tf-block"><div class="tf-label">專長</div><ul class="tf-list">' +
    listHtml(p.z) +
    "</ul></div>" +
    '<div class="tf-block"><div class="tf-label">學經歷</div><ul class="tf-list">' +
    listHtml(p.x) +
    "</ul></div>" +
    "</div>";
  rosterEl
    .querySelectorAll(".tm-ava")
    .forEach((a) => a.classList.toggle("active", a.dataset.name === name));
}

function renderBranch(branch, label) {
  currentLabel = label;
  const names = BRANCH[branch];
  rosterEl.innerHTML = names
    .map(
      (n) =>
        '<div class="tm-ava" data-name="' +
        n +
        '"><img src="' +
        IMG +
        TEAM[n].enc +
        "-s." +
        TEAM[n].s +
        '" alt="' +
        n +
        '" loading="lazy"><span>' +
        n +
        "</span></div>",
    )
    .join("");
  rosterEl
    .querySelectorAll(".tm-ava")
    .forEach((a) =>
      a.addEventListener("click", () => renderFeature(a.dataset.name)),
    );
  renderFeature(names[0]);
}

document.querySelectorAll("#teamToggle .bt-pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    document
      .querySelectorAll("#teamToggle .bt-pill")
      .forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    renderBranch(pill.dataset.branch, pill.dataset.label);
  });
});

renderBranch("ximen", "西門分院");
