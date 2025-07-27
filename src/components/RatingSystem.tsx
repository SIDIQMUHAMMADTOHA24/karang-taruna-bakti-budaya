import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { Star, MessageSquare, Send, Calendar } from "lucide-react";
import { toast } from "sonner";
import { escapeInput, containsDangerousInput} from "@/utils/SanitationInput";

interface Rating {
  id: number;
  stars: number;
  deskripsi?: string;
  created_at: string;
}

const RatingSystem = () => {
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [newRating, setNewRating] = useState({
    stars: 0,
    deskripsi: ""
  });

  useEffect(() => {
    fetchRatings();
  }, []);

  const fetchRatings = async () => {
    try {
      const { data, error } = await (supabase as any)
        .from("rating")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRatings(data || []);
    } catch (error) {
      console.error("Error fetching ratings:", error);
    } finally {
      setLoading(false);
    }
  };

  const submitRating = async () => {
    const cleanDescription = escapeInput(newRating.deskripsi);
    const isUnsafe = containsDangerousInput(newRating.deskripsi);

    if (newRating.stars === 0) {
      toast.error("Silakan pilih rating bintang");
      return;
    }

    if (isUnsafe) {
      toast.error("Input mengandung konten berbahaya");
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await (supabase as any)
        .from("rating")
        .insert([{
          stars: newRating.stars,
          deskripsi: cleanDescription || null
        }]);

      if (error) throw error;
      
      toast.success("Rating berhasil dikirim!");
      setNewRating({ stars: 0, deskripsi: "" });
      fetchRatings();
    } catch (error) {
      console.error("Error submitting rating:", error);
      toast.error("Gagal mengirim rating");
    } finally {
      setSubmitting(false);
    }
  };

  const renderStars = (rating: number, interactive = false, size = "w-5 h-5") => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`${size} transition-all duration-200 ${
          interactive ? "cursor-pointer hover:scale-110" : ""
        } ${
          index < rating
            ? "fill-yellow-400 text-yellow-400"
            : "text-muted-foreground"
        }`}
        onClick={interactive ? () => setNewRating(prev => ({ ...prev, stars: index + 1 })) : undefined}
      />
    ));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const averageRating = ratings.length > 0 
    ? ratings.reduce((sum, rating) => sum + rating.stars, 0) / ratings.length 
    : 0;

  return (
    <div className="space-y-8">
      {/* Header dengan statistik */}
      <div className="text-center space-y-4 animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
          <MessageSquare className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
          Penilaian & Testimoni
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Berikan penilaian dan testimoni Anda tentang kegiatan Karang Taruna Bakti Budaya
        </p>
        
        {ratings.length > 0 && (
          <div className="flex items-center justify-center space-x-4 p-4 bg-gradient-glass rounded-lg backdrop-blur-sm border border-border/50">
            <div className="flex items-center space-x-2">
              {renderStars(Math.round(averageRating))}
              <span className="text-2xl font-bold text-foreground">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              Dari {ratings.length} penilaian
            </div>
          </div>
        )}
      </div>

      {/* Form rating baru */}
      <Card className="bg-gradient-glass backdrop-blur-sm border-border/50 animate-scale-in">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-primary" />
            <span>Berikan Penilaian</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Rating Bintang</label>
            <div className="flex items-center space-x-2">
              {renderStars(newRating.stars, true, "w-8 h-8")}
              <span className="ml-2 text-sm text-muted-foreground">
                {newRating.stars > 0 ? `${newRating.stars} bintang` : "Pilih rating"}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">
              Testimoni (Opsional)
            </label>
            <Textarea
              placeholder="Ceritakan pengalaman Anda dengan kegiatan kami..."
              value={newRating.deskripsi}
              onChange={(e) => setNewRating(prev => ({ ...prev, deskripsi: e.target.value }))}
              className="min-h-[100px] bg-background/50 border-border/50 focus:border-primary/50"
            />
          </div>

          <Button 
            onClick={submitRating}
            disabled={submitting || newRating.stars === 0}
            className="w-full bg-primary hover:bg-primary/90 shadow-glow"
          >
            <Send className="h-4 w-4 mr-2" />
            {submitting ? "Mengirim..." : "Kirim Penilaian"}
          </Button>
        </CardContent>
      </Card>

      {/* Daftar rating */}
      <div className="space-y-4">
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse bg-gradient-glass backdrop-blur-sm">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, index) => (
                        <div key={index} className="w-4 h-4 bg-muted rounded" />
                      ))}
                    </div>
                  </div>
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-3 bg-muted rounded w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : ratings.length > 0 ? (
          <div className="space-y-4">
            {ratings.map((rating, index) => (
              <Card 
                key={rating.id}
                className="group bg-gradient-glass backdrop-blur-sm border-border/50 hover:border-primary/20 hover:shadow-glass transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">A</span>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Anonymous</div>
                        <div className="flex items-center space-x-2">
                          {renderStars(rating.stars)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(rating.created_at)}</span>
                    </div>
                  </div>
                  
                  {rating.deskripsi && (
                    <div className="pl-13">
                      <p className="text-foreground leading-relaxed">
                        "{rating.deskripsi}"
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="bg-gradient-glass backdrop-blur-sm border-border/50">
            <CardContent className="p-12 text-center">
              <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                Belum Ada Penilaian
              </h3>
              <p className="text-muted-foreground">
                Jadilah yang pertama memberikan penilaian dan testimoni!
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default RatingSystem;