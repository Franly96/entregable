'use client';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useCallback, useEffect, useRef } from 'react';

type ModalProps = {
  children: React.ReactNode;
};

export default function Modal({
  children,
}: ModalProps) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      id="modal-overlay"
      onClick={onClick}
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center overflow-y-auto items-center mt-200 pt-[600px] md:pt-[500px] lg:pt-[450px] xl:pt-[250px]"
    >
      <div
        className="bg-white rounded-lg shadow-lg overflow-hidden w-11/12 md:w-3/4 lg:w-2/4 rounded-lg mt-32"
        onClick={(e) => e.stopPropagation()}
      > 
        {children}</div>
    </div>
  );
}
