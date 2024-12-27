import { SignIn } from "@/components/AuthenticationCard";

const RegisterPage = () => {
  return (
    <div className="flex justify-between">
      <SignIn />
      <div className="hidden lg:flex flex-col lg:w-1/2 p-4 gap-4 items-center">
        <object
          className="w-[300px]"
          type="image/svg+xml"
          data="/CPU-Animated.svg"
        >
          CPU
        </object>
        <object
          className="w-full"
          type="image/svg+xml"
          data="/WindowIllustration.svg"
        >
          CPU
        </object>
      </div>
    </div>
  );
};

export default RegisterPage;
