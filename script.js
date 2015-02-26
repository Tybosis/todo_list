$(document).ready(function() {
  $('#button').on('click', function() {
    var toAdd = $('input[name=todo_item]').val();
    $('.list').append('<div class="item">' + toAdd + '</div>');
  });
  $(document).on('click', '.item', function() {
    $(this).remove();
  });
});
