import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, MapPin, Users, ArrowLeft, ChevronLeft } from "lucide-react";
import { format } from "date-fns";
import { id as locale } from "date-fns/locale";

interface Activity {
  id: number;
  title: string;
  description: string;
  date?: string;
  location?: string;
  people?: string;
  image_url?: string;
  category_id?: number;
}

const ActivityDetail = () => {
  const { id: activityId } = useParams();
  const [activity, setActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const { data, error } = await supabase
          .from('activities')
          .select('*')
          .eq('id', Number(activityId))
          .maybeSingle();

        if (error) throw error;
        setActivity(data);
      } catch (error) {
        console.error('Error fetching activity:', error);
      } finally {
        setLoading(false);
      }
    };

    if (activityId) {
      fetchActivity();
    }
  }, [activityId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-8 w-32 mb-6" />
          <Skeleton className="h-64 w-full mb-6" />
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
    );
  }

  if (!activity) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Kegiatan Tidak Ditemukan</h1>
          <p className="text-muted-foreground mb-6">Kegiatan yang Anda cari tidak dapat ditemukan.</p>
          <Button asChild variant="ghost">
            <Link to="/categories">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Kembali ke Kategori
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-6">
          <Link to={activity.category_id ? `/categories/${activity.category_id}` : "/categories"}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Kembali
          </Link>
        </Button>

        <Card className="overflow-hidden">
          {activity.image_url && (
            <div className="aspect-video overflow-hidden">
              <img
                src={activity.image_url}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-foreground mb-6">
              {activity.title}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {activity.date && (
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>{format(new Date(activity.date), "dd MMMM yyyy", { locale })}</span>
                </div>
              )}
              
              {activity.location && (
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{activity.location}</span>
                </div>
              )}
              
              {activity.people && (
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Users className="h-5 w-5 text-primary" />
                  <span>{activity.people}</span>
                </div>
              )}
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-foreground leading-relaxed text-justify"
                dangerouslySetInnerHTML={{ __html: activity.description }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ActivityDetail;