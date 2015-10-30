using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UploadSizeDetectionFeatureWebApplication.Models;

namespace UploadSizeDetectionFeatureWebApplication.Controllers
{
    public class HomeController : Controller
    {
        private const string UploadPath = "Uploads/";
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult FileApi()
        {
            return View();
        }

        public ActionResult Moxie()
        {
            return View();
        }

        public ActionResult CustomSolution()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Upload(FormCollection formCollection)
        {
            var model = new FileUpload();

            if (Request != null)
            {
                HttpPostedFileBase file = Request.Files["file"];

                if ((file != null) && (file.ContentLength > 0) && !string.IsNullOrEmpty(file.FileName))
                {
                    model.FileName = file.FileName;
                    model.FileContentType = file.ContentType;
                    model.FileBytes = new byte[file.ContentLength];
                    file.InputStream.Read(model.FileBytes, 0, Convert.ToInt32(file.ContentLength));
                    CreateIfMissing(UploadPath);
                    var targetFile = Server.MapPath(UploadPath) + (new FileInfo(file.FileName).Name);
                    System.IO.File.WriteAllBytes(targetFile, model.FileBytes); // Requires System.IO
                }
            }

            return View(model);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        private void CreateIfMissing(string path)
        {
            bool folderExists = Directory.Exists(Server.MapPath(path));
            if (!folderExists)
            {
                Directory.CreateDirectory(Server.MapPath(path));
            }
        }
    }
}