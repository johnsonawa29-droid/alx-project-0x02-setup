import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">About Page</h1>
      <p className="mb-4">This is the about page of our Next.js project.</p>

      {/* Example Buttons */}
      <Button title="Small Button" size="small" shape="rounded-sm" />
      <Button title="Medium Button" size="medium" shape="rounded-md" />
      <Button title="Large Button" size="large" shape="rounded-full" />
    </div>
  );
}
