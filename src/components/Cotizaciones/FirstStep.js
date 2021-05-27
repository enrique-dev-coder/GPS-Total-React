import React from "react";
import { Button, TextField } from "@material-ui/core";

const FirstStep =()=>{
    return(
    <div>
        <div class="input-field col s6">
          <input id="first_name" type="text" className="validate"/>
          <label for="first_name">Escriba su nombre</label>
        </div>
        
        <div class="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label for="email">Email</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" class="validate"/>
          <label for="icon_telephone">Telephone</label>
        </div>
        <Button color="primary">Siguiente</Button>
    </div>


    )
}
 export default FirstStep