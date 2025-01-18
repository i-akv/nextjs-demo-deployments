import React from "react";

const ParamsPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ attrs: string }>;
}) => {
  const { slug } = await params;
  const sp = await searchParams;
  console.log({ sp });
  return (
    <div>
      Slug: <b>{slug}</b> <br />
      SearchParams: <br />
      {sp &&
        Object.entries(sp).map(([k, v]) => (
          <p key={k} className="ml-5">
            <i>{k}</i>=<b>{v}</b>
          </p>
        ))}
    </div>
  );
};

export default ParamsPage;
