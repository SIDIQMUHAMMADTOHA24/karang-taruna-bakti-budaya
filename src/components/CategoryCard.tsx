import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  id: number;
  title: string;
  description: string;
  image_url?: string;
}

const CategoryCard = ({ id, title, description, image_url }: CategoryCardProps) => {
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
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
        <Button 
          asChild 
          variant="outline" 
          className="w-full group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
        >
          <Link to={`/categories/${id}`} className="flex items-center justify-center space-x-2">
            <span>Lihat Kegiatan</span>
            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;