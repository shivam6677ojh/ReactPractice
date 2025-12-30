# Mini Post App (React + Vite)

Simple mini project demonstrating a posts feed with create, delete and detail view functionality using React 19, Vite, Tailwind CSS and React Router.

## Features
- List posts with tags & reactions
- Create new post (title, body, tags)
- Delete a post directly from its card
- View full post details on a dedicated page (`/showmore/:id`)
- Responsive layout with header, sidebar toggle and footer
- Global state via React Context + `useReducer`

## Structure
```
src/
	components/
		Post.jsx          # Post card with delete + link
		PostList.jsx       # Lists posts from context
		CreatePost.jsx     # Form to add post
		ShowMore.jsx       # Detail page
		Header.jsx Footer.jsx Sidebar.jsx
	store/
		PostListContext.jsx    # Context definition
		Post-list-Store.jsx    # Provider + reducer
	App.jsx
	main.jsx
```

## Running
```bash
npm install
npm run dev
```

## Adding a Post
Use the sidebar to switch to CreatePost, fill Title, Body and comma-separated Tags, then submit. Post appears at top of the list.

## Deleting
Click the trash icon on a card to remove it.

## Extending Ideas
- Persist posts (localStorage / backend API)
- Reactions increment button
- Edit post functionality
- Tag filtering & search

---
Generated and completed enhancements to move beyond the base Vite template.
