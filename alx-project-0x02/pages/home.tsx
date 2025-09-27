import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <Card
        title="First Card"
        content="This is the content for the first card."
      />
      <Card
        title="Second Card"
        content="Here is some more content for the second card."
      />
    </div>
  );
}
