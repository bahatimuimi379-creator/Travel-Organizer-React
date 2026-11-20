# Travel Planner

A single page React app for browsing travel destinations and the packages offered for each one. Visitors can search, filter and view places. An admin can sign in to add, edit and delete packages.

## Features

- Landing page with a hero image, popular destinations, testimonials and an About section
- Places page with search, region filter and pagination
- Place details page (`/places/:id`) with photos, activities and the packages for that place
- Packages page where only the admin can add, change the price of, or delete packages
- Admin sign-in (simulated) using React Context
- Responsive layout with Bootstrap

## Built with

- React and Vite
- React Router
- Bootstrap 5 (loaded from a CDN in `index.html`)
- json-server as a simulated backend (`db.json`)
- Vitest and React Testing Library

## How to run it

You need Node.js installed. The app needs two terminals running at the same time.

```bash
npm install
```

Terminal 1, the website:

```bash
npm run dev
```

Terminal 2, the data server:

```bash
npx json-server --watch db.json --port 3001
```

Open the address that `npm run dev` prints, usually `http://localhost:5173`.

If the Places and Packages pages are empty, the data server in terminal 2 is not running.

## Admin login

- Username: `admin`
- Password: `admin123`

This sign-in only hides the admin controls in the interface. A real app would also check the user on the server.

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/places` | Places list |
| `/places/:id` | Place details |
| `/packages` | Packages (`?place=Bali` filters by place) |
| `/login` | Admin login |

## Hooks used

`useState`, `useEffect`, `useContext`, `useParams`, `useSearchParams`, `useNavigate` and a custom hook, `useFetch`.

## API requests

The app talks to json-server with GET (read places and packages), POST (add a package), PATCH (change a price) and DELETE (remove a package).

## Tests

```bash
npm test
