# 宠物中转站 iOS 界面组件规范

## 1. 产品类型与设计方向

“宠物中转站”是**新媒体服务型产品**：

- 内容侧：帮助用户理解离宠照护、用药、行为安抚与服务风险。
- 服务侧：完成计划、比较、档案、交接与异常处理。

V1 以服务履约为主，内容作为辅助。因此 iOS 版本应采用原生导航、分组表单、列表、系统照片选择器、分段控件和底部弹窗，不直接照搬网页的大卡片与侧边栏。

设计基准：

- iPhone 优先，iPad 自适应分栏。
- 组件类型以 iOS Human Interface Guidelines 为基准。
- 同时列出 UIKit 与 SwiftUI 对应类型，方便作业说明和后续开发。
- 重要操作遵循 iOS 的返回、模态、选择、分享和权限习惯。

## 2. 全局界面组件

| 界面组件 | 产品用途 | iOS 系统类型 | UIKit | SwiftUI |
| --- | --- | --- | --- | --- |
| 一级导航 | 切换工作台、比较、档案、交接 | Tab Bar | `UITabBarController` | `TabView` |
| 页面导航 | 进入详情与编辑页 | Navigation Stack | `UINavigationController` | `NavigationStack` |
| 页面标题 | 计划名、页面名 | Large Title | `UINavigationBar` | `.navigationTitle` |
| 顶部操作 | 编辑、保存、分享、更多 | Navigation Bar Button | `UIBarButtonItem` | `.toolbar` |
| iPad 导航 | 工作台与页面列表 | Split View | `UISplitViewController` | `NavigationSplitView` |
| 二级页面 | 风险详情、档案编辑 | Push Navigation | `UINavigationController` | `NavigationLink` |
| 底部弹窗 | 快速记录、异常上报 | Sheet | `UISheetPresentationController` | `.sheet` |
| 半屏弹窗 | 短表单、权限说明 | Medium Detent | `UISheetPresentationController` | `.presentationDetents([.medium])` |
| 确认操作 | 删除、重置、紧急提交 | Alert | `UIAlertController` | `.alert` |
| 排序与更多 | 排序、上下文操作 | Menu | `UIMenu` | `Menu` |
| 搜索 | 查计划、宠物、页面 | Search Controller | `UISearchController` | `.searchable` |

### 导航规则

- iPhone 一级入口不超过 5 个，使用底部 Tab Bar。
- “V1 方案与验收”“iOS 组件规范”属于说明页，不进入一级 Tab Bar。
- iPad 采用 `NavigationSplitView`，不把网页侧边栏简单缩小。
- 复杂表单使用连续导航页面，不使用多层弹窗堆叠。

## 3. 照护工作台

| 界面组件 | 设计内容 | iOS 系统类型 | UIKit / SwiftUI |
| --- | --- | --- | --- |
| 标题区 | 当前计划名称 | Large Title | `UINavigationBar` / `.navigationTitle` |
| 计划摘要 | 日期、原因、照护者 | Grouped Content | `UITableViewCell` / `List` |
| 准备提醒 | 已完成项与待办 | Composite Banner | `UIStackView + UILabel + UIButton` / `HStack` |
| 日期选择 | D1-D7 横向切换 | Selectable Collection | `UICollectionView` / `ScrollView + Button` |
| 每日任务 | 喂食、用药、散步、回报 | Inset Grouped List | `UITableView` / `List` |
| 任务完成 | 完成 / 撤销完成 | Accessory Button | `UIButton` / `Button` |
| 当日进度 | 完成百分比 | Gauge / Progress | `Gauge`、`UIProgressView` / `ProgressView` |
| 宠物概览 | 照片、名字、健康标签 | Collection Cell | `UICollectionViewCell` / `Section + Image` |
| 快速记录 | 进食、用药、照片、备注 | Icon Button Group | `UIButton.Configuration` / `Button` |
| 最新反馈 | 打卡与备注 | List Feed | `UITableView` / `List` |
| 已选方案 | 照护者、节奏、价格 | Grouped Section | `UIListContentConfiguration` / `Section` |

