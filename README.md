# React + Vite
пользовательская часть интернет-магазина с использованием React и React Router DOM

(в соответствии с разработанным ранее техническим заданием)

__Запуск фронтенда___npm install

 start___npm run dev

 stop____ctrl+c

Local:   http://localhost:5173/

Сборка проекта    npm run build
_


__Запуск бэкенда (микросервисы)

Сервис товаров (порт 8001)

cd microshop
.venv\Scripts\activate
cd product_service
uvicorn app:app --reload --port 8001

__Сервис заказов (порт 8002)

cd microshop
.venv\Scripts\activate
cd order_service
uvicorn app:app --reload --port 8002

ДЗ 5: панель управления для администраторов магазина

// 3 отдельных терминала //

Терминал 1 — Auth Service (порт 8000)

cd C:\Users\OCT__\PycharmProjects\microshop

.venv\Scripts\activate

cd auth_service

uvicorn app:app --reload --port 8000

Терминал 2 — Product Service (порт 8001)

cd C:\Users\OCT__\PycharmProjects\microshop

.venv\Scripts\activate

cd product_service

uvicorn app:app --reload --port 8001

Терминал 3 — Order Service (порт 8002)

cd C:\Users\OCT__\PycharmProjects\microshop

.venv\Scripts\activate

cd order_service

uvicorn app:app --reload --port 8002

///Запуск фронтенда (React)///

Откройте 4-й терминал
cd C:\Users\OCT__\PycharmProjects\frontend-shop_2

npm run dev

Открыть в браузере:

Пользовательская часть	http://localhost:5173

Админка (вход)	http://localhost:5173/admin/login (нужен логин: admin /пароль: 741ws_ )

Админка (панель)	http://localhost:5173/admin

# Итоговое задание. Завершение доработок по проекту интернет-магазина #
///Структура проекта///

Проект состоит из двух репозиториев:

1. Backend (микросервисы) (https://github.com/Ivanoff890/HW_2_Web-development_Implementation_of_product_microservices):
   - auth_service (порт 8000) — JWT-аутентификация
   - product_service (порт 8001) — управление товарами
   - order_service (порт 8002) — управление заказами

2. Frontend (React) (https://github.com/Ivanoff890/HW_5_Web-development_shop-admin-panel):
   - Пользовательский магазин (просмотр товаров, корзина, оформление)
   - Админ-панель (управление товарами и заказами, JWT-защита)

///Запуск бэкенда (3 терминала)///
1. Терминал 1 — Auth Service (8000)

    cd C:\Users\OCT__\PycharmProjects\microshop

    .venv\Scripts\activate

    cd auth_service

    uvicorn app:app --reload --port 8000

2. Терминал 2 — Product Service (8001)

    cd C:\Users\OCT__\PycharmProjects\microshop

    .venv\Scripts\activate

    cd product_service

    uvicorn app:app --reload --port 8001

3. Терминал 3 — Order Service (8002)

    cd C:\Users\OCT__\PycharmProjects\microshop

    .venv\Scripts\activate

    cd order_service

    uvicorn app:app --reload --port 8002

///Запуск фронтенда (терминал 4)///

1. cd C:\Users\OCT__\PycharmProjects\frontend-shop_2

npm run dev   http://localhost:5173

///Открыть в браузере (Доступ к приложению)///:

1. Пользовательский магазин  http://localhost:5173
2. Админ-панель (вход) http://localhost:5173/admin/login  (нужен логин: admin /пароль: 741ws_ )
3. Swagger (Auth) http://localhost:8000/docs
4. Список товаров http://localhost:8001/products
5. Список заказов http://localhost:8002/orders

///JWT и безопасность///
1. В админке можно проверить: F12 → Network → PUT /orders/.../status → Request Headers → должна быть строка Authorization




