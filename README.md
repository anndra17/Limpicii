# Limpicii

Limpicii contains an Angular frontend and an ASP.NET Core Web API backed by SQL Server.

## Repository layout

| Path | Purpose |
| --- | --- |
| `Frontend` | Angular 22 application and static assets |
| `Backend/Limpicii.API` | ASP.NET Core 9 API, controllers, OpenAPI endpoint, and launch profiles |
| `Backend/Limpicii.Application` | Application layer |
| `Backend/Limpicii.Domain` | Domain entities and enums |
| `Backend/Limpicii.Infrastructure` | Entity Framework Core context, SQL Server provider, and migrations |

## Prerequisites

- Node.js and npm. Angular 22 supports Node.js `^22.22.3`, `^24.15.0`, or `^26.0.0`.
- .NET 9 SDK.
- SQL Server (local, containerized, or remote) and a database for the API.

## Run locally

Run the API and frontend in separate terminals. Start the API first after configuring its database connection.

### 1. Configure and start the backend

Set the `ConnectionStrings:DefaultConnection` configuration value. For a local SQL Server using Windows authentication, PowerShell can set it for the current terminal session:

```powershell
$env:ConnectionStrings__DefaultConnection = "Server=localhost;Database=Limpicii;Trusted_Connection=True;TrustServerCertificate=True"
```

Change `Server` and `Database` to match your SQL Server. For SQL username/password authentication, use a connection string such as `Server=localhost;Database=Limpicii;User Id=<user>;Password=<password>;TrustServerCertificate=True` and keep credentials out of source control.

Then run:

```powershell
cd Backend/Limpicii.API
dotnet restore
dotnet run --launch-profile https
```

The HTTPS profile listens on `https://localhost:7050` and also `http://localhost:5260`. To use HTTP only, run `dotnet run --launch-profile http` instead. The API maps its OpenAPI document to `/openapi/v1.json`; the Swagger UI is available at `/swagger`.

If the HTTPS development certificate is not trusted, create and trust one with `dotnet dev-certs https --trust`, or use the HTTP profile.

The repository contains an initial EF Core migration under `Backend/Limpicii.Infrastructure/Migrations`. Database creation/migration is not run automatically when the API starts. The checked-in design-time `LimpiciiDbContextFactory` currently expects `Backend/Limpicii.API/appsettings.Development.json`, which is not included, so EF migration commands need that configuration file or a corrected factory before they can be used as written.

### 2. Start the frontend

In a second terminal:

```powershell
cd Frontend
npm ci
npm start
```

Open [http://localhost:4200/](http://localhost:4200/). `npm run build` creates a production build in `Frontend/dist/limpicii`.

## Frontend and API connection

The frontend's development API base URL is `https://localhost:7050/api` in `Frontend/src/environments/environment.ts`. The backend controller currently exposes `GET /WeatherForecast` (port 7050 for HTTPS or port 5260 for HTTP). The frontend service requests `/api/weatherforecast`; these routes do not currently match. The API also has no CORS policy configured for the frontend origin. As a result, the frontend can run independently, but browser API calls need the API route, base URL, and CORS settings aligned before they can work end to end.

## Further documentation

- [Frontend setup and scripts](Frontend/README.md)
- [Backend setup, configuration, and API notes](Backend/Limpicii.API/README.md)

## Current limitations

- The development database connection string must be provided outside source control.
- The frontend API path and backend controller route currently differ, and the API does not configure CORS for the frontend origin.
- The EF design-time context factory refers to an untracked `appsettings.Development.json` file.
