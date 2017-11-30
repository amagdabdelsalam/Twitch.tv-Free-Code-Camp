$(document).ready(function() { 

    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
        
    channels.forEach(function(channel){
        $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + channel + '?callback=?', function (stream) {
            var status;
            if (stream.stream != null){

                status = 'Online';
                $('.status').addClass('Online');

            }else {
                status = 'Offline'
            }
            console.log(stream.stream)
            $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + channel + '?callback=?', function (user) {

                $('.channels').append('<div class="channel-content"><div class="channel-logo"><img src=" ' + user.logo + '" class="img-responsive" alt=""></div><div class="channel-info"> <h4 class="pull-left">' + user.name + '</h4> <span class="pull-right status">' + status + '</span></di></div> ')
            });
        });        
    });
    
    $(".all").click(function () {
        $("span").each(function () {
            $(this).parentsUntil('.channel-stutas', '.channel-content').removeClass('hide');
            $(this).removeClass('actives');
        });
        $(this).addClass('actives');
    });

    $(".off").click(function () {
        $("span").each(function () {
            if ( $(this).text() == 'Online'){
                $(this).parentsUntil('.channel-stutas','.channel-content').addClass('hide');
            }else {
                $(this).parentsUntil('.channel-stutas','.channel-content').removeClass('hide');
                
            }
            $(this).removeClass('actives');
        });
        $(this).addClass('actives');
    });

    $(".on").click(function () {
        $("span").each(function () {
            if ($(this).text() == 'Offline') {
                $(this).parentsUntil('.channel-stutas', '.channel-content').addClass('hide');
            } else {
                $(this).parentsUntil('.channel-stutas', '.channel-content').removeClass('hide');

            }
            $(this).removeClass('actives');
        });
        $(this).addClass('actives');
    });


});

