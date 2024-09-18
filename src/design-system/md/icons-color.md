```tsx
import { Close } from '@wild-animals/ui-kit/icons'

// ...

return <Close style={{ color: 'red' }}/>

```

```scss
// icon-styles.module.scss

.close {
  color: red;
}
```

```tsx
import { Close } from '@wild-animals/ui-kit/icons'
import s from 'icon-styles.module.scss'

// ...

return <Close className={s.close}/>

```
