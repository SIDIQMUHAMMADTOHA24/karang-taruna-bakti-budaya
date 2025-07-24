import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { supabase } from "@/integrations/supabase/client";
import { Users, Trophy } from "lucide-react";

interface User {
  id: number;
  nama: string;
  image_url?: string;
  jabatan: {
    nama: string;
    level: number;
  };
}

const OrganizationChart = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data, error } = await (supabase as any)
          .from("users")
          .select(`
            id,
            nama,
            image_url,
            jabatan:jabatan_id (
              nama,
              level
            )
          `)
          .order('jabatan(level)', { ascending: true });

        if (error) throw error;
        setUsers(data || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <Card className="bg-gradient-glass backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-muted rounded-full" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-muted rounded w-1/3" />
                    <div className="h-3 bg-muted rounded w-1/2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8 animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
          <Users className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
          Struktur Organisasi
        </h2>
        <p className="text-muted-foreground">
          Pengurus Karang Taruna Bakti Budaya periode 2023-2025
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <Card 
            key={user.id} 
            className="group bg-gradient-card shadow-card hover:shadow-elegant border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 animate-scale-in overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6 text-center">
              <div className="space-y-4">
                <div className="relative inline-block">
                  <Avatar className="w-24 h-24 border-3 border-primary/20 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-105">
                    <AvatarImage 
                      src={user.image_url} 
                      alt={user.nama}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-bold text-2xl">
                      {user.nama.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  {user.jabatan?.level === 1 && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-pulse border-2 border-background">
                      <Trophy className="h-4 w-4 text-accent-foreground" />
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {user.nama}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium px-3 py-1 bg-muted/50 rounded-full">
                    {user.jabatan?.nama || 'Anggota'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrganizationChart;