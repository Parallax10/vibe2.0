import NavBar from "../navBar";
export default function Home() {
    const [nuevoNombre, setNuevoNombre] = useState("");
    const [nuevoCorreo, setNuevoCorreo] = useState("");
    const [nuevaContraseña, setNuevaContraseña] = useState("");
    const [nuevaFotoPerfil, setNuevaFotoPerfil] = useState("");
    const [nuevaFotoBanner, setNuevaFotoBanner] = useState("");
    const [privacidad, setPrivacidad] = useState("publico");
    function alternarPrivacidad(opcion) {
        setPrivacidad(opcion);
    }
    return (
        <div>
            <div>
            <NavBar></NavBar>
            </div>
            <div>
                <h1>CONFIGURACION DEL PERFIL</h1>
                <button>GuardarCambios</button>
            </div>
            <div>
                <h1>Cambiar Nombre</h1>
                <input type="text" value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)}></input>
                <h1>Cambiar Correo</h1>
                <input type="text" value={nuevoCorreo} onChange={(e) => setNuevoCorreo(e.target.value)}></input>
                <h1>Cambiar Contraseña</h1>
                <input type="text" value={nuevaContraseña} onChange={(e) => setNuevaContraseña(e.target.value)}></input>
                <h1>Cambiar Foto de perfil</h1>
                <input type="text" value={nuevaFotoPerfil} onChange={(e) => setNuevaFotoPerfil(e.target.value)}></input>
                <h1>Cambiar foto de banner</h1>
                <input type="text" value={nuevaFotoBanner} onChange={(e) => setNuevaFotoBanner(e.target.value)}></input>
                <h1>privacidad del perfil</h1>
                <h2>El perfil es actualmente: {privacidad}</h2>
                <button onClick={() => alternarPrivacidad("publico")}>publico</button>
                <button onClick={() => alternarPrivacidad("privado")}>Privado</button>
                <br/>
                <br/>
                <br/>
                <h1>Borrar cuenta, esto no se puede deshacer</h1>
                <button onClick={alert("esto borraria la cuenta y cerraria sesion")}>Borrar</button>
            </div>
        </div>
    );
}