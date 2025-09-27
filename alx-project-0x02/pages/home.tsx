export default function HomePage() {
  return <h1 className="p-8 text-2xl">This is the Home page</h1>;
}
import Card from "../components/common/Card";

export default function HomePage() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <Card
        title="First Card"
        description="This is the description for the first card."
      />
      <Card
        title="Second Card"
        description="Here is some more content for the second card."
      />
    </div>
  );
}
