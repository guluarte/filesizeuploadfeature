/// <reference path="jquery-1.10.2.intellisense.js" />

$(function () {

    var uploadUrl = "/Home/Upload";
    var maxUploadSize = "1mb";

    var defaultFilters = {
        max_file_size: maxUploadSize,
        mime_types: [
            { title: "Image files", extensions: "jpg,gif,png" },
            { title: "Zip files", extensions: "zip" }
        ]
    };

    // Setup html5 version
    $("#uploader").pluploadQueue({
        // General settings
        runtimes: 'html5,flash,silverlight,html4',
        url: uploadUrl,
        rename: true,
        dragdrop: true,

        filters: defaultFilters,

        // Resize images on clientside if we can
        resize: {
            width: 200,
            height: 200,
            quality: 90,
            crop: true // crop to exact dimensions
        },


        // Flash settings
        flash_swf_url: '/Scripts/Moxie.swf',

        // Silverlight settings
        silverlight_xap_url: '/Scripts/Moxie.xap'
    });

    // All runtimes demo
    // Setup flash version
    $("#flash_uploader").pluploadQueue({
        // General settings
        runtimes: 'flash',
        url: uploadUrl,
        unique_names: true,

        filters: defaultFilters,

        // Resize images on clientside if we can
        resize: { width: 320, height: 240, quality: 90 },

        // Flash settings
        flash_swf_url: '/Scripts/Moxie.swf'
    });


    // Setup silverlight version
    $("#silverlight_uploader").pluploadQueue({
        // General settings
        runtimes: 'silverlight',
        url: uploadUrl,
        unique_names: true,

        filters: defaultFilters,

        // Resize images on clientside if we can
        resize: { width: 320, height: 240, quality: 90 },

        // Silverlight settings
        silverlight_xap_url: '/Scripts/Moxie.xap'
    });

    // Setup html5 version
    $("#html5_uploader").pluploadQueue({
        // General settings
        runtimes: 'html5',
        url: uploadUrl,
        unique_names: true,

        filters: defaultFilters,

        // Resize images on clientside if we can
        resize: { width: 320, height: 240, quality: 90 }
    });


    // Setup html4 version
    $("#html4_uploader").pluploadQueue({
        // General settings
        runtimes: 'html4',
        url: uploadUrl,
        unique_names: true,

        filters: defaultFilters
    });
});