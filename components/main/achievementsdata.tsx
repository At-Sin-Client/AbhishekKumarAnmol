import React from 'react';
import AchievementSection from './achievements';

const DataAch: React.FC = () => {
  const achievements = [
    {
      id: 1,
      imageUrl: "/a1.png",
    },
    {
      id: 2,
      imageUrl: "/a2.png",
    },
    {
        id: 3,
        imageUrl: "/a3.png",
    },
    {
        id: 4,
        imageUrl: "/a4.png",
    },
    {
        id: 5,
        imageUrl: "/a5.png",
    },
    {
        id: 6,
        imageUrl: "/a6.png",
    },
    

  ];

  return (
    <div>
      <AchievementSection achievements={achievements} />
    </div>
  );
};

export default DataAch;
