import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <div>
      <h1>Welcome to about page</h1>
      <Button shape="rounded-sm" size="text-sm" />
      <Button shape="rounded-md" size="text-base" />
      <Button shape="rounded-full" size="text-lg" />
    </div>
  );
};

export default About;
