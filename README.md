# Inctagram UI-kit

## Description
A library of UI components for working on your React application.

## Getting Started

1. Install library:
  ```bash
  npm i @wild-animals/ui-kit
  ```  
  ```bash
  yarn add @wild-animals/ui-kit
  ```  
  ```bash
  pnpm i @wild-animals/ui-kit
  ```

2. Add the import of styles from the library to your main project file (`main.tsx, index.tsx, ...`), where you import your own set of styles (after them):
  ```bash
  /* your import styles */
  import '@wild-animals/ui-kit/dist/style.css'
  ```

3. Use it! Example of using the `Button` component:
  ```bash
  import { useState } from 'react'
import { Button } from '@wild-animals/ui-kit/components'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
      <Button onClick={() => setCount((count) => count + 1)} variant='primary'>
        count is {count}
      </Button>
  )
}
  ```

## More details of the components can be found here: [click](https://inctagram-ui-kit-green.vercel.app/)