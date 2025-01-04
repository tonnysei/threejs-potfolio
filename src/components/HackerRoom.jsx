import { useGLTF, useTexture } from '@react-three/drei';
import { useDrag } from '@use-gesture/react';
import { useState, useEffect } from 'react';
import { Euler } from 'three';
import { useFrame } from '@react-three/fiber';

export function HackerRoom(props) {
  const { nodes, materials } = useGLTF('/models/hacker-room.glb');
  const monitortxt = useTexture('textures/desk/monitor.png');
  const screenTxt = useTexture('textures/desk/screen.png');

  // Detect screen size
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024); // Adjust breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Initial rotation and position
  const [rotation, setRotation] = useState([0, Math.PI / 2.5, 0]); // 60 degrees on Y-axis
  const position = isDesktop ? [0, -6.5, 0] : [0, -4.5, 0]; // Apply position only on desktop

  // Handle drag gestures for manual rotation
  const bind = useDrag(({ delta: [dx, dy] }) => {
    setRotation((prev) => [
      prev[0] + dy * 0.01, // Rotate on X-axis for up/down drag
      prev[1] + dx * 0.01, // Rotate on Y-axis for left/right drag
      prev[2],
    ]);
  });

  // Smooth rotation around Y-axis
  useFrame(() => {
    setRotation((prev) => [prev[0], prev[1] + 0.012, prev[2]]); // Adjust speed by changing 0.012
  });

  return (
    <group
      {...props}
      {...bind()}
      dispose={null}
      rotation={new Euler(...rotation)}
      position={position} // Apply initial position only if on desktop
    >
      <mesh geometry={nodes.screen_screens_0.geometry} material={materials.screens}>
        <meshMatcapMaterial map={screenTxt} />
      </mesh>
      <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />
      <mesh geometry={nodes.table_table_mat_0_1.geometry} material={materials.table_mat} />
      <mesh geometry={nodes.table_table_mat_0_2.geometry} material={materials.computer_mat}>
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh geometry={nodes.table_table_mat_0_3.geometry} material={materials.server_mat} />
      <mesh geometry={nodes.table_table_mat_0_4.geometry} material={materials.vhsPlayer_mat} />
      <mesh geometry={nodes.table_table_mat_0_5.geometry} material={materials.stand_mat} />
      <mesh geometry={nodes.table_table_mat_0_6.geometry} material={materials.mat_mat} />
      <mesh geometry={nodes.table_table_mat_0_7.geometry} material={materials.arm_mat} />
      <mesh geometry={nodes.table_table_mat_0_8.geometry} material={materials.tv_mat}>
        <meshMatcapMaterial map={monitortxt} />
      </mesh>
      <mesh geometry={nodes.table_table_mat_0_9.geometry} material={materials.cables_mat} />
      <mesh geometry={nodes.table_table_mat_0_10.geometry} material={materials.props_mat} />
      <mesh geometry={nodes.table_table_mat_0_12.geometry} material={materials.key_mat} />
    </group>
  );
}

useGLTF.preload('/models/hacker-room.glb');
