## Exam React App

This project is a small React + Vite application that implements three independent mini‑tasks, all styled with Tailwind CSS:

- Task 1 – Random Cat Fact
- Task 2 – GitHub User Search
- Task 3 – Dynamic Product Dashboard

All three components are rendered from [src/App.jsx](src/App.jsx).

---

## 1. Task 1 – Random Cat Fact

Component: [src/Components/Task1.jsx](src/Components/Task1.jsx)

- Fetches a random cat fact from `https://catfact.ninja/fact` using `fetch` and `async/await`.
- Shows loading and error states inside a card UI.
- Includes a **Get New Fact** button that lets the user fetch another fact without reloading the page.

Key concepts:
- API calls with `useEffect` and `useState`.
- Conditional rendering for loading, error, and success states.

---

## 2. Task 2 – GitHub User Search

Component: [src/Components/Task2.jsx](src/Components/Task2.jsx)

Objective: Build a search bar that looks up a GitHub username and displays profile info plus the latest repositories.

Features:
- Input field and search button for a GitHub username.
- Fetches profile data from `https://api.github.com/users/{username}`.
- Fetches the latest 5 repositories from `https://api.github.com/users/{username}/repos?sort=created&per_page=5`.
- Displays avatar, username, bio, followers, following, and public repo count.
- Lists the 5 latest repositories with links to GitHub.
- Handles errors and 404 ("User not found") with clear messages.

Key concepts:
- Multiple API requests in sequence.
- Form handling and controlled input.
- Error handling for non‑200 responses.

---

## 3. Task 3 – Dynamic Product Dashboard

Component: [src/Components/Task3.jsx](src/Components/Task3.jsx)

Objective: Render a product table and manage a shopping cart total in real time.

Sample data (defined in the component):

- `Mobile` – 15000
- `Fridge` – 10000
- `AC` – 30000

Features:
- Table with columns: **Product Name**, **Price**, **Action**.
- Each row has a button that toggles between **Add to Cart** and **Remove from Cart**.
- Clicking **Add to Cart** adds the product price to the total; clicking **Remove from Cart** subtracts it.
- The current **Total Price** is displayed below the table and updates instantly as the cart changes.

Key concepts:
- Managing selected item IDs in state.
- Deriving totals from state using `Array.filter` and `Array.reduce`.

---

## Tech Stack

- React (with functional components and hooks)
- Vite (development server and build)
- Tailwind CSS (utility‑first styling, imported in [src/index.css](src/index.css))

---

## Getting Started

1. **Install dependencies**

	 ```bash
	 npm install
	 ```

2. **Run the development server**

	 ```bash
	 npm run dev
	 ```

3. Open the URL shown in the terminal (usually `http://localhost:5173`) to see all three tasks rendered on the page.

---

## Build & Preview

- Build for production:

	```bash
	npm run build
	```

- Preview the production build locally:

	```bash
	npm run preview
	```

---

## Notes

- All network requests are client‑side only; no API keys are required.
- You can reuse each task component independently in other projects by importing `Task1`, `Task2`, or `Task3` from the `src/Components` folder.
