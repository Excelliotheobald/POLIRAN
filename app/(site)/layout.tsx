import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <MainHeader />
      <main className="flex-1">{children}</main>
      <MainFooter />
    </>
  );
}
