import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About: React.FC = () => {
  return (
    <div>
      <>
        <Header />
      </>
      <h1>Welcome to about page</h1>
      <Button label="Small Button" size="small" shape="rounded-sm" />
      <Button label="Medium Button" size="medium" shape="rounded-md" />
      <Button label="Large Button" size="large" shape="rounded-full" />
    </div>
  );
};

export default About;
