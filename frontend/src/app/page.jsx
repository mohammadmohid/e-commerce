import Link from "next/link";
import InfoCarousel from "@/components/Carousel";
import { CircularCard } from "@/components/CircularCard";
import { FeaturedProducts } from "@/components/FeaturedProducts";

const HomePage = () => {
  const slides = [
    {
      title: "Build your PC in realtime",
      image: "/Illustration.png",
    },
    {
      title: "Lol",
      image: "/Illustration.png",
    },
    {
      title: "More Lol",
      image: "/Illustration.png",
    },
  ];

  const sampleCategories = [
    { name: "Pre-Built PC", href: "/products?cat=prebuilt" },
    { name: "Graphics Card (GPU)", href: "/products?cat=graphics-cards" },
    { name: "Memory (RAM)", href: "/products?cat=memory" },
    { name: "Solid-State Drive (SSD)", href: "/products?cat=ssd" },
    { name: "Power Supply (PSU)", href: "/products?cat=power-supply" },
    { name: "Monitors", href: "/products?cat=monitors" },
  ];

  const featuredProducts = [
    {
      name: "Product Name",
      price: 2000,
      discountPercent: 50,
      description: "Product description with details about the product",
    },
    {
      name: "Product Name",
      price: 2000,
      discountPercent: 50,
      description: "Product description with details about the product",
    },
    {
      name: "Product Name",
      price: 2000,
      discountPercent: 50,
      description: "Product description with details about the product",
    },
    {
      name: "Product Name",
      price: 2000,
      discountPercent: 50,
      description: "Product description with details about the product",
    },
    {
      name: "Product Name",
      price: 2000,
      discountPercent: 50,
      description: "Product description with details about the product",
    },
  ];

  return (
    <div className="">
      <InfoCarousel slides={slides} interval={5000} />
      <section className="w-full p-4 md:p-8">
        <div className="relative flex justify-between items-center mb-5">
          <h2 className="text-text-default text-xl font-medium underline underline-offset-[12px] decoration-brand decoration-2">
            Shop <span className="text-brand">Top Categories</span>
          </h2>
          <Link
            href="/products"
            className="flex items-center text-text-default hover:text-brand transition-colors"
          >
            View All
            <svg
              className="text-brand ml-1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <div className="absolute bottom-0 translate-y-2 h-[1px] w-full bg-border-default rounded-md"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
          {sampleCategories.map((category, index) => (
            <CircularCard
              key={index}
              name={category.name}
              imageSrc={category.imageSrc}
              href={category.href}
            />
          ))}
        </div>
      </section>
      <FeaturedProducts products={featuredProducts} />
    </div>
  );
};

export default HomePage;
