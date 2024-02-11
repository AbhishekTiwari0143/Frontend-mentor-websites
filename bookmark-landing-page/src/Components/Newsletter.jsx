const Newsletter = () => (
  <>
    <section className="newsletter bg-[--soft-blue] pb-12 pt-20 ">
      <div className="text px-6 text-white text-center">
        <p className="text-sm font-bold tracking-[.2rem] uppercase">
          35,000+ already joined
        </p>
        <h1 className=" text-3xl font-semibold">
          Stay up-to-date with what we’re doing
        </h1>
      </div>
      <div className="buttons p-8 flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Enter your email address"
          className="px-6 py-2 text-lg text-gray-700 rounded-xl"
        />
        <button
          type="button"
          className="font-semibold text-lg py-2 text-center bg-[--soft-red] rounded-xl text-white"
        >
          Contact Us
        </button>
      </div>
    </section>
  </>
);

export default Newsletter;
