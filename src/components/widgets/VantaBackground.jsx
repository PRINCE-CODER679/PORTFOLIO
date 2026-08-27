import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function VantaBackground({ className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.018);

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 18, 35);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Geometry: 3D Wave Plane
    const geometry = new THREE.PlaneGeometry(100, 100, 60, 60);
    geometry.rotateX(-Math.PI / 2.3);

    const pos = geometry.attributes.position;

    // Material 1: Solid Shaded 3D Mesh
    const material = new THREE.MeshPhongMaterial({
      color: 0x2563eb, // Vibrant Royal Indigo #2563EB / #3B82F6
      emissive: 0x0f172a,
      flatShading: true,
      shininess: 90,
      transparent: true,
      opacity: 0.85,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = -5;
    scene.add(mesh);

    // Material 2: Glowing Cyber Wireframe Overlay
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa, // Bright Cyan Highlight #60A5FA
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireframeMesh = new THREE.Mesh(geometry, wireframeMat);
    wireframeMesh.position.y = -4.9;
    scene.add(wireframeMesh);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0x3b82f6, 4, 120);
    light1.position.set(20, 30, 20);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x818cf8, 3, 120);
    light2.position.set(-20, 20, -10);
    scene.add(light2);

    // 4. Mouse Interactive Parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 5. Animation Loop
    const clock = new THREE.Clock();
    let animId;

    const animate = () => {
      const time = clock.getElapsedTime() * 1.1;

      // Deform Vertices in Real-Time 3D Wave Motion
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z = Math.sin(x * 0.12 + time) * 3.2 + Math.cos(y * 0.12 + time * 0.9) * 3.2;
        pos.setZ(i, z);
      }
      pos.needsUpdate = true;
      geometry.computeVertexNormals();

      // Smooth Camera Sway with Mouse Movement
      camera.position.x += (mouseX * 6 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 4 + 18 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    // 6. Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      wireframeMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full min-h-screen z-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}