/*
 * @namespace list
 * @description Functions Project
 *
 * Behaviours supported & required *
 * - Hide Menu
 * - Fullscreen
 * - Channels

 * @copyright (c) 2020 -- iSuriv
 * @requires jQuery
 */


/**
* @function
* @name Hide Menu
* @description Function list channels
*/

function hideChannels (){
  $('section h2').on('click', function(){
    if ($(this).hasClass('open')){
      $(this).next().removeClass('visible');
      $(this).removeClass('open');
    }else{
      $(this).addClass('open');
      $(this).next().addClass('visible');
    }
  })
}

 /**
* @function
* @name Channels
* @description Function list channels
*/

function channels(){
  var channelList;
  $.getJSON("https://raw.githubusercontent.com/Suriv/cp_json/master/channel.json", function(data){
    $.each(data.channels, function(i, field){
      channelList = '<li><img src='+field.img+' alt="'+field.channel+'" title="'+field.channel+'"/><span>'
      if(field.live!= ''){
        channelList +='<a href='+field.live+' rel="nofollow">Directo</a>';
      }
      if(field.demand!= ''){
        channelList +='<a href='+field.demand+' title="vídeo bajo demanda"r el="nofollow">VOD</a>';
      }
      channelList +='</span></li>';
      $('.tv ul').append(channelList)
    });

    $.each(data.plataforms, function(i, field){
      channelList = '<li><img src='+field.img+' alt="'+field.channel+'"/><span><a href='+field.live+' rel="nofollow">Acceder</a></span></li>';
      $('.plat ul').append(channelList)
    });
  });
}

$(function () {
  hideChannels ();
  channels();
});
