# Limpicii backend

The backend is an ASP.NET Core 9 Web API. Its solution includes the API, Application, Domain, and Infrastructure projects. Entity Framework Core 9 uses SQL Server for persistence.

## Requirements

- .NET 9 SDK (`dotnet --list-sdks` to see installed SDKs).
- SQL Server reachable from the development machine.
- A database connection string supplied through configuration.

## Configure the database

The API reads the connection string named `DefaultConnection`. It is intentionally not present in the checked-in `appsettings.json`. Set it as an environment variable before starting the API. PowerShell example for a local SQL Server with Windows authentication:

```powershell
$env:ConnectionStrings__DefaultConnection = "Server=localhost;Database=Limpicii;Trusted_Connection=True;TrustServerCertificate=True"
```

Replace the server and database names as appropriate. For SQL authentication, use `User Id` and `Password` in the connection string; do not commit credentials to the repository.

## Restore and run

From this directory (`Backend/Limpicii.API`):

```powershell
dotnet restore
dotnet run --launch-profile https
```

The HTTPS launch profile listens on `https://localhost:7050` and `http://localhost:5260`. OpenAPI JSON is mapped at `/openapi/v1.json`, and Swagger UI is available at `/swagger`.

To run only over HTTP:

```powershell
dotnet run --launch-profile http
```

The HTTP profile listens at `http://localhost:5260`. If HTTPS reports a development certificate error, run `dotnet dev-certs https --trust` or use the HTTP profile.

## Database migrations

The initial EF Core migration is in `../Limpicii.Infrastructure/Migrations`. The API does not apply migrations automatically at startup.

The current `LimpiciiDbContextFactory` expects `appsettings.Development.json` in this API project, but that file is not checked in. Before using EF migration commands, provide that file locally with a `ConnectionStrings:DefaultConnection` value or update the design-time factory to use the same environment-based configuration as the API. Keep local credentials out of source control.

## Current API and frontend integration

`WeatherForecastController` exposes `GET /WeatherForecast` and returns the contents of the `TennisCourt` table. The frontend currently requests `https://localhost:7050/api/weatherforecast`. Those paths differ, and the API currently has no CORS policy for `http://localhost:4200`; align routing and enable the appropriate CORS origin before calling the API from the browser frontend.

See the [repository setup guide](../../README.md) for instructions to run both applications.
