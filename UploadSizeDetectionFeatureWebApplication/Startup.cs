using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(UploadSizeDetectionFeatureWebApplication.Startup))]
namespace UploadSizeDetectionFeatureWebApplication
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
