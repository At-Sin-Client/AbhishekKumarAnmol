import React from 'react';
import Image from 'next/image';

interface Achievement {
  id: number;
  imageUrl: string;
}

interface AchievementSectionProps {
  achievements: Achievement[];
}

const AchievementSection: React.FC<AchievementSectionProps> = ({ achievements }) => {
  return (
    <section id="achievements" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-[#ff545d]  mb-8">ACHIEVEMENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map over achievements and render each achievement card */}
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Use Next.js Image component for optimized image rendering */}
              <div className="w-full h-64 relative">
                <Image
                  src={achievement.imageUrl}
                  alt="achievements"
                  width={100} // Set initial width (can be any numeric value)
                    height={100} // Set initial height (can be any numeric value)
                    layout="responsive"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
