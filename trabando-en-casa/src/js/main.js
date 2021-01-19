


ver = (que_ver) => console.log(`%c${que_ver} 🥳`,`color: navy; background-color: beige`);

esperar = (funcion, segundos) => setTimeout( () => typeof(funcion)==='function'? funcion() : ver('error'), segundos * 1000)



//       _____                   _                    _       _         
//      / ____|                 | |                  (_)     | |        
//     | |        ___    _ __   | |_    ___   _ __    _    __| |   ___  
//     | |       / _ \  | '_ \  | __|  / _ \ | '_ \  | |  / _` |  / _ \ 
//     | |____  | (_) | | | | | | |_  |  __/ | | | | | | | (_| | | (_) |
//      \_____|  \___/  |_| |_|  \__|  \___| |_| |_| |_|  \__,_|  \___/ 
//                                                                      
//                                                                      



contenido = () => {

  
    cargar_sonidos(); 

    $('body').append( $('<div/>', {id: 'contenedor'}));

    $('head').append( $("<style/>", {type: 'text/css'}) );
    
    $('#contenedor')
    .append( $('<img/>', {class: 'imagen', src: 'src/imagenes/titulo.png'}))
    .append( $('<div/>', {id: 'dibujo', class: 'imagen'}));
    
    $('#dibujo')
    .append( $('<img/>', {class: 'imagen', src: 'src/imagenes/girl.png'}));

    pie(); humito(); gato(); mosca(); boton_sonido();

    esperar(mostrar, 1)

    
     
    
};

mostrar = () => $('#contenedor').animate( {opacity: '1'}, 'slow', 'swing' );



//       _____                                                                 _       _               
//      / ____|                                                               (_)     | |              
//     | |        __ _   _ __    __ _    __ _   _ __     ___    ___    _ __    _    __| |   ___    ___ 
//     | |       / _` | | '__|  / _` |  / _` | | '__|   / __|  / _ \  | '_ \  | |  / _` |  / _ \  / __|
//     | |____  | (_| | | |    | (_| | | (_| | | |      \__ \ | (_) | | | | | | | | (_| | | (_) | \__ \
//      \_____|  \__,_| |_|     \__, |  \__,_| |_|      |___/  \___/  |_| |_| |_|  \__,_|  \___/  |___/
//                               __/ |                                                                 
//                              |___/                                                                  


cargar_sonidos = () => {
    
    window.miau = new Audio('src/sonidos/miau.mp3');
    miau.preload = 'auto';
    miau.muted = true;
    miau.volume = 0.5;
  
    window.zumbido = new Audio('src/sonidos/mosca.mp3');
    zumbido.preload = 'auto';
    zumbido.muted = true;
    zumbido.volume = 0.7;
    zumbido.loop = true;
   
}



//      ____            _       __                                    _       _         
//     |  _ \          | |     /_/                                   (_)     | |        
//     | |_) |   ___   | |_    ___    _ __      ___    ___    _ __    _    __| |   ___  
//     |  _ <   / _ \  | __|  / _ \  | '_ \    / __|  / _ \  | '_ \  | |  / _` |  / _ \ 
//     | |_) | | (_) | | |_  | (_) | | | | |   \__ \ | (_) | | | | | | | | (_| | | (_) |
//     |____/   \___/   \__|  \___/  |_| |_|   |___/  \___/  |_| |_| |_|  \__,_|  \___/ 
//                                                                                      
//                                                                                      

boton_sonido = () => {

    crearCSS `

        #sound {
            position: relative;
            width: 20px;
            height: 20px;   
            bottom: 480px;
            left: 40%;  
            z-index: 4;     
        }
    `;

    $('#contenedor')
    .append( $('<img/>', {id: 'sound', src: 'src/imagenes/sound-icon-off.png'}));

    on_off();
}

on_off = () => {

    $('#sound').on ('click touchstart', () => {

        $('#sound').off();
        
        let icono = $('#sound').attr('src');
        
        if (icono=='src/imagenes/sound-icon-off.png') {
            $('#sound').attr('src', 'src/imagenes/sound-icon-on.png');
            zumbido.muted = false; zumbido.play(); miau.muted = false;
            esperar(on_off, 0.5)
        }else{
            $('#sound').attr('src', 'src/imagenes/sound-icon-off.png');
            zumbido.paused; zumbido.muted = true; miau.muted = true;
            esperar(on_off, 0.5)
        }
     })  

}



