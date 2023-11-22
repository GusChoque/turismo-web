import ImageCarousel from "../../Utils/ImageCarousel";

function Home() {

  return (
    <ImageCarousel>
      {/* <ImageCarousel> */}
      <section
        className="max-w-screen-xl mx-auto h-[80vh] sm:h-[70vh] py-4 bg-local text-white relative home"
      >
        <div className="flex flex-col text-center items-center justify-center h-full">
          <h1 className="py-10 text-5xl font-bold ">Explore Salta with us</h1>
          <p className="p-5 text-lg capitalize sm:w-2/3 font-medium text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            voluptatum perferendis? Labore sed animi ad soluta quasi
            necessitatibus corrupti illum blanditiis, dolor et quam? Nemo rem
            magni qui! Unde, expedita?
          </p>
        </div>
      </section>
      </ImageCarousel>
  );
}

export default Home;
