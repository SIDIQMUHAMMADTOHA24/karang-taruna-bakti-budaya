import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

interface GalleryItem {
  id: number;
  image: string;
  created_at: string;
}

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      const { data, error } = await (supabase as any)
        .from("gallery")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw error;
      }

      setGalleryItems(data || []);
    } catch (error) {
      console.error("Error fetching gallery:", error);
      toast({
        title: "Error",
        description: "Gagal memuat galeri",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-48 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <Skeleton className="h-64 w-full" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Galeri Foto
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kumpulan dokumentasi kegiatan dan momen berharga Karang Taruna Bakti Budaya
          </p>
        </div>

        {/* Gallery Grid */}
        {galleryItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">
              Belum ada foto di galeri
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <Card 
                key={item.id} 
                className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={() => window.open(item.image, '_blank')}
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={`Gallery image ${item.id}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;