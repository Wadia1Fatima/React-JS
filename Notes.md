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
## Hooks

Hooks are special React functions that allow functional components to use React features such as state.

The first Hook is:

```jsx
useState()
```

---

## State

State is React's memory.

Unlike normal variables, state values are remembered between re-renders.

---

## useState()

Syntax:

```jsx
const [count, setCount] = useState(0);
```

Where:

- `count` → Current state value.
- `setCount` → Function used to update the state.
- `0` → Initial state value.

---

## Why useState?

Normal variables reset every time a component re-renders.

State values persist between renders.

---

## Updating State

Correct:

```jsx
setCount(count + 1);
```

Incorrect:

```jsx
count++;
```

React only updates the UI when the state updater function is called.

---

## Flow

Button Click
↓
setCount()
↓
React updates state
↓
Component re-renders
↓
Browser updates

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

<details>
<summary>📚 Lecture 6: Virtual DOM, Fiber & Reconciliation (Click to Expand)</summary>

# Virtual DOM, Fiber & Reconciliation

## What is DOM?

**DOM (Document Object Model)** is a tree-like representation of an HTML document.

It allows JavaScript to access and manipulate the webpage.

Example:

```html
<html>
  <body>
    <h1>Hello</h1>
    <button>Click Me</button>
  </body>
</html>
```

DOM Tree:

```text
html
│
└── body
     │
     ├── h1
     │     └── "Hello"
     │
     └── button
           └── "Click Me"
```

---

## What is the Virtual DOM?

The **Virtual DOM** is a lightweight JavaScript copy of the Real DOM.

Instead of immediately updating the browser whenever something changes, React first updates the Virtual DOM.

It then compares the old Virtual DOM with the new one and updates only the necessary parts of the Real DOM.

---

## Why do we need the Virtual DOM?

Updating the **Real DOM** is expensive because the browser must:

- Recalculate styles
- Recalculate layout
- Repaint the page
- Sometimes perform a reflow

React minimizes these expensive operations by first working with the Virtual DOM.

---

## How the Virtual DOM Works

When the application state changes:

1. React creates a **new Virtual DOM**.
2. It compares it with the **previous Virtual DOM**.
3. It finds what has changed.
4. It updates only those parts in the Real DOM.

This makes React applications faster and more efficient.

---

## Reconciliation

**Reconciliation** is the process React uses to compare:

- Old Virtual DOM
- New Virtual DOM

It identifies the differences between them and updates only the changed elements in the Real DOM.

Example:

Old Virtual DOM

```text
App
│
├── Navbar
├── Counter = 0
└── Footer
```

New Virtual DOM

```text
App
│
├── Navbar
├── Counter = 1
└── Footer
```

React detects that only the **Counter** changed, so only that part of the Real DOM is updated.

---

## React Rendering Flow

```
User clicks a button
        ↓
State changes (setState / useState)
        ↓
Component re-renders
        ↓
New JSX is returned
        ↓
React creates a New Virtual DOM
        ↓
Reconciliation compares it with the Old Virtual DOM
        ↓
Differences are found
        ↓
Only the changed parts of the Real DOM are updated
        ↓
Browser displays the updated UI
```

---

## What is Fiber?

**Fiber** is React's rendering engine.

Its job is to make rendering faster, smoother, and more efficient.

Fiber allows React to:

- Break rendering work into smaller tasks.
- Pause and resume rendering when necessary.
- Prioritize important updates.
- Keep the application responsive.

Simply remember:

> **Virtual DOM tells React *what* changed, while Fiber decides *how and when* those changes should be processed.**

---

## Real DOM vs Virtual DOM

| Real DOM | Virtual DOM |
|----------|-------------|
| Actual webpage shown in the browser | JavaScript copy of the Real DOM |
| Slow to update | Fast to update |
| Browser performs expensive operations | React compares changes before updating |
| Updates directly | Updates the Real DOM only when necessary |

---

## Common Misconceptions

❌ React updates the entire webpage every time.

✔ React updates only the parts that have changed.

---

❌ Virtual DOM replaces the Real DOM.

✔ The Virtual DOM is only a copy used for comparison.

---

❌ Fiber and Virtual DOM are the same thing.

✔ Virtual DOM is React's copy of the UI.

✔ Fiber is React's rendering engine that efficiently processes updates.

---

## Key Takeaways

- DOM is the browser's tree representation of an HTML document.
- Virtual DOM is a lightweight JavaScript copy of the Real DOM.
- React first updates the Virtual DOM before touching the Real DOM.
- Reconciliation compares the old and new Virtual DOMs.
- Only the changed elements are updated in the Real DOM.
- Fiber is React's rendering engine that schedules and prioritizes updates.
- This process makes React applications fast and efficient.

</details>

<details>
<summary>📚 Lecture 7: Props (Click to Expand)</summary>

# Props

- Props (Properties) are used to pass data from a **Parent Component** to a **Child Component**.
- Props are **read-only** (cannot be modified by the child).

---

## Syntax

Parent:

```jsx
<Card
  username="Wadia"
  age={20}
/>
```

Child:

```jsx
function Card(props) {
  return <h1>{props.username}</h1>;
}
```

or

```jsx
function Card({ username, age }) {
  return <h1>{username}</h1>;
}
```

---

## Passing Different Types

```jsx
name="Wadia"
age={20}
isLoggedIn={true}
marks={[90, 85]}
user={{ city: "Lahore" }}
```

---

## Why use Props?

- Reuse components.
- Pass dynamic data.
- Make components flexible.

---

## Common Mistakes

- Trying to modify props.
- Forgetting `{}` for JavaScript values.
- Misspelling prop names.

---

## Interview Corner

**Q. What are Props?**

Props are read-only values passed from a parent component to a child component.