iOS 没有网页式提示条；准备提醒应作为页内组合视图，不能使用系统通知横幅代替。

## 4. 新建照护计划

### 页面结构

采用 `NavigationStack` 连续推入四个步骤，每页完成一个判断：

`日期与宠物 → 照护约束 → 方案偏好 → 确认生成`

| 界面组件 | 产品信息 | iOS 系统类型 | UIKit / SwiftUI |
| --- | --- | --- | --- |
| 步骤进度 | 1/4 至 4/4 | Determinate Progress | `UIProgressView` / `ProgressView` |
| 离开日期 | 开始日期 | Compact Date Picker | `UIDatePicker` / `DatePicker` |
| 返程日期 | 结束日期 | Compact Date Picker | `UIDatePicker` / `DatePicker` |
| 离开原因 | 出差、搬家、住院等单选 | Selection List / Menu | `UIPickerView`、`UIMenu` / `Picker` |
| 宠物选择 | 已建档宠物 | Disclosure Row | `UITableViewCell` / `Button` |
| 照护任务 | 喂食、用药、散步等多选 | Multi-selection List | `UITableView` / `List(selection:)` |
| 预算 | 金额输入 | Text Field | `UITextField` / `TextField` |
| 紧急联系人 | 姓名与电话 | Text Fields | `UITextField` / `TextField` |
| 补充说明 | 性格和特殊要求 | Multiline Input | `UITextView` / `TextEditor` |
| 方案偏好 | 三种照护方式单选 | Single-selection List | `UITableView` / `List(selection:)` |
| 匹配条件 | 用药经验、大型犬、照片回报 | Selectable Rows | `UIButton` / `Button` |
| 计划检查 | 关键信息汇总 | Grouped Form | `UITableView` / `Form` |
| 下一步 | 提交当前步骤 | Prominent Button | `UIButton.Configuration` / `.borderedProminent` |

### 输入组件规则

- iOS 没有网页式通用 Chip。标签选择用 `Button`、选择行或 `Menu` 组合。
- iOS 没有系统 Radio Button。少量选项使用 `UISegmentedControl`，较多选项使用单选列表。
- 任务多选使用勾选行，不把一排开关伪装成任务列表。
- 金额使用数字键盘，电话使用电话键盘，日期必须使用 `UIDatePicker`。

## 5. 方案比较

| 界面组件 | 设计内容 | iOS 系统类型 | UIKit / SwiftUI |
| --- | --- | --- | --- |
| 排序 | 推荐、适配度、价格 | Menu | `UIMenu` / `Menu` |
| 筛选 | 预算、服务类型、保障 | Sheet Form | `UISheetPresentationController + UITableView` / `.sheet + Form` |
| 方案卡片 | 上门、机构、家庭寄养 | Horizontal Collection | `UICollectionView` / `LazyHStack` |
| 方案选择 | 当前执行方案 | Selectable Button | `UIButton` / `Button` |
| 适配指标 | 适配、灵活、保障 | Progress Bars | `UIProgressView` / `ProgressView` |
| 对比矩阵 | 多方案逐项比较 | Data Collection | `UICollectionViewCompositionalLayout` / `Grid` |
| 推荐说明 | 为什么适合当前宠物 | Text Section | `UILabel` / `Text` |
| 风险详情 | 费用、替补、就医 | Detail Sheet | `UISheetPresentationController` / `.sheet` |
| 确认方案 | 更新执行方案 | Prominent Button | `UIButton` / `Button` |

## 6. 宠物数字档案

