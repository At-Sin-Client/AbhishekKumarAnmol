// import { motion } from 'framer-motion';

// const Background: React.FC = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2 }}
//         className="absolute inset-0"
//       >
//         {/* Animated Shapes */}
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: [0, 1, 1.5, 1], rotate: [0, 90, 180, 360], borderRadius: ['0%', '50%', '0%', '50%'] }}
//           transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
//           className="absolute w-20 h-20 bg-blue-400 rounded-full"
//           style={{ left: '10%', top: '20%' }}
//         />
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: [0, 1, 1.5, 1], rotate: [0, 90, 180, 360], borderRadius: ['0%', '50%', '0%', '50%'] }}
//           transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
//           className="absolute w-10 h-10 bg-pink-400 rounded-full"
//           style={{ right: '20%', bottom: '30%' }}
//         />
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: [0, 1, 1.5, 1], rotate: [0, 90, 180, 360], borderRadius: ['0%', '50%', '0%', '50%'] }}
//           transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
//           className="absolute w-16 h-16 bg-green-400 rounded-full"
//           style={{ left: '50%', top: '70%' }}
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default Background;
"use client"
import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

const StarBackground = ({ color }) => {
  const ref: any = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(3500), { radius: 4.5 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled>
      <PointMaterial transparent color={color} size={0.02} sizeAttenuation={true} depthWrite={false} />
    </Points>
  );
};

const Background = () => (
  <div className="absolute inset-0 z-[-1]">
    <Canvas>
      <Suspense fallback={null}>
        <StarBackground color="#FF000D" />
        <motion.group
          initial={{ x: 0.1, y: 0.1 }} // Adjust offset as needed
          animate={{ x: -0.1, y: -0.1 }} // Adjust offset as needed
        >
          <StarBackground  color="#0165FC"/>
        </motion.group>
      </Suspense>
    </Canvas>
  </div>
);

export default Background;

