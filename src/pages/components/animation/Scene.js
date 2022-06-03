import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/3DHero.gltf');
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions.Pet_Shiba_Walk.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group
          name='Sketchfab_model'
          position={[0.33, 2.18, -0.02]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.03}
        >
          <group name='16e1160776a848be83b40b50f46b2fe9fbx' rotation={[Math.PI / 2, 0, 0]}>
            <group name='RootNode003'>
              <group
                name='Box004'
                position={[23.55, 53.07, -3.57]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.94, 1, 0.78]}
              >
                <group name='Object_13' position={[0, 0, -2.78]}>
                  <mesh
                    name='Box004_01_-_Default_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['Box004_01_-_Default_0'].geometry}
                    material={nodes['Box004_01_-_Default_0'].material}
                  />
                  <mesh
                    name='Box004_15_-_Default_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['Box004_15_-_Default_0'].geometry}
                    material={materials['15_-_Default']}
                  />
                </group>
              </group>
              <group name='Box005' position={[-34.66, 49.32, 0.61]} scale={[1.99, 0.96, 0.58]}>
                <group name='Object_35' position={[0, 0, -1.22]}>
                  <mesh
                    name='Box005_01_-_Default_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['Box005_01_-_Default_0'].geometry}
                    material={nodes['Box005_01_-_Default_0'].material}
                  />
                </group>
              </group>
              <group name='Box006' position={[-34.66, 36.75, 0.19]} scale={[1.99, 1.87, 1.03]}>
                <group name='Object_38' position={[0, 0, -1.22]}>
                  <mesh
                    name='Box006_01_-_Default_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['Box006_01_-_Default_0'].geometry}
                    material={nodes['Box006_01_-_Default_0'].material}
                  />
                </group>
              </group>
              <group name='Box007' position={[-34.66, 24.57, 0.19]} scale={[1.99, 1.87, 1.07]}>
                <group name='Object_41' position={[0, 0, -1.22]}>
                  <mesh
                    name='Box007_01_-_Default_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['Box007_01_-_Default_0'].geometry}
                    material={nodes['Box007_01_-_Default_0'].material}
                  />
                </group>
              </group>
              <group
                name='Box008'
                position={[35.15, 29.83, 0]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[1.99, 3.07, 1.07]}
              >
                <group name='Object_44' position={[0, 0, -1.22]}>
                  <mesh
                    name='Box008_01_-_Default_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['Box008_01_-_Default_0'].geometry}
                    material={nodes['Box008_01_-_Default_0'].material}
                  />
                </group>
              </group>
              <group
                name='Cylinder001'
                position={[23.76, 59.89, -3.94]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 1, 0.65]}
              >
                <group name='Object_20' position={[0, 0, -1.27]}>
                  <mesh
                    name='Cylinder001_09_-_Default_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['Cylinder001_09_-_Default_0'].geometry}
                    material={nodes['Cylinder001_09_-_Default_0'].material}
                  />
                </group>
              </group>
              <group
                name='Cylinder002'
                position={[23.76, 47.07, -3.94]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 1, 0.65]}
              >
                <group name='Object_25' position={[0, 0, -1.27]}>
                  <mesh
                    name='Cylinder002_09_-_Default_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['Cylinder002_09_-_Default_0'].geometry}
                    material={nodes['Cylinder002_09_-_Default_0'].material}
                  />
                </group>
              </group>
              <group
                name='Cylinder003'
                position={[23.81, 53.11, -3.96]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 1, 0.79]}
              >
                <group name='Object_30001' position={[0, 0, -0.97]}>
                  <mesh
                    name='Cylinder003_04_-_Default_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['Cylinder003_04_-_Default_0'].geometry}
                    material={materials['04_-_Default']}
                  />
                  <mesh
                    name='Cylinder003_05_-_Default_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['Cylinder003_05_-_Default_0'].geometry}
                    material={materials['05_-_Default']}
                  />
                  <mesh
                    name='Cylinder003_09_-_Default_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['Cylinder003_09_-_Default_0'].geometry}
                    material={nodes['Cylinder003_09_-_Default_0'].material}
                  />
                </group>
              </group>
              <group
                name='lens'
                position={[23.55, 53.07, -5.19]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[0.94, 1, 1]}
              >
                <group name='Object_17' position={[0, 0, -5.12]}>
                  <mesh
                    name='lens_14_-_Default_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['lens_14_-_Default_0'].geometry}
                    material={materials['14_-_Default']}
                  />
                </group>
              </group>
              <group name='phone' position={[0.09, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <group name='Object_4' position={[0, 0, -3.85]}>
                  <mesh
                    name='phone_02_-_Default_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['phone_02_-_Default_0'].geometry}
                    material={materials['02_-_Default']}
                  />
                  <mesh
                    name='phone_03_-_Default_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['phone_03_-_Default_0'].geometry}
                    material={materials['03_-_Default']}
                  />
                  <mesh
                    name='phone_10_-_Default_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['phone_10_-_Default_0'].geometry}
                    material={materials['10_-_Default']}
                  />
                  <mesh
                    name='phone_01_-_Default_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['phone_01_-_Default_0'].geometry}
                    material={nodes['phone_01_-_Default_0'].material}
                  />
                  <mesh
                    name='phone_13_-_Default_0'
                    castShadow
                    receiveShadow
                    geometry={nodes['phone_13_-_Default_0'].geometry}
                    material={materials['13_-_Default']}
                  />
                  <mesh
                    name='phone_lightmetal_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.phone_lightmetal_0.geometry}
                    material={materials.lightmetal}
                  />
                  <mesh
                    name='phone_wbite_0'
                    castShadow
                    receiveShadow
                    geometry={nodes.phone_wbite_0.geometry}
                    material={materials.wbite}
                  />
                </group>
              </group>
              <group
                name='Sphere001'
                position={[23.76, 59.92, -4.51]}
                rotation={[Math.PI, 0, 0]}
                scale={[0.14, 0.14, 0.05]}
              >
                <mesh
                  name='Sphere001_08_-_Default_0'
                  castShadow
                  receiveShadow
                  geometry={nodes['Sphere001_08_-_Default_0'].geometry}
                  material={nodes['Sphere001_08_-_Default_0'].material}
                />
              </group>
              <group
                name='Sphere002'
                position={[23.76, 47.1, -4.51]}
                rotation={[Math.PI, 0, 0]}
                scale={[0.14, 0.14, 0.05]}
              >
                <mesh
                  name='Sphere002_08_-_Default_0'
                  castShadow
                  receiveShadow
                  geometry={nodes['Sphere002_08_-_Default_0'].geometry}
                  material={nodes['Sphere002_08_-_Default_0'].material}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name='Sketchfab_model006'
          position={[-0.08, -0.09, 2.96]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group name='3Dfbx' rotation={[Math.PI / 2, 0, 0]}>
            <group name='RootNode002'>
              <group name='X_button' position={[-209.79, 60.28, -1.52]} rotation={[0, 0, -0.78]}>
                <mesh
                  name='X_button_X_button_0'
                  castShadow
                  receiveShadow
                  geometry={nodes.X_button_X_button_0.geometry}
                  material={nodes.X_button_X_button_0.material}
                  position={[191.08, 105.14, -1.33]}
                  scale={0.02}
                />
                <mesh
                  name='X_button_X_button_0001'
                  castShadow
                  receiveShadow
                  geometry={nodes.X_button_X_button_0001.geometry}
                  material={nodes.X_button_X_button_0001.material}
                  position={[191.79, 105.84, -1.32]}
                  scale={0.02}
                />
                <mesh
                  name='X_button_X_button_0003'
                  castShadow
                  receiveShadow
                  geometry={nodes.X_button_X_button_0003.geometry}
                  material={nodes.X_button_X_button_0003.material}
                  position={[191.44, 105.49, -1.32]}
                  scale={[0.01, 0.01, 0.01]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name='Sketchfab_model004'
          position={[-0.08, -0.09, 2.96]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group name='heartshapeobjcleanermaterialmergergles'>
            <mesh
              name='Object_2003'
              castShadow
              receiveShadow
              geometry={nodes.Object_2003.geometry}
              material={nodes.Object_2003.material}
              position={[0.8, 2.81, 0.85]}
              scale={0.04}
            />
            <mesh
              name='Object_2002'
              castShadow
              receiveShadow
              geometry={nodes.Object_2002.geometry}
              material={nodes.Object_2002.material}
              position={[0.8, 2.84, 0.85]}
              scale={0.04}
            />
          </group>
        </group>
        <group
          name='Sketchfab_model003'
          position={[0.95, 1.48, 0.17]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.15}
        >
          <group name='root001'>
            <group name='GLTF_SceneRootNode001' rotation={[Math.PI / 2, 0, 0]}>
              <group name='Screen_+back_14001' position={[0.04, 0.08, 0]}>
                <mesh
                  name='Object_43001'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_43001.geometry}
                  material={materials['Black_Screen.001']}
                  position={[0.03, 0.04, 0.01]}
                  rotation={[0, 0, -Math.PI / 2]}
                />
                <mesh
                  name='Object_42001'
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42001.geometry}
                  material={materials['Phone_color.001']}
                  position={[0.03, 0.04, 0.01]}
                  rotation={[0, 0, -Math.PI / 2]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name='Sketchfab_model002'
          position={[0.01, -0.04, 0.58]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={800.06}
        >
          <group name='Pet_Shiba_Walkfbx001' rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name='Object_2001'>
              <group name='RootNode001'>
                <group name='Pet_Shiba_Walk001'>
                  <group name='pet_3p_Shiba001'>
                    <group name='bone_Root001' rotation={[-Math.PI / 2, 0, 0]}>
                      <group name='Object_7002'>
                        {/* eslint no-underscore-dangle: ['error', {'allow': ['_rootJoint_1'] }] */}
                        <primitive object={nodes._rootJoint_1} />
                        <skinnedMesh
                          name='Object_58'
                          geometry={nodes.Object_58.geometry}
                          material={materials['Shiba_mat_3p.001']}
                          skeleton={nodes.Object_58.skeleton}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name='Pet_Shiba_Walkfbx' rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name='Object_2'>
            <group name='RootNode'>
              <group name='Pet_Shiba_Walk'>
                <group name='pet_3p_Shiba'>
                  <group name='bone_Root' rotation={[-Math.PI / 2, 0, 0]}>
                    <group name='Object_7'>
                      <group name='_rootJoint' rotation={[-Math.PI / 2, 0, 0]}>
                        <group
                          name='Bip01_01_1'
                          position={[0, -0.19, 0.11]}
                          rotation={[3.11, 0.06, -1.55]}
                        >
                          <group name='Bip01_Pelvis_02_1' rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                            <group
                              name='Bip01_L_Thigh_03_1'
                              position={[0.03, 0, 0]}
                              rotation={[-1.07, 0, -3.11]}
                            >
                              <group
                                name='Bip01_L_Calf_04_1'
                                position={[0, 0.07, 0]}
                                rotation={[-0.71, 0, 0]}
                              >
                                <group
                                  name='Bip01_L_HorseLink_05_1'
                                  position={[0, 0.04, 0]}
                                  rotation={[0.8, 0, 0]}
                                >
                                  <group
                                    name='Bip01_L_Foot_06_1'
                                    position={[0, 0.07, 0]}
                                    rotation={[2.82, 1.52, -2.19]}
                                  >
                                    <group
                                      name='Bip01_L_Toe0_07_1'
                                      position={[0.02, 0.04, 0]}
                                      rotation={[0.19, -0.02, 0.89]}
                                    >
                                      <group
                                        name='Bip01_L_Toe0Nub_08_1'
                                        rotation={[0, 0, -Math.PI]}
                                        scale={[-1, -1, -1]}
                                      />
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                            <group
                              name='Bip01_R_Thigh_09_1'
                              position={[-0.03, 0, 0]}
                              rotation={[-1.77, -0.3, 3.1]}
                            >
                              <group
                                name='Bip01_R_Calf_010_1'
                                position={[0, 0.07, 0]}
                                rotation={[-0.66, 0, 0]}
                              >
                                <group
                                  name='Bip01_R_HorseLink_011_1'
                                  position={[0, 0.04, 0]}
                                  rotation={[1.13, 0, 0]}
                                >
                                  <group
                                    name='Bip01_R_Foot_012_1'
                                    position={[0, 0.07, 0]}
                                    rotation={[-0.54, 1.32, 1.79]}
                                  >
                                    <group
                                      name='Bip01_R_Toe0_013_1'
                                      position={[0.02, 0.04, 0]}
                                      rotation={[-0.19, 0.02, 1.1]}
                                    />
                                  </group>
                                </group>
                              </group>
                            </group>
                            <group
                              name='Bip01_Spine_015_1'
                              position={[0, 0.04, 0.02]}
                              rotation={[0.01, -0.01, 0.02]}
                            >
                              <group
                                name='Bip01_Spine1_016_1'
                                position={[0, 0.1, 0]}
                                rotation={[-0.18, -0.02, 0.05]}
                              >
                                <group
                                  name='Bip01_Neck_017_1'
                                  position={[0, 0.08, 0]}
                                  rotation={[0.13, -1.56, 2.5]}
                                >
                                  <group
                                    name='Bip01_Head_018_1'
                                    position={[0.05, 0, 0]}
                                    rotation={[1.64, 0.14, 1.55]}
                                  >
                                    <group
                                      name='Bone003_020_1'
                                      position={[-0.05, -0.1, -0.03]}
                                      rotation={[0.23, -0.42, -0.56]}
                                    />
                                    <group
                                      name='Bone004_021_1'
                                      position={[0.05, -0.1, -0.03]}
                                      rotation={[-2.91, -0.42, 2.59]}
                                    />
                                    <group
                                      name='Bone016_022_1'
                                      position={[0, -0.05, 0.05]}
                                      rotation={[-3.08, 1.5, -0.02]}
                                    >
                                      <group
                                        name='Bone013_023_1'
                                        position={[0.01, 0.01, 0]}
                                        rotation={[-1.58, -0.21, -1.79]}
                                        scale={[1, 1.43, 1]}
                                      >
                                        <group
                                          name='Bone014_024_1'
                                          position={[0, 0.02, 0]}
                                          rotation={[-0.54, 0, -Math.PI]}
                                          scale={[1, 1.08, 0.96]}
                                        >
                                          <group
                                            name='Bone015_025_1'
                                            position={[0, -0.02, 0]}
                                            rotation={[0.99, -0.01, -0.01]}
                                            scale={[1, 1.25, 0.85]}
                                          />
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                  <group
                                    name='Bip01_L_Clavicle_026_1'
                                    position={[0.01, 0.04, -0.03]}
                                    rotation={[-2.99, 0.16, 0.67]}
                                  >
                                    <group
                                      name='Bip01_L_UpperArm_027_1'
                                      position={[0, 0.1, 0]}
                                      rotation={[1.28, -0.81, 1.6]}
                                    >
                                      <group
                                        name='Bip01_L_Forearm_028_1'
                                        position={[0, 0.08, 0]}
                                        rotation={[-1.42, 0, 0]}
                                      >
                                        <group
                                          name='Bip01_L_Hand_029_1'
                                          position={[0, 0.05, 0]}
                                          rotation={[0.22, 0.01, 3.08]}
                                        >
                                          <group
                                            name='Bip01_L_Finger0_030_1'
                                            position={[0, -0.03, 0]}
                                            rotation={[0.45, 1.5, -1.66]}
                                          />
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                  <group
                                    name='Bip01_R_Clavicle_032_1'
                                    position={[0.01, 0.04, 0.03]}
                                    rotation={[-0.32, 0.32, 1.91]}
                                  >
                                    <group
                                      name='Bip01_R_UpperArm_033_1'
                                      position={[0, 0.1, 0]}
                                      rotation={[0.49, 1.01, -0.91]}
                                    >
                                      <group
                                        name='Bip01_R_Forearm_00_1'
                                        position={[0, 0.08, 0]}
                                        rotation={[-0.34, 0, 0]}
                                      >
                                        <group
                                          name='Bip01_R_Hand_034_1'
                                          position={[0, 0.05, 0]}
                                          rotation={[-0.97, 0.02, -3.14]}
                                        >
                                          <group
                                            name='Bip01_R_Finger0_035_1'
                                            position={[0, -0.03, 0]}
                                            rotation={[2.13, -1.45, 2.74]}
                                          >
                                            <group
                                              name='Bip01_R_Finger0Nub_036_1'
                                              rotation={[Math.PI, 0, 0]}
                                              scale={-1}
                                            />
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                                <group
                                  name='Bone005_037_1'
                                  position={[0.06, 0.05, -0.03]}
                                  rotation={[-2.86, -0.35, -1.17]}
                                >
                                  <group
                                    name='Bone006_038_1'
                                    position={[0, 0.09, 0]}
                                    rotation={[-0.15, -0.16, 0.74]}
                                  />
                                  <group
                                    name='Bone007_039_1'
                                    position={[-0.01, 0.09, -0.01]}
                                    rotation={[-1.81, 0.11, 1.47]}
                                  />
                                  <group
                                    name='Bone008_040_1'
                                    position={[-0.01, 0.06, 0]}
                                    rotation={[-1.53, -0.12, 1.22]}
                                  />
                                </group>
                                <group
                                  name='Bone009_041_1'
                                  position={[-0.06, 0.05, -0.03]}
                                  rotation={[0.15, -0.43, 1.88]}
                                >
                                  <group
                                    name='Bone010_042_1'
                                    position={[0, 0.09, 0]}
                                    rotation={[0.18, 0.25, 0.63]}
                                  />
                                  <group
                                    name='Bone011_043_1'
                                    position={[-0.01, 0.06, 0]}
                                    rotation={[1.94, 0.01, 1.13]}
                                  />
                                  <group
                                    name='Bone012_044_1'
                                    position={[-0.01, 0.09, 0.01]}
                                    rotation={[1.38, -0.17, 1.4]}
                                  />
                                </group>
                              </group>
                            </group>
                            <group
                              name='Bone001_045_1'
                              position={[0, -0.02, -0.04]}
                              rotation={[0.95, -0.14, 3.08]}
                            >
                              <group
                                name='Bone002_046_1'
                                position={[0, 0.07, 0]}
                                rotation={[-0.63, 0.05, -0.03]}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group
          name='Cylinder_8'
          position={[0.04, 0.15, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.28}
        >
          <mesh
            name='Object_30'
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={nodes.Object_30.material}
            position={[0, 0, 0.02]}
          />
        </group>
        <group name='Cylinder002_9' position={[0.03, 0.16, 0]}>
          <mesh
            name='Object_32'
            castShadow
            receiveShadow
            geometry={nodes.Object_32.geometry}
            material={nodes.Object_32.material}
            position={[0, -0.01, 0]}
          />
        </group>
        <mesh
          name='Plane'
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials['Material.005']}
          position={[-0.7, 4.23, 0.08]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.85}
        />
        <mesh
          name='Plane002'
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials['Material.001']}
          position={[-0.7, 4.23, 0.08]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.85}
        />
        <mesh
          name='Plane001'
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials['Material.003']}
          position={[-0.7, 4.23, 0.08]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.85}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/3DHero.gltf');