---

## Key Takeaways

- Props = Parent ➜ Child communication.
- Props are read-only.
- Components become reusable using props.

</details>

<details>
<summary>📚 Lecture 8: Tailwind CSS (Click to Expand)</summary>

# Tailwind CSS

- Tailwind is a **utility-first CSS framework**.
- Styling is done using predefined utility classes.

---

## Example

```jsx
<h1 className="text-4xl font-bold text-blue-500">
  Hello
</h1>
```

---

## Common Utilities

### Text

```text
text-white
text-black
text-red-500
text-2xl
font-bold
```

---

### Background

```text
bg-red-500
bg-blue-600
bg-black
```

---

### Spacing

```text
p-4
px-4
py-2
m-4
mt-5
```

---

### Flexbox

```text
flex
justify-center
items-center
gap-4
```

---

### Border & Radius

```text
rounded
rounded-lg
border
shadow-lg
```

---

### Width & Height

```text
w-full
max-w-md
h-screen
```

---

## Responsive Design

```jsx
className="text-sm md:text-lg lg:text-2xl"
```

- `md:` → Medium screens
- `lg:` → Large screens

---

## Why Tailwind?

- Faster development.
- No separate CSS files.
- Easy responsive design.
- Highly customizable.

---

## Common Mistakes

- Using `class` instead of `className`.
- Forgetting responsive prefixes.
- Writing very long class lists.

---

## Interview Corner

**Q. What is Tailwind CSS?**

A utility-first CSS framework used for rapidly building custom user interfaces.

---

## Key Takeaways

- Uses utility classes.
- No need to write custom CSS for most styling.
- Responsive classes use prefixes like `sm:`, `md:`, `lg:`.

</details>

<details>
<summary>📚 Lecture 9: Background Changer Project (Click to Expand)</summary>

# Background Changer Project

A simple React project to practice **useState**.

---

## Goal

Change the background color when a button is clicked.

---

## State

```jsx
const [color, setColor] = useState("olive");
```

---

## Updating State

```jsx
setColor("red");
```

React updates:

- State
- Component
- UI

---

## Dynamic Styling

```jsx
style={{ backgroundColor: color }}
```

The value of `color` controls the background.

---

## Button Example

```jsx
<button onClick={() => setColor("blue")}>
  Blue
</button>
```

---

## Flow

```
Button Click
      ↓
setColor()
      ↓
State Changes
      ↓
Component Re-renders
      ↓
Background Updates
```

---

## Common Mistakes

- Writing `onClick={setColor("red")}`

✔ Correct

```jsx
onClick={() => setColor("red")}
```

---

- Forgetting to use `{}` inside `style`.

✔ Correct

```jsx
style={{ backgroundColor: color }}
```

---

## Interview Corner

**Q. Why does the background change automatically?**

Because changing state causes React to re-render the component.

---

## Key Takeaways

- `useState()` stores the selected color.
- `setColor()` updates the state.
- State changes trigger re-rendering.
- Inline styles can use JavaScript expressions.

</details>

<details>
<summary>📚 Lecture 10: useCallback, useEffect & useRef (Click to Expand)</summary>

# useCallback()

- Memoizes (remembers) a function.
- Prevents unnecessary recreation on every render.
- Function is recreated **only when dependencies change**.

### Syntax

```jsx
const func = useCallback(() => {
  // logic
}, [dependencies]);
```

Example:

```jsx
const passwordGenerator = useCallback(() => {
  ...
}, [length, numAllow, charAllow]);
```

---

# useEffect()

- Used for **side effects**.
- Runs after the component renders.

Examples:
- API calls
- Timers
- DOM updates
- Password generation

### Syntax

```jsx
useEffect(() => {
  // code
}, [dependencies]);
```

### Dependency Array

```jsx
useEffect(() => {})          // Every render
useEffect(() => {}, [])      // Only once
useEffect(() => {}, [count]) // When count changes
```

Example:

```jsx
useEffect(() => {
  passwordGenerator();
}, [passwordGenerator]);
```

---

# useRef()

- Creates a persistent reference.
- Does **not** cause re-renders.
- Mostly used to access DOM elements.

### Syntax

```jsx
const inputRef = useRef(null);
```

Attach to an element:

```jsx
<input ref={inputRef} />
```

Access it:

```jsx
inputRef.current.focus();
```

---

# Password Generator Flow

```
State Changes
      ↓
useCallback() recreates passwordGenerator()
      ↓
useEffect() runs
      ↓
Password updates

Copy Button
      ↓
useRef
      ↓
Select Input
      ↓
Copy to Clipboard
```

---

# Clipboard

Select text:

```jsx
passwordRef.current.select();
```

Select specific range:

```jsx
passwordRef.current.setSelectionRange(0, 999);
```

Copy:

```jsx
navigator.clipboard.writeText(password);
```

---

# Common Mistakes

- Forgetting dependencies.
- Using `useState` instead of `useRef`.
- Confusing `useCallback()` with `useEffect()`.
- Using unnecessary dependencies in `useEffect`.

---

# useState vs useRef

| useState | useRef |
|----------|---------|
| Stores state | Stores reference |
| Re-renders component | No re-render |
| Used for UI updates | Used for DOM access |

---

# Interview Corner

**Q. Why use `useCallback()`?**

To avoid recreating functions on every render.

---

**Q. Why use `useEffect()`?**

To perform side effects after rendering.

---

**Q. Why use `useRef()`?**

To access DOM elements or store mutable values without re-rendering.

---

# Key Takeaways

- `useCallback()` → Remembers functions.
- `useEffect()` → Runs side effects.
- `useRef()` → Accesses DOM without re-rendering.
- `navigator.clipboard.writeText()` copies text to the clipboard.

</details>