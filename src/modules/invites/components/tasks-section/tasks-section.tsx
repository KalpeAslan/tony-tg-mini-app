import { Task } from '../../models';
import { Task as TaskComponent } from '@/components/task';

const tasks: Task[] = [
  {
    id: 1,
    title: 'Invite dudes',
    description: 'Earn 33 Tony Coins by inviting friends through you referral link',
    img: '/invites/with-coin.png',
  },
  {
    id: 2,
    title: 'Invite telegram premium dudes',
    description: 'Earn 33 Tony Coins by inviting friends with Telegram Premium',
    img: '/invites/on-rocket.png',
  },
];

export const TasksSection = () => {
  return (
    <div className="flex flex-col gap-2">
      {tasks.map(task => (
        <TaskComponent
          key={task.id}
          title={task.title}
          description={task.description}
          img={task.img}
        />
      ))}
    </div>
  );
};
