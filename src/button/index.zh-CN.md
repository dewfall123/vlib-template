---
map:
  # 映射到docs的路径
  path: /components/button
---

# Button

这是一个简单的按钮。

## 代码演示

### 基本用法

<demo src="./demo.vue"
  language="vue"
  title="基本用法"
  desc="点击切换。">
</demo>

## API

```ts
import { Button } from 'vlibTemplate';
...
<Button>按钮</Button>
```

## Props

| 参数  | 说明 |   类型 |         值 |
| ----- | ---: | -----: | ---------: |
| size  | 大小 | string | 例如'16px' |
| color | 颜色 | string |  例如'red' |