//      ______         _     _   _                    _____    _____    _____ 
//     |  ____|       | |   (_) | |                  / ____|  / ____|  / ____|
//     | |__     ___  | |_   _  | |   ___    ___    | |      | (___   | (___  
//     |  __|   / __| | __| | | | |  / _ \  / __|   | |       \___ \   \___ \ 
//     | |____  \__ \ | |_  | | | | | (_) | \__ \   | |____   ____) |  ____) |
//     |______| |___/  \__| |_| |_|  \___/  |___/    \_____| |_____/  |_____/ 
//                                                                            
//                                                                            


$('head').append( $('<style/>', {type: 'text/css'}) );

crearCSS = estilo => $('style').append(estilo);

crearCSS `

.imagen {
    position: relative;
    padding-top: 40px;
    align-self: center;
    width: 100%;
    max-width: 300px;
    height: auto;
    opacity: 1;
    margin-left: 0;
    margin-right: 0;
}

body {
    font-family: Sacramento;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column; 
}

#contenedor {
    opacity: 0;
    display: flex;
    flex-direction: column;
    position: relative;
    align-self: center;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: auto;
    margin: 2rem auto;    
}`;






/* 


                  _                              _     __                      _         
                 (_)                            (_)   /_/                     (_)        
   __ _   _ __    _   _ __ ___     __ _    ___   _    ___    _ __      _ __    _    ___  
  / _` | | '_ \  | | | '_ ` _ \   / _` |  / __| | |  / _ \  | '_ \    | '_ \  | |  / _ \ 
 | (_| | | | | | | | | | | | | | | (_| | | (__  | | | (_) | | | | |   | |_) | | | |  __/ 
  \__,_| |_| |_| |_| |_| |_| |_|  \__,_|  \___| |_|  \___/  |_| |_|   | .__/  |_|  \___| 
                                                                      | |                
                                                                      |_|                

*/



pie = () => {

  $('#dibujo').append( $('<img/>', {id: 'pie', src: 'src/imagenes/pie.png'} ) );

  let x = (window.matchMedia('(max-device-width:800px)').matches) ? '34.5%' : '104.5px';
  let y = (window.matchMedia('(max-device-width:800px)').matches) ? '11.5%' : '48px';

  crearCSS (`
    #pie {
      position: absolute;
      width: 40px;
      height: auto;   
      left: ${x};  
      bottom: ${y};
    }
  `);

  pie_atras();
};


pie_atras = () => {
    
  $("#pie").rotate({
    angle: -20,
    center: ["80%", "10%"],
    animateTo: 0,
    easing: $.easing.easeInOutSine,
    callback: pie_adelante
  });
}

pie_adelante = () => {

  $("#pie").rotate({   
      angle: 0,
      center: ["80%", "10%"],
      animateTo: -20,
      easing: $.easing.easeInOutSine,
      callback: pie_atras
  });
}





/* 
  _                           _   _                               __     __     
 | |                         (_) | |                             / _|   /_/     
 | |__    _   _   _ __ ___    _  | |_    ___       ___    __ _  | |_    ___     
 | '_ \  | | | | | '_ ` _ \  | | | __|  / _ \     / __|  / _` | |  _|  / _ \    
 | | | | | |_| | | | | | | | | | | |_  | (_) |   | (__  | (_| | | |   |  __/    
 |_| |_|  \__,_| |_| |_| |_| |_|  \__|  \___/     \___|  \__,_| |_|    \___|    
                                                                                
   */                                                                                                                                                           


humito = () => {

    crearCSS ` 
      #humito {
          text-align: center;
          position: absolute;
          width: 12px;
          height: 24px;   
          bottom: 48%;
          left: 30%;
          opacity: 0;
          z-index: 1;
    }`;

    $('#dibujo')
    .append( $('<img/>', {id: 'humito', src: 'src/imagenes/humito.png'}));

    setInterval(animacion_humito, 100)
}

animacion_humito = () => {

    $('#humito')
    .animate( {opacity: '1', bottom: '52%'}, 'slow')
    .animate( {opacity: '0'}, 'slow')
    .animate( {bottom: '48%'}, 'fast')
}





