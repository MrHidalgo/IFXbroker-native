"use strict";

/**
 * @name initValidation
 *
 * @description
 */
var initValidation = function initValidation() {
  /**
   *
   * @param form
   */
  var validationSubmitHandler = function validationSubmitHandler(form) {
    $(form).addClass('loading');

    $.ajax({
      type: "POST",
      url: $(form).attr('action'),
      data: $(form).serialize(),
      success: function(response) {
        $(form).removeClass('loading');
        var data = $.parseJSON(response);

        console.log(data.status);

        if (data.status === 'success') {
          // do something I can't test
        } else {
          // $(form).find('[data-error]').html(data.message).show();
        }
      }
    });
  };


  /**
   *
   * @param error
   * @param element
   */
  var validationErrorPlacement = function validationErrorPlacement(error, element) {
    error.appendTo(element.closest('.form__field'));
  };


  /**
   *
   * @param element
   */
  var validationHighlight = function validationHighlight(element) {
    $(element).closest('.form__field').addClass('is-error');
  };


  /**
   *
   * @param element
   */
  var validationUnhighlight = function validationUnhighlight(element) {
    $(element).closest('.form__field').removeClass('is-error');
  };


  /**
   * @description
   */
  $("#eStartedForm").validate({
    submitHandler: function() {
      $('.e-started .support .form__link').click();
    },
    errorPlacement: validationErrorPlacement,
    highlight: validationHighlight,
    unhighlight: validationUnhighlight,
    rules: {
      'e-started_name': 'required',
      // 'e-started_tel': 'required',
      'e-started_email': {
        required: true,
        email: true
      }
    },
    messages: {
      'e-started_name': {
        required: "This field is required",
      },
      // 'e-started_tel': {
      //   required: "This field is required",
      // },
      'e-started_email': {
        required: "This field is required",
        email: "Email is not valid"
      },
    }
  });
};

$(document).ready(function() {
  initValidation();
});
