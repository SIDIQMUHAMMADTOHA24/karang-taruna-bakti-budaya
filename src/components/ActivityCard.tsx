import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

interface ActivityCardProps {
  title: string;
  description: string;
  date?: string;
  location?: string;
  people?: string;
  image_url?: string;
}

const ActivityCard = ({ title, description, date, location, people, image_url }: ActivityCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border border-border/50">
      <div className="aspect-video overflow-hidden">
        <img
          src={image_url || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-2">
          {date && (
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{format(new Date(date), "dd MMMM yyyy", { locale: id })}</span>
            </div>
          )}
          
          {location && (
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{location}</span>
            </div>
          )}
          
          {people && (
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-primary" />
              <span>{people}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;