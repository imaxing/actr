# ActivityTracker

> 用于追踪用户状态工具类

#### Installtion

```bash
npm i actr
```

#### Usage

```js
import Actr from 'actr'

const tracker = new Actr({
  idleThreshold: 10000,
  onIdle: () => console.log('空闲状态')
})

// 记录操作
tracker.track('clicked_button')
```

#### Props

| 参数名        | 说明       | 类型     | 必填 | 默认值                                         |
| ------------- | ---------- | -------- | ---- | ---------------------------------------------- |
| idleThreshold | 空闲阈值   | number   | 否   | 10000(毫秒)                                    |
| onActive      | 非空闲回调 | function | 否   | (d: { name: string, timestamp: number }) => {} |
| onIdle        | 空闲回调   | function | 否   | () => {}                                       |

#### Method

| 方法名  | 描述         | 参数         |
| ------- | ------------ | ------------ |
| track   | 记录方法     | name: string |
| destroy | 清空活动记录 | -            |
