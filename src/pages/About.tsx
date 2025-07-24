import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tentang Kami
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mengenal lebih dekat Karang Taruna Bakti Budaya, sejarah, visi misi, 
            dan komitmen kami untuk pemberdayaan masyarakat dan pelestarian budaya lokal.
          </p>
        </div>

        {/* Hero Image and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 animate-fade-in-up">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Karang Taruna Bakti Budaya
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Karang Taruna Bakti Budaya adalah organisasi kepemudaan yang berdiri dengan semangat 
              untuk memberdayakan masyarakat dan melestarikan budaya lokal. Kami berkomitmen untuk 
              menjadi wadah pengembangan potensi generasi muda melalui berbagai program inovatif 
              dan kegiatan yang bermanfaat.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Berakar dari nilai-nilai luhur budaya Indonesia, kami mengembangkan program-program 
              yang tidak hanya melestarikan tradisi, tetapi juga mengadaptasinya dengan perkembangan 
              zaman modern. Setiap kegiatan yang kami selenggarakan dirancang untuk menciptakan 
              dampak positif bagi masyarakat luas.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/lovable-uploads/671d1852-2c33-4e59-9371-e2fa9664b1ed.png"
              alt="Karang Taruna Bakti Budaya Logo"
              className="w-80 h-80 object-contain animate-float"
            />
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 animate-fade-in">
            Visi, Misi & Nilai Kami
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-200">
                  <Eye className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Visi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi organisasi kepemudaan yang unggul dalam pemberdayaan masyarakat 
                  dan pelestarian budaya lokal yang berkelanjutan, serta menjadi inspirasi 
                  bagi generasi muda di seluruh Indonesia.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-200">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Misi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mengembangkan potensi generasi muda melalui kegiatan yang inovatif, 
                  kreatif, dan bermanfaat. Melestarikan budaya lokal melalui program 
                  yang berkelanjutan dan melibatkan partisipasi aktif masyarakat.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-200">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Nilai</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integritas, kolaborasi, inovasi, dan dedikasi. Kami menjunjung tinggi 
                  semangat gotong royong, menghormati keberagaman, dan berkomitmen 
                  untuk kemajuan bersama dalam setiap langkah perjalanan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="mb-20 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Komitmen Kami
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Pemberdayaan Masyarakat</h3>
              <p className="text-muted-foreground text-sm">
                Mengembangkan program yang memberdayakan masyarakat lokal melalui pelatihan dan kegiatan produktif.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Pelestarian Budaya</h3>
              <p className="text-muted-foreground text-sm">
                Melestarikan dan mengembangkan budaya lokal melalui berbagai kegiatan seni dan tradisi.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Dampak Berkelanjutan</h3>
              <p className="text-muted-foreground text-sm">
                Menciptakan program dengan dampak jangka panjang untuk keberlanjutan generasi masa depan.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-muted/30 rounded-lg p-8 text-center animate-fade-in">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Mari Bergabung Dengan Kami
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Kami terbuka untuk kolaborasi dan partisipasi aktif dari semua pihak yang memiliki 
            visi yang sama dalam membangun masyarakat yang lebih baik.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Alamat:</strong> Jl. Persandian km 6. Dsn. Puyang, Ds. Purwoharjo, 
            Kec. Samigaluh, Kab. Kulon Progo, Prov. DIY 55673
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;