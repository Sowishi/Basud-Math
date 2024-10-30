import AlgebraicProperties from "../components/AlgebraicProperties";
import IntegerProperties from "../components/integers";
import PrincipalRoots from "../components/Root";
import DefaultLayout from "../layout/defaultLayout";

const Unit3 = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto h-screen">
        <h1 className="text-3xl font-bold text-center my-10">
          PRINCIPAL ROOTS OF RATIONAL AND IRRATIONAL NUMBERS
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
        <PrincipalRoots />
      </div>
    </DefaultLayout>
  );
};

export default Unit3;
