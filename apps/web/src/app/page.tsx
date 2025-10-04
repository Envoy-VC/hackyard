import { Button } from "@hackyard/ui/components/button";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <Button variant="primary">Primary</Button>
      <Button variant="primary-ghost">Primary Ghost</Button>
      <Button variant="primary-outline">Primary Outline</Button>
      <Button variant="primary-link">Primary Link</Button>

      <Button variant="secondary">Secondary</Button>
      <Button variant="secondary-ghost">Secondary Ghost</Button>
      <Button variant="secondary-outline">Secondary Outline</Button>
      <Button variant="secondary-link">Secondary Link</Button>

      <Button variant="destructive">Destructive</Button>
      <Button variant="destructive-ghost">Destructive Ghost</Button>
      <Button variant="destructive-outline">Destructive Outline</Button>
      <Button variant="destructive-link">Destructive Link</Button>

      <Button variant="warning">Warning</Button>
      <Button variant="warning-ghost">Warning Ghost</Button>
      <Button variant="warning-outline">Warning Outline</Button>
      <Button variant="warning-link">Warning Link</Button>

      <Button variant="success">Success</Button>
      <Button variant="success-ghost">Success Ghost</Button>
      <Button variant="success-outline">Success Outline</Button>
      <Button variant="success-link">Success Link</Button>
    </div>
  );
};

export default Home;
