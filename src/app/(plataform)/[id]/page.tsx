import { ToolDetail } from "@/features/home/components/tool-detail";

interface PageProps {
  params: Promise<{ id: string }>;
}
export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="rocket-cursor">
      <ToolDetail id={id} />
    </div>
  );
}
