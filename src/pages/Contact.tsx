import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock, Youtube } from "lucide-react";
import useOrganizationDetails from "@/components/OrganizationDetails";

const Contact = () => {
  const { details, loading } = useOrganizationDetails();

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
            {details?.alamat && (
              <Card className="bg-gradient-card shadow-card border border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Alamat</h3>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {details.alamat}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {details?.no_telp && (
              <Card className="bg-gradient-card shadow-card border border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Telepon</h3>
                      <p className="text-muted-foreground">{details.no_telp}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {details?.email && (
              <Card className="bg-gradient-card shadow-card border border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                      <p className="text-muted-foreground">{details.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

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
                  {details?.instagram_url && (
                    <a 
                      href={details.instagram_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors duration-200 group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                        <Instagram className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Instagram</p>
                        <p className="text-sm text-muted-foreground">Kunjungi halaman Instagram kami</p>
                      </div>
                    </a>
                  )}

                  {details?.facebook_url && (
                    <a 
                      href={details.facebook_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors duration-200 group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                        <Facebook className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Facebook</p>
                        <p className="text-sm text-muted-foreground">Kunjungi halaman Facebook kami</p>
                      </div>
                    </a>
                  )}

                  {details?.tiktok_url && (
                      <a 
                        href={details.tiktok_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors duration-200 group"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 64">
                        <path d="M 23.773438 12 C 12.855437 12 12 12.854437 12 23.773438 L 12 40.226562 C 12 51.144563 12.855438 52 23.773438 52 L 40.226562 52 C 51.144563 52 52 51.145563 52 40.226562 L 52 23.773438 C 52 12.854437 51.145563 12 40.226562 12 L 23.773438 12 z M 21.167969 16 L 42.832031 16 C 47.625031 16 48 16.374969 48 21.167969 L 48 42.832031 C 48 47.625031 47.624031 48 42.832031 48 L 21.167969 48 C 16.374969 48 16 47.624031 16 42.832031 L 16 21.167969 C 16 16.374969 16.374969 16 21.167969 16 z M 32.740234 19.693359 L 32.740234 36.294922 C 32.740234 38.576922 30.756031 39.755859 29.332031 39.755859 C 28.259031 39.755859 25.818359 38.914578 25.818359 36.267578 C 25.818359 33.488578 28.095422 32.779297 29.357422 32.779297 C 30.092422 32.779297 30.380859 32.9375 30.380859 32.9375 L 30.380859 28.507812 C 30.380859 28.507813 29.830172 28.425781 29.201172 28.425781 C 24.682172 28.425781 21.464844 32.083578 21.464844 36.267578 C 21.464844 39.802578 24.229297 44.082031 29.279297 44.082031 C 34.658297 44.082031 37.121094 39.595969 37.121094 36.292969 L 37.121094 28.058594 C 37.121094 28.058594 39.518422 29.736328 42.732422 29.736328 L 42.732422 25.541016 C 39.045422 25.278016 37.0745 22.801359 36.9375 19.693359 L 32.740234 19.693359 z"></path>
                        </svg>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">TikTok</p>
                          <p className="text-sm text-muted-foreground">Kunjungi halaman TikTok kami</p>
                        </div>
                      </a>
                    )}

                  {details?.yt_url && (
                    <a 
                      href={details.yt_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors duration-200 group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                        <Youtube className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">YouTube</p>
                        <p className="text-sm text-muted-foreground">Kunjungi channel YouTube kami</p>
                      </div>
                    </a>
                  )}
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
                  {details?.masa_jabatan && (
                    <p><strong>Periode Kepengurusan:</strong> {details.masa_jabatan}</p>
                  )}
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