import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function VantaBackground({ className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.015);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 32);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Vanta NET Data: Particle Nodes
    const particleCount = 90;
    const maxDistance = 14;
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    // Initialize 3D positions and random velocity directions
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 35;

      velocities.push({
        x: (Math.random() - 0.5) * 0.08,
        y: (Math.random() - 0.5) * 0.08,
        z: (Math.random() - 0.5) * 0.08,
      });
    }

    // 3. Node Points (Particles)
    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x34d399,
      size: 0.8,
      transparent: true,
      opacity: 0.9,
    });

    const pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(pointsMesh);

    // 4. Connecting Lines (Net Geometry)
    const linesGeometry = new THREE.BufferGeometry();
    const maxLines = (particleCount * (particleCount - 1)) / 2;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);

    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x3b82f6, 3, 100);
    pointLight.position.set(0, 0, 20);
    scene.add(pointLight);

    // 6. Interactive Mouse Physics
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 7. Animation Loop
    let animId;
    const animate = () => {
      let vertexIdx = 0;
      let colorIdx = 0;

      // Update node positions with velocity and boundary bounce
      for (let i = 0; i < particleCount; i++) {
        let x = positions[i * 3] + velocities[i].x;
        let y = positions[i * 3 + 1] + velocities[i].y;
        let z = positions[i * 3 + 2] + velocities[i].z;

        // Bounce back from boundaries
        if (x < -30 || x > 30) velocities[i].x *= -1;
        if (y < -22 || y > 22) velocities[i].y *= -1;
        if (z < -22 || z > 22) velocities[i].z *= -1;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
      }
      pointsGeometry.attributes.position.needsUpdate = true;

      // Build Vanta Net connecting lines between near nodes
      for (let i = 0; i < particleCount; i++) {
        const x1 = positions[i * 3];
        const y1 = positions[i * 3 + 1];
        const z1 = positions[i * 3 + 2];

        for (let j = i + 1; j < particleCount; j++) {
          const x2 = positions[j * 3];
          const y2 = positions[j * 3 + 1];
          const z2 = positions[j * 3 + 2];

          const dx = x1 - x2;
          const dy = y1 - y2;
          const dz = z1 - z2;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.8;

            linePositions[vertexIdx++] = x1;
            linePositions[vertexIdx++] = y1;
            linePositions[vertexIdx++] = z1;

            linePositions[vertexIdx++] = x2;
            linePositions[vertexIdx++] = y2;
            linePositions[vertexIdx++] = z2;

            // Electric Indigo & Cyan Line Gradient (#3B82F6 & #34D399)
            lineColors[colorIdx++] = 0.23 * alpha;
            lineColors[colorIdx++] = 0.83 * alpha;
            lineColors[colorIdx++] = 0.96 * alpha;

            lineColors[colorIdx++] = 0.23 * alpha;
            lineColors[colorIdx++] = 0.51 * alpha;
            lineColors[colorIdx++] = 0.96 * alpha;
          }
        }
      }

      linesGeometry.setDrawRange(0, vertexIdx / 3);
      linesGeometry.attributes.position.needsUpdate = true;
      linesGeometry.attributes.color.needsUpdate = true;

      // Parallax Sway
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 4 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    // 8. Responsive Resize Handler
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
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
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