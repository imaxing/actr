# ActivityTracker

> ActivityTracker 是一个 TypeScript 类，用于监视用户活动并检测 Web 应用程序中的空闲状态。

#### Installtion

```bash
npm i actr
```

#### Usage

```js
import Actr from 'actr'

const tracker = new Actr()

// Call the track method whenever the user performs an activity
tracker.track({ name: 'clicked_button' })

// Check if the user is idle
if (tracker.isIdle) {
  // Do something if the user is idle
}
```

#### Props

| Name        | Description                           | Type   | Required | Default |
| ------------- | ------------------------------ | ------ | ---- | ------ |
| idleThreshold | 用户空闲时间的阈值，单位为毫秒 | number | 否   | 20000  |

#### Method

| Name  | Description                                             |
| ------- | ------------------------------------------------ |
| track   | 记录用户活动，接收一个对象参数表示用户的活动内容 |
| destroy | 清空用户活动信息                                 |
