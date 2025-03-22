import { Button } from '@/components/ui/button';
import { shareURL } from '@telegram-apps/sdk-react';
import { TelegramApi } from '../models/telegram/telegram-api';
import { useMutation } from '@tanstack/react-query';
import { FC } from 'react';

interface InviteFriendsButtonProps {
  className?: string;
}

export const InviteFriendsButton: FC<InviteFriendsButtonProps> = ({ className }) => {
  const getReferralLinkMutation = useMutation({
    mutationFn: TelegramApi.telegram.getReferralLink,
    onSuccess: data => {
      if (data.success && data.referralLink) {
        shareURL(data.referralLink);
      }
    },
    onError: error => {
      console.error('Error getting referral link:', error);
    },
  });

  const handleInvite = () => {
    getReferralLinkMutation.mutate();
  };

  return (
    <Button
      onClick={handleInvite}
      variant="primary"
      size="sm"
      fullWidth
      className={className}
      loading={getReferralLinkMutation.isPending}
    >
      <p>Invite friends</p>
    </Button>
  );
};
