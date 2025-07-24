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
          `);

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

      <div className="space-y-4">
        {users.map((user, index) => (
          <Card 
            key={user.id} 
            className="group bg-gradient-glass backdrop-blur-sm border-border/50 hover:border-primary/20 hover:shadow-glass transition-all duration-300 hover:-translate-y-1 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Avatar className="w-16 h-16 border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-200">
                    <AvatarImage src={user.image_url} alt={user.nama} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                      {user.nama.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  {user.jabatan?.level === 1 && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-bounce-subtle">
                      <Trophy className="h-3 w-3 text-primary-foreground" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {user.nama}
                  </h3>
                  <p className="text-muted-foreground text-sm uppercase tracking-wider">
                    {user.jabatan?.nama || 'Anggota'}
                  </p>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full text-primary font-bold text-sm">
                    {user.jabatan?.level || '-'}
                  </div>
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