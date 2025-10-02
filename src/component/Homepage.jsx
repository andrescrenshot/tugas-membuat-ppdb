import { useNavigate } from "react-router-dom";
import Gitar from "../../public/gitar.jpg";
import Bubu from "../../public/bubu.jpg";

const Homepage = () => {
  const Navigate = useNavigate();
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32 ">
          <div className="box">
            <h1 className="lg:text-5xl text-3xl font-medium mb-7 ">
              Daftar di {""}
              <span className="font-bold text-sky-400 underline">
                Smk Bina Nusantara
              </span>
            </h1>
            <p className="text-base leading-relaxed mb-7 text-3xl">
              Asah kemampuan sesuai bidang masing masing
            </p>
          </div>
          <div className="box">
            <img
              src={Gitar}
              alt="Hero"
              className="md:w-full w-[400px] md:m-0 mx-auto"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32">
          <div className="box md:order-1 order-2">
            <img
              src={Bubu}
              alt="About"
              className="lg:w-[500px] w-[400px] md:m-0 mx-auto"
            />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl text-3xl font-medium mb-7">
              Dapatkan pembelajaran berharga hanya di{" "}
              <span className="font-bold text-sky-400 underline">
                Smk Bina Nusantara
              </span>
            </h1>
            <p className="text-base leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              nesciunt fugit sint adipisci. Quos velit sed veritatis recusandae
              voluptatem, dolor amet tempore? Aliquam, eum quos voluptas
              eligendi pariatur sed omnis.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="service pt-32">
          <h1 className="text-center lg:text-5xl text-3xl font-medium mb-2">
            Link Pendaftaran
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <div className="services pt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
            <button
              navigate=""
              className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full  "
            >
              Daftar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
