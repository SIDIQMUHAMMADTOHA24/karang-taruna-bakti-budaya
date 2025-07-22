import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
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
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Jl. Persandian km 6.<br />
                  Dsn. Puyang, Ds. Purwoharjo,<br />
                  Kec. Samigaluh, Kab. Kulon Progo,<br />
                  Prov. DIY 55673
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <p className="text-sm text-muted-foreground">+62 xxx-xxxx-xxxx</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <p className="text-sm text-muted-foreground">info@karangtaruna-baktibudaya.org</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
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