| 界面组件 | 设计内容 | iOS 系统类型 | UIKit / SwiftUI |
| --- | --- | --- | --- |
| 宠物照片 | 主视觉与头像 | Image View | `UIImageView` / `Image` |
| 更换照片 | 从相册选择 | Photo Picker | `PHPickerViewController` / `PhotosPicker` |
| 拍照 | 拍摄新照片 | Camera Picker | `UIImagePickerController` / `PhotosPicker` |
| 名字 | 可编辑宠物名字 | Text Field | `UITextField` / `TextField` |
| 基础资料 | 品种、年龄、体重 | Form Rows | `UITableViewCell` / `Form + TextField` |
| 健康关注 | 健康与运动限制 | Text Editor | `UITextView` / `TextEditor` |
| 饮食安排 | 餐食与饮水 | Text Editor | `UITextView` / `TextEditor` |
| 用药信息 | 时间、剂量、注意事项 | Text Editor | `UITextView` / `TextEditor` |
| 行为标签 | 怕雷声、怕大型犬 | Capsule Labels | `UILabel + Capsule` / `Label` |
| 紧急联络 | 联系人、医院 | Contact Row / Link | `UIButton`、`Link` / `Link` |
| 档案完整度 | 交接准备程度 | Gauge | `Gauge` / 自定义环形进度 |
| 编辑模式 | 修改全部资料 | Edit Form | `UITableViewController` / `Form` |
| 交接卡 | 分享给照护者 | Share Sheet | `UIActivityViewController` / `ShareLink` |

照片上传优先使用系统照片选择器，避免申请完整相册访问权限。

## 7. 交接协作

| 界面组件 | 设计内容 | iOS 系统类型 | UIKit / SwiftUI |
| --- | --- | --- | --- |
| 角色切换 | 主人 / 照护者 | Segmented Control | `UISegmentedControl` / `Picker(.segmented)` |
| 权限说明 | 可见字段和时间窗口 | Informational Banner | `UIStackView` / `HStack` |
| 交接进度 | 确认、预览、现场交接、关单 | Step Collection | `UICollectionView` / `HStack` |
| 协作时间线 | 打卡、备注、照片、异常 | List Feed | `UITableView` / `List` |
| 照护者卡片 | 资质、服务次数、评分 | Grouped Section | `UITableViewCell` / `Section` |
| 联系照护者 | 计划内沟通 | Button + System URL | `UIButton`、`MFMessageComposeViewController` / `Link` |
| 任务打卡 | 进食、饮水、用药、照片 | Action Button | `UIButton` / `Button` |
| 状态照片 | 今日照护照片 | Photo Picker + Image View | `PHPickerViewController` / `PhotosPicker` |
| 交接码 | 受控访问码 | Text + Copy Button | `UILabel`、`UIButton` / `Text` |
| 交接 QR | 扫码打开交接卡 | QR Image | Core Image `CIQRCodeGenerator` / `Image` |
| 分享交接卡 | 发送给照护者 | Activity Sheet | `UIActivityViewController` / `ShareLink` |
| 异常上报 | 健康、行为、服务中断 | Form Sheet | `UISheetPresentationController + Form` / `.sheet` |
| 权限管理 | 字段开放与撤回 | Settings List | `UITableView` / `List` |

异常记录进入不可删除的处理时间线，普通备注可以使用滑动操作编辑或删除。

## 8. 反馈与系统状态

| 状态 | 产品场景 | iOS 系统类型 | UIKit / SwiftUI |
| --- | --- | --- | --- |
| 成功提示 | 保存档案、复制交接码 | Inline Status + Haptic | `UINotificationFeedbackGenerator` / `Label` |
| 严重错误 | 上传失败、异常提交失败 | Alert | `UIAlertController` / `.alert` |
| 加载中 | 方案匹配、照片上传 | Indeterminate Progress | `UIActivityIndicatorView` / `ProgressView()` |
| 确定进度 | 档案完整度、任务进度 | Determinate Progress | `UIProgressView` / `ProgressView(value:)` |
| 空状态 | 暂无照护记录 | Content Unavailable | `UIContentUnavailableConfiguration` / `ContentUnavailableView` |
| 下拉刷新 | 刷新远程时间线 | Refresh Control | `UIRefreshControl` / `.refreshable` |
| 滑动操作 | 编辑普通备注 | Swipe Actions | `UISwipeActionsConfiguration` / `.swipeActions` |
| 长按菜单 | 更多操作 | Context Menu | `UIContextMenuInteraction` / `.contextMenu` |
| 提醒通知 | 用药、交接、异常 | Local Notification | `UNUserNotificationCenter` |
| 实时照护 | 进行中任务与下一任务 | Live Activity | ActivityKit |

