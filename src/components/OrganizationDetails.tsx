import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface DetailData {
  id: number;
  alamat: string;
  no_telp?: string;
  email?: string;
  masa_jabatan: string;
  instagram_url?: string;
  facebook_url?: string;
  tiktok_url?: string;
  yt_url?: string;
}

const useOrganizationDetails = () => {
  const [details, setDetails] = useState<DetailData | null>(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data, error } = await (supabase as any)
          .from("detail_data")
          .select("*")
          .maybeSingle();

        if (error) {
          console.error("Error fetching organization details:", error);
        } else {
          setDetails(data as DetailData);
        }
      } catch (error) {
        console.error("Error fetching organization details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);

  return { details, loading };
};

export default useOrganizationDetails;