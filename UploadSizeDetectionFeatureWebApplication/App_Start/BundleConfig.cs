using System.Web;
using System.Web.Optimization;

namespace UploadSizeDetectionFeatureWebApplication
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

             
            /* Plupload: http://www.plupload.com/*/ 

            bundles.Add(new ScriptBundle("~/bundles/plupload-js").Include(
                      "~/Scripts/plupload.full.min.js",
                      "~/Scripts/jquery.plupload.queue/jquery.plupload.queue.js",
                      "~/Scripts/moxie.js",
                      "~/Scripts/plupload.dev.js",
                      "~/Scripts/jquery.plupload.queue/jquery.plupload.queue.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/plupload-css").Include(
                      "~/Scripts/jquery.plupload.queue/css/jquery.plupload.queue.css"
                      ));

            bundles.Add(new ScriptBundle("~/bundles/custom").Include(
                        "~/Scripts/custom.js"));

            /* FileApi https://github.com/RubaXa/jquery.fileapi/ */
            bundles.Add(new ScriptBundle("~/Content/fileapi-css").Include(
                      "~/Scripts/FileApi/jcrop/jquery.Jcrop.min.css"
                      ));

            bundles.Add(new ScriptBundle("~/bundles/fileapi-js").Include(
                      "~/Scripts/FileApi/jcrop/jquery.Jcrop.min.js",
                      "~/Scripts/FileApi/FileAPI.min.js",
                      "~/Scripts/FileApi/FileAPI.exif.js",
                      "~/Scripts/FileApi/jquery.fileapi.min.js",
                      "~/Scripts/fileApiCustom.js"
                      ));

            /* https://github.com/moxiecode/moxie */

            bundles.Add(new ScriptBundle("~/bundles/moxie-js").Include(
                      "~/Scripts/moxie/js/moxie.min.js",
                      "~/Scripts/moxie/custom.js"
                      ));

            /* Modernizr and ActiveX */


        }
    }
}
