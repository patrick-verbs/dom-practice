$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
    $('li').css('background-color', 'green');
    $("ul#user").children("li").first().click(function() {
      alert('hi, this message will be removed');
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      alert('hi, this message will also be removed');
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#user").css('background-color', 'teal');
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $("ul#webpage").css('background-color', 'teal');
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#bonjour").click(function() {
    $("ul#user").prepend("<li>Sur le pond d'Avignon...</li>");
    $("ul#webpage").prepend("<li>...on y danse, tout en ronde!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });
});