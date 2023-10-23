import travel1 from "../../assets/images/travel1.jpg";
import image2 from "../../assets/images/image2.jpg";

const Travels = () => {
  return (
    // <section className="py-4 px-10 bg-local travels" style={{'background-image': `url(${image2})`}}>
    <section className="py-4 px-10 bg-local travels">
      <h2 className="text-3xl font-bold text-center">Get to Know Salta</h2>
      <div className="h-screen grid grid-cols-3 items-center justify-items-center">
        <article className="border p-8 w-3/4">
          <h2 className="p-2 text-2xl font-semibold">Pueblo 1</h2>
          <p className="p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            dicta suscipit expedita temporibus ad est aliquam libero
            reprehenderit ratione omnis vel inventore impedit sint possimus quos
            doloribus, cum neque recusandae.
          </p>
          <img src={travel1} alt="" className="mt-6 rounded-lg object-cover" />
        </article>
        <article className="border p-8 w-3/4">
          <h2 className="p-2 text-2xl font-semibold">Pueblo 2</h2>
          <p className="p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            dicta suscipit expedita temporibus ad est aliquam libero
            reprehenderit ratione omnis vel inventore impedit sint possimus quos
            doloribus, cum neque recusandae.
          </p>
          <img src={travel1} alt="" className="mt-6 rounded-lg object-cover" />
        </article>
        <article className="border p-8 w-3/4">
          <h2 className="p-2 text-2xl font-semibold">Pueblo 3</h2>
          <p className="p-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            dicta suscipit expedita temporibus ad est aliquam libero
            reprehenderit ratione omnis vel inventore impedit sint possimus quos
            doloribus, cum neque recusandae.
          </p>
          <img src={travel1} alt="" className="mt-6 rounded-lg object-cover" />
        </article>
      </div>
    </section>
  );
};

export default Travels;
