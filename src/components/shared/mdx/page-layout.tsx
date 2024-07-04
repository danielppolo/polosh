import Credits from "@/components/shared/mdx/credits.mdx";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <div className="p-4 pb-20 text-xl">
      {children}
      <Credits />
    </div>
  );
}
