# ActivityTracker

> ActivityTracker 是一个 TypeScript 类，用于监视用户活动并检测 Web 应用程序中的空闲状态。它记录指定类型的用户交互并跟踪每个事件的时间戳。该类使用时间阈值来确定用户是否空闲，基于自上次交互以来经过的时间来判断。这对于实现自动注销、会话超时或不活动警报等功能非常有用。

#### Installtion

```bash
npm i actr
```

#### Usage

```js
import Actr from 'actr'

const tracker = new Actr()

// Call the track method whenever the user performs an activity
tracker.track('clicked_button')

// Check if the user is idle
if (tracker.isIdle) {
  // Do something if the user is idle
}
```

#### Props

| 参数名        | 说明                           | 类型   | 必填 | 默认值 |
| ------------- | ------------------------------ | ------ | ---- | ------ |
| idleThreshold | 用户空闲时间的阈值，单位为毫秒 | number | 否   | 20000  |

#### Method

| 方法名  | 说明                                             |
| ------- | ------------------------------------------------ |
| track   | 记录用户活动，接收一个对象参数表示用户的活动内容 |
| destroy | 清空用户活动信息                                 |
