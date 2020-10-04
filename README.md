# rolonas

Challenge:
Diseñar un proyecto personal que permita implementar un CRUD para realizar backend con Node.js y base de datos (SQL/NoSQL a elección). Se debe entregar mockup, diseño de la base de datos y lista de funcionalidades que tendrá el proyecto.

rolonas: Una app que guarda canciones con su respectivo artista y su respectivo album.

La aplicación será creada con mongoDB como base de datos, por lo que estaríamos hablando de una base de datos no relacional. La idea sería que obtengamos estas canciones de la API de spotify, que las obtengamos y una vez seleccionada la cancion la agreguemos a la base de datos. Pudiendo crear listas de canciones.

En otro caso podríamos obtener los datos de la cancion (titulo, artista, album) por medio de una interfaz que permita ingresar de forma escrita la informacion, mandando entonces una peticion post a la base de datos y mediante la misma interfaz poder realizar una peticion de get para listar todas las canciones o mostrar una por una en una vista que ocupe toda la pantalla.

Aplicacion donde se tendrán las siguientes funcionalidades:

-Agregar una canción a la lista.

-Remover una cancion de la lista.

-Obtener la lista y mostrarla en pantalla.

-Editar datos de una canción de la lista.
