# rafam-challenge
Repositorio destinado a entregar las aplicaciones solicitadas para el challenge tecnico del proyecto Rafam. 
Consta de dos partes bien diferencidas

## Front-end:
Replica de una pantalla de operacion del proyecto Rafam, desarrollada con React.

## Back-end:
Pequeña api llamada "Friends Lessons System", desarrollada con Django.
Consta de las sgts rutas:
/admin/   -> va al login, user de prueba (username:admin, password:admin123)
/api/users/                           -> list_users
/api/users/<str:username>/            -> get_user
/api/user-friendships/<str:username>/ -> user_friendships
/api/user-lessons/<str:username>/     -> user_lessons
/friendships/                         -> list_friendships
/lessons/                             -> list_lessons
/weather/  -> ruta que integra una api externa para consultar datos del clima

## Hacer un git clone del proyecto

## Prerrequisitos

1. Docker y Docker Compose

## Instalación

1. Crear las imágenes de los contenedores
```
docker-compose build
```

2. Crear y levantar los contenedores
```
docker-compose up
```

NOTA: las aplicaciones tambien se pueden levantar como en cualquier entorno de desarrollo,
###Django: 
*crear un entorno virtual con virtualenv y activarlo 
*instalar las dependencias del requirements txt
*python manage.py runserver

###React:
*npm insatll
*npm start
