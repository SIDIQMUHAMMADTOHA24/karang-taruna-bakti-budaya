import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CategoryCard from "@/components/CategoryCard";
import { supabase } from "@/integrations/supabase/client";
import { ChevronRight, Target, Eye, Heart } from "lucide-react";

interface Category {
  id: number;
  title: string;
  description: string;
  image_url?: string;
}

const Home = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase
          .from("categories")
          .select("*")
          .limit(3);

        if (error) throw error;
        setCategories(data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Karang Taruna
                  <span className="text-primary block">Bakti Budaya</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Organisasi kepemudaan yang berkomitmen untuk memberdayakan masyarakat, 
                  melestarikan budaya lokal, dan mengembangkan potensi generasi muda.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-glow">
                  <Link to="/categories">
                    Lihat Kegiatan Kami
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border">
                  <Link to="/about">Tentang Kami</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <img
                src="/lovable-uploads/671d1852-2c33-4e59-9371-e2fa9664b1ed.png"
                alt="Karang Taruna Bakti Budaya Logo"
                className="w-80 h-80 object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Visi, Misi & Nilai
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fondasi yang menguatkan setiap langkah perjalanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-200">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Visi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi organisasi kepemudaan yang unggul dalam pemberdayaan masyarakat 
                  dan pelestarian budaya lokal yang berkelanjutan.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-200">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Misi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mengembangkan potensi generasi muda melalui kegiatan yang inovatif, 
                  kreatif, dan bermanfaat bagi masyarakat luas.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-200">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Nilai</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integritas, kolaborasi, inovasi, dan dedikasi untuk kemajuan 
                  bersama dalam semangat gotong royong.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Kategori Kegiatan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berbagai program dan kegiatan yang kami selenggarakan untuk masyarakat
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-muted rounded-lg h-48 mb-4" />
                  <div className="bg-muted rounded h-4 mb-2" />
                  <div className="bg-muted rounded h-4 w-3/4" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
              {categories.map((category, index) => (
                <div key={category.id} style={{ animationDelay: `${index * 0.1}s` }}>
                  <CategoryCard {...category} />
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12 animate-fade-in">
            <Button asChild variant="outline" size="lg" className="border-border hover:bg-primary hover:text-primary-foreground">
              <Link to="/categories">
                Lihat Semua Kategori
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;