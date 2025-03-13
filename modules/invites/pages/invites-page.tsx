'use client';

import { AppLayout } from '@/components/layouts/AppLayout';
import { TasksSection, BalanceSection, InvitedUsersSection } from '../components';

export function InvitesPage() {
  return (
    <AppLayout activeTab="invites">
      <div className="flex flex-col gap-6 pb-10">
        <BalanceSection />
        <TasksSection />

        <InvitedUsersSection />
      </div>
    </AppLayout>
  );
}
