import { Task } from '@/components/task';
import { Task as TaskType } from '@/modules/invites/models';

const tasks: TaskType[] = [
  {
    id: 1,
    title: 'Newbies Luck',
    description: 'A pack for little cry babies. A small chance for them to make it lol',
    img: '/invites/with-coin.png',
  },
  {
    id: 2,
    title: 'Invite telegram premium dudes',
    description: 'Earn 33 Tony Coins by inviting friends with Telegram Premium',
    img: '/invites/on-rocket.png',
  },
];

export const PromoSection = () => {
  return tasks.map(task => <Task key={task.title} {...task} />);
};
