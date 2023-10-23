// import Background from "../Background";
import image1 from "../../assets/images/image1.jpg";

function Home() {
  return (
    // <Background>
      // <section className="h-screen p-4 bg-local home" style={{'background-image': `url(${image1})`}} >
      <section className="h-screen p-4 bg-local home" >

        <article className="flex flex-col text-center items-center font-semibold">
          <h1 className="py-10 text-5xl font-bold">Explore Salta with us</h1>
          <p className="p-5 text-base capitalize w-1/2 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            voluptatum perferendis? Labore sed animi ad soluta quasi
            necessitatibus corrupti illum blanditiis, dolor et quam? Nemo rem
            magni qui! Unde, expedita?
          </p>
        </article>
      </section>
    // </Background>
  );
}

export default Home;
