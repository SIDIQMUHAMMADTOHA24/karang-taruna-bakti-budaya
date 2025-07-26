import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { PiTiktokLogo } from "react-icons/pi";
import useOrganizationDetails from "./OrganizationDetails";

const Footer = () => {
  const { details, loading } = useOrganizationDetails();

  return (
    <footer className="bg-gradient-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/671d1852-2c33-4e59-9371-e2fa9664b1ed.png" 
                alt="Karang Taruna Bakti Budaya Logo" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-lg font-bold text-foreground">Karang Taruna</h3>
                <p className="text-sm text-muted-foreground">Bakti Budaya</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Organisasi kepemudaan yang bergerak dalam pemberdayaan masyarakat, 
              pelestarian budaya, dan pengembangan potensi generasi muda.
            </p>
            {details?.masa_jabatan && (
              <p className="text-xs text-muted-foreground">
                Periode: {details.masa_jabatan}
              </p>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Kontak Kami</h4>
            <div className="space-y-3">
              {details?.alamat && (
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    {details.alamat}
                  </p>
                </div>
              )}
              {details?.no_telp && (
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">{details.no_telp}</p>
                </div>
              )}
              {details?.email && (
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">{details.email}</p>
                </div>
              )}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Ikuti Kami</h4>
            <div className="flex space-x-4">
              {details?.instagram_url && (
                <a 
                  href={details.instagram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {details?.facebook_url && (
                <a 
                  href={details.facebook_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
                {details?.tiktok_url && (
                <a 
                  href={details.tiktok_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <PiTiktokLogo className="h-5 w-5" />
                </a>
              )}
              {details?.yt_url && (
                <a 
                  href={details.yt_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              Tetap terhubung dengan kegiatan dan program terbaru kami melalui media sosial.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Karang Taruna Bakti Budaya. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;