import backgroundImage from "./img/bg.jpg";
export default function Hero() {
  return (
    <>
      <main
        className="min-h-screen w-auto flex justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className=" min-h-80 max-w-3xl bloc p-7 text-center">
          <h1 className="text-6xl text-custom-green">
            A small business is only has good as its tools.
          </h1>
          <p className="text-xl text-custom-gray">
            We’re different. Flex is the only saas business platform that lets
            you run your business on one platform, seamlessly across all digital
            channels.
          </p>
          <div className="flex justify-center items-center mt-6 gap-6">
            <button className="h-14 w-52  bg-custom-green hover:bg-green-700">
              Request a Demo
            </button>
            <button className="w-32 h-14  bg-custom-gray hover:bg-gray-700 ">
              Sign Up
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
