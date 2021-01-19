



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

'font-family': 'Sacramento',
'font-size': '100px',
'color': 'purple',
'text-align': 'center'

});

$('#titulo').html(`Vani es trolo<br>🧚🏻‍♂️`);


})();
