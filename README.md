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