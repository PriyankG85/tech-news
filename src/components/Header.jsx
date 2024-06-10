const Header = () => {
  return (
    <div className="relative h-[50vh] lg:h-[80vh] bg-slate-200 z-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 -z-10"
      >
        <path
          fill="#111111"
          fillOpacity="1"
          d="M0,96L48,85.3C96,75,192,53,288,74.7C384,96,480,160,576,154.7C672,149,768,75,864,48C960,21,1056,43,1152,42.7C1248,43,1344,21,1392,10.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="z-10 text-[#111111] lg:px-56 px-5 flex flex-col gap-y-6 pt-20">
        <h1 className="text-2xl font-semibold">
          <span className="text-3xl font-bold">Hey There!</span>
          <br></br>
          <span>Welcome to the forefront of innovations! </span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
