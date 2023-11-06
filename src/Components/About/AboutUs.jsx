
const AboutUs = () => {
  return (
    <section className="py-10 px-8 bg-local about-us">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8">
          About Us
        </h1>
        <div className="flex flex-col sm:flex-row w-full">
          <div className="w-full sm:w-1/2 pr-4">
            <p className="text-base capitalize">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              voluptatum perferendis? Labore sed animi ad soluta quasi necessitatibus
              corrupti illum blanditiis, dolor et quam? Nemo rem magni qui! Unde,
              expedita?
            </p>
          </div>
          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
            <img
              src="/your-image-source.jpg" // Replace with your image source
              alt="About Us Image"
              className="hidden sm:block w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs