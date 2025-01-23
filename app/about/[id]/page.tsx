import React from "react";

const AboutDetailPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  return <div>About Detail Page</div>;
};

export default AboutDetailPage;
