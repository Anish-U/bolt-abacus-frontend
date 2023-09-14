const Home = () => {
  return (
    <main className="h-screen flex justify-around items-center bg-black">
      <h1 className="text-white text-lg font-medium font-sans">
        <span className="font-bold">Bolt</span>Abacus
      </h1>
      <span className="text-white font-semibold text-sm">Text Sample</span>
      <button className="bg-gold w-48 h-11 p-2 text-lg border-gold rounded-lg hover:shadow-gold ease-out duration-100 outline-none outline-0 font-bold">
        Button Sample
      </button>
      <div className="w-48 h-11 border-solid border-2 border-red" />
    </main>
  );
};

export default Home;
