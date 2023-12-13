const confirmReservation = (name, date) => {
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
    
    <h3 style="font-family: 'Rock Salt'">¡Confirmación de Reserva de Turno!</h3>
     <h5 style="font-family: 'Rock Salt'">Estamos encantados de confirmar tu reserva de turno con ${name} el ${date}.</h5>
    <p style="font-size: 1.1em;font-weight: bold; " >Por favor, llega puntual para asegurar una experiencia fluida. Si por alguna razón necesitas cancelar o modificar tu turno, puedes hacerlo directamente desde tu perfil en nuestra plataforma..</p> <br><br>
    <p style="font-size: 1.1em;font-weight: bold;"> Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en ponerte en contacto con nosotros a través de connectinkproject@gmail.com.</p>
    <div style="text-align: center;margin-top: 3em">
        <button style="background-color: #20C6DA; color: #FFFFFF ;font-family: 'Rock Salt'; padding: 10px 20px; border: none; text-decoration: none; font-size: 16px; transition: background-color 0.3s">
            <a href="https://connectink.vercel.app/user-dashboard/reservas" style="color: inherit; text-decoration: none;">Ver detalle de reserva</a>
        </button>
    </div>
    <div style="text-align: center;margin-top: 3em">
        <a href="https://connectink.vercel.app/">
     <img src="https://i.postimg.cc/qRx1pYf3/logoconec.png" alt="ConnectInk" style="width: 15rem; height: auto;"></a></div> 
    </div>
    `;
};
module.exports = confirmReservation;
