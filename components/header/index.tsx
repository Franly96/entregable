import RequestButton from "../buttons/request";

const Header = () => {
  return (
    <>
      <header className="mb-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-center">Library</h1>
          <span className='text-gray-600 text-center'>
            Browser for assets needed to report and present analysis
          </span>
        </div>
        <RequestButton />
      </header>
    </>
  );
};

export default Header;
