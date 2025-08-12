

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import "./NeuralLabPage.css";
import { FaCube, FaCubes, FaRobot, FaVrCardboard } from "react-icons/fa";

function NeuralModel({ url }) {
  const { scene } = useGLTF("/8_9_2025.glb");
  const modelRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Smooth idle rotation + mouse X influence
    const mouseX = state.mouse.x * 0.5; // reduce sensitivity (0.5 = half speed)
    modelRef.current.rotation.y = Math.sin(t / 2) / 8 + mouseX;
  });

  return <primitive ref={modelRef} object={scene} scale={2} />;
}

export default function NeuralLabPage() {
  const features = [
    { icon: <FaRobot />, title: "Auto" },
    { icon: <FaCube />, title: "2D" },
    { icon: <FaCubes />, title: "2.5D" },
    { icon: <FaVrCardboard />, title: "3D" },
  ];

  return (
    <div className="neural-lab-container pt-3" id="ailab">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        RJ ATLAS Neural Lab
      </motion.h1>

      <motion.p
      className="pt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Experiment with our adaptive AI assistant. It scales from subtle 2D on
        mobile to holographic 3D on 4K displays.
      </motion.p>

      <div className="row text-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="col-md-3 col-6 mb-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="feature-card p-4 shadow-sm rounded">
              <div className="icon mb-3">{feature.icon}</div>
              <h5>{feature.title}</h5>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="model-viewer">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <Suspense fallback={null}>
            <NeuralModel url="/models/yourmodel.glb" />
            <Environment preset="studio" />
          </Suspense>
          {/* <OrbitControls
            enableZoom={true}
            enablePan={false} // Disable vertical panning
            enableRotate={false} // Prevent OrbitControls from overriding our custom rotation
          /> */}

          <OrbitControls
  enableZoom={false}          // Disable zoom completely
  enablePan={false}           // Optional: prevent panning
  enableRotate={true}         // Keep rotation enabled
  maxPolarAngle={Math.PI / 2} // Limit top rotation
  minPolarAngle={Math.PI / 2} // Limit bottom rotation
  rotateSpeed={0.5}
  zoomSpeed={0.6}             // Won’t matter since zoom is disabled
/>
        </Canvas>
      </div>

      <p className="tip">
        💡 Tip: On desktop, move your mouse left/right. On touch, swipe left/right.
      </p>
    </div>
  );
}


