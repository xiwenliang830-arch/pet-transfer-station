const STORAGE_KEY = "pet-transfer-station-v1";

const VIEW_LABELS = {
  dashboard: "照护工作台",
  create: "新建照护计划",
  compare: "方案比较",
  profile: "宠物档案",
  handoff: "交接协作",
  requirements: "V1 方案与验收",
};

const SCHEDULE = [
  {
    id: "D1",
    date: "10.30",
    weekday: "周五",
    theme: "出发日",
    tasks: [
      {
        id: "breakfast",
        time: "08:00",
        icon: "utensils",
        title: "早餐与饮水",
        detail: "湿粮 80g，清水更换",
      },
      {
        id: "handover",
        time: "10:30",
        icon: "key-round",
        title: "门锁与用品交接",
        detail: "钥匙、口粮、药品和清洁用品",
      },
      {
        id: "first-checkin",
        time: "18:30",
        icon: "message-circle",
        title: "首次状态回报",
        detail: "照片、进食、饮水与情绪",
      },
    ],
  },
  {
    id: "D2",
    date: "10.31",
    weekday: "周六",
    theme: "适应期",
    tasks: [
      {
        id: "breakfast",
        time: "08:00",
        icon: "utensils",
        title: "早餐与饮水",
        detail: "湿粮 80g，观察进食速度",
      },
      {
        id: "medicine",
        time: "12:00",
        icon: "pill",
        title: "午后用药",
        detail: "关节营养片 1 粒，随餐",
      },
      {
        id: "walk",
        time: "18:00",
        icon: "footprints",
        title: "散步 30 分钟",
        detail: "避开其他大型犬，记录排便",
      },
    ],
  },
  {
    id: "D3",
    date: "11.01",
    weekday: "周日",
    theme: "稳定期",
    tasks: [
      {
        id: "breakfast",
        time: "08:00",
        icon: "utensils",
        title: "早餐与饮水",
        detail: "湿粮 80g，清水更换",
      },
      {
        id: "play",
        time: "16:00",
        icon: "bone",
        title: "室内互动",
        detail: "嗅闻游戏 15 分钟",
      },
      {
        id: "photo",
        time: "20:00",
        icon: "camera",
        title: "照片与状态回报",
        detail: "正脸与全身各一张",
      },
    ],
  },
  {
    id: "D4",
    date: "11.02",
    weekday: "周一",
    theme: "日常照护",
    tasks: [
      {
        id: "breakfast",
        time: "08:00",
        icon: "utensils",
        title: "早餐与饮水",
        detail: "湿粮 80g，补充饮水",
      },
      {
        id: "medicine",
        time: "12:00",
        icon: "pill",
        title: "午后用药",
        detail: "关节营养片 1 粒，随餐",
      },
      {
        id: "clean",
        time: "18:30",
        icon: "sparkles",
        title: "清洁与通风",
        detail: "清洁食盆，开窗 20 分钟",
      },
    ],
  },
  {
    id: "D5",
    date: "11.03",
    weekday: "周二",
    theme: "中段检查",
    tasks: [
      {
        id: "breakfast",
        time: "08:00",
        icon: "utensils",
        title: "早餐与饮水",
        detail: "湿粮 80g，观察食欲",
      },
      {
        id: "walk",
        time: "18:00",
        icon: "footprints",
        title: "散步 30 分钟",
        detail: "记录饮水、排便与步态",
      },
      {
        id: "mid-review",
        time: "21:00",
        icon: "clipboard-check",
        title: "中段照护复盘",
        detail: "主人确认后 3 天节奏",
      },
    ],
  },
  {
    id: "D6",
    date: "11.04",
    weekday: "周三",
    theme: "返程准备",
    tasks: [
      {
        id: "breakfast",
        time: "08:00",
        icon: "utensils",
        title: "早餐与饮水",
        detail: "湿粮 80g，清水更换",
      },
      {
        id: "stock",
        time: "15:00",
        icon: "package",
        title: "用品余量检查",
        detail: "口粮、尿垫与清洁用品",
      },
      {
        id: "return-brief",
        time: "20:30",
        icon: "list-checks",
        title: "返程交接清单",
        detail: "异常记录与药品余量",
      },
    ],
  },
  {
    id: "D7",
    date: "11.05",
    weekday: "周四",
    theme: "返家日",
    tasks: [
      {
        id: "breakfast",
        time: "08:00",
        icon: "utensils",
        title: "早餐与饮水",
        detail: "湿粮 80g，清水更换",
      },
      {
        id: "final-checkin",
        time: "14:00",
        icon: "camera",
        title: "最终状态回报",
        detail: "记录体重、食欲与情绪",
      },
      {
        id: "return-key",
        time: "19:00",
        icon: "key-round",
        title: "钥匙返还与关单",
        detail: "主人确认后结束照护",
      },
    ],
  },
];

const SERVICES = [
  {
    id: "home",
    name: "上门照护",
    subtitle: "在熟悉环境中照护",
    icon: "house",
    price: 1260,
    recommended: true,
    fit: 94,
    flexibility: 91,
    trust: 88,
    summary: "糯米对陌生环境敏感，熟悉的家能减少应激。每天两次上门，覆盖用药和散步。",
  },
  {
    id: "boarding",
    name: "专业机构寄养",
    subtitle: "全天有人值守",
    icon: "building-2",
    price: 1680,
    recommended: false,
    fit: 72,
    flexibility: 64,
    trust: 92,
    summary: "照护连续性较高，但陌生犬舍环境可能增加糯米焦虑，需要额外适应时间。",
  },
  {
    id: "family",
    name: "家庭寄养",
    subtitle: "小规模家庭环境",
    icon: "users",
    price: 980,
    recommended: false,
    fit: 78,
    flexibility: 74,
    trust: 69,
    summary: "熟悉感与价格占优，但对用药经验和突发状况处理能力的验证成本较高。",
  },
];

const DEFAULT_STATE = {
  plan: {
    title: "国庆出差 · 7 天照护",
    startDate: "2026-10-30",
    endDate: "2026-11-05",
    dateRange: "10月30日 - 11月5日",
    reason: "长期出差",
    service: "home",
    budget: 1500,
    emergencyName: "周岚",
    emergencyPhone: "138 0000 8821",
    careTasks: ["feed", "water", "medicine", "walk", "photo", "report"],
    careNotes: "糯米对雷声敏感，遇到打雷时关闭窗帘并播放白噪音。",
    completedPrep: ["food", "medicine"],
    doneTasks: {
      "D1-breakfast": true,
      "D1-handover": true,
    },
    checkins: [
      {
        id: "checkin-1",
        type: "meal",
        title: "早餐已完成",
        detail: "湿粮全部吃完，饮水正常。",
        person: "陈知夏",
        time: "08:14",
        date: "10月30日",
      },
      {
        id: "checkin-2",
        type: "photo",
        title: "状态照片已上传",
        detail: "精神良好，在门口等待散步。",
        person: "陈知夏",
        time: "08:18",
        date: "10月30日",
      },
      {
        id: "checkin-3",
        type: "note",
        title: "主人补充交接说明",
        detail: "零食盒在厨房第二层，外出前先给一小块。",
        person: "林然",
        time: "09:02",
        date: "10月30日",
      },
    ],
  },
  profile: {
    name: "糯米",
    breed: "金毛寻回犬",
    sex: "男孩",
    age: "3 岁 2 个月",
    weight: "28 kg",
    microchip: "900 215 007 381 224",
    diet: "每日两餐，每餐湿粮 80g + 干粮 45g；清水全天供应。",
    medication:
      "关节营养片，每日 12:00 随餐 1 粒；连续 7 天，无需冷藏。",
    health: "轻微髋关节敏感，避免连续上下楼梯和长时间奔跑。",
    behavior: "亲人但怕雷声；遇到其他大型犬会紧张，散步需使用短牵引。",
    emergencyName: "周岚",
    emergencyPhone: "138 0000 8821",
    vet: "安心动物医院 · 静安分院",
    vetPhone: "021-6688 1200",
    specialCare: "离家时留一件主人穿过的衣物；雷雨天气关闭窗帘。",
    photo: "assets/images/nuomi.jpg",
  },
  selectedDay: "D1",
  handoffMode: "owner",
};

