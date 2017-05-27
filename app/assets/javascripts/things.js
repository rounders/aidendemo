$(function() {
  $('#thing-form input[type=radio]').on('change', function() {
    if ($(this).val() === "custom" ) {
      $('#custom-value').show();
    } else {
      $('#custom-value').hide();
    }
  });

  $('#thing-form').on('submit', function() {
    if ($('#thing-form input[type=radio]:checked').val() === "custom") {
      var customValue = $('#custom-value').val();
      $('#custom-option').val(customValue);
    }
  });
});
