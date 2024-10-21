import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 3.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;

    // Set canvas opacity
    // renderer.domElement.style.opacity = '.6';

    // Post-processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const rgbShiftPass = new ShaderPass(RGBShiftShader);
    rgbShiftPass.uniforms['amount'].value = 0.0025;
    composer.addPass(rgbShiftPass);

    let model;
    let mouseX = 0.5, mouseY = 0.5;

    // HDRI Loader
    new RGBELoader()
      .setDataType(THREE.HalfFloatType)
      .load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/pond_bridge_night_1k.hdr', (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;

        // GLTF Loader
        const loader = new GLTFLoader();
        loader.load(
          '/DamagedHelmet.gltf',
          (gltf) => {
            model = gltf.scene;
            scene.add(model);

            model.position.set(0, 0, 0);
            updateModelScale();
            model.rotation.y = 0;

            // Start animation loop
            renderer.setAnimationLoop(animate);
          },
          undefined,
          (error) => {
            console.error('An error happened', error);
          }
        );
      });

    function animate() {
      if (model) {
        const targetRotationX = (mouseY - 0.5) * Math.PI * 0.5;
        const targetRotationY = (mouseX - 0.5) * Math.PI * 0.5;

        model.rotation.x += (targetRotationX - model.rotation.x) * 0.004;
        model.rotation.y += (targetRotationY - model.rotation.y) * 0.004;
      }
      composer.render();
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
      updateModelScale();
    }

    function onMouseMove(event) {
      mouseX = event.clientX / window.innerWidth;
      mouseY = event.clientY / window.innerHeight;
    }

    function updateModelScale() {
      if (model) {
        const minDimension = Math.min(window.innerWidth, window.innerHeight);
        const baseScale = 1;
        const scaleFactor = minDimension / 1000;
        const newScale = baseScale * scaleFactor;
        model.scale.set(newScale, newScale, newScale);
      }
    }

    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
