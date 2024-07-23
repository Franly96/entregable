import DetailPage from '@/components/detail-page';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

type Props = {
  id: string
}

export default async function KpiPage({
  id,
}: Props) {
  return (
    <MainLayout>
      <DetailPage/>
    </MainLayout>
  );
}
