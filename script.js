$(function(){
  //リアクションフォームのアコーディオン
  $('.fa-arrow-circle-down').click(function(){
    var $questionForm = $(this).parent().children('.question-form');
    if($questionForm.hasClass('open')){
      $questionForm.removeClass('open');
      $questionForm.slideUp();
    }
    else{
      $questionForm.addClass('open');
      $questionForm.slideDown();
    }
  });

  $('.tab').click(function(){
    var $tab = $(this);
    if($tab.hasClass('clicked')){
      $tab.removeClass('clicked');
     $('.type').css('display','none');
    }
    //ここの条件考える
    else {
      $('.type').removeClass('clicked');
      $tab.removeClass('tab');
  var tab=$tab.attr("class");
      console.log(tab);
  var a=$(".type").filter(".one").attr("class");
        console.log(a);
//      $('.type').filter(tab).addClass('clicked');
      $tab.addClass('tab');
//      $tab.addClass('clicked');
//      $('.type').css('display','none');
      if($('.type').hasClass($tab)){

      }
    }
  });
/*
  $('.tab-1').click(function(){
    $('.type').css('display','none');
    $('#mechanical').css('display','block');

  });

  $('.tab-2').click(function(){
    $('.type').css('display','none');
    $('#electronical').css('display','block');
  });

  $('.tab-3').click(function(){
    $('.type').css('display','none');
    $('#chemical').css('display','block');
  });

  $('.tab-4').click(function(){
    $('.type').css('display','none');
    $('#zivil').css('display','block');
  });
*/

//ここからcondition.htmlの編集

});