iOS 没有系统 Toast。普通成功消息用页内状态或短暂提示，严重错误必须使用 Alert。

## 9. 新媒体内容延伸

内容模块不进入 V1 主任务流，但可作为后续获客入口：

| 内容组件 | 用途 | iOS 系统类型 | UIKit / SwiftUI |
| --- | --- | --- | --- |
| 攻略卡片 | 出差、用药、安抚内容 | List Row / Collection Cell | `UITableViewCell` / `List` |
| 封面图片 | 文章缩略图 | Image View | `UIImageView` / `AsyncImage` |
| 话题标签 | 内容分类 | Capsule Label | `UILabel + Capsule` / `Label` |
| 收藏 | 保存攻略 | Toggle Button | `UIButton` / `Toggle` |
| 视频 | 照护演示 | Video Player | `AVPlayerViewController` / `VideoPlayer` |
| 分享 | 分享到社交平台 | Activity Sheet | `UIActivityViewController` / `ShareLink` |

## 10. SwiftUI 页面结构

### 全局导航

```text
TabView
├── 工作台
│   └── NavigationStack
├── 方案比较
│   └── NavigationStack
├── 新建计划
│   └── NavigationStack
├── 宠物档案
│   └── NavigationStack
└── 交接协作
    └── NavigationStack
```

### 工作台

```text
NavigationStack
├── Navigation Title
├── Toolbar
│   ├── 编辑计划
│   └── 查看交接卡
├── Preparation Banner
├── Daily Selector
├── Task List
├── Pet Summary
├── Quick Actions
└── Activity Feed
```

### 新建计划

```text
NavigationStack
├── ProgressView
├── Form
│   ├── DatePicker
│   ├── Picker
│   ├── TextField
│   ├── TextEditor
│   └── Selection Rows
├── Navigation Back Button
└── Prominent Next Button
```

## 11. iOS 适配规范

1. 点击区域不小于 44 × 44 pt。
2. 支持 Dynamic Type，关键文字不能依赖固定字号。
3. 底部按钮和 Tab Bar 必须避开 Home Indicator。
4. 使用语义颜色，适配深色与浅色模式。
5. 图标优先使用 SF Symbols。
6. 选中、禁用、错误和完成状态不能只依赖颜色。
7. 为任务完成、进度和异常状态提供 VoiceOver 标签。
8. 成功使用轻触反馈和内联文案，错误使用 Alert。
9. 照片优先使用系统 Picker，拍照时再申请相机权限。
10. iPhone 使用 Tab Bar，iPad 使用 Split View。

## 12. 组件类型总结

| 系统分类 | 本项目使用的主要类型 |
| --- | --- |
| 导航 | Tab Bar、Navigation Bar、Navigation Stack、Toolbar、Split View |
| 展示 | List、Collection View、Image View、Label、Text、Gauge、Progress View |
| 表单 | Text Field、Text Editor、Date Picker、Picker、Selection List |
| 选择 | Segmented Control、Toggle、Button、Menu |
| 模态与反馈 | Sheet、Alert、Activity View、Content Unavailable View |
| 系统能力 | Photo Picker、Camera Picker、Share Sheet、Clipboard、Haptic、Notification |
| 扩展能力 | QR Code、Live Activity、Video Player、Message Composer |

最终结论：本产品的 iOS 界面应采用**导航容器 + 分组列表 + 系统表单 + 底部弹窗 + 系统照片与分享能力**，而不是网页卡片的等比缩小。
