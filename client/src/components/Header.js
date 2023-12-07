const Header = () => {
  return (
    <div className="font-sans mx-5 pt-3 h-2/5">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-slate-400 font-sans font-semibold text-lg">
          Untitled Quiz
        </h1>
        <button className="bg-blue-950 text-white font-semibold p-3 rounded-lg">
          Save & Proceed
        </button>
      </div>
      <div className="w-auto bg-black h-1"></div>
    </div>
  );
};

export default Header;
