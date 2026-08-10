"use client";
import { useTranslation } from "react-i18next";
import Image, { StaticImageData } from "next/image";

interface GalleryItem {
  title: string;
  image: StaticImageData;
}

interface InsideMoveGalleryProps {
  items: GalleryItem[];
}

export function InsideMoveGallery({ items }: InsideMoveGalleryProps) {
  const { t } = useTranslation();
  const featured = items[0];
  const secondaryItems = items.slice(1);

  return (
    <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-3 md:grid-cols-[1.55fr_1fr]">
      {/* Featured Image */}
      <GalleryImage item={featured} featured />

      {/* Right Images */}
      <div className="grid grid-cols-2 gap-3">
        {secondaryItems.map((item) => (
          <GalleryImage key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

function GalleryImage({
  item,
  featured = false,
}: {
  item: GalleryItem;
  featured?: boolean;
}) {
  const { t } = useTranslation();
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl ${
        featured ? "min-h-[350px] md:min-h-[440px]" : "min-h-[210px]"
      }`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes={
          featured
            ? "(max-width: 768px) 100vw, 60vw"
            : "(max-width: 768px) 50vw, 25vw"
        }
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />

      {/* Label */}
      <div className="absolute bottom-3 left-3">
        <span className="inline-flex rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-navy shadow-sm">
          {t(item.title)}
        </span>
      </div>
    </div>
  );
}
