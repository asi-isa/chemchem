import React from "react";
import { useRouter } from "next/router";

export default function CourseDetail() {
  const router = useRouter();

  const { slug, id } = router.query;
  return (
    <div>
      [{slug}][{id}]
    </div>
  );
}
