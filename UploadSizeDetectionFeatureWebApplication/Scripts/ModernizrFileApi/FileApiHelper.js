/// <reference path="jquery-1.10.2.intellisense.js" />
/// <reference path="../modernizr-2.6.2.js" />

$(function () {

    var detectFileSize = function (elementId) {

        var element = document.getElementById(elementId);

        if (Modernizr.filereader) {
            return element.files[0].size;
        }

        if (window.ActiveXObject) {

            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var filepath = element.value;
            var thefile = fso.getFile(filepath);
            return thefile.size;
        }

        // Fallback to Flash


    };

    $('#file-upload').bind('change', function () {

        console.log(detectFileSize("file-upload"));

    });
});