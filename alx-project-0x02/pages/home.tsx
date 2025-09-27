
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>

      {/* Post Modal Button */}
      <PostModal />

      {/* Example Cards */}
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
