const rejectDate = (name, date) => {
  return `
    <div style="max-width: 600px; margin-left: auto; margin-right: auto">
    <div>
        <span  style="font-family: 'Rock Salt', cursive; font-size: 1.5rem;">
                Connect
                <span style="color: #20C6DA ;font-size: 2rem ">
                  Ink<span font-size: 3rem>!</span>
                </span>
              </span>
    </div>
    
    <h3 style="font-family: 'Rock Salt' ;color:red">Tu reserva no se pudo completar </h3>
     <p style="font-family: 'Rock Salt'; font-weight: bold">Tu turno con ${name} no fue procesado, la fecha del mismo era el ${date} </p>
    <p style="font-size: 1.1em;font-weight: bold; " >Si quieres este turno, intenta reservarlo de vuelta volviendo a entrar a la pagina de reservas</p> <br><br>
    <p style="font-size: 1.1em;font-weight: bold;"> Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en ponerte en contacto con nosotros a través de connectinkproject@gmail.com.</p>
    <div style="text-align: center;margin-top: 3em">
        <button style="background-color: #20C6DA; color: #FFFFFF ;font-family: 'Rock Salt'; padding: 10px 20px; border: none; text-decoration: none; font-size: 16px; transition: background-color 0.3s">
            <a href="https://connectink.vercel.app/user-dashboard" style="color: inherit; text-decoration: none;">Volver a realizar reserva</a>
        </button>
    </div>
    <div style="max-width: 600px; margin-left: auto; margin-right: auto">
    <div>
        <span  style="font-family: 'Rock Salt', cursive; font-size: 1.5rem;">
                Connect
                <span style="color: #20C6DA ;font-size: 2rem ">
                  Ink<span font-size: 3rem>!</span>
                </span>
              </span>
    </div>
    
    <h3 style="font-family: 'Rock Salt' ;color:red">Tu reserva no se pudo completar </h3>
     <p style="font-family: 'Rock Salt'; font-weight: bold">Tu turno con ${name} no fue procesado, la fecha del mismo era el ${date} </p>
    <p style="font-size: 1.1em;font-weight: bold; " >Si quieres este turno, intenta reservarlo de vuelta volviendo a entrar a la pagina de reservas</p> <br><br>
    <p style="font-size: 1.1em;font-weight: bold;"> Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en ponerte en contacto con nosotros a través de connectinkproject@gmail.com.</p>
    <div style="text-align: center;margin-top: 3em">
        <button style="background-color: #20C6DA; color: #FFFFFF ;font-family: 'Rock Salt'; padding: 10px 20px; border: none; text-decoration: none; font-size: 16px; transition: background-color 0.3s">
            <a href="https://connectink.vercel.app/user-dashboard" style="color: inherit; text-decoration: none;">Volver a realizar reserva</a>
        </button>
    </div>
    <div style="text-align: center;margin-top: 3em">
        <a href="https://connectink.vercel.app/">
     <img src="https://i.postimg.cc/qRx1pYf3/logoconec.png" alt="ConnectInk" style="width: 15rem; height: auto;"></a></div> 
    </div>
    </div>
    `;
};

module.exports = rejectDate;
