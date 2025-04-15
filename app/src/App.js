import axios from "axios";
import {useEffect, useState } from "react";

function App(){

    const [usuario, setUsuario] = useState({
                email: "",   
                nome: "",
                sobreNome: "",
                foto: ""

    });

    useEffect(()=>{
        const buscarUsuario = async() =>{
            const result = await axios.get("https://randomuser.me/api");
            setUsuario({
                email: result.data.results[0].email,
                nome: result.data.results[0].name.first,
                sobreNome: result.data.results[0].name.last,
                foto: result.data.results[0].picture.medium,

            });
        }
        buscarUsuario();
    }, []);

    console.log("Usuario", usuario);

    return(
        <div>
            
        </div>
    )

    /*const [email, setEmail] = useState();

    useEffect(() => {
        const buscarUsuario = async() => {
            const result = await axios.get("https://randomuser.me/api")
            setEmail(result.data.results[0].email)
        };
        buscarUsuario();
    }, []);

    return(
        <div>
            <p>{email}</p>
        </div>
    )*/
}

export default App;