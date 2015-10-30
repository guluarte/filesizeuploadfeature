/// <reference path="jquery-1.10.2.intellisense.js" />
/// <reference path="js/moxie.js" />
$(function () {

    mOxie.Env.swf_url = "/Scripts/moxie/flash/Moxie.min.swf";
    mOxie.Env.silverlight_xap_url = "/Scripts/moxie/silverlight/Moxie.min.xap";

    var fileInput = new mOxie.FileInput({
        browse_button: 'file-picker', // or document.getElementById('file-picker')
        accept: [
            { title: "Almost all", extensions: "jpg,gif,png,zip,exe" } 
        ]
    });

    fileInput.onchange = function (e) {
        // do something to files array
        console.info(e.target.files); // or this.files or fileInput.files

        $.each(e.target.files, function (index, value) {
            $("#upload-info").text("Name: " + value.name + " FileSize: " + value.size);
        });
    };

    fileInput.init(); // initialize    
});