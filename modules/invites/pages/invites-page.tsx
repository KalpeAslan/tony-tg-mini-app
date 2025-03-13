'use client';

import { PurpleLayout } from '@/components/layouts/purple-layout';
import { AppLayout } from '@/components/layouts/AppLayout';
import { TasksSection, BalanceSection, InvitedUsersSection } from '../components';

export function InvitesPage() {
  return (
    <AppLayout activeTab="invites">
      <PurpleLayout>
        <div className="flex flex-col gap-6 pb-10">
          <BalanceSection />
          <TasksSection />

          <InvitedUsersSection />

          <div
            className="w-full h-[50px]"
            style={{
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%)',
            }}
          />
        </div>
      </PurpleLayout>
    </AppLayout>
  );
}
