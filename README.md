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

 - Próxima Carrera: mostrar en el inicio de la app el tiempo restante para la próxima carrera, así como datos/imagen del circuito.

 - Historial de piloto: mostrar la posición de un piloto concreto (por nombre o por id) en sus últimas 5-10 carreras (número fijo). Si es podio, color que resalte el buen resultado (verde) y así sucesivamente hasta el último lugar. Si es NF, color negro, por ejemplo.

- Imagen por defecto: como la api no propociona imágenes de pilotos o de circuitos, y es inviable hardcodear imágenes para todos los datos de la api, sería buena idea tener unas imágenes por defecto para cada tipo de dato: Circuito, piloto, temporada, escudería...

- Preferencias temporales:

## Requisitos

Marcar los requisitos que se vayan cumpliendo

- Utilizar la versión 0.71 de React Native. ✓
- Utilizar FlatList o SectionList
- Hacer llamadas a un backend usando fetch u otra librería.
- Almacenar algo en persistencia: caché o preferencias con AsyncStorage, o una base de datos con React Native SQLite 2.
- Introducir navegación de cualquier tipo (stack o tab bar) con React Navigation. ✓
- Añadir animaciones imperativas o declarativas.
- Crear uno o más módulos nativos