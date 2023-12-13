const welcomeCustomer = (name) => {
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

  <h3 style="font-family: 'Rock Salt'">¡${name}, bienvenido/a a  <span  style="font-family: 'Rock Salt', cursive; ;">
      Connect
      <span style="color: #20C6DA ;">
        Ink<span >!</span>
      </span></h3>
   <p style=" font-size: 1.1em ;font-weight:bold">Gracias por confiar en nosotros para tu experiencia de tatuaje única. Somos tu plataforma de referencia para descubrir talentosos tatuadores y agendar tus próximos tatuajes.</p>
  <p style=" font-size: 1.1em;font-weight: bold; " >Explora nuestra selección de tatuadores y descubre su arte excepcional. Cuando encuentres al artista perfecto, ¡agenda tu turno con facilidad!</p>
 
  <div style="text-align: center;margin-top: 3em">
      <button style="background-color: #20C6DA; color: #FFFFFF ;font-family: 'Rock Salt'; padding: 10px 20px; border: none; text-decoration: none; font-size: 16px; transition: background-color 0.3s">
          <a href="https://connectink.vercel.app/explore" style="color: inherit; text-decoration: none;">Empieza tu experiencia ConnectInk!</a>
      </button>
  </div>
 <div style="text-align: center;margin-top: 3em">
  <a href="https://connectink.vercel.app/explore">
<img src="https://i.postimg.cc/qRx1pYf3/logoconec.png" alt="ConnectInk" style="width: 15rem; height: auto;"></a></div> 
</div>
    `;
};

module.exports = welcomeCustomer;
