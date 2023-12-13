const cancelArtist = (name, date, price) => {
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

    <h3 style="font-family: 'Rock Salt' ;color:red">Tu reserva fue cancelada  </h3>
     <p style=" font-size: 1.1em ;font-weight:bold">Tu turno con ${name}  del día  ${date} fue cancelado.</p>
     <br>
    <br>
    <p style=" font-size: 1.1em;font-weight: bold; " >Ante cualquier duda comunicarse a connectinkproject@gmail.com</p>
    <br>
    <br>
    <p>Atentamente,</p>
    <p>ConnectInk</p>
    
   <div style="text-align: center;margin-top: 3em">
    <a href="https://connectink.vercel.app/">
 <img src="https://i.postimg.cc/qRx1pYf3/logoconec.png" alt="ConnectInk" style="width: 15rem; height: auto;"></a></div> 
</div>
    `;
};

module.exports = cancelArtist;
