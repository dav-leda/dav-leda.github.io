



contenido = (() => {

$('body').append( $('<div/>', {id: 'contenedor'}));

$('#contenedor').css({

    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center',
    'margin-top': '30vh'
    
});


$('#contenedor').append( $('<div/>', {id: 'titulo'}));

$('#titulo').css({

'font-family': 'Germania One',
'font-size': '40px',
'color': 'darkred',
'text-align': 'center'

});

$('#titulo').html(`Hola, soy Vanina Vergman<br>y esta es mi página web<br>🥷🏻`);


})();
