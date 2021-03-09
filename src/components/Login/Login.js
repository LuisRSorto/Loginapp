import React, { useState } from 'react';
/*
import Form from "../Forms/Form";
import FormField from "../Forms/FormField";
import FormAction from "../Forms/FormAction";
*/
function Login(){
  const [formData, setFormData] = useState({
    username : "",
    password : "",
    usernameError : "",
    passwordError: ""
  });

  const _self = this;
  const myOnChange = function(e){
    const { name, value } = e.currentTarget;
    //validaciones
    let error = null;
    if (name ==="password"){
      error = (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/).test(value) ? null :"Contraseña Inválida";
    }
    //
    setFormData({ ...formData, [name]: value , [name + "Error"]: error});
  }
  return (
    /*
    <Form>
      <FormField
        type="text"
        id="username"
        fname="username"
        onChange={myOnChange}
        caption="Correo Electrónico"
        value={formData.username}
        error={formData.usernameError}
        placeholder="Tu correo"
      ></FormField>
      <FormField
        type="password"
        id="password"
        fname="password"
        onChange={myOnChange}
        caption="Contraseña"
        value={formData.password}
        error={formData.passwordError}
        placeholder="Contraseña"
      ></FormField>
      <FormAction
        caption="Enviar"
        onClick={
          (e)=>{
            e.preventDefault();
            e.stopPropagation();
            const { username, password } = formData;
            alert(`Usuario:${username} Psswd:${password}`);
          }
        }
      >
      </FormAction>
    </Form>
    */
    <div class="bg-gray-200 rounded py-16 px-12 m-16 flex flex-col items-center justify-center">
   
    <img class="rounded-full h-32 w-32" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="user avatar" />
    <form method="post" class="mt-8 mb-4">
      <div class="mb-4">
        <label for="userEmail" class="sr-only">Email address</label>
        <input class="border-solid border border-gray-400 rounded px-2 py-3" type="email" id="userEmail" placeholder="Email address" required />
      </div>
      <div>
        <label for="userEmail" class="sr-only">Password</label>
        <input class="border-solid border border-gray-400 rounded px-2 py-3" type="password" id="userPass" placeholder="Password" required />
      </div>
      <div class="my-4 flex items-center">
        <input class="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
        <label for="userRemember">Remember me</label>
      </div>
      <button class="bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3" type="submit">Sign in</button>
    </form>
    
  </div>
  );
}

export default Login;
