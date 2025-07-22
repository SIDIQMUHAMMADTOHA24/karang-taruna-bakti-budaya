import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Hubungi Kami
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami terbuka untuk kolaborasi, pertanyaan, dan saran dari Anda. 
            Mari bersama-sama membangun masyarakat yang lebih baik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <Card className="bg-gradient-card shadow-card border border-border/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Alamat</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Jl. Persandian km 6.<br />
                      Dsn. Puyang, Ds. Purwoharjo,<br />
                      Kec. Samigaluh, Kab. Kulon Progo,<br />
                      Prov. DIY 55673
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border border-border/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Telepon</h3>
                    <p className="text-muted-foreground">+62 xxx-xxxx-xxxx</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border border-border/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">info@karangtaruna-baktibudaya.org</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border border-border/50">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Jam Operasional</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Senin - Jumat: 08:00 - 17:00</p>
                      <p>Sabtu: 08:00 - 15:00</p>
                      <p>Minggu: Tutup</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media & Additional Info */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Social Media */}
            <Card className="bg-gradient-card shadow-card border border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Ikuti Kami</h3>
                <div className="space-y-4">
                  <a 
                    href="#" 
                    className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Instagram</p>
                      <p className="text-sm text-muted-foreground">@karangtaruna_baktibudaya</p>
                    </div>
                  </a>

                  <a 
                    href="#" 
                    className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      <Facebook className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Facebook</p>
                      <p className="text-sm text-muted-foreground">Karang Taruna Bakti Budaya</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Organization Info */}
            <Card className="bg-gradient-card shadow-card border border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Tentang Organisasi</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Karang Taruna Bakti Budaya adalah organisasi kepemudaan yang berkomitmen 
                  untuk pemberdayaan masyarakat dan pelestarian budaya lokal.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Didirikan:</strong> 2020</p>
                  <p><strong>Anggota Aktif:</strong> 50+ orang</p>
                  <p><strong>Program Unggulan:</strong> Pemberdayaan Masyarakat, Pelestarian Budaya</p>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-primary shadow-glow border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-primary-foreground mb-4">
                  Mari Bergabung Dengan Kami
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  Jadilah bagian dari perubahan positif di masyarakat. 
                  Bersama kita bisa menciptakan dampak yang lebih besar.
                </p>
                <div className="space-y-2 text-sm text-primary-foreground/80">
                  <p>• Program Pelatihan Berkala</p>
                  <p>• Kegiatan Sosial & Budaya</p>
                  <p>• Pengembangan Diri & Karir</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;