=================VIBE=================

URL DESPLIEGE: https://project-8lgk1-qjn3avl9y-serteme05-7602s-projects.vercel.app?_vercel_share=zvsdIIRx08O0moMc4qJSTeRoA3lW3mIT

-¿Que es?
Es una aplicacion web donde se pueden ver y descubrir artistas musicales. Los usuarios pueden registrarse, iniciar sesion, añadir artistas y canciones a sus favoritos y descubrir otros nuevos. Esta orientada al formato web y se adapta a dispositivos moviles. Tambien cuenta con funciones de administrador para gestionar todo el contenido.

-¿Como desplegarlo en local?
Para desplegarlo tienes que tener descargado Node.js. Una vez instalado, abre una terminal en la carpeta principal del proyecto y ejecuta el comando "npm install" para instalar las dependencias necesarias.


IMPORTANTE: Antes de iniciar el proyecto, necesitas crear un archivo llamado ".env.local" en la misma carpeta donde esta el package.json. En ese archivo debes poner las variables para conectar la base de datos:
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_de_supabase

Despues de guardar ese archivo, ejecuta "npm run dev" para arrancar el proyecto. Podras verlo abriendo tu navegador en "http://localhost:3000".



-¿Como se usa?
La aplicacion ya tiene todas sus paginas conectadas. Ya no hay un boton manual para cambiar la vista; la pagina detecta automaticamente si eres un usuario normal o un administrador al iniciar sesion, y te muestra las opciones correspondientes.


Las paginas a las que puedes acceder son:
- localhost:3000/Login
- localhost:3000/Registro
- localhost:3000/Inicio
- localhost:3000/FiltroGenero
- localhost:3000/FiltroPais
- localhost:3000/Perfil
- localhost:3000/ConfiguracionPerfil
- localhost:3000/PerfilArtista

Paginas exclusivas para administradores:
- localhost:3000/NuevoArtista
- localhost:3000/ModificarArtista
- localhost:3000/NuevaCancion
- localhost:3000/ModificarCancion



-¿Que tecnologias usa?
Principalmente usa Next.js con React para la parte visual. Para el diseño y que se vea bien en moviles se usa Tailwind CSS.
Para la parte del servidor se usan las rutas de la API de Next.js, y para guardar toda la informacion de forma real se usa una base de datos en Supabase. El control de versiones sigue en GitHub en la rama develop.

-Base de datos y Backend:
La base de datos tiene tablas separadas para guardar a los Usuarios, los Artistas, las Canciones y las listas de Favoritos.
El servidor tiene rutas preparadas para leer, crear, modificar y borrar informacion. Estas rutas estan en la carpeta "api" y son:
- /api/login y /api/registro para controlar el acceso.
- /api/artistas para añadir, ver, editar y borrar artistas.
- /api/canciones para gestionar la musica.
- /api/favoritos para que cada usuario gestione su lista de favoritos.
- /api/perfil para ver y modificar los datos de la cuenta.

-Funcionalidades implementadas:
Sistema de filtros funcional por genero musical.
Sistema de filtros funcional por pais.
Sistema de favoritos para canciones y artistas.
Roles automaticos de usuario y administrador.
Añadir, editar y borrar artistas y canciones de la base de datos.
Diseño adaptado para dispositivos moviles.
Estilos aplicados con Tailwind.
Inicio de sesion y registro de usuarios con control de errores.
Guardado de datos reales con base de datos en Supabase.

-Autor:
[https://github.com/Parallax10](https://github.com/Parallax10)

-Repositorio en GitHub:
[https://github.com/Parallax10/Vibe](https://github.com/Parallax10/vibe2.0)
