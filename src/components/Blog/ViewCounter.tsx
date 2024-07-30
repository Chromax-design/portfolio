"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({
  slug,
  noCount,
  showCount,
}: {
  slug: string;
  noCount: boolean;
  showCount: boolean;
}) => {
  const [views, setViews] = useState<any>(0);
  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text: slug,
        });
        if (error)
          console.error("Error incrementing view count in try block", error);
      } catch (error) {
        console.error("An error occurred while incrementing view count", error);
      }
    };

    if (!noCount) {
      incrementView();
    }
  }, [slug, noCount]);

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
          .from("views")
          .select("count")
          .match({ slug: slug })
          .single();

        if (error)
          console.error("Error incrementing view count in try block", error);

        setViews(data ? data.count : 0);
        console.log(data);
      } catch (error) {
        console.error("An error occurred while incrementing view count", error);
      }
    };

    getViews();
  }, [slug]);

  if (showCount) {
    return <div>{views} views</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
