function divEscapedContentElement(message){
  return $('<div></div>').text(message);
}
function divSystemContentElement(message){
  return $('<div></div>').html('<i>' + message + '</i>')
}

function processUserInput(chatApp,socket){
  var message = $('#send-message').val();
  var systemMessage;

  if(message.chatAt(0) == '/'){
    systemMessage = chatApp.processCommand(message);
    if(systemMessage){
      $('#messages').append(divSystemContentElement(systemMessage));
    }
  }else{
    chatApp.sendMessage($('#room'.text(),message);
    $('#messages').append(divEscapedContentElement(message));
    $('#messages').scrollTip($('#messages').prop('scrollHeight'));
  }
  $('#send-message').val('');
}
