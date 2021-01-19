



contenido = (() => {

$('body').append( $('<div/>', {id: 'contenedor'}));

$('#contenedor').css({

    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center',
    'margin-top': '50vh'
    
});


$('#contenedor').append( $('<div/>', {id: 'titulo'}));

$('#titulo').css({

"font-family": "Germania One",
"font-size": "100px",
"color": "purple",

});

$('#titulo').text('Hola, soy Vanina Vergman y esta es mi página web.');


})();
