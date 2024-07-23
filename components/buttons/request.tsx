'use client'
import { FaBox } from 'react-icons/fa';
import Button from './button';

const RequestButton = () => {
  return (
    <>
      <Button
        onClick={() => alert('Requesting Permissions')}
        className={`absolute top-2 right-4 text-gray-800`}
      >
        <FaBox className="mr-2" />
        Request
      </Button>
    </>
  );
};
export default RequestButton;
