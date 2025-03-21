/**
 * Interface for Invite data structure
 */
export interface Invite {
  id: string;
  inviter: User;
  inviterId: string;
  invitee?: User;
  inviteeId?: string;
  isAccepted: boolean;
  telegramUsername?: string;
  rewardAmount?: number;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Interface for User with invite relationships
 */
export interface User {
  id: string;
  sentInvites?: Invite[];
  receivedInvites?: Invite[];
  [key: string]: any;
}

/**
 * Interface for the invites response
 */
export interface InvitesResponse {
  success: boolean;
  invites?: Invite[];
  error?: string;
} 