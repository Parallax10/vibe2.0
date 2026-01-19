=================VIBE=================
-¿Que es?
    Es un prototipo de aplicacion donde se podran ver y descubrir artistas orientados a la musica, podras añadir tus favoritos a tu perfil y descubrir otros nuevos,esta orientado principalmente al formato Web para que este disponible tanto en ordenadores como en dispositivos moviles.

-¿Como desplegarlo?
    Para desplegarlo tienes que tener descargado Node.js y npm, una vez instalados necesitas ejecutar un cmd, ya sea el integrado en windows o la terminal de visual studio code, en ambos el procedimiento es el mismo, debes de dirigirte hacia la ruta donde este descargado el proyecto en este caso te debes de ubicar dentro de la carpeta "projectodi" y ejecutar el comando "npm install" para instalar las dependencias de npm y luego ejecutar "npm run dev" para que se empieze a renderizar el projecto, en la terminal te aparecera para dirijirte hacia tu "localhost/3000" que es donde se empezara a renderizar la pagina.

-¿Como se usa?
    Esta version no cuenta con apenas funcionalidades, es solo el esqueleto de los componentes de la aplicacion y las paginas que tendra,
    La primera pagina que renderiza corresponderia a la Landing, para acceder a las diferentes paginas a continuacion proporciono lo que debes de poner en la parte superior de tu navegador donde aparecen las url de las paginas web, estas seran las que podran acceder los usuarios sin rango administrador:

       
    -localhost:3000/Login
    -localhost:3000/Registro
    -localhost:3000/Inicio
    -localhost:3000/FiltroGenero
    -localhost:3000/FiltroPais
    -localhost:3000/Perfil
    -localhost:3000/ConfiguracionPerfil
    -localhost:3000/PerfilArtista

    --ACLARACION--
    Las paginas de filtro no son funcionales, deberian de modificar el grid de los artistas para poder filtrar segun pais/genero, pero aun no soy capaz de hacerlo, sera implementado en el futuro.

    Estos serian las paginas a las que unicamente tendran acceso los usuarios de rango administrador, aparte de estas en las paginas de usuarios hay un boton que sirve para alternar a como lo veria un administrador y como lo veria un usuario normal un ejemplo es en la pagina inicio al ser usuario apareceria un boton llamado "sugerir artista" pero siendo administrador seria "añadir artista":
    
    -localhost:3000/ModificarArtista
    -localhost:3000/NuevoArtista

-¿Que tecnologias usa?
    Principalmente usa React y componentes HTML por el momento, en esta version aun no cuenta con diseños en CSS ni formato responsive para verse de forma comoda en dispositivos moviles, tambien para el control de versiones se usa GitHub en una rama develop.

-Funcionalidades previstas:
    Sistema de filtros funcional por género musical.
    Sistema de filtros funcional por país.
    Sistema de favoritos.
    Roles usuario y administrador.
    Añadir y editar artistas.
    Sugerencias de artistas por parte de los usuarios.
    Diseño responsive para dispositivos móviles.
    Estilos con CSS.
    Inicio de sesion y registro de usuarios.
    Persistencia de datos con base de datos.

-Autor:
    https://github.com/Parallax10

-Repositorio en GitHub:
    https://github.com/Parallax10/Vibe
