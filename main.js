let datosJson;
        fetch('resumen.json')
        .then(response=>response.json())
        .then((salida)=>{datosJson=salida;
            let txtBanco=document.getElementById("text__banco");
                txtBanco.textContent=datosJson.banco
            let txtLugarBanco=document.getElementById("text__banco-lugar");
                txtLugarBanco.textContent=datosJson.sucursal
            let txtUsuarioNombre=document.getElementById("text__usuario-nombre");
                txtUsuarioNombre.textContent=datosJson.titular
            let txtUsuarioCuenta=document.getElementById("text__usuario-cuenta");
                txtUsuarioCuenta.textContent=datosJson.nro_cuenta
            let txtDolar=document.getElementById("text__dolar");
                txtDolar.textContent=datosJson.saldo[0].monto
            let txtEuro=document.getElementById("text__euro");
                txtEuro.textContent=datosJson.saldo[1].monto
            let txtSwift=document.getElementById("text__switfid");
                txtSwift.textContent=datosJson.nro_banco
            let txtUltimoIng=document.getElementById("text__ultimoIngresp");
                txtUltimoIng.textContent=datosJson.abierto
        })
        //catch detecta si algo esta fallando el el fecth//
        .catch(function(error){
            alert(error)
        }
        )