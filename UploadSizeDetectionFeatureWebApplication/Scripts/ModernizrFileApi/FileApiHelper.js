/// <reference path="jquery-1.10.2.intellisense.js" />
/// <reference path="../modernizr-2.6.2.js" />

$(function () {

    var Mb = 1048576;
    var maxFileSize = Mb * 1;

    var fileInputId = "file";

    var detectFileSize = function (elementId) {

        var element = document.getElementById(elementId);

        // If supported use the HTML5 API
        if (window.FileReader || "FileReader" in window || typeof FileReader !== "undefined") {
            return element.files[0].size;
        }

        // Fallback to ActiveX
        if (window.ActiveXObject) {

            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var filepath = element.value;
            var thefile = fso.getFile(filepath);
            return thefile.size;
        }

        return -1;

    };

    var bytesToMegabytes = function(bytes) {
        return bytes / Mb;
    }

    $("#" + fileInputId).bind("change", function () {

        console.log(detectFileSize(fileInputId));

        var uploadFileSize = detectFileSize(fileInputId);

        if (uploadFileSize > maxFileSize) {
            $("#result").html("The file is too big: " + bytesToMegabytes(uploadFileSize) + " Mb");
            $("#submit").attr('disabled', 'disabled');
        } else {
            $("#result").html("OK: " + bytesToMegabytes(uploadFileSize) + " Mb");
            $("#submit").removeAttr('disabled');
        }

    });
});