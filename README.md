### PABLOS F1

App desarrollada en React Native 0.72 (typescript)

## Guía de instalación

- git clone https://github.com/pfgubeda/f1.git
- npm i
- npm run ios (lo ejecuta por defecto en el simulador de iPhone 14 Pro Max, si se desea otro hay que modificar el script 'ios' del package.json)
- npm run android (no probado aún)


## Notas

- Tiene eslint instalado, si tienes prettier hace cosas raras mientras editas código, checkea que no te autofixee cosas que no querías.

- No hacer force push, si al hacer push da error mirar los conflictos
 
- Para ver los iconos disponibles: https://oblador.github.io/react-native-vector-icons/ . Para su uso recordar especificar que tipo de icono es dado que hay varias fonts distintas.

- API de F1 a usar (en principio) : https://ergast.com/mrd/

- Para cualquier tipo de persistencia yo utilizaría SQLite2 simplemente porque es más completa y maleable por comandos SQL.

## Ideas
 
 - Dream team: añade un constructor y dos pilotos, obtén el resultado de puntos de ambos pilotos y como iría dicho equipo en la temporada actual (nos limitamos a hacer la suma de puntos y a introducirlo donde toque, sin tener en cuenta que esos 2 pilotos no obtendrian puntos para el resto de equipos de la clasificación). Este equipo se puede guardar (tener más de un equipo [?]).

 - Pilotos/Constructor a seguir: sistema de favoritos, muy visto, pero es un recurso sencillo.

 - Próxima Carrera: mostrar en el inicio de la app el tiempo restante para la próxima carrera, así como datos/imagen del circuito.popopopop