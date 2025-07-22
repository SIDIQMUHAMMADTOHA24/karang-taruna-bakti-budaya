import { useEffect, useState } from "react";
import CategoryCard from "@/components/CategoryCard";
import { supabase } from "@/integrations/supabase/client";

interface Category {
  id: number;
  title: string;
  description: string;
  image_url?: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase
          .from("categories")
          .select("*")
          .order("created_at", { ascending: false });

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
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Kategori Kegiatan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jelajahi berbagai program dan kegiatan yang kami selenggarakan untuk pemberdayaan masyarakat dan pelestarian budaya
          </p>
        </div>

        {/* Categories Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-muted rounded-lg h-48 mb-4" />
                <div className="bg-muted rounded h-6 mb-2" />
                <div className="bg-muted rounded h-4 mb-2" />
                <div className="bg-muted rounded h-4 w-3/4 mb-4" />
                <div className="bg-muted rounded h-10" />
              </div>
            ))}
          </div>
        ) : categories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {categories.map((category, index) => (
              <div key={category.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <CategoryCard {...category} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Belum Ada Kategori
            </h3>
            <p className="text-muted-foreground">
              Kategori kegiatan akan segera hadir. Tetap pantau terus ya!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;