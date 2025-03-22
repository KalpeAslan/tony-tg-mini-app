'use client';

import { useState } from 'react';
import { PacksLayout } from '../layouts';
import { TActiveTab } from '../models';
import { PacksStoreWidget } from '../widgets/packs-store.widget';
import { MyPacksWidget } from '../widgets';

export const PacksPage = () => {
  const [activeTab, setActiveTab] = useState<TActiveTab>('store');
  return (
    <PacksLayout activeTab={activeTab} onTabClick={setActiveTab}>
      <div className="w-full h-full flex flex-col gap-4">
        {activeTab === 'store' && <PacksStoreWidget />}
        {activeTab === 'my' && <MyPacksWidget />}
      </div>
    </PacksLayout>
  );
};
