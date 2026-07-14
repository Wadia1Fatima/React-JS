# ⚛️ React Notes

> **Note:**
> - While using **React with Vite**, all React component names (functions) must start with an **uppercase** letter.
> - All React component files should use the **`.jsx`** extension.
> - It is considered a good practice to name all component files with their **first letter capitalized** (e.g., `App.jsx`, `Navbar.jsx`, `Footer.jsx`, `Greeting.jsx`).

<details>
<summary>📚 Lecture 1–5: React Basics (Click to Expand)</summary>

## What is React?

- React is a **JavaScript library** used to build **User Interfaces (UI)**.
- It helps create reusable UI components.
- React efficiently updates the webpage without manually manipulating the DOM.

---

## What is Vite?

Vite is a **build tool** and **development server**.

It helps us:
- Create React projects quickly.
- Run the development server.
- Enable **Hot Module Replacement (HMR)** so changes appear instantly in the browser.

**React ≠ Vite**

- **React** builds the UI.
- **Vite** helps us develop and run React applications efficiently.

---

## Project Structure

### 📁 src/

Contains almost all React code.

Examples:
- `App.jsx`
- `main.jsx`
- Custom Components

---

### 📁 public/

Stores static assets.

Examples:
- Images
- Icons
- PDFs

---

### 📁 node_modules/

Contains all installed packages and dependencies.

- Created after running `npm install`
- Never edit manually.
- Never commit changes inside this folder.

---

### 📄 package.json

The configuration file of the project.

Contains:
- Project name
- Dependencies
- Scripts
- Version information

Example:

```json
"scripts": {
  "dev": "vite"
}
```

When we run

```bash
npm run dev
```

npm executes the `"dev"` script.

---

## npm run dev

Starts the Vite development server.

Whenever you reopen your project, simply run:

```bash
npm run dev
```

to start the application.

---

## index.html

Contains one important element:

```html
<div id="root"></div>
```

React renders the entire application inside this `<div>`.

---

## main.jsx

The **entry point** of the React application.

Responsibilities:

- Imports React packages.
- Imports the `App` component.
- Finds the root element.
- Renders the application.

Example:

```jsx
createRoot(document.getElementById("root")).render(
  <App />
)
```

---

## App.jsx

The **main component** of the application.

Initially, most of the UI is written here.

As the project grows, the UI is divided into smaller reusable components.

---

## Components

A component is a reusable piece of UI.

Example:

```jsx
function Greeting() {
  return <h1>Hello</h1>;
}
```

Benefits:
- Reusable
- Organized
- Easy to maintain

---

## Component Naming Rule

React components **must** begin with an uppercase letter.

✔ Correct

```jsx
<Greeting />
```

✘ Wrong

```jsx
<greeting />
```

Reason:

Lowercase names are treated as HTML elements.

---

## JSX

**JSX = JavaScript XML**

It allows us to write HTML-like syntax inside JavaScript.

Example:

```jsx
<h1>Hello World</h1>
```

JSX is **not HTML**.

Before the code runs, JSX is converted into JavaScript.

---

## React.createElement()

JSX is internally converted into:

```javascript
React.createElement(...)
```

Example:

JSX

```jsx
<h1>Hello</h1>
```

is approximately converted into

```javascript
React.createElement(
  "h1",
  null,
  "Hello"
)
```

In real-world React projects, we write **JSX**, not `React.createElement()`.

---

## Rendering Flow

React renders components inside

```html
<div id="root"></div>
```

Flow:

```
main.jsx
      ↓
<App />
      ↓
App() executes
      ↓
Returns JSX
      ↓
React renders it inside #root
```

---

## Evaluated Expressions

JavaScript expressions are written inside curly braces `{}`.

Example:

```jsx
const username = "Wadia";

<h1>Hello {username}</h1>
```

Output:

```
Hello Wadia
```

Allowed:

```jsx
{name}
{2 + 3}
{isLoggedIn}
```

Not Allowed:

```jsx
{if(condition){}}
{for(...){}}
```

Reason:

Only JavaScript **expressions** are allowed inside `{}`.
Statements such as `if`, `for`, and `while` are not allowed.

---

## Common Beginner Mistakes

### 1. Component Name Mismatch

```jsx
import Greetings from "./Greetings";

<Greeting />
```

❌ Wrong

Correct:

```jsx
<Greetings />
```

---

### 2. Lowercase Component Name

```jsx
<myApp />
```

❌ Wrong

Correct:

```jsx
<MyApp />
```

---

### 3. Multiple Render Calls

Render the application only once.

✔ Correct

```jsx
createRoot(...).render(<App />)
```

---

### 4. Nested Anchor Tags

Avoid:

```html
<a>
  <a>Visit</a>
</a>
```

Nested `<a>` elements are invalid HTML.

---

## React Flow

```
Write JSX
      ↓
React converts JSX into React.createElement()
      ↓
React creates React Elements
      ↓
createRoot() renders them
      ↓
Browser displays the UI
```

---

## Key Takeaways

- React is a JavaScript library.
- Vite is a build tool and development server.
- `main.jsx` is the entry point of a React application.
- `App.jsx` is the main component.
- Components should always begin with an uppercase letter.
- JSX looks like HTML but is actually JavaScript syntax.
- JSX is internally converted into `React.createElement()`.
- React renders everything inside `<div id="root"></div>`.
- Curly braces `{}` are used for JavaScript expressions.

</details>
