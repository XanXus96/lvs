# LVS

> Sujet 3

## Installation

-   `composer install`
-   `npm install`
-   Copy `.env.example` content to `.env` and set your database connection and email service details
-   `php artisan key:generate`
-   `php artisan jwt:secret`
-   `php artisan migrate`

## Usage

#### Development

```bash
# build and watch
npm run watch

# run apache server
php artisan serve
```
