# Portfolio CRUD: Laravel + Inertia.js + React

Chris Joven C. Cirelles | IT ELEC01 Midterm Laboratory Activity

Dynamic section: **Projects** (create, read, update, delete with server-side validation).

## Setup

1. Create the starter project (Breeze + React):
   ```bash
   composer create-project laravel/laravel portfolio-inertia
   cd portfolio-inertia
   composer require laravel/breeze --dev
   php artisan breeze:install react
   ```
2. Copy the files from this folder into the project (merge folders, replace `routes/web.php`).
   - `app/Http/Middleware/HandleInertiaRequests.php`: only add the `flash` entry if the file already exists.
   - `resources/css/app-additions.css`: paste its contents at the bottom of `resources/css/app.css`.
3. Set your database in `.env` (SQLite works out of the box), then run:
   ```bash
   php artisan migrate
   php artisan storage:link
   npm install
   npm run dev
   php artisan serve
   ```
4. Open `http://127.0.0.1:8000` (portfolio) and `http://127.0.0.1:8000/projects` (admin).

## Where things are

| Part | File |
| --- | --- |
| Migration | `database/migrations/2026_10_25_000000_create_projects_table.php` |
| Model | `app/Models/Project.php` |
| Controller + validation | `app/Http/Controllers/ProjectController.php` |
| Public page controller | `app/Http/Controllers/PortfolioController.php` |
| Routes | `routes/web.php` |
| Pages | `resources/js/Pages/Portfolio.jsx`, `resources/js/Pages/Projects/{Index,Create,Edit}.jsx` |
| Components | `resources/js/Components/` (ProjectForm, FormField, ConfirmModal, Navbar, ...) |
