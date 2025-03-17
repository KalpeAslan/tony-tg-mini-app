'use client';

import { AppLayout } from '@/layouts/app-layout';
import { TasksSection, BalanceSection, InvitedUsersSection } from '../components';

export function InvitesPage() {
  return (
    <AppLayout activeTab="invites">
      <div className="flex flex-col gap-6 pt-6 pb-[calc(var(--navigation-height)+50px)]">
        <TasksSection />

        <InvitedUsersSection />
      </div>
    </AppLayout>
  );
}
