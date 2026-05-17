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

___ДЗ 5: панель управления для администраторов магазина

3 отдельных терминала

Терминал 1 — Auth Service (порт 8000)
cd C:\___\___\Pycharm_abc\microshop
.venv\Scripts\activate
cd auth_service
uvicorn app:app --reload --port 8000

Терминал 2 — Product Service (порт 8001)
cd C:\___\___\Pycharm_abc\microshop
.venv\Scripts\activate
cd product_service
uvicorn app:app --reload --port 8001

Терминал 3 — Order Service (порт 8002)
cd C:\___\___\Pycharm_abc\microshop
.venv\Scripts\activate
cd order_service
uvicorn app:app --reload --port 8002

Запуск фронтенда (React)

Откройте 4-й терминал
cd C:\___\___\Pycharm_abc\frontend-shop_2
npm run dev

Открыть в браузере:

Пользовательская часть	http://localhost:5173

Админка (вход)	http://localhost:5173/admin/login (нужен логин/пароль)

Админка (панель)	http://localhost:5173/admin