/*                    

   _____    _____    _____             _____           _            
  / ____|  / ____|  / ____|           / ____|         | |           
 | |      | (___   | (___    ______  | |  __    __ _  | |_    ___   
 | |       \___ \   \___ \  |______| | | |_ |  / _` | | __|  / _ \  
 | |____   ____) |  ____) |          | |__| | | (_| | | |_  | (_) | 
  \_____| |_____/  |_____/            \_____|  \__,_|  \__|  \___/  
                                                                    
*/                                                                 




gato = () => {

    crearCSS `
        #gato {
            position: absolute;
            width: 97px;
            height: 60px;   
            bottom: 0px;
            left: 0px;
            z-index: 2;
            opacity: 0;
            background-color: black;
        }
        #miau {
            font-size: 30px;
            text-align: center;
            position: absolute;
            width: 60px;
            height: 30px;   
            bottom: 65px;
            left: 0px;
            opacity: 0;
            z-index: 1;
        }
        #gato_despierto {
            position: absolute;
            width: 32.33%;
            max-width: 97px;
            height: auto;  
            bottom: 8px;
            left: 0;
            z-index: 1;
            opacity: 0;
        }
    `;

    $('#dibujo')
    .append( $('<img/>', {id: 'gato_despierto', src: 'src/imagenes/gato.png'}))
    .append( $('<div/>', {id: 'gato'}))
    .append( $('<div/>', {id: 'miau'}));

    $('#miau').text('miau');

    toca_el_gato()
}

toca_el_gato = () => {
    $('#gato').on ('click touchend', () => { maullar() })       
}


/* 

                  _                              _     __          
                 (_)                            (_)   /_/          
   __ _   _ __    _   _ __ ___     __ _    ___   _    ___    _ __  
  / _` | | '_ \  | | | '_ ` _ \   / _` |  / __| | |  / _ \  | '_ \ 
 | (_| | | | | | | | | | | | | | | (_| | | (__  | | | (_) | | | | |
  \__,_| |_| |_| |_| |_| |_| |_|  \__,_|  \___| |_|  \___/  |_| |_|
                 | |                                               
   __ _    __ _  | |_    ___                                       
  / _` |  / _` | | __|  / _ \                                      
 | (_| | | (_| | | |_  | (_) |                                     
  \__, |  \__,_|  \__|  \___/                                      
   __/ |                                                           
  |___/                                                            

 */

maullar = () => {

    $('#gato').off();

    miau.play();
        
    $('#gato_despierto').animate( {opacity: '1.0'}, 10)
    $('#miau')
        .animate( {opacity: '1.0'}, 1 )
        .delay(100)
        .animate( {bottom: '100px', opacity: '0'}, 'slow', volver()
    );
}

volver = () => {

    $('#miau').css( {'opacity': '0', 'bottom': '70px' } );
    $('#gato_despierto').animate( {opacity: '0'}, 'slow');

    esperar(toca_el_gato, 1)
}






/* 
                  _                              _     __                                                      
   __ _   _ __   (_)  _ __ ___     __ _    ___  (_)   /_/    _ __      _ __ ___     ___    ___    ___    __ _  
  / _` | | '_ \  | | | '_ ` _ \   / _` |  / __| | |  / _ \  | '_ \    | '_ ` _ \   / _ \  / __|  / __|  / _` | 
 | (_| | | | | | | | | | | | | | | (_| | | (__  | | | (_) | | | | |   | | | | | | | (_) | \__ \ | (__  | (_| | 
  \__,_| |_| |_| |_| |_| |_| |_|  \__,_|  \___| |_|  \___/  |_| |_|   |_| |_| |_|  \___/  |___/  \___|  \__,_| 
                                                                                                               

 */
  
mosca = () => {

    crearCSS `
        #mosca {
            position: absolute;
            width: 15px;
            height: 15px;   
            top: 40px;
            left: 50px;  
            z-index: 3;    
        }
    `;

    $('#dibujo')
    .append( $('<img/>', {id: 'mosca', src: 'src/imagenes/mosca.png'}))
    
    animar_mosca(); 
}

