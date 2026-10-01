# Limpicii frontend

The frontend is an Angular 17 standalone application styled with Tailwind CSS 4.

## Requirements

- Node.js (Node.js 20 LTS is recommended for Angular 17).
- npm (the version bundled with Node.js is sufficient).

## Install and run

From this directory (`Frontend/Limpicii`):

```powershell
npm ci
npm start
```

Open [http://localhost:4200/](http://localhost:4200/). The Angular dev server reloads when source files change. Stop it with `Ctrl+C` in the terminal.

## Available commands

| Command | Description |
| --- | --- |
| `npm start` | Run the local Angular development server |
| `npm run build` | Build the production application into `dist/limpicii` |
| `npm run watch` | Rebuild continuously with the development configuration |
| `npm test` | Run the Karma unit tests |

Install dependencies with `npm ci` after cloning the repository or when the lockfile changes. This installs the exact versions from `package-lock.json`.

## API configuration

The development API base URL is in `src/environments/environment.ts` and currently points to `https://localhost:7050/api`. The production base URL is in `src/environments/environment.prod.ts`.

The current backend exposes `GET /WeatherForecast` without the `/api` prefix, while the frontend service requests `/api/weatherforecast`. The backend also does not currently configure CORS for the frontend origin. Align the route and configure CORS in the API before relying on browser requests between the apps. See the [backend documentation](../../Backend/Limpicii.API/README.md) and the [repository setup guide](../../README.md).

## Troubleshooting

- If `ng` is not found, run `npm ci` in this directory and then use `npm start` (which runs the local Angular CLI).
- If port 4200 is already in use, stop the other dev server or run `npm start -- --port 4201`.
- If the API call fails, confirm the backend is running, check the configured URL and route, and check that the backend allows requests from `http://localhost:4200`.
- The checked-in project uses TypeScript 5.2.2 through its lockfile. In VS Code, select the workspace TypeScript version if diagnostics from a different global TypeScript version disagree with the Angular CLI build.
