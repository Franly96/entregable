import DetailPage from '@/components/detail-page';
import Modal from '@/components/modal';
import React from 'react';


export type ModalProp = {
  selectedItemId: number | undefined;
  onCloseModal: () => void;
};


export default async function KpiModal(props: ModalProp) {
  return (
    <Modal>
      <DetailPage />
    </Modal>
  );
}