animar_mosca = () => {

    angulo = 90; radio = 40; altura = 0; 

    timer = setInterval(volar, 1)
}

volar = () => {  

    radian = angulo * (Math.PI / 180);
    $('#mosca').css({
        left: Math.cos(radian) * radio + 'px',
        top: altura + radio * (1 - Math.sin(radian))  + 'px'
    });
    angulo -= Math.random();
    altura > 250 ? pica() : altura += 0.1;
}

pica = () => {

    zumbido.paused; maullar(); clearInterval(timer);

    $('#mosca')
    .animate( {top: '0px', left: '0px'}, 'slow', 'swing', () => animar_mosca() ); 
}






/*                                                                                              
88           88  88                                               88                         
88           ""  88                                               ""                         
88               88                                                                          
88           88  88,dPPYba,   8b,dPPYba,  ,adPPYYba,  8b,dPPYba,  88   ,adPPYba,  ,adPPYba,  
88           88  88P'    "8a  88P'   "Y8  ""     `Y8  88P'   "Y8  88  a8P_____88  I8[    ""  
88           88  88       d8  88          ,adPPPPP88  88          88  8PP"""""""   `"Y8ba,   
88           88  88b,   ,a8"  88          88,    ,88  88          88  "8b,   ,aa  aa    ]8I  
88888888888  88  8Y"Ybbd8"'   88          `"8bbdP"Y8  88          88   `"Ybbd8"'  `"YbbdP"'  
                                                                                             
                                                                                             
 */


/*                                                                  
                                   88                            
                                   ""                            
                                                                 
 ,adPPYba,  ,adPPYYba,  ,adPPYba,  88  8b,dPPYba,    ,adPPYb,d8  
a8P_____88  ""     `Y8  I8[    ""  88  88P'   `"8a  a8"    `Y88  
8PP"""""""  ,adPPPPP88   `"Y8ba,   88  88       88  8b       88  
"8b,   ,aa  88,    ,88  aa    ]8I  88  88       88  "8a,   ,d88  
 `"Ybbd8"'  `"8bbdP"Y8  `"YbbdP"'  88  88       88   `"YbbdP"Y8  
                                                     aa,    ,88  
                                                      "Y8bbdP"    */


// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});








/*                                                                                  
        88    ,ad8888ba,                                                         
        88   d8"'    `"8b                                                        
        88  d8'        `8b                                                       
        88  88          88  88       88   ,adPPYba,  8b,dPPYba,  8b       d8     
        88  88          88  88       88  a8P_____88  88P'   "Y8  `8b     d8'     
        88  Y8,    "88,,8P  88       88  8PP"""""""  88           `8b   d8'      
88,   ,d88   Y8a.    Y88P   "8a,   ,a88  "8b,   ,aa  88            `8b,d8'       
 "Y8888P"     `"Y8888Y"Y8a   `"YbbdP'Y8   `"Ybbd8"'  88              Y88'        
                                                                     d8'         
                                                                    d8'          
                                                                                 
88888888ba                                                                       
88      "8b               ,d                   ,d                                
88      ,8P               88                   88                                
88aaaaaa8P'  ,adPPYba,  MM88MMM  ,adPPYYba,  MM88MMM  ,adPPYba,                  
88""""88'   a8"     "8a   88     ""     `Y8    88    a8P_____88                  
88    `8b   8b       d8   88     ,adPPPPP88    88    8PP"""""""                  
88     `8b  "8a,   ,a8"   88,    88,    ,88    88,   "8b,   ,aa                  
88      `8b  `"YbbdP"'    "Y888  `"8bbdP"Y8    "Y888  `"Ybbd8"'                  
                                                                                 
                                                                                  */

// VERSION: 2.3 LAST UPDATE: 11.07.2013
/*
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * Website: http://jqueryrotate.com
 */

