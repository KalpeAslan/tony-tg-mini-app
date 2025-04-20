import { Button } from '@/lib/components';
import { shareURL } from '@telegram-apps/sdk-react';
import { TelegramApi } from '../models/telegram/telegram-api';
import { useMutation } from '@tanstack/react-query';
import { FC } from 'react';

interface InviteFriendsButtonProps {
  className?: string;
  onSuccess?: () => void;
}

export const InviteFriendsButton: FC<InviteFriendsButtonProps> = ({ className, onSuccess }) => {
  const getReferralLinkMutation = useMutation({
    mutationFn: TelegramApi.telegram.getReferralLink,
    onSuccess: data => {
      if (data.success && data.referralLink) {
        shareURL(data.referralLink);
        onSuccess && onSuccess();
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
