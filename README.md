quiz server git repository ==> https://github.com/omar-web-dev-2/quiz-server.git 


------------------------------------------------------------
### how to create a new vite application using ts.
1.
```bash 
npm create vite 
```
2. enter a project name 
3. select the formwork 
4. select the language
5. 
```bash 
npm install
```
----------------------------------------------------------------
### how can add tailwind css with postcss (vite)
1. 
```bash
npm install -D tailwindcss postcss autoprefixer
```
2. 
```bash 
npx tailwindcss init -p
``` 
3. tailwind.config.js file changes (remove all code)
```bash 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
``` 
4. index.css changes (remove all code )
```bash 
@tailwind base;
@tailwind components;
@tailwind utilities;
```
node >> don't forget restart your application

### add material tailwind

1. 
```bash 
npm i @material-tailwind/react
```
2. change tailwind.config.js 

```bash 
/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  # content: [],
  # theme: {
  #   extend: {},
  # },
  # plugins: [],
});


```

----------------------------------------------------------------






----------------------------------------------------------------
### My file structure
```bash 
----src
----|----component
----|----|----layouts
----|----|----ui
----|----pages
----|----routes
----|----|----store.tsx
----|----|----features
----|----|----|----counterState.tsx
----|----redux
----|----utils
----|----context
----|----hooks
```
----------------------------------------------------------------