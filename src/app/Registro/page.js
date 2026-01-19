export default function Home() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [Contraseña, setContraseña] = useState("");

    function validarDatos(){
        if(nombre=="" || email=="" || Contraseña==""){
            alert("Por favor complete todos los campos");
        } else {    
            alert("Registro exitoso");
            setNombre("");
            setEmail("");
            setContraseña("");
        }
    }
    return(
        <div>
    <div>
        <img src="/imagenes/Logo.png" width={100} height={90} alt="Logo Vibe" />
    </div>
    <h1>VIBE</h1>
    <div>
        <p>Nombre de usuario</p>
        <input type="text" value={nombre} onChange={(e=>(setNombre(e.target.value)))}></input>
        <br/>
        <p>Email</p>
        <input type="email" value={email} onChange={(e=>(setEmail(e.target.value)))}></input>
        <br/>
        <p>Contraseña</p>
        <input type="password" value={Contraseña} onChange={(e=>(setContraseña(e.target.value)))}></input>
        <br/>
        <button onClick={()=>validarDatos()}>Iniciar sesion</button>
    </div>
    </div>
    );
}