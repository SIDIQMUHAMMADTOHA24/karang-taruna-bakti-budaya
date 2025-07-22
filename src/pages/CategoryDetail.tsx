import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ActivityCard from "@/components/ActivityCard";
import { supabase } from "@/integrations/supabase/client";
import { ChevronLeft } from "lucide-react";

interface Category {
  id: number;
  title: string;
  description: string;
  image_url?: string;
}

interface Activity {
  id: number;
  title: string;
  description: string;
  date?: string;
  location?: string;
  people?: string;
  image_url?: string;
}

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryAndActivities = async () => {
      if (!id) return;

      try {
        // Fetch category details
        const { data: categoryData, error: categoryError } = await supabase
          .from("categories")
          .select("*")
          .eq("id", parseInt(id))
          .single();

        if (categoryError) throw categoryError;
        setCategory(categoryData);

        // Fetch activities for this category
        const { data: activitiesData, error: activitiesError } = await supabase
          .from("activities")
          .select("*")
          .eq("category_id", parseInt(id))
          .order("date", { ascending: false });

        if (activitiesError) throw activitiesError;
        setActivities(activitiesData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryAndActivities();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="bg-muted rounded h-8 w-32 mb-8" />
            <div className="bg-muted rounded h-12 w-96 mb-4" />
            <div className="bg-muted rounded h-6 w-full mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="bg-muted rounded-lg h-48 mb-4" />
                  <div className="bg-muted rounded h-6 mb-2" />
                  <div className="bg-muted rounded h-4 mb-2" />
                  <div className="bg-muted rounded h-4 w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-20">
            <h1 className="text-2xl font-semibold text-foreground mb-4">
              Kategori Tidak Ditemukan
            </h1>
            <p className="text-muted-foreground mb-8">
              Kategori yang Anda cari tidak tersedia.
            </p>
            <Button asChild>
              <Link to="/categories">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Kembali ke Kategori
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8 animate-fade-in">
          <Button variant="ghost" asChild>
            <Link to="/categories">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Kembali ke Kategori
            </Link>
          </Button>
        </div>

        {/* Category Header */}
        <div className="mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {category.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {category.description}
          </p>
        </div>

        {/* Activities Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Kegiatan dalam Kategori Ini
          </h2>

          {activities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <div key={activity.id} style={{ animationDelay: `${index * 0.1}s` }}>
                  <ActivityCard {...activity} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-muted/30 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Belum Ada Kegiatan
              </h3>
              <p className="text-muted-foreground">
                Kegiatan untuk kategori ini akan segera hadir. Tetap pantau terus ya!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;