(function($) {
    var supportedCSS,supportedCSSOrigin, styles=document.getElementsByTagName("head")[0].style,toCheck="transformProperty WebkitTransform OTransform msTransform MozTransform".split(" ");
    for (var a = 0; a < toCheck.length; a++) if (styles[toCheck[a]] !== undefined) { supportedCSS = toCheck[a]; }
    if (supportedCSS) {
      supportedCSSOrigin = supportedCSS.replace(/[tT]ransform/,"TransformOrigin");
      if (supportedCSSOrigin[0] == "T") supportedCSSOrigin[0] = "t";
    }

    // Bad eval to preven google closure to remove it from code o_O
    eval('IE = "v"=="\v"');

    jQuery.fn.extend({
        rotate:function(parameters)
        {
          if (this.length===0||typeof parameters=="undefined") return;
          if (typeof parameters=="number") parameters={angle:parameters};
          var returned=[];
          for (var i=0,i0=this.length;i<i0;i++)
          {
            var element=this.get(i);
            if (!element.Wilq32 || !element.Wilq32.PhotoEffect) {

              var paramClone = $.extend(true, {}, parameters);
              var newRotObject = new Wilq32.PhotoEffect(element,paramClone)._rootObj;

              returned.push($(newRotObject));
            }
            else {
              element.Wilq32.PhotoEffect._handleRotation(parameters);
            }
          }
          return returned;
        },
        getRotateAngle: function(){
          var ret = [0];
          for (var i=0,i0=this.length;i<i0;i++)
          {
            var element=this.get(i);
            if (element.Wilq32 && element.Wilq32.PhotoEffect) {
              ret[i] = element.Wilq32.PhotoEffect._angle;
            }
          }
          return ret;
        },
        stopRotate: function(){
          for (var i=0,i0=this.length;i<i0;i++)
          {
            var element=this.get(i);
            if (element.Wilq32 && element.Wilq32.PhotoEffect) {
              clearTimeout(element.Wilq32.PhotoEffect._timer);
            }
          }
        }
    });

    // Library agnostic interface

    Wilq32=window.Wilq32||{};
    Wilq32.PhotoEffect=(function(){

      if (supportedCSS) {
        return function(img,parameters){
          img.Wilq32 = {
            PhotoEffect: this
          };

          this._img = this._rootObj = this._eventObj = img;
          this._handleRotation(parameters);
        }
      } else {
        return function(img,parameters) {
          this._img = img;
          this._onLoadDelegate = [parameters];

          this._rootObj=document.createElement('span');
          this._rootObj.style.display="inline-block";
          this._rootObj.Wilq32 =
            {
              PhotoEffect: this
            };
          img.parentNode.insertBefore(this._rootObj,img);

          if (img.complete) {
            this._Loader();
          } else {
            var self=this;
            // TODO: Remove jQuery dependency
            jQuery(this._img).bind("load", function(){ self._Loader(); });
          }
        }
      }
    })();

    Wilq32.PhotoEffect.prototype = {
      _setupParameters : function (parameters){
        this._parameters = this._parameters || {};
        if (typeof this._angle !== "number") { this._angle = 0 ; }
        if (typeof parameters.angle==="number") { this._angle = parameters.angle; }
        this._parameters.animateTo = (typeof parameters.animateTo === "number") ? (parameters.animateTo) : (this._angle);

        this._parameters.step = parameters.step || this._parameters.step || null;
        this._parameters.easing = parameters.easing || this._parameters.easing || this._defaultEasing;
        this._parameters.duration = 'duration' in parameters ? parameters.duration : parameters.duration || this._parameters.duration || 1000;
        this._parameters.callback = parameters.callback || this._parameters.callback || this._emptyFunction;
        this._parameters.center = parameters.center || this._parameters.center || ["50%","50%"];
        if (typeof this._parameters.center[0] == "string") {
          this._rotationCenterX = (parseInt(this._parameters.center[0],10) / 100) * this._imgWidth * this._aspectW;
        } else {
          this._rotationCenterX = this._parameters.center[0];
        }
        if (typeof this._parameters.center[1] == "string") {
          this._rotationCenterY = (parseInt(this._parameters.center[1],10) / 100) * this._imgHeight * this._aspectH;
        } else {
          this._rotationCenterY = this._parameters.center[1];
        }

        if (parameters.bind && parameters.bind != this._parameters.bind) { this._BindEvents(parameters.bind); }
      },
      _emptyFunction: function(){},
      _defaultEasing: function (x, t, b, c, d) { return -c * ((t=t/d-1)*t*t*t - 1) + b },
      _handleRotation : function(parameters, dontcheck){
        if (!supportedCSS && !this._img.complete && !dontcheck) {
          this._onLoadDelegate.push(parameters);
          return;
        }
        this._setupParameters(parameters);
        if (this._angle==this._parameters.animateTo) {
          this._rotate(this._angle);
        }
        else {
          this._animateStart();
        }
      },

      _BindEvents:function(events){
        if (events && this._eventObj)
        {
          // Unbinding previous Events
          if (this._parameters.bind){
            var oldEvents = this._parameters.bind;
            for (var a in oldEvents) if (oldEvents.hasOwnProperty(a))
              // TODO: Remove jQuery dependency
              jQuery(this._eventObj).unbind(a,oldEvents[a]);
          }

        this._parameters.bind = events;
        for (var a in events) if (events.hasOwnProperty(a))
          // TODO: Remove jQuery dependency
          jQuery(this._eventObj).bind(a,events[a]);
        }
      },

      _Loader:(function()
      {
        if (IE)
          return function() {
            var width=this._img.width;
            var height=this._img.height;
            this._imgWidth = width;
            this._imgHeight = height;
            this._img.parentNode.removeChild(this._img);

            this._vimage = this.createVMLNode('image');
            this._vimage.src=this._img.src;
            this._vimage.style.height=height+"px";
            this._vimage.style.width=width+"px";
            this._vimage.style.position="absolute"; // FIXES IE PROBLEM - its only rendered if its on absolute position!
            this._vimage.style.top = "0px";
            this._vimage.style.left = "0px";
            this._aspectW = this._aspectH = 1;

            /* Group minifying a small 1px precision problem when rotating object */
            this._container = this.createVMLNode('group');
            this._container.style.width=width;
            this._container.style.height=height;
            this._container.style.position="absolute";
            this._container.style.top="0px";
            this._container.style.left="0px";
            this._container.setAttribute('coordsize',width-1+','+(height-1)); // This -1, -1 trying to fix ugly problem with small displacement on IE
            this._container.appendChild(this._vimage);

            this._rootObj.appendChild(this._container);
            this._rootObj.style.position="relative"; // FIXES IE PROBLEM
            this._rootObj.style.width=width+"px";
            this._rootObj.style.height=height+"px";
            this._rootObj.setAttribute('id',this._img.getAttribute('id'));
            this._rootObj.className=this._img.className;
            this._eventObj = this._rootObj;
            var parameters;
            while (parameters = this._onLoadDelegate.shift()) {
              this._handleRotation(parameters, true);
            }
          }
          else return function () {
            this._rootObj.setAttribute('id',this._img.getAttribute('id'));
            this._rootObj.className=this._img.className;

            this._imgWidth=this._img.naturalWidth;
            this._imgHeight=this._img.naturalHeight;
            var _widthMax=Math.sqrt((this._imgHeight)*(this._imgHeight) + (this._imgWidth) * (this._imgWidth));
            this._width = _widthMax * 3;
            this._height = _widthMax * 3;

            this._aspectW = this._img.offsetWidth/this._img.naturalWidth;
            this._aspectH = this._img.offsetHeight/this._img.naturalHeight;

            this._img.parentNode.removeChild(this._img);


            this._canvas=document.createElement('canvas');
            this._canvas.setAttribute('width',this._width);
            this._canvas.style.position="relative";
            this._canvas.style.left = -this._img.height * this._aspectW + "px";
            this._canvas.style.top = -this._img.width * this._aspectH + "px";
            this._canvas.Wilq32 = this._rootObj.Wilq32;

            this._rootObj.appendChild(this._canvas);
            this._rootObj.style.width=this._img.width*this._aspectW+"px";
            this._rootObj.style.height=this._img.height*this._aspectH+"px";
            this._eventObj = this._canvas;

            this._cnv=this._canvas.getContext('2d');
            var parameters;
            while (parameters = this._onLoadDelegate.shift()) {
              this._handleRotation(parameters, true);
            }
          }
      })(),

      _animateStart:function()
      {
        if (this._timer) {
          clearTimeout(this._timer);
        }
        this._animateStartTime = +new Date;
        this._animateStartAngle = this._angle;
        this._animate();
      },
      _animate:function()
      {
        var actualTime = +new Date;
        var checkEnd = actualTime - this._animateStartTime > this._parameters.duration;

        // TODO: Bug for animatedGif for static rotation ? (to test)
        if (checkEnd && !this._parameters.animatedGif)
        {
          clearTimeout(this._timer);
        }
        else
        {
          if (this._canvas||this._vimage||this._img) {
            var angle = this._parameters.easing(0, actualTime - this._animateStartTime, this._animateStartAngle, this._parameters.animateTo - this._animateStartAngle, this._parameters.duration);
            this._rotate((~~(angle*10))/10);
          }
          if (this._parameters.step) {
            this._parameters.step(this._angle);
          }
          var self = this;
          this._timer = setTimeout(function()
          {
            self._animate.call(self);
          }, 10);
        }

      // To fix Bug that prevents using recursive function in callback I moved this function to back
      if (this._parameters.callback && checkEnd){
        this._angle = this._parameters.animateTo;
        this._rotate(this._angle);
        this._parameters.callback.call(this._rootObj);
      }
      },

      _rotate : (function()
      {
        var rad = Math.PI/180;
        if (IE)
          return function(angle)
        {
          this._angle = angle;
          this._container.style.rotation=(angle%360)+"deg";
          this._vimage.style.top = -(this._rotationCenterY - this._imgHeight/2) + "px";
          this._vimage.style.left = -(this._rotationCenterX - this._imgWidth/2) + "px";
          this._container.style.top = this._rotationCenterY - this._imgHeight/2 + "px";
          this._container.style.left = this._rotationCenterX - this._imgWidth/2 + "px";

        }
          else if (supportedCSS)
          return function(angle){
            this._angle = angle;
            this._img.style[supportedCSS]="rotate("+(angle%360)+"deg)";
            this._img.style[supportedCSSOrigin]=this._parameters.center.join(" ");
          }
          else
            return function(angle)
          {
            this._angle = angle;
            angle=(angle%360)* rad;
            // clear canvas
            this._canvas.width = this._width;//+this._widthAdd;
            this._canvas.height = this._height;//+this._heightAdd;

            // REMEMBER: all drawings are read from backwards.. so first function is translate, then rotate, then translate, translate..
            this._cnv.translate(this._imgWidth*this._aspectW,this._imgHeight*this._aspectH);	// at least center image on screen
            this._cnv.translate(this._rotationCenterX,this._rotationCenterY);			// we move image back to its orginal
            this._cnv.rotate(angle);										// rotate image
            this._cnv.translate(-this._rotationCenterX,-this._rotationCenterY);		// move image to its center, so we can rotate around its center
            this._cnv.scale(this._aspectW,this._aspectH); // SCALE - if needed ;)
            this._cnv.drawImage(this._img, 0, 0);							// First - we draw image
          }

      })()
      }

      if (IE)
      {
        Wilq32.PhotoEffect.prototype.createVMLNode=(function(){
          document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
          try {
            !document.namespaces.rvml && document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
            return function (tagName) {
              return document.createElement('<rvml:' + tagName + ' class="rvml">');
            };
          } catch (e) {
            return function (tagName) {
              return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
            };
          }
        })();
      }

})(jQuery);







/*                                                                                
             88             88  88           88  88  88                        
             ""             ""  88           ""  88  ""    ,d                  
                                88               88        88                  
8b       d8  88  ,adPPYba,  88  88,dPPYba,   88  88  88  MM88MMM  8b       d8  
`8b     d8'  88  I8[    ""  88  88P'    "8a  88  88  88    88     `8b     d8'  
 `8b   d8'   88   `"Y8ba,   88  88       d8  88  88  88    88      `8b   d8'   
  `8b,d8'    88  aa    ]8I  88  88b,   ,a8"  88  88  88    88,      `8b,d8'    
    "8"      88  `"YbbdP"'  88  8Y"Ybbd8"'   88  88  88    "Y888      Y88'     
                                                                      d8'      
                                                                     d8'        */


// Función para modificar la 
// propiedad 'visibility' de CSS:

(function($) {
  $.fn.invisible = function() {
      return this.each(function() {
          $(this).css("visibility", "hidden");
      });
  };
  $.fn.visible = function() {
      return this.each(function() {
          $(this).css("visibility", "visible");
      });
  };
}(jQuery));
