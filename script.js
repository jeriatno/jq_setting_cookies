<script>

//Store into cookies
function setCookie() {
  if ($('#remember').attr('checked')) {
    var username = $('#username').attr("value");
    var password = $('#password').attr("value");

    // set cookies to expire in 14 days
    $.cookie('username', username, { expires: 14 });
    $.cookie('password', password, { expires: 14 });
    $.cookie('remember', true, { expires: 14 });
  } 
  else {
    // reset cookies
    $.cookie('username', null);
    $.cookie('password', null);
    $.cookie('remember', null);
  }
}

function getCookie() {
  var remember = $.cookie('remember');
  
  if ( remember == 'true' ) {
    var username = $.cookie('username');
    var password = $.cookie('password');
    
    // autofill the fields
    $('#username').attr("value", username);
    $('#password').attr("value", password);
  }
}

</script>
