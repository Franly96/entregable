'use client'
const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <>
      <button
        {...props}
        onClick={props.onClick}
        className={`flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 ${props.className}`}
      >
        {props.children}
      </button>
    </>
  );
};
export default Button;
