import AlgebraicProperties from "../components/AlgebraicProperties";
import IntegerProperties from "../components/integers";
import DefaultLayout from "../layout/defaultLayout";

const Unit2 = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto h-screen">
        <h1 className="text-3xl font-bold text-center my-10">
          Properties of Algebraic Expressions{" "}
        </h1>
        <div className="flex justify-center items-center">
          <iframe
            width="600"
            height="355"
            src="https://www.youtube.com/embed/B9FDbFSt59U?autoplay=1&mute=1" // Autoplay and mute
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="wrapper w-full px-20 ">
        <h1 className="text-3xl font-bold text-center my-10">
          Important Notes and Takeaways
        </h1>
        <AlgebraicProperties />
      </div>
    </DefaultLayout>
  );
};

export default Unit2;
