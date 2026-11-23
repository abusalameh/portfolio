import Site from "@/components/site/Site";
import { isLocale } from "@/lib/content";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  return <Site locale={locale} />;
}