let state = loadState();
let currentView = "dashboard";
let wizardStep = 1;
let compareSort = "recommended";
let profileEditing = false;
let lastFocusedElement = null;

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function loadState() {
  const defaults = cloneDefaultState();
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved || typeof saved !== "object") return defaults;
    return {
      ...defaults,
      ...saved,
      plan: { ...defaults.plan, ...(saved.plan || {}) },
      profile: { ...defaults.profile, ...(saved.profile || {}) },
    };
  } catch {
    return defaults;
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    // The prototype remains usable when storage is unavailable.
    return false;
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function icon(name) {
  return `<i data-lucide="${name}" aria-hidden="true"></i>`;
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function getSelectedDay() {
  return SCHEDULE.find((day) => day.id === state.selectedDay) || SCHEDULE[0];
}

function getDayProgress(day) {
  const completed = day.tasks.filter(
    (task) => state.plan.doneTasks[`${day.id}-${task.id}`],
  ).length;
  return {
    completed,
    total: day.tasks.length,
    percent: Math.round((completed / day.tasks.length) * 100),
  };
}

function getSelectedService() {
  return SERVICES.find((service) => service.id === state.plan.service) || SERVICES[0];
}

function getProfileCompleteness() {
  const fields = [
    "name",
    "breed",
    "age",
    "weight",
    "diet",
    "medication",
    "health",
    "behavior",
    "emergencyName",
    "emergencyPhone",
    "vet",
    "specialCare",
  ];
  const completed = fields.filter((field) => String(state.profile[field] || "").trim()).length;
  return Math.round((completed / fields.length) * 100);
}

function setView(view, options = {}) {
  if (!VIEW_LABELS[view]) return;
  currentView = view;
  profileEditing = false;
  document.querySelectorAll("[data-view-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.viewPanel === view);
  });
  document.querySelectorAll(".nav-item[data-view], .mobile-nav-item[data-view]").forEach((item) => {
    item.classList.toggle("active", item.dataset.view === view);
  });
  document.getElementById("topbarContext").textContent = VIEW_LABELS[view];
  renderCurrentView();
  if (!options.preserveScroll) {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  if (options.focus !== false && window.innerWidth > 900) {
    document.getElementById("appContent").focus({ preventScroll: true });
  }
}

function renderCurrentView() {
  const renderers = {
    dashboard: renderDashboard,
    create: renderCreatePlan,
    compare: renderCompare,
    profile: renderProfile,
    handoff: renderHandoff,
    requirements: renderRequirements,
  };
  renderers[currentView]();
  refreshIcons();
}

function renderDashboard() {
  const selectedDay = getSelectedDay();
  const selectedService = getSelectedService();
  const dayProgress = getDayProgress(selectedDay);
  const prepTotal = 5;
  const prepDone = state.plan.completedPrep.length;
  const prepPercent = Math.round((prepDone / prepTotal) * 100);
  const profileScore = getProfileCompleteness();

  const dayTabs = SCHEDULE.map((day) => {
    const progress = getDayProgress(day);
    return `
      <button class="day-tab ${day.id === selectedDay.id ? "active" : ""}" data-day="${day.id}" aria-pressed="${day.id === selectedDay.id}">
        ${progress.percent === 100 ? '<span class="complete-mark" aria-label="已完成"></span>' : ""}
        <strong>${day.id}</strong>
        <small>${day.date} ${day.weekday}</small>
      </button>
    `;
  }).join("");

  const tasks = selectedDay.tasks.map((task) => {
    const checked = Boolean(state.plan.doneTasks[`${selectedDay.id}-${task.id}`]);
    return `
      <div class="task-row">
        <time class="task-time">${task.time}</time>
        <span class="task-icon">${icon(task.icon)}</span>
        <div class="task-copy">
          <strong>${escapeHtml(task.title)}</strong>
          <span>${escapeHtml(task.detail)}</span>
        </div>
        <button class="task-check ${checked ? "checked" : ""}" data-action="toggle-task" data-day-id="${selectedDay.id}" data-task-id="${task.id}" aria-label="${checked ? "取消完成" : "标记完成"}：${escapeHtml(task.title)}" aria-pressed="${checked}">
          ${icon("check")}
        </button>
      </div>
    `;
  }).join("");

  const recentCheckins = state.plan.checkins.slice(0, 4);
  const activities = recentCheckins.length
    ? recentCheckins
        .map(
          (item) => `
            <div class="activity-item">
              <span class="activity-icon">${icon(checkinIcon(item.type))}</span>
              <div class="activity-copy">
                <strong>${escapeHtml(item.title)}</strong>
                <span>${escapeHtml(item.detail)}</span>
              </div>
              <time>${escapeHtml(item.time)}</time>
            </div>
          `,
        )
        .join("")
    : '<div class="empty-activity">还没有状态记录，完成第一次打卡后会出现在这里。</div>';

  document.getElementById("view-dashboard").innerHTML = `
    <div class="page-heading">
      <div class="page-heading-copy">
        <p class="eyebrow">当前照护计划</p>
        <h1>${escapeHtml(state.plan.title)}</h1>
        <p>${escapeHtml(state.plan.dateRange)} · ${escapeHtml(state.plan.reason)} · 由陈知夏执行</p>
      </div>
      <div class="page-actions">
        <button class="button" data-view="create">${icon("pencil-line")}编辑计划</button>
        <button class="button button-primary" data-action="open-handoff-card">${icon("id-card")}查看交接卡</button>
      </div>
    </div>

    <div class="dashboard-alert">
      <span class="alert-icon">${icon("luggage")}</span>
      <div class="alert-copy">
        <strong>距离出发还有 2 天，准备进度 ${prepDone}/${prepTotal}</strong>
        <span>还需确认备用钥匙、备用照护人和返程时间。</span>
      </div>
      <button class="button button-small" data-action="open-prep">继续准备</button>
    </div>

    <div class="dashboard-grid">
      <div class="stack">
        <section class="card timeline-card">
          <div class="card-header">
            <div>
              <h2>照护节奏</h2>
              <p>以天为单位对齐任务，任一处变化都能回到计划中调整。</p>
            </div>
            <span class="tag teal">${icon("refresh-cw")}可重排</span>
          </div>
          <div class="day-tabs" role="tablist" aria-label="照护日期">
            ${dayTabs}
          </div>
          <div class="day-summary">
            <div>
              <h2>${selectedDay.id} · ${selectedDay.theme}</h2>
              <p>${selectedDay.date} ${selectedDay.weekday} · ${dayProgress.completed}/${dayProgress.total} 项已完成</p>
            </div>
            <div class="progress-ring" style="--value:${dayProgress.percent}">
              <span>${dayProgress.percent}%</span>
            </div>
          </div>
          <div class="task-list">${tasks}</div>
        </section>

        <section class="card">
          <div class="card-header">
            <div>
              <h2>已选方案</h2>
              <p>费用、适配与保障信息统一留档，减少照护过程中反复确认。</p>
            </div>
            <button class="text-button" data-view="compare">比较其他方案 ${icon("arrow-right")}</button>
          </div>
          <div class="service-summary">
            <div class="service-top">
              <div class="service-provider">
                <span class="provider-avatar">陈</span>
                <div>
                  <strong>${escapeHtml(selectedService.name)} · 陈知夏</strong>
                  <span>核验照护者 · 已完成 42 次服务 · 4.9 分</span>
                </div>
              </div>
              <span class="tag green">${icon("shield-check")}已锁定</span>
            </div>
            <div class="service-details">
              <div class="service-detail">
                <small>服务日期</small>
                <strong>10.30 - 11.05</strong>
              </div>
              <div class="service-detail">
                <small>服务节奏</small>
                <strong>每日 2 次</strong>
              </div>
              <div class="service-detail">
                <small>预估总价</small>
                <strong>¥${selectedService.price}</strong>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="stack">
        <section class="card pet-snapshot">
          <div class="pet-photo-wrap">
            <img class="pet-photo" src="${escapeHtml(state.profile.photo)}" alt="${escapeHtml(state.profile.name)}的照片" />
            <div class="pet-identity">
              <div>
                <h2>${escapeHtml(state.profile.name)}</h2>
                <p>${escapeHtml(state.profile.breed)} · ${escapeHtml(state.profile.age)} · ${escapeHtml(state.profile.weight)}</p>
              </div>
              <span class="pet-status">状态稳定</span>
            </div>
          </div>
          <div class="pet-card-body">
            <div class="tag-row">
              <span class="tag coral">怕雷声</span>
              <span class="tag blue">关节敏感</span>
              <span class="tag sun">每日用药</span>
            </div>
            <div class="completeness">
              <div class="completeness-head">
                <span>交接资料完整度</span>
                <strong>${profileScore}%</strong>
              </div>
              <div class="bar-track"><div class="bar-fill" style="width:${profileScore}%"></div></div>
            </div>
            <div class="inline-actions" style="margin-top:13px">
              <button class="button button-soft button-small" data-view="profile">${icon("notebook-tabs")}查看档案</button>
              <button class="button button-small" data-action="open-handoff-card">${icon("send")}生成交接卡</button>
            </div>
          </div>
        </section>

        <section class="card">
          <div class="card-header">
            <div>
              <h2>快速记录</h2>
              <p>记录将同步到交接时间线。</p>
            </div>
          </div>
          <div style="height:13px"></div>
          <div class="quick-actions">
            <button class="quick-action" data-quick-action="meal">${icon("utensils")}进食</button>
            <button class="quick-action" data-quick-action="medicine">${icon("pill")}用药</button>
            <button class="quick-action" data-quick-action="photo">${icon("camera")}照片</button>
            <button class="quick-action" data-quick-action="note">${icon("message-square-plus")}备注</button>
          </div>
        </section>

        <section class="card">
          <div class="card-header">
            <div>
              <h2>最新反馈</h2>
              <p>主人与照护者共用同一条记录。</p>
            </div>
            <button class="text-button" data-view="handoff">全部 ${icon("arrow-up-right")}</button>
          </div>
          <div class="activity-list">${activities}</div>
        </section>
      </div>
    </div>
  `;
}

function renderCreatePlan() {
  const steps = [
    ["基础信息", "日期与宠物"],
    ["照护约束", "任务与预算"],
    ["方案偏好", "匹配条件"],
    ["确认计划", "检查与生成"],
  ];
  const stepMarkup = steps
    .map((step, index) => {
      const number = index + 1;
      const className =
        number === wizardStep ? "active" : number < wizardStep ? "done" : "";
      return `
        <button class="step-button ${className}" data-step-go="${number}">
          <span class="step-number">${number < wizardStep ? icon("check") : number}</span>
          <span><strong>${step[0]}</strong><small>${step[1]}</small></span>
        </button>
      `;
    })
    .join("");

  const careTaskOptions = [
    ["feed", "喂食"],
    ["water", "饮水"],
    ["medicine", "用药"],
    ["walk", "散步"],
    ["clean", "清洁"],
    ["photo", "照片回报"],
    ["report", "每日文字反馈"],
    ["emergency", "异常应急联络"],
  ];

  const careTaskChips = careTaskOptions
    .map(
      ([value, label]) => `
        <label class="chip-option">
          <input type="checkbox" data-care-task="${value}" ${state.plan.careTasks.includes(value) ? "checked" : ""} />
          <span>${label}</span>
        </label>
      `,
    )
    .join("");

  const reasons = ["长期出差", "异地工作", "搬家过渡", "临时住院", "突发情况"];
  const reasonChips = reasons
    .map(
      (reason) => `
        <label class="chip-option">
          <input type="radio" name="reason" value="${reason}" data-plan-field="reason" ${state.plan.reason === reason ? "checked" : ""} />
          <span>${reason}</span>
        </label>
      `,
    )
    .join("");

  const selectedService = getSelectedService();
  const summaryNodes = [
    ["calendar-days", "照护日期", state.plan.dateRange],
    ["paw-print", "宠物对象", `${state.profile.name} · ${state.profile.age}`],
    ["wallet-cards", "预算上限", `¥${state.plan.budget}`],
    ["shield-check", "优先方案", selectedService.name],
  ];

  const summaryRoute = summaryNodes
    .map(
      ([nodeIcon, label, value], index) => `
        <div class="summary-node ${index <= wizardStep - 1 ? "active" : ""}">
          <span class="summary-node-icon">${icon(nodeIcon)}</span>
          <div><strong>${label}</strong><span>${escapeHtml(value)}</span></div>
        </div>
      `,
    )
    .join("");

  document.getElementById("view-create").innerHTML = `
    <div class="page-heading">
      <div class="page-heading-copy">
        <p class="eyebrow">从场景到可执行计划</p>
        <h1>建立离宠照护计划</h1>
        <p>先记录真实约束，再进入方案比较。计划生成后会成为档案、匹配与交接的共同底稿。</p>
      </div>
      <div class="page-actions">
        <button class="button" data-view="dashboard">${icon("arrow-left")}返回工作台</button>
      </div>
    </div>

    <div class="wizard-layout">
      <section class="card wizard-card">
        <div class="stepper" aria-label="创建计划步骤">${stepMarkup}</div>
        <div class="wizard-body">
          <div class="form-step ${wizardStep === 1 ? "active" : ""}" data-step-panel="1">
            <div class="form-step-header">
              <h2>这次要离开多久？</h2>
              <p>开始和结束时间决定照护节奏，也用于计算方案价格。</p>
            </div>
            <div class="form-section">
              <div class="form-section-title"><strong>照护周期</strong><span>支持后续临时延长</span></div>
              <div class="field-grid">
                <label class="field">
                  <span>离开日期</span>
                  <input type="date" value="${escapeHtml(state.plan.startDate)}" data-plan-field="startDate" />
                </label>
                <label class="field">
                  <span>返程日期</span>
                  <input type="date" value="${escapeHtml(state.plan.endDate)}" data-plan-field="endDate" />
                </label>
              </div>
            </div>
            <div class="form-section">
              <div class="form-section-title"><strong>离开原因</strong><span>用于判断照护优先级</span></div>
              <div class="chip-options">${reasonChips}</div>
            </div>
            <div class="form-section">
              <div class="form-section-title"><strong>照护对象</strong><span>档案会自动带入</span></div>
              <div class="pet-picker">
                <img src="${escapeHtml(state.profile.photo)}" alt="" />
                <div class="pet-picker-copy">
                  <strong>${escapeHtml(state.profile.name)} · ${escapeHtml(state.profile.breed)}</strong>
                  <span>${escapeHtml(state.profile.age)} · ${escapeHtml(state.profile.weight)} · 每日用药</span>
                </div>
                <span class="tag green">${icon("check")}已选择</span>
              </div>
            </div>
          </div>

          <div class="form-step ${wizardStep === 2 ? "active" : ""}" data-step-panel="2">
            <div class="form-step-header">
              <h2>照护者必须完成什么？</h2>
              <p>把“好好照顾”拆成可确认、可留痕的动作，减少信息遗漏。</p>
            </div>
            <div class="form-section">
              <div class="form-section-title"><strong>核心照护任务</strong><span>已选 ${state.plan.careTasks.length} 项</span></div>
              <div class="chip-options">${careTaskChips}</div>
            </div>
            <div class="form-section">
              <div class="field-grid">
                <label class="field">
                  <span>服务预算上限</span>
                  <input type="number" min="500" step="50" value="${state.plan.budget}" data-plan-field="budget" />
                  <span class="field-help">用于过滤明显超出预算的方案</span>
                </label>
                <label class="field">
                  <span>紧急联系人</span>
                  <input type="text" value="${escapeHtml(state.plan.emergencyName)}" data-plan-field="emergencyName" />
                </label>
                <label class="field full">
                  <span>照护补充说明</span>
                  <textarea data-plan-field="careNotes">${escapeHtml(state.plan.careNotes)}</textarea>
                </label>
              </div>
            </div>
            <div class="form-section">
              <div class="alert-box">
                ${icon("info")}
                <span>V1 不自动承诺医疗决策。出现持续呕吐、呼吸异常或外伤时，优先联系紧急联系人和指定医院。</span>
              </div>
            </div>
          </div>

          <div class="form-step ${wizardStep === 3 ? "active" : ""}" data-step-panel="3">
            <div class="form-step-header">
              <h2>你更看重哪种照护？</h2>
              <p>偏好不会直接替代比较，系统会同时呈现价格、适配与风险。</p>
            </div>
            <div class="form-section">
              <div class="form-section-title"><strong>优先照护方式</strong><span>只能选一个主方案</span></div>
              <div class="radio-cards">
                ${SERVICES.map(
                  (service) => `
                    <label class="radio-card">
                      <input type="radio" name="service" value="${service.id}" data-plan-field="service" ${state.plan.service === service.id ? "checked" : ""} />
                      <span class="radio-card-content">
                        <span class="radio-icon">${icon(service.icon)}</span>
                        <strong>${service.name}</strong>
                        <p>${service.subtitle}</p>
                      </span>
                    </label>
                  `,
                ).join("")}
              </div>
            </div>
            <div class="form-section">
              <div class="form-section-title"><strong>匹配偏好</strong><span>可多选</span></div>
              <div class="chip-options">
                <label class="chip-option"><input type="checkbox" checked /><span>有用药经验</span></label>
                <label class="chip-option"><input type="checkbox" checked /><span>可处理大型犬</span></label>
                <label class="chip-option"><input type="checkbox" /><span>可临时延长</span></label>
                <label class="chip-option"><input type="checkbox" checked /><span>每日照片回报</span></label>
                <label class="chip-option"><input type="checkbox" /><span>支持夜间探视</span></label>
              </div>
            </div>
          </div>

          <div class="form-step ${wizardStep === 4 ? "active" : ""}" data-step-panel="4">
            <div class="form-step-header">
              <h2>计划已经可以生成</h2>
              <p>确认关键信息后，会同时建立照护时间表、准备清单与交接卡草稿。</p>
            </div>
            <div class="review-list">
              <div class="review-row"><span>照护周期</span><strong>${escapeHtml(state.plan.dateRange)}</strong></div>
              <div class="review-row"><span>宠物与任务</span><strong>${escapeHtml(state.profile.name)} · ${state.plan.careTasks.length} 项核心照护任务</strong></div>
              <div class="review-row"><span>预算上限</span><strong>¥${escapeHtml(state.plan.budget)}</strong></div>
              <div class="review-row"><span>优先方案</span><strong>${escapeHtml(selectedService.name)}</strong></div>
              <div class="review-row"><span>紧急联系人</span><strong>${escapeHtml(state.plan.emergencyName)} · ${escapeHtml(state.plan.emergencyPhone)}</strong></div>
            </div>
            <div style="height:15px"></div>
            <div class="alert-box">
              ${icon("circle-alert")}
              <span>生成计划不等于完成预约。下一步需要比较可执行方案，并确认照护者的服务范围与保障条款。</span>
            </div>
          </div>
        </div>
        <div class="wizard-actions">
          <button class="button" data-action="wizard-back" ${wizardStep === 1 ? "disabled" : ""}>${icon("arrow-left")}上一步</button>
          <div class="wizard-actions-right">
            <button class="button button-soft" data-action="save-draft">保存草稿</button>
            ${
              wizardStep < 4
                ? `<button class="button button-primary" data-action="wizard-next">下一步${icon("arrow-right")}</button>`
                : `<button class="button button-primary" data-action="create-plan">${icon("sparkles")}生成照护计划</button>`
            }
          </div>
        </div>
      </section>

      <aside class="card side-summary">
        <div class="side-summary-top">
          <p class="eyebrow">计划预览</p>
          <h3>先有约束，再做选择</h3>
          <p>每次修改都会更新方案比较条件。</p>
        </div>
        <div class="summary-route">${summaryRoute}</div>
        <div class="summary-note">${icon("lightbulb")} 建议在比较方案前先确认用药、独处时长和异常联络方式，这三项最容易造成照护断点。</div>
      </aside>
    </div>
  `;
}

function renderCompare() {
  const sortedServices = [...SERVICES].sort((a, b) => {
    if (compareSort === "price") return a.price - b.price;
    if (compareSort === "fit") return b.fit - a.fit;
    return Number(b.recommended) - Number(a.recommended);
  });

  const cards = sortedServices
    .map((service) => {
      const selected = state.plan.service === service.id;
      return `
        <article class="compare-card ${selected ? "selected" : ""} ${service.recommended ? "recommended" : ""}">
          <div class="compare-card-top">
            <div class="compare-card-kicker">
              ${service.recommended ? `<span class="recommend-label">${icon("sparkles")}更适合当前约束</span>` : "<span></span>"}
              <span class="selected-label">${icon("circle-check")}当前选择</span>
            </div>
            <div class="compare-type">
              <span class="compare-type-icon">${icon(service.icon)}</span>
              <div>
                <h2>${service.name}</h2>
                <p>${service.subtitle}</p>
              </div>
            </div>
            <div class="price-row">
              <strong>¥${service.price}</strong>
              <span>7 天预估 · 含服务费</span>
            </div>
          </div>
          <div class="compare-card-body">
            <div class="fit-summary">${service.summary}</div>
            <div class="metric-list">
              <div class="metric-row">
                <span>宠物适配</span>
                <div class="metric-bar"><i style="width:${service.fit}%"></i><em>${service.fit}%</em></div>
              </div>
              <div class="metric-row">
                <span>时间灵活</span>
                <div class="metric-bar"><i style="width:${service.flexibility}%"></i><em>${service.flexibility}%</em></div>
              </div>
              <div class="metric-row">
                <span>信任保障</span>
                <div class="metric-bar"><i style="width:${service.trust}%"></i><em>${service.trust}%</em></div>
              </div>
            </div>
            <div class="tag-row" style="margin-top:13px">
              ${
                service.id === "home"
                  ? '<span class="tag green">可视频确认</span><span class="tag teal">异常替补</span>'
                  : service.id === "boarding"
                    ? '<span class="tag green">24 小时值守</span><span class="tag blue">每日报告</span>'
                    : '<span class="tag sun">家庭氛围</span><span class="tag blue">需人工核验</span>'
              }
            </div>
          </div>
          <div class="compare-footer">
            <button class="button ${selected ? "button-soft" : ""}" data-action="select-service" data-service="${service.id}">
              ${selected ? `${icon("check")}已选为执行方案` : "选择并继续"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  document.getElementById("view-compare").innerHTML = `
    <div class="page-heading">
      <div class="page-heading-copy">
        <p class="eyebrow">决策不是比价格</p>
        <h1>比较可执行的照护方案</h1>
        <p>按糯米的行为、用药、预算与连续性要求统一比较。每张卡都说明“为什么适合”，也明确风险。</p>
      </div>
      <div class="page-actions">
        <button class="button" data-view="create">${icon("sliders-horizontal")}调整条件</button>
        <button class="button button-primary" data-view="handoff">${icon("send")}进入交接</button>
      </div>
    </div>

    <div class="compare-toolbar">
      <div class="compare-context">
        ${icon("wand-sparkles")}
        <span><strong>3 个可执行方案</strong> · 已应用 5 项约束 · 数据更新时间 10:24</span>
      </div>
      <label class="compare-context">
        <span>排序</span>
        <select class="compare-select" id="compareSort">
          <option value="recommended" ${compareSort === "recommended" ? "selected" : ""}>推荐优先</option>
          <option value="fit" ${compareSort === "fit" ? "selected" : ""}>适配度优先</option>
          <option value="price" ${compareSort === "price" ? "selected" : ""}>价格从低到高</option>
        </select>
      </label>
    </div>

    <div class="compare-grid">${cards}</div>

    <div class="compare-details">
      <section class="card">
        <div class="card-header">
          <div><h2>关键差异对照</h2><p>隐藏费用与应急能力必须与价格同时判断。</p></div>
          <span class="tag teal">7 天口径</span>
        </div>
        <div class="card-body table-scroll">
          <table class="comparison-table">
            <thead>
              <tr><th>比较项</th><th class="${state.plan.service === "home" ? "highlight" : ""}">上门照护</th><th class="${state.plan.service === "boarding" ? "highlight" : ""}">专业寄养</th><th class="${state.plan.service === "family" ? "highlight" : ""}">家庭寄养</th></tr>
            </thead>
            <tbody>
              <tr><td>最终预估</td><td>¥1,260</td><td>¥1,680</td><td>¥980 + 接送 ¥120</td></tr>
              <tr><td>每日照护</td><td>2 次，共 90 分钟</td><td>全天在店</td><td>由家庭照护者安排</td></tr>
              <tr><td>用药执行</td><td class="table-yes">可核验</td><td class="table-yes">可核验</td><td>需单独确认</td></tr>
              <tr><td>环境适应</td><td class="table-yes">熟悉环境</td><td class="table-no">需要适应期</td><td>取决于家庭</td></tr>
              <tr><td>服务中断替补</td><td class="table-yes">平台替补</td><td class="table-yes">机构轮值</td><td class="table-no">需自行协调</td></tr>
              <tr><td>异常就医陪同</td><td>可加购 ¥120</td><td class="table-yes">包含</td><td class="table-no">需协商</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <aside class="card check-panel">
        <div class="card-header">
          <div><h2>选择前检查</h2><p>已根据当前计划自动生成。</p></div>
        </div>
        <div class="check-list">
          <div class="check-item"><span>${icon("check")}</span><div><strong>服务范围已覆盖</strong><p>上门时间 08:00 与 18:00 均在可用时段内。</p></div></div>
          <div class="check-item"><span>${icon("check")}</span><div><strong>照护者具备用药经验</strong><p>陈知夏完成大型犬与口服药专项核验。</p></div></div>
          <div class="check-item"><span>${icon("check")}</span><div><strong>备用照护人已匹配</strong><p>若服务中断，可优先替换为同区域照护者。</p></div></div>
          <div class="check-item warning"><span>${icon("alert-triangle")}</span><div><strong>需补一项授权</strong><p>如发生紧急就医，是否允许先行送医后补确认。</p></div></div>
          <button class="button button-soft" data-action="open-risk-check" style="margin-top:5px">查看风险与费用明细</button>
        </div>
      </aside>
    </div>
  `;
}

function renderProfile() {
  const score = getProfileCompleteness();
  const p = state.profile;

  document.getElementById("view-profile").innerHTML = `
    <section class="card profile-hero">
      <div class="profile-hero-photo">
        <img src="${escapeHtml(p.photo)}" alt="${escapeHtml(p.name)}的照片" />
      </div>
      <div class="profile-hero-copy">
        <p class="eyebrow">宠物数字档案</p>
        <div class="profile-title-row">
          <h1>${escapeHtml(p.name)}</h1>
          <span>${escapeHtml(p.breed)} · ${escapeHtml(p.sex)} · ${escapeHtml(p.age)}</span>
        </div>
        <p>这份档案只保留照护真正需要的信息，并按照护阶段逐步开放。照护者不会看到费用、行程与账户信息。</p>
        <div class="profile-hero-actions">
          <button class="button button-primary" data-action="toggle-profile-edit">
            ${icon(profileEditing ? "save" : "pencil-line")}${profileEditing ? "保存档案" : "编辑档案"}
          </button>
          <button class="button" data-action="upload-profile-photo">${icon("image-up")}更换照片</button>
          <button class="button" data-action="open-handoff-card">${icon("id-card")}生成交接卡</button>
          <input class="sr-only" id="profilePhotoInput" type="file" accept="image/jpeg,image/png,image/webp" />
        </div>
      </div>
    </section>

    <div class="profile-layout ${profileEditing ? "editing" : ""}">
      <div>
        <section class="card profile-section">
          <div class="profile-section-head">
            <div class="profile-section-title">
              <span>${icon("heart-pulse")}</span>
              <h2>基础与健康</h2>
            </div>
            <span class="tag green">${icon("shield-check")}已核验 ${score}%</span>
          </div>
          <div class="profile-section-body">
            <div class="info-grid">
              ${profileInfoItem("品种", "breed", p.breed)}
              ${profileInfoItem("年龄", "age", p.age)}
              ${profileInfoItem("体重", "weight", p.weight)}
              ${profileInfoItem("芯片编号", "microchip", p.microchip)}
              ${profileInfoItem("健康关注", "health", p.health, true)}
              ${profileInfoItem("既往特殊照护", "specialCare", p.specialCare, true)}
            </div>
          </div>
        </section>

        <section class="card profile-section">
          <div class="profile-section-head">
            <div class="profile-section-title">
              <span>${icon("utensils")}</span>
              <h2>饮食与用药</h2>
            </div>
            <span class="tag sun">${icon("clock-3")}每日 2 个关键时点</span>
          </div>
          <div class="profile-section-body">
            <div class="info-grid">
              ${profileInfoItem("饮食安排", "diet", p.diet, true)}
              ${profileInfoItem("药物与剂量", "medication", p.medication, true)}
            </div>
          </div>
        </section>

        <section class="card profile-section">
          <div class="profile-section-head">
            <div class="profile-section-title">
              <span>${icon("message-circle-heart")}</span>
              <h2>性格与安抚方式</h2>
            </div>
          </div>
          <div class="profile-section-body">
            <div class="info-grid">
              ${profileInfoItem("行为特点", "behavior", p.behavior, true)}
              <div class="info-item full">
                <span class="info-label">行为标签</span>
                <div class="tag-row">
                  <span class="tag coral">怕雷声</span>
                  <span class="tag blue">怕大型犬</span>
                  <span class="tag green">亲人</span>
                  <span class="tag sun">短牵引</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="card profile-section">
          <div class="profile-section-head">
            <div class="profile-section-title">
              <span>${icon("phone-call")}</span>
              <h2>紧急联络</h2>
            </div>
            <span class="tag coral">照护者可见</span>
          </div>
          <div class="profile-section-body">
            <div class="info-grid">
              ${profileInfoItem("紧急联系人", "emergencyName", p.emergencyName)}
              ${profileInfoItem("联系电话", "emergencyPhone", p.emergencyPhone)}
              ${profileInfoItem("指定医院", "vet", p.vet, true)}
              ${profileInfoItem("医院电话", "vetPhone", p.vetPhone)}
            </div>
          </div>
        </section>
      </div>

      <aside class="profile-side">
        <section class="card handoff-progress-card">
          <div class="handoff-score">
            <div class="score-ring" style="--value:${score}"><strong>${score}%</strong></div>
            <div>
              <h3>交接准备度</h3>
              <p>关键信息已足够开始照护，仍建议补全细节。</p>
            </div>
          </div>
          <div class="missing-list">
            <div class="missing-item">${icon("check-circle-2")}饮食与用药已明确</div>
            <div class="missing-item">${icon("check-circle-2")}紧急联系人与医院已填写</div>
            <div class="missing-item">${icon("alert-circle")}建议补充“叫醒 / 独处”注意事项</div>
          </div>
        </section>

        <section class="card trust-note">
          <h3>${icon("lock-keyhole")}档案分阶段开放</h3>
          <p>确认服务后，照护者仅能在服务时间窗口内查看照护相关字段。主人可随时撤回授权，并查看访问记录。</p>
        </section>

        <section class="card trust-note">
          <h3>${icon("history")}最近更新</h3>
          <p>10月27日 21:18 · 林然补充了“雷雨天气安抚方式”<br />10月26日 09:42 · 陈知夏确认已阅读用药说明</p>
        </section>
      </aside>
    </div>
  `;
}

function profileInfoItem(label, field, value, full = false) {
  return `
    <div class="info-item ${full ? "full" : ""}">
      <span class="info-label">${label}</span>
      <span class="info-value">${escapeHtml(value)}</span>
      ${
        field === "diet" || field === "medication" || field === "health" || field === "behavior" || field === "specialCare" || field === "vet"
          ? `<textarea class="profile-edit-textarea" data-profile-field="${field}">${escapeHtml(value)}</textarea>`
          : `<input class="profile-edit-input" type="text" data-profile-field="${field}" value="${escapeHtml(value)}" />`
      }
    </div>
  `;
}

function renderHandoff() {
  const ownerActive = state.handoffMode === "owner";
  document.getElementById("view-handoff").innerHTML = `
    <div class="page-heading">
      <div class="page-heading-copy">
        <p class="eyebrow">同一条接力线</p>
        <h1>交接与照护协作</h1>
        <p>主人、照护者与备用联系人围绕同一份计划协作。每次确认、打卡与异常处理都留痕。</p>
      </div>
      <div class="page-actions">
        <button class="button" data-action="open-handoff-card">${icon("qr-code")}交接卡</button>
        <button class="button button-primary" data-action="add-handoff-note">${icon("message-square-plus")}添加交接备注</button>
      </div>
    </div>

    <div class="handoff-heading-row">
      <div class="segmented" aria-label="切换交接视角">
        <button class="segment-button ${ownerActive ? "active" : ""}" data-action="handoff-mode" data-mode="owner" aria-pressed="${ownerActive}">主人视图</button>
        <button class="segment-button ${!ownerActive ? "active" : ""}" data-action="handoff-mode" data-mode="sitter" aria-pressed="${!ownerActive}">照护者视图</button>
      </div>
      <span class="tag green">${icon("wifi")}已同步 · 10:24</span>
    </div>

    <div class="owner-view-panel ${ownerActive ? "" : "hidden"}">
      <div class="access-banner">
        <span class="access-icon">${icon("shield-check")}</span>
        <div class="access-copy">
          <strong>交接卡已发送给陈知夏</strong>
          <p>只开放 10月30日 08:00 - 11月5日 21:00 的照护字段；费用与行程未授权。</p>
        </div>
        <button class="button button-small" data-action="manage-access">${icon("settings-2")}管理权限</button>
      </div>

      <div class="handoff-layout">
        <div class="stack">
          <section class="card">
            <div class="card-header">
              <div><h2>交接进度</h2><p>从发送到关单，每一步都需要明确确认。</p></div>
              <span class="tag sun">当前：资料预览</span>
            </div>
            <div class="handover-steps">
              <div class="handover-step done"><span class="handover-step-icon">${icon("check")}</span><strong>计划确认</strong><span>10.28 09:40</span></div>
              <div class="handover-step current"><span class="handover-step-icon">${icon("eye")}</span><strong>资料预览</strong><span>等待照护者确认</span></div>
              <div class="handover-step"><span class="handover-step-icon">${icon("key-round")}</span><strong>现场交接</strong><span>10.30 10:30</span></div>
              <div class="handover-step"><span class="handover-step-icon">${icon("flag")}</span><strong>完成关单</strong><span>11.05 19:00</span></div>
            </div>
          </section>

          <section class="card">
            <div class="card-header">
              <div><h2>协作时间线</h2><p>所有记录围绕宠物状态和下一步行动。</p></div>
              <button class="text-button" data-action="add-handoff-note">${icon("plus")}备注</button>
            </div>
            <div class="handoff-feed">${renderHandoffFeed()}</div>
          </section>
        </div>

        <aside class="handoff-side">
          <section class="card sitter-card">
            <div class="sitter-card-main">
              <span class="sitter-avatar">陈</span>
              <div class="sitter-copy">
                <strong>陈知夏</strong>
                <span>上门照护者 · 大型犬专项</span>
                <span class="tag green">${icon("badge-check")}身份与资质已核验</span>
              </div>
            </div>
            <div class="sitter-stats">
              <div class="sitter-stat"><strong>42</strong><span>服务次数</span></div>
              <div class="sitter-stat"><strong>4.9</strong><span>综合评分</span></div>
              <div class="sitter-stat"><strong>2h</strong><span>响应中位</span></div>
            </div>
            <div class="sitter-card-actions">
              <button class="button" data-action="contact-sitter">${icon("message-circle")}联系</button>
              <button class="button" data-action="report-issue">${icon("siren")}异常上报</button>
            </div>
          </section>

          <section class="card next-task-card">
            <h3>下一项交接行动</h3>
            <div class="next-task-main">
              <span class="next-task-time">今日<br />16:00</span>
              <div>
                <strong>确认备用钥匙放置位置</strong>
                <span>完成后会通知陈知夏阅读。</span>
              </div>
            </div>
            <button class="button button-soft button-small" data-action="confirm-prep" style="width:100%;margin-top:12px">${icon("check")}标记完成</button>
          </section>

          <section class="card trust-note">
            <h3>${icon("siren")}中断与替补规则</h3>
            <p>照护者超过 60 分钟未响应时，系统会同时通知备用人选。医疗决定始终以主人预设授权或紧急联系人确认为准。</p>
          </section>
        </aside>
      </div>
    </div>

    <div class="sitter-view-panel ${ownerActive ? "" : "active"}">
      <div class="sitter-mode-head">
        <div>
          <h2>陈知夏，今天的照护任务</h2>
          <p>糯米 · ${escapeHtml(state.plan.dateRange)} · 上门照护 · 两处异常信息已在交接卡中标出。</p>
        </div>
        <div class="sitter-mode-date"><span>今天</span><strong>10月30日</strong><span>D1 · 出发日</span></div>
      </div>

      <div class="sitter-task-grid">
        <div class="stack">
          <section class="card">
            <div class="card-header">
              <div><h2>今日照护任务</h2><p>完成一项即可留下时间、文字与照片记录。</p></div>
              <span class="tag teal">2/3 已完成</span>
            </div>
            <div class="sitter-task-list">
              <div class="sitter-task">
                <span class="task-icon">${icon("utensils")}</span>
                <div class="sitter-task-copy"><strong>08:00 · 早餐与饮水</strong><span>湿粮 80g，清水更换</span></div>
                <button class="task-check checked" data-sitter-checkin="meal" aria-label="已完成早餐">${icon("check")}</button>
              </div>
              <div class="sitter-task">
                <span class="task-icon">${icon("key-round")}</span>
                <div class="sitter-task-copy"><strong>10:30 · 门锁与用品交接</strong><span>钥匙、口粮、药品和清洁用品</span></div>
                <button class="task-check checked" data-sitter-checkin="handover" aria-label="已完成交接">${icon("check")}</button>
              </div>
              <div class="sitter-task">
                <span class="task-icon">${icon("message-circle")}</span>
                <div class="sitter-task-copy"><strong>18:30 · 首次状态回报</strong><span>照片、进食、饮水与情绪</span></div>
                <button class="task-check" data-sitter-checkin="checkin" aria-label="完成状态回报">${icon("check")}</button>
              </div>
            </div>
          </section>

          <section class="card">
            <div class="card-header">
              <div><h2>快速打卡</h2><p>先记录，再补充说明。</p></div>
            </div>
            <div class="card-body">
              <div class="quick-actions" style="padding:0;grid-template-columns:repeat(4,1fr)">
                <button class="quick-action" data-sitter-checkin="meal">${icon("utensils")}进食</button>
                <button class="quick-action" data-sitter-checkin="water">${icon("droplets")}饮水</button>
                <button class="quick-action" data-sitter-checkin="medicine">${icon("pill")}用药</button>
                <button class="quick-action" data-sitter-checkin="photo">${icon("camera")}照片</button>
              </div>
            </div>
          </section>

          <section class="card">
            <div class="card-header">
              <div><h2>我的记录</h2><p>主人会即时收到与你一致的记录。</p></div>
            </div>
            <div class="handoff-feed">${renderHandoffFeed(4)}</div>
          </section>
        </div>

        <aside class="handoff-side">
          <section class="card next-task-card">
            <h3>交接卡 · 照护重点</h3>
            <div class="info-table-mini" style="margin-top:12px">
              <div><span>饮食</span><strong>湿粮 80g + 干粮 45g</strong></div>
              <div><span>用药</span><strong>12:00 关节营养片 1 粒</strong></div>
              <div><span>行为</span><strong>怕雷声，短牵引散步</strong></div>
              <div><span>紧急联系</span><strong>周岚 · 138 0000 8821</strong></div>
            </div>
            <button class="button button-soft button-small" data-action="open-handoff-card" style="width:100%;margin-top:12px">${icon("id-card")}查看完整交接卡</button>
          </section>

          <section class="card trust-note">
            <h3>${icon("shield-alert")}出现异常时</h3>
            <p>持续呕吐、呼吸异常、外伤或无法联系主人时，先确保宠物安全，立即联系紧急联系人，并按指定医院路线处理。</p>
            <button class="button button-danger" data-action="report-issue" style="width:100%;margin-top:12px">${icon("siren")}上报异常</button>
          </section>
        </aside>
      </div>
    </div>
  `;
}

function renderHandoffFeed(limit = 6) {
  return state.plan.checkins
    .slice(0, limit)
    .map((item) => {
      const isOwner = item.person === "林然";
      const media =
        item.type === "photo"
          ? `<div class="feed-media"><img src="${escapeHtml(state.profile.photo)}" alt="糯米状态照片缩略图" /><div><strong>糯米状态照片</strong><span>已同步给主人 · 可放大查看</span></div></div>`
          : "";
      return `
        <div class="feed-item">
          <span class="feed-avatar ${isOwner ? "owner" : ""}">${isOwner ? "林" : "陈"}</span>
          <div class="feed-copy">
            <div class="feed-meta"><strong>${escapeHtml(item.title)}</strong><time>${escapeHtml(item.date)} ${escapeHtml(item.time)}</time></div>
            <p>${escapeHtml(item.detail)}</p>
            ${media}
          </div>
        </div>
      `;
    })
    .join("");
}

function checkinIcon(type) {
  const iconMap = {
    meal: "utensils",
    medicine: "pill",
    photo: "camera",
    note: "message-square",
    water: "droplets",
    checkin: "message-circle",
    handover: "key-round",
    incident: "siren",
  };
  return iconMap[type] || "activity";
}

function renderRequirements() {
  const featureRows = [
    ["照护工作台", "看到当前计划、准备进度、每日任务与最新反馈", "选择日期后任务同步切换；完成项可撤销；快速记录立即进入时间线", "90% 任务可在一屏内完成判断"],
    ["创建计划", "把日期、预算、宠物与照护约束转成可执行底稿", "四步向导可前后切换；草稿可保存；生成后必须回到工作台", "关键字段无遗漏，步骤状态清晰"],
    ["方案比较", "同时比较价格、适配、灵活性与信任保障", "排序即时生效；切换方案同步到工作台；风险检查不可隐藏", "用户能说出选择理由与主要风险"],
    ["宠物档案", "形成可授权、可编辑、可交接的结构化资料", "编辑模式保存到本地；完整度随字段变化；照护者只能看到必要字段", "关键照护信息可在 1 分钟内查找"],
    ["交接协作", "让主人与照护者围绕同一计划确认、打卡和上报异常", "主人/照护者视图切换；打卡写入同一条时间线；异常必须形成记录", "信息不依赖私聊重复解释"],
  ];

  document.getElementById("view-requirements").innerHTML = `
    <div class="requirements-hero">
      <section class="requirements-thesis">
        <p class="eyebrow">V1 产品判断</p>
        <h1>不做四个分散工具，做一条<em>不断档的照护接力</em>。</h1>
        <p>“宠物中转站”的价值不在于再提供一个寄养信息入口，而在于把离宠期间的计划、决策、资料、执行与异常处理放在同一条可追溯链路里。V1 以主人发起一次真实照护任务为唯一主路径。</p>
        <div class="thesis-tags">
          <span>先计划后匹配</span><span>先核验后下单</span><span>先留痕后协作</span><span>异常有备用人</span>
        </div>
      </section>
      <aside class="card requirements-summary">
        <h2>V1 设计范围</h2>
        <div class="summary-number"><strong>4</strong><span>核心功能，收敛为 1 条任务流</span></div>
        <div class="summary-number"><strong>6</strong><span>可点击页面，含需求验收说明</span></div>
        <div class="summary-number"><strong>5</strong><span>关键交互状态：草稿、确认、执行、异常、关单</span></div>
      </aside>
    </div>

    <section class="requirements-section">
      <div class="section-heading">
        <div><h2>核心用户旅程</h2><p>每次进入产品，都应回答“现在到哪一步、下一步做什么”。</p></div>
        <span class="tag teal">一条主链路</span>
      </div>
      <div class="card journey-map">
        <div class="journey-stage">
          <span class="journey-step">01 · 说明约束</span>
          <span class="journey-icon">${icon("calendar-plus")}</span>
          <h3>建立照护计划</h3>
          <p>输入离宠时间、原因、宠物、预算与不可妥协的照护要求。</p>
          <span class="tag teal">计划底稿</span>
        </div>
        <div class="journey-stage">
          <span class="journey-step">02 · 做选择</span>
          <span class="journey-icon">${icon("git-compare-arrows")}</span>
          <h3>比较可执行方案</h3>
          <p>把价格、适配、连续性与风险放在同一张表里，而不是只看推荐。</p>
          <span class="tag blue">方案决策</span>
        </div>
        <div class="journey-stage">
          <span class="journey-step">03 · 交底</span>
          <span class="journey-icon">${icon("notebook-tabs")}</span>
          <h3>生成宠物档案</h3>
          <p>把饮食、用药、性格、安抚和紧急联络转成照护者可执行的交接卡。</p>
          <span class="tag sun">信息交接</span>
        </div>
        <div class="journey-stage">
          <span class="journey-step">04 · 执行</span>
          <span class="journey-icon">${icon("send")}</span>
          <h3>交接与每日打卡</h3>
          <p>主人和照护者共享任务、状态照片与下一步行动，减少重复沟通。</p>
          <span class="tag green">协作留痕</span>
        </div>
        <div class="journey-stage">
          <span class="journey-step">05 · 兜底</span>
          <span class="journey-icon">${icon("siren")}</span>
          <h3>变更与异常接力</h3>
          <p>计划变化、服务中断或健康异常都有明确上报、替补与关单路径。</p>
          <span class="tag coral">连续性保障</span>
        </div>
      </div>
    </section>

    <section class="requirements-section">
      <div class="section-heading">
        <div><h2>对原方案的 5 个关键修正</h2><p>保留核心功能，但补齐从概念到可验收产品所缺的判断。</p></div>
      </div>
      <div class="principles">
        <article class="card principle">
          <span>${icon("route")}</span>
          <h3>功能从并列变串联</h3>
          <p>计划是唯一数据源，方案、档案、交接都从计划派生，避免四个孤立页面。</p>
        </article>
        <article class="card principle">
          <span>${icon("shield-check")}</span>
          <h3>增加信任与安全层</h3>
          <p>补上照护者核验、服务范围、权限、备用人和紧急就医授权，不把安全留给私聊。</p>
        </article>
        <article class="card principle">
          <span>${icon("triangle-alert")}</span>
          <h3>把异常当成主流程</h3>
          <p>原计划只讲“变化后重新规划”，V1 明确迟到、失联、健康异常与替补的处理状态。</p>
        </article>
        <article class="card principle">
          <span>${icon("users-round")}</span>
          <h3>区分两种角色视图</h3>
          <p>主人关心计划与费用，照护者只需要任务、重点和紧急联络。权限必须可见、可控。</p>
        </article>
      </div>
    </section>

    <section class="requirements-section">
      <div class="requirement-grid">
        <section class="card">
          <div class="card-header">
            <div><h2>页面需求与交互验收</h2><p>结课展示可直接按此表逐项点击。</p></div>
            <span class="tag green">可演示</span>
          </div>
          <div class="card-body table-scroll">
            <table class="requirement-table">
              <thead><tr><th>页面</th><th>用户任务</th><th>关键交互</th><th>验收信号</th></tr></thead>
              <tbody>
                ${featureRows
                  .map(
                    (row) =>
                      `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td></tr>`,
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </section>

        <div class="stack">
          <section class="card">
            <div class="card-header"><div><h2>V1 做 / 不做</h2><p>控制范围，保证主链路可完成。</p></div></div>
            <div class="scope-list">
              <div class="scope-item"><span>${icon("check")}</span><div><strong>做：结构化照护计划</strong><p>日期、任务、预算、紧急联系人和异常偏好。</p></div></div>
              <div class="scope-item"><span>${icon("check")}</span><div><strong>做：可解释的方案比较</strong><p>明确适配理由、隐藏费用、替补与就医责任。</p></div></div>
              <div class="scope-item"><span>${icon("check")}</span><div><strong>做：角色化交接与打卡</strong><p>主人和照护者看到不同信息，但共享同一条记录。</p></div></div>
              <div class="scope-item out"><span>${icon("x")}</span><div><strong>不做：通用宠物社区</strong><p>V1 保留新媒体内容入口，不把信息流塞进主任务流程。</p></div></div>
              <div class="scope-item out"><span>${icon("x")}</span><div><strong>不做：自动医疗诊断</strong><p>只提供联系人和送医流程，不替代兽医判断。</p></div></div>
            </div>
          </section>

          <section class="card">
            <div class="card-header"><div><h2>主要风险与兜底</h2><p>答辩时应主动说明，不回避。</p></div></div>
            <div class="risk-list">
              <div class="risk-item"><span>${icon("alert-triangle")}</span><div><strong>照护者失联</strong><p>60 分钟未响应触发备用联系人，并保留完整交接记录。</p></div></div>
              <div class="risk-item"><span>${icon("lock-keyhole")}</span><div><strong>隐私与授权</strong><p>按角色、时间窗口与字段开放，支持撤回和访问记录。</p></div></div>
              <div class="risk-item"><span>${icon("repeat-2")}</span><div><strong>计划临时变化</strong><p>变更后从原计划复制，标记受影响任务，再重新匹配替补。</p></div></div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <section class="requirements-section">
      <div class="section-heading">
        <div><h2>下一步验证指标</h2><p>不是“页面好看”，而是用户能否更安心地完成一次交接。</p></div>
      </div>
      <div class="principles">
        <article class="card principle"><span>${icon("timer")}</span><h3>计划完成时间</h3><p>首次用户能在 5 分钟内生成包含照护约束的计划。</p></article>
        <article class="card principle"><span>${icon("badge-check")}</span><h3>选择理由清晰度</h3><p>完成比较后，用户能准确说出所选方案的两个优势与一个风险。</p></article>
        <article class="card principle"><span>${icon("notebook-pen")}</span><h3>交接资料完整度</h3><p>关键字段完整率达到 85%，照护者无需再单独追问基础信息。</p></article>
        <article class="card principle"><span>${icon("heart-handshake")}</span><h3>异常处理信心</h3><p>模拟一次服务中断后，用户知道谁先联系、如何替补、如何关单。</p></article>
      </div>
    </section>
  `;
}

function formatShortDate(value) {
  const parts = String(value).split("-");
  if (parts.length !== 3) return value;
  return `${Number(parts[1])}月${Number(parts[2])}日`;
}

function updatePlanDateRange() {
  if (!state.plan.startDate || !state.plan.endDate) return;
  const start = new Date(`${state.plan.startDate}T00:00:00`);
  const end = new Date(`${state.plan.endDate}T00:00:00`);
  const days = Math.max(1, Math.round((end - start) / 86400000) + 1);
  state.plan.dateRange = `${formatShortDate(state.plan.startDate)} - ${formatShortDate(state.plan.endDate)}`;
  state.plan.durationDays = days;
}

function currentClock() {
  return new Intl.DateTimeFormat("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

function addCheckinRecord({ type, title, detail, person = "陈知夏", date = "10月30日" }) {
  state.plan.checkins.unshift({
    id: `checkin-${Date.now()}`,
    type,
    title,
    detail,
    person,
    time: currentClock(),
    date,
  });
  state.plan.checkins = state.plan.checkins.slice(0, 30);
  saveState();
}

function markTaskComplete(dayId, taskId) {
  state.plan.doneTasks[`${dayId}-${taskId}`] = true;
}

function toggleTask(dayId, taskId) {
  const key = `${dayId}-${taskId}`;
  state.plan.doneTasks[key] = !state.plan.doneTasks[key];
  saveState();
  renderDashboard();
  refreshIcons();
}

function quickRecord(type, overrides = {}) {
  const records = {
    meal: {
      type: "meal",
      title: "进食记录已补充",
      detail: "湿粮 80g，食欲正常，饮水未观察到异常。",
      taskId: "breakfast",
      toast: "已记录进食状态，并同步到交接时间线。",
    },
    medicine: {
      type: "medicine",
      title: "用药记录已补充",
      detail: "关节营养片 1 粒，随餐完成，无不适反应。",
      taskId: "medicine",
      toast: "已记录用药，照护者和主人均可查看。",
    },
    water: {
      type: "water",
      title: "饮水记录已补充",
      detail: "已完成换水，饮水量正常。",
      taskId: "breakfast",
      toast: "已记录饮水状态。",
    },
    handover: {
      type: "handover",
      title: "现场交接已完成",
      detail: "钥匙、口粮、药品与清洁用品均已确认。",
      taskId: "handover",
      toast: "现场交接已完成，记录已留档。",
    },
    checkin: {
      type: "checkin",
      title: "首次状态回报已完成",
      detail: "精神稳定，进食、饮水与排便均正常。",
      taskId: "first-checkin",
      toast: "首次状态回报已同步给主人。",
    },
    photo: {
      type: "photo",
      title: "状态照片已补充",
      detail: "糯米精神状态稳定，正在休息。",
      taskId: null,
      toast: "状态照片已同步给主人。",
    },
  };
  const record = { ...records[type], ...overrides };
  if (!record) return;
  if (record.taskId) markTaskComplete("D1", record.taskId);
  addCheckinRecord(record);
  if (overrides.render !== false) {
    renderCurrentView();
  }
  showToast(record.toast || "记录已保存。");
}

function showToast(message, iconName = "check-circle-2") {
  const region = document.getElementById("toastRegion");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `${icon(iconName)}<span>${escapeHtml(message)}</span>`;
  region.appendChild(toast);
  refreshIcons();
  window.setTimeout(() => {
    toast.classList.add("leaving");
    window.setTimeout(() => toast.remove(), 190);
  }, 3200);
}

function showModal({ title, subtitle = "", body = "", footer = "", wide = false }) {
  lastFocusedElement = document.activeElement;
  const root = document.getElementById("modalRoot");
  root.innerHTML = `
    <div class="modal-backdrop" data-modal-backdrop>
      <section class="modal ${wide ? "modal-wide" : ""}" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div class="modal-head">
          <div>
            <h2 id="modalTitle">${escapeHtml(title)}</h2>
            ${subtitle ? `<p>${escapeHtml(subtitle)}</p>` : ""}
          </div>
          <button class="modal-close" data-modal-close aria-label="关闭">${icon("x")}</button>
        </div>
        <div class="modal-body">${body}</div>
        ${footer ? `<div class="modal-actions">${footer}</div>` : ""}
      </section>
    </div>
  `;
  document.body.style.overflow = "hidden";
  refreshIcons();
  window.setTimeout(() => {
    const focusTarget = root.querySelector("input, textarea, button:not([data-modal-close])");
    (focusTarget || root.querySelector("[data-modal-close]"))?.focus();
  }, 20);
}

function closeModal() {
  document.getElementById("modalRoot").innerHTML = "";
  document.body.style.overflow = "";
  lastFocusedElement?.focus?.();
  lastFocusedElement = null;
}

function openHandoffCard() {
  const accessCode = "NOMI-1105-8291";
  showModal({
    title: "糯米的照护交接卡",
    subtitle: "照护者打开后可快速确认重点，不需要翻阅完整档案。",
    wide: true,
    body: `
      <div class="handoff-card-preview">
        <div class="handoff-card-cover">
          <img src="${escapeHtml(state.profile.photo)}" alt="${escapeHtml(state.profile.name)}的照片" />
          <div class="handoff-card-name">
            <div><h3>${escapeHtml(state.profile.name)}</h3><span>${escapeHtml(state.profile.breed)} · ${escapeHtml(state.profile.age)} · ${escapeHtml(state.profile.weight)}</span></div>
            <span class="tag green">${icon("shield-check")}照护中</span>
          </div>
        </div>
        <div class="handoff-card-content">
          <div class="handoff-card-status">
            <div><strong>10.30 - 11.05</strong><span>照护周期</span></div>
            <div><strong>每日 2 次</strong><span>上门节奏</span></div>
            <div><strong>陈知夏</strong><span>主照护者</span></div>
          </div>
          <div class="info-table-mini">
            <div><span>饮食</span><strong>每日两餐，湿粮 80g + 干粮 45g</strong></div>
            <div><span>用药</span><strong>12:00 关节营养片 1 粒，随餐</strong></div>
            <div><span>行为重点</span><strong>怕雷声与大型犬，散步使用短牵引</strong></div>
            <div><span>紧急联系人</span><strong>周岚 · ${escapeHtml(state.profile.emergencyPhone)}</strong></div>
            <div><span>指定医院</span><strong>${escapeHtml(state.profile.vet)}</strong></div>
          </div>
          <div class="code-strip">
            <div><span>交接访问码 · 仅限服务时段</span><strong>${accessCode}</strong></div>
            <span class="tag green">${icon("lock-keyhole")}受控访问</span>
          </div>
        </div>
      </div>
    `,
    footer: `
      <button class="button" data-modal-close>关闭</button>
      <button class="button button-primary" data-action="copy-code" data-code="${accessCode}">${icon("copy")}复制交接码</button>
    `,
  });
}

function openPrepModal() {
  const prepItems = [
    ["food", "分装 7 天口粮与零食", true],
    ["medicine", "准备 7 天药品并标注剂量", true],
    ["key", "确认钥匙与门禁交接方式", false],
    ["backup", "确认备用照护人可用时间", false],
    ["return", "补充返程时间与关单安排", false],
  ];
  const body = `
    <div class="check-list">
      ${prepItems
        .map(
          ([id, label, defaultDone]) => {
            const done = state.plan.completedPrep.includes(id) || (defaultDone && state.plan.completedPrep.includes(id));
            return `
              <button class="check-item ${done ? "" : "warning"}" data-action="toggle-prep" data-prep-id="${id}" style="width:100%;border:0;background:transparent;text-align:left">
                <span>${icon(done ? "check" : "clock-3")}</span>
                <div><strong>${label}</strong><p>${done ? "已完成，照护者可见" : "尚未确认，建议出发前 24 小时完成"}</p></div>
              </button>
            `;
          },
        )
        .join("")}
    </div>
  `;
  showModal({
    title: "出发前准备清单",
    subtitle: `已完成 ${state.plan.completedPrep.length}/5 项。点击项目即可切换状态。`,
    body,
    footer: `<button class="button button-primary" data-modal-close>完成</button>`,
  });
}

function openRiskModal() {
  showModal({
    title: "风险与费用明细",
    subtitle: "上门照护 · 7 天预估 ¥1,260",
    body: `
      <div class="review-list">
        <div class="review-row"><span>基础服务</span><strong>每日 2 次，共 14 次 · ¥980</strong></div>
        <div class="review-row"><span>大型犬附加</span><strong>¥140</strong></div>
        <div class="review-row"><span>每日照片与文字回报</span><strong>¥80</strong></div>
        <div class="review-row"><span>备用照护协调</span><strong>¥60</strong></div>
        <div class="review-row"><span>可能新增</span><strong>异常就医陪同 ¥120 / 次，需另行确认</strong></div>
      </div>
      <div style="height:14px"></div>
      <div class="alert-box">${icon("alert-triangle")}<span><strong>主要风险：</strong>上门服务存在 60-90 分钟响应窗口。若照护者失联，备用照护人将按交接卡优先接手；紧急就医需主人提前授权。</span></div>
    `,
    footer: `<button class="button button-primary" data-modal-close>我知道了</button>`,
  });
}

function openNoteModal(mode = "note") {
  const isIncident = mode === "incident";
  showModal({
    title: isIncident ? "上报照护异常" : "添加交接备注",
    subtitle: isIncident
      ? "异常会同时通知主人与备用联系人，并进入不可删除的处理记录。"
      : "备注会进入交接时间线，照护者可在服务时段查看。",
    body: `
      <form data-modal-form="${isIncident ? "incident" : "note"}">
        ${
          isIncident
            ? `
              <div class="field">
                <label for="incidentType">异常类型</label>
                <select id="incidentType" name="incidentType" required>
                  <option value="">请选择</option>
                  <option value="health">健康异常</option>
                  <option value="behavior">行为异常</option>
                  <option value="service">服务中断</option>
                  <option value="access">门禁 / 访问问题</option>
                </select>
              </div>
              <div style="height:12px"></div>
            `
            : ""
        }
        <label class="field">
          <span>${isIncident ? "发生了什么" : "交接备注"}</span>
          <textarea name="content" required minlength="4" placeholder="${isIncident ? "请描述当前状态、已采取的措施和需要谁响应。" : "例如：零食盒在厨房第二层，外出前先给一小块。"}"></textarea>
        </label>
        <div class="alert-box" style="margin-top:14px">
          ${icon(isIncident ? "siren" : "shield-check")}
          <span>${isIncident ? "若宠物存在呼吸异常、持续呕吐、外伤或意识异常，请先联系指定医院，再补充记录。" : "请不要在备注中填写银行卡、身份证等与照护无关的敏感信息。"}</span>
        </div>
      </form>
    `,
    footer: `
      <button class="button" data-modal-close>取消</button>
      <button class="button ${isIncident ? "button-danger" : "button-primary"}" data-action="submit-modal-form" data-form-type="${isIncident ? "incident" : "note"}">
        ${icon(isIncident ? "siren" : "send")}${isIncident ? "提交异常" : "添加备注"}
      </button>
    `,
  });
}

function submitModalForm(type) {
  const form = document.querySelector(`[data-modal-form="${type}"]`);
  if (!form || !form.reportValidity()) return;
  const formData = new FormData(form);
  const content = String(formData.get("content") || "").trim();
  if (type === "incident") {
    const incidentLabels = {
      health: "健康异常",
      behavior: "行为异常",
      service: "服务中断",
      access: "门禁 / 访问问题",
    };
    const incident = incidentLabels[formData.get("incidentType")] || "照护异常";
    addCheckinRecord({
      type: "incident",
      title: `异常上报 · ${incident}`,
      detail: `${content}（已通知主人与备用联系人）`,
      person: "陈知夏",
    });
    closeModal();
    renderCurrentView();
    showToast("异常已上报，主人与备用联系人已收到提醒。", "siren");
    return;
  }
  addCheckinRecord({
    type: "note",
    title: "主人添加了交接备注",
    detail: content,
    person: "林然",
  });
  closeModal();
  renderCurrentView();
  showToast("交接备注已同步给照护者。", "message-square");
}

function openManageAccessModal() {
  showModal({
    title: "交接权限",
    subtitle: "只开放完成照护所必需的信息。",
    body: `
      <div class="scope-list">
        <div class="scope-item"><span>${icon("check")}</span><div><strong>照护资料与紧急联系人</strong><p>服务时段内可查看，关单后自动关闭。</p></div></div>
        <div class="scope-item"><span>${icon("check")}</span><div><strong>任务打卡与状态照片</strong><p>照护者可新增记录，主人可查看，不可删除异常记录。</p></div></div>
        <div class="scope-item out"><span>${icon("x")}</span><div><strong>费用与完整行程</strong><p>不对照护者开放。</p></div></div>
        <div class="scope-item out"><span>${icon("x")}</span><div><strong>账户与历史订单</strong><p>不对照护者开放。</p></div></div>
      </div>
    `,
    footer: `<button class="button button-primary" data-modal-close>保持当前权限</button>`,
  });
}

function openContactModal() {
  showModal({
    title: "联系陈知夏",
    subtitle: "服务期间的中位响应时间为 12 分钟。",
    body: `
      <div class="sitter-card-main" style="padding:0 0 15px">
        <span class="sitter-avatar">陈</span>
        <div class="sitter-copy"><strong>陈知夏</strong><span>正在服务中 · 今日 08:00 - 20:00</span><span class="tag green">${icon("shield-check")}已核验照护者</span></div>
      </div>
      <div class="check-list">
        <div class="check-item"><span>${icon("message-circle")}</span><div><strong>计划内沟通</strong><p>关于饮食、用药、任务调整，建议在交接时间线留痕。</p></div></div>
        <div class="check-item warning"><span>${icon("siren")}</span><div><strong>紧急情况</strong><p>优先拨打紧急联系人电话；如无法联系，直接按指定医院路线处理。</p></div></div>
      </div>
    `,
    footer: `
      <button class="button" data-modal-close>关闭</button>
      <button class="button button-primary" data-action="mock-contact">${icon("message-circle")}发送消息</button>
    `,
  });
}

function copyText(text) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    return;
  }
  fallbackCopy(text);
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

const SEARCH_ITEMS = [
  { title: "糯米 · 国庆出差照护计划", subtitle: "照护工作台 · 10月30日开始", icon: "layout-dashboard", view: "dashboard" },
  { title: "新建离宠照护计划", subtitle: "从日期与照护约束开始", icon: "calendar-plus", view: "create" },
  { title: "比较上门照护与寄养方案", subtitle: "3 个可执行方案", icon: "git-compare-arrows", view: "compare" },
  { title: "糯米 · 宠物数字档案", subtitle: "饮食、用药、性格与紧急联络", icon: "notebook-tabs", view: "profile" },
  { title: "交接协作与照护者视图", subtitle: "任务、打卡与异常记录", icon: "send", view: "handoff" },
  { title: "V1 方案与交互验收", subtitle: "产品判断、页面需求与展示口径", icon: "clipboard-check", view: "requirements" },
];

function openSearchModal() {
  showModal({
    title: "搜索",
    subtitle: "搜索计划、宠物、照护者或产品页面。",
    body: `
      <div class="search-input-wrap" style="margin:-20px -20px 7px">
        ${icon("search")}
        <input id="globalSearchInput" type="search" placeholder="输入关键词，例如“交接”“用药”“方案”" autocomplete="off" />
      </div>
      <div class="search-results" id="searchResults">${renderSearchResults("")}</div>
    `,
    footer: `<button class="button" data-modal-close>关闭</button>`,
  });
}

function renderSearchResults(query) {
  const normalized = query.trim().toLowerCase();
  const matches = SEARCH_ITEMS.filter(
    (item) =>
      !normalized ||
      item.title.toLowerCase().includes(normalized) ||
      item.subtitle.toLowerCase().includes(normalized),
  );
  if (!matches.length) return '<div class="search-empty">没有匹配结果，试试“交接”或“方案”。</div>';
  return matches
    .map(
      (item) => `
        <button class="search-result" data-search-view="${item.view}">
          <span class="search-result-icon">${icon(item.icon)}</span>
          <span><strong>${item.title}</strong><span>${item.subtitle}</span></span>
        </button>
      `,
    )
    .join("");
}

function openNotificationsModal() {
  showModal({
    title: "通知",
    subtitle: "与你当前照护计划相关的更新。",
    body: `
      <div class="activity-list" style="padding:0">
        <div class="activity-item"><span class="activity-icon">${icon("shield-check")}</span><div class="activity-copy"><strong>陈知夏已确认用药说明</strong><span>10月28日 09:42 · 交接资料</span></div></div>
        <div class="activity-item"><span class="activity-icon">${icon("clock-3")}</span><div class="activity-copy"><strong>还有 2 项出发准备未完成</strong><span>10月28日 08:30 · 照护计划</span></div></div>
        <div class="activity-item"><span class="activity-icon">${icon("message-circle")}</span><div class="activity-copy"><strong>备用照护人已回复可接替时间</strong><span>10月27日 20:16 · 协作记录</span></div></div>
      </div>
    `,
    footer: `<button class="button button-primary" data-modal-close>知道了</button>`,
  });
}

function openHelpModal() {
  showModal({
    title: "照护支持",
    subtitle: "先保证宠物安全，再处理信息与费用。",
    body: `
      <div class="check-list">
        <div class="check-item warning"><span>${icon("siren")}</span><div><strong>健康紧急情况</strong><p>呼吸异常、持续呕吐、外伤、意识异常：先前往指定医院，同时联系紧急联系人和平台支持。</p></div></div>
        <div class="check-item"><span>${icon("user-round-x")}</span><div><strong>照护者失联</strong><p>60 分钟未响应时触发备用联系人，并保留全部交接与打卡记录。</p></div></div>
        <div class="check-item"><span>${icon("calendar-x-2")}</span><div><strong>行程变化</strong><p>从原计划复制变更，标记受影响任务，再重新匹配照护者。</p></div></div>
      </div>
    `,
    footer: `<button class="button button-primary" data-modal-close>关闭</button>`,
  });
}

function openSettingsModal() {
  showModal({
    title: "演示设置",
    subtitle: "当前页面状态会保存在本地浏览器。",
    body: `
      <div class="check-list">
        <div class="check-item"><span>${icon("database")}</span><div><strong>本地演示数据</strong><p>打卡、方案选择、档案与准备清单会保留，刷新页面不会丢失。</p></div></div>
        <div class="check-item warning"><span>${icon("rotate-ccw")}</span><div><strong>重新开始演示</strong><p>清除本地修改并恢复 V1 初始数据，便于结课现场演示。</p></div></div>
      </div>
    `,
    footer: `
      <button class="button" data-modal-close>取消</button>
      <button class="button button-danger" data-action="reset-demo">${icon("rotate-ccw")}重置演示数据</button>
    `,
  });
}

function handleClick(event) {
  const viewTrigger = event.target.closest("[data-view]");
  if (viewTrigger) {
    if (document.getElementById("modalRoot").hasChildNodes()) closeModal();
    setView(viewTrigger.dataset.view);
    return;
  }

  const stepTrigger = event.target.closest("[data-step-go]");
  if (stepTrigger) {
    wizardStep = Number(stepTrigger.dataset.stepGo);
    renderCreatePlan();
    refreshIcons();
    return;
  }

  const modalClose = event.target.closest("[data-modal-close]");
  if (modalClose || event.target.matches("[data-modal-backdrop]")) {
    closeModal();
    return;
  }

  const dayTrigger = event.target.closest("[data-day]");
  if (dayTrigger) {
    state.selectedDay = dayTrigger.dataset.day;
    saveState();
    renderDashboard();
    refreshIcons();
    return;
  }

  const actionTrigger = event.target.closest("[data-action]");
  const quickTrigger = event.target.closest("[data-quick-action]");
  const sitterCheckin = event.target.closest("[data-sitter-checkin]");
  const searchResult = event.target.closest("[data-search-view]");

  if (searchResult) {
    closeModal();
    setView(searchResult.dataset.searchView);
    return;
  }

  if (quickTrigger) {
    const type = quickTrigger.dataset.quickAction;
    if (type === "note") {
      openNoteModal("note");
    } else {
      quickRecord(type);
    }
    return;
  }

  if (sitterCheckin) {
    const type = sitterCheckin.dataset.sitterCheckin;
    quickRecord(type === "handover" ? "handover" : type);
    return;
  }

  if (!actionTrigger) return;
  const action = actionTrigger.dataset.action;

  if (action === "toggle-task") {
    toggleTask(actionTrigger.dataset.dayId, actionTrigger.dataset.taskId);
    return;
  }

  if (action === "wizard-next") {
    wizardStep = Math.min(4, wizardStep + 1);
    renderCreatePlan();
    refreshIcons();
    return;
  }

  if (action === "wizard-back") {
    wizardStep = Math.max(1, wizardStep - 1);
    renderCreatePlan();
    refreshIcons();
    return;
  }

  if (action === "save-draft") {
    saveState();
    showToast("计划草稿已保存，可稍后继续。", "save");
    return;
  }

  if (action === "create-plan") {
    updatePlanDateRange();
    const days = state.plan.durationDays || 7;
    state.plan.title = `${state.plan.reason} · ${days} 天照护`;
    saveState();
    wizardStep = 1;
    setView("dashboard");
    showToast("照护计划已生成，方案比较条件与交接草稿已同步。", "sparkles");
    return;
  }

  if (action === "select-service") {
    state.plan.service = actionTrigger.dataset.service;
    saveState();
    renderCompare();
    refreshIcons();
    const service = getSelectedService();
    showToast(`已将“${service.name}”设为当前执行方案。`);
    return;
  }

  if (action === "toggle-profile-edit") {
    if (!profileEditing) {
      profileEditing = true;
      renderProfile();
      refreshIcons();
      showToast("档案已进入编辑模式，修改后请保存。", "pencil-line");
      return;
    }
    document.querySelectorAll("[data-profile-field]").forEach((input) => {
      state.profile[input.dataset.profileField] = input.value.trim();
    });
    profileEditing = false;
    saveState();
    renderProfile();
    refreshIcons();
    showToast("宠物档案已保存，交接卡会同步更新。");
    return;
  }

  if (action === "upload-profile-photo") {
    document.getElementById("profilePhotoInput")?.click();
    return;
  }

  if (action === "open-handoff-card") {
    openHandoffCard();
    return;
  }

  if (action === "handoff-mode") {
    state.handoffMode = actionTrigger.dataset.mode;
    saveState();
    renderHandoff();
    refreshIcons();
    return;
  }

  if (action === "add-handoff-note") {
    openNoteModal("note");
    return;
  }

  if (action === "report-issue") {
    openNoteModal("incident");
    return;
  }

  if (action === "contact-sitter") {
    openContactModal();
    return;
  }

  if (action === "manage-access") {
    openManageAccessModal();
    return;
  }

  if (action === "open-risk-check") {
    openRiskModal();
    return;
  }

  if (action === "open-prep") {
    openPrepModal();
    return;
  }

  if (action === "toggle-prep") {
    const id = actionTrigger.dataset.prepId;
    if (state.plan.completedPrep.includes(id)) {
      state.plan.completedPrep = state.plan.completedPrep.filter((item) => item !== id);
    } else {
      state.plan.completedPrep.push(id);
    }
    saveState();
    openPrepModal();
    showToast("准备清单已更新。");
    return;
  }

  if (action === "confirm-prep") {
    if (!state.plan.completedPrep.includes("key")) state.plan.completedPrep.push("key");
    saveState();
    renderHandoff();
    refreshIcons();
    showToast("备用钥匙交接已确认，照护者已收到提醒。");
    return;
  }

  if (action === "copy-code") {
    copyText(actionTrigger.dataset.code);
    showToast("交接码已复制，请在服务时段内分享。", "copy");
    return;
  }

  if (action === "submit-modal-form") {
    submitModalForm(actionTrigger.dataset.formType);
    return;
  }

  if (action === "mock-contact") {
    closeModal();
    addCheckinRecord({
      type: "note",
      title: "主人发起了一次计划内沟通",
      detail: "关于明日散步路线与雷雨天气备选安排，等待照护者回复。",
      person: "林然",
    });
    renderCurrentView();
    showToast("消息已发送，并进入交接时间线。", "message-circle");
    return;
  }

  if (action === "notifications") {
    openNotificationsModal();
    return;
  }

  if (action === "settings") {
    openSettingsModal();
    return;
  }

  if (action === "reset-demo") {
    state = cloneDefaultState();
    saveState();
    closeModal();
    wizardStep = 1;
    profileEditing = false;
    setView("dashboard");
    showToast("演示数据已恢复到 V1 初始状态。", "rotate-ccw");
  }
}

function handleChange(event) {
  const target = event.target;
  if (target.matches("#profilePhotoInput")) {
    const file = target.files?.[0];
    if (file) updateProfilePhoto(file);
    target.value = "";
    return;
  }

  if (target.matches("[data-plan-field]")) {
    const field = target.dataset.planField;
    const value = target.type === "number" ? Number(target.value) : target.value;
    state.plan[field] = value;
    if (field === "startDate" || field === "endDate") updatePlanDateRange();
    saveState();
    if (currentView === "create") {
      renderCreatePlan();
      refreshIcons();
    }
    return;
  }

  if (target.matches("[data-care-task]")) {
    const task = target.dataset.careTask;
    if (target.checked && !state.plan.careTasks.includes(task)) {
      state.plan.careTasks.push(task);
    } else if (!target.checked) {
      state.plan.careTasks = state.plan.careTasks.filter((item) => item !== task);
    }
    saveState();
    if (currentView === "create") {
      renderCreatePlan();
      refreshIcons();
    }
    return;
  }

  if (target.id === "compareSort") {
    compareSort = target.value;
    renderCompare();
    refreshIcons();
  }
}

function compressImage(file, maxSide = 1000, quality = 0.8) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);
    image.onload = () => {
      const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
      const width = Math.max(1, Math.round(image.naturalWidth * scale));
      const height = Math.max(1, Math.round(image.naturalHeight * scale));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, width, height);
      context.drawImage(image, 0, 0, width, height);
      URL.revokeObjectURL(objectUrl);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("无法读取这张照片。"));
    };
    image.src = objectUrl;
  });
}

async function updateProfilePhoto(file) {
  if (!file.type.startsWith("image/")) {
    showToast("请选择 JPG、PNG 或 WebP 图片。", "circle-alert");
    return;
  }
  if (file.size > 12 * 1024 * 1024) {
    showToast("照片超过 12MB，请换一张更小的图片。", "circle-alert");
    return;
  }

  try {
    const photo = await compressImage(file);
    state.profile.photo = photo;
    const saved = saveState();
    renderProfile();
    refreshIcons();
    showToast(
      saved
        ? "宠物照片已更新，工作台与交接卡会同步使用。"
        : "照片已更新，但浏览器存储空间不足，刷新后可能恢复默认照片。",
      saved ? "image-check" : "circle-alert",
    );
  } catch {
    showToast("这张照片无法读取，请尝试 JPG、PNG 或 WebP 格式。", "circle-alert");
  }
}

function handleInput(event) {
  if (event.target.id === "globalSearchInput") {
    document.getElementById("searchResults").innerHTML = renderSearchResults(event.target.value);
    refreshIcons();
  }
}

function handleKeydown(event) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    if (document.getElementById("modalRoot").hasChildNodes()) closeModal();
    openSearchModal();
    return;
  }
  if (event.key === "Escape" && document.getElementById("modalRoot").hasChildNodes()) {
    closeModal();
    return;
  }
  if (event.key !== "Tab" || !document.getElementById("modalRoot").hasChildNodes()) return;
  const modal = document.querySelector(".modal");
  const focusable = [...modal.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')];
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

document.addEventListener("click", handleClick);
document.addEventListener("change", handleChange);
document.addEventListener("input", handleInput);
document.addEventListener("keydown", handleKeydown);

document.getElementById("searchButton")?.addEventListener("click", openSearchModal);
document.getElementById("helpButton")?.addEventListener("click", openHelpModal);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".step-button").forEach((button) => {
    button.addEventListener("click", () => {
      wizardStep = Number(button.dataset.stepGo);
    });
  });
  updatePlanDateRange();
  saveState();
  renderCurrentView();
});
