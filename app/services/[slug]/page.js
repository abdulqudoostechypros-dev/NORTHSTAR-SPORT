import { ServicePage } from "@/components/MarketingPage";

export function generateStaticParams() {
  return [{ slug: "editorial-strategy" }, { slug: "content-production" }, { slug: "audience-growth" }];
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ServicePage slug={slug} />;
}
