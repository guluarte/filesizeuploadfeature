/// <reference path="jquery-1.10.2.intellisense.js" />
$(function () {
    var maxFileUpload = FileAPI.MB * 1;

    $('#file-upload').fileapi({
        clearOnComplete: true,
        maxSize: maxFileUpload, // max file size
        elements: {
            ctrl: { upload: '.js-send', reset: '.js-reset' },
            name: '.js-name',
            size: '.js-size',
            empty: { hide: '.js-info' }
        },
        onSelect: function (evt, data) {
            $('#upload-errors').hide();
            data.all; // All files
            data.files; // Correct files
            if (data.other.length) {
                // errors
                var errors = data.other[0].errors;
                if (errors) {
                    $('#upload-errors').show();
                    $('#upload-errors').html("File is too large: " + errors.maxSize + " bytes when the maximum allowed is " + maxFileUpload + ".");
                } else {
                    $('#upload-errors').html("No errors where detected.");
                }
            }
        }
    });
});