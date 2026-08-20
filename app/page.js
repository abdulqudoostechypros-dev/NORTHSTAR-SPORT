import HomePage from "@/components/HomePage";

export const metadata = {
  title: "Northstar Sport | Make your next move matter",
  description: "Northstar helps sports organisations, brands, and publishers turn complex moments into clear stories, magnetic content, and lasting audience value.",
  openGraph: {
    title: "Northstar Sport | Make your next move matter",
    description: "Independent sports intelligence and creative for the modern game.",
    images: ["https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=80"],
  },
};

export default function Page() {
  return <HomePage />;
}
