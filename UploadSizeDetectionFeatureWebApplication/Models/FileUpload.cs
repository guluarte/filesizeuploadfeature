namespace UploadSizeDetectionFeatureWebApplication.Models
{
    public class FileUpload
    {

        public string FileName { get; set; }

        public string FileContentType { get; set; }

        public byte[] FileBytes { get; set; }
    }
}