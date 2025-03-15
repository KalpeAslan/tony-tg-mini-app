'use client';
import { AppLayout } from '@/layouts/AppLayout';
import { PackItem } from '../components';

export const PacksPage = () => {
  return (
    <AppLayout activeTab="packs">
      <div className="w-full h-full pb-[40px]">
        {/* Balance */}
        <div className="w-full mt-4 mb-6">
          <PackItem />
        </div>
      </div>
    </AppLayout>
  );
};
