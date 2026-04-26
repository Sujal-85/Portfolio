import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Typed from 'typed.js';
import { ArrowDown, Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '../data/mock';

export default function Hero() {
  const mountRef = useRef(null);
  const typedEl = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: personal.roles,
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1400,
      loop: true,
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth, h = mount.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.45));
    const p1 = new THREE.PointLight(0x6C63FF, 30, 50); p1.position.set(-3, 2, 4); scene.add(p1);
    const p2 = new THREE.PointLight(0x00D4FF, 30, 50); p2.position.set(3, -2, 4); scene.add(p2);

    // Central icosahedron (wireframe)
    const icoGeo = new THREE.IcosahedronGeometry(1.35, 1);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0xffffff, wireframe: true, metalness: 0.4, roughness: 0.2, transparent: true, opacity: 0.55,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    scene.add(ico);

    // Solid inner glowing sphere
    const innerGeo = new THREE.IcosahedronGeometry(0.9, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x6C63FF, emissive: 0x6C63FF, emissiveIntensity: 0.6,
      metalness: 0.6, roughness: 0.25, transparent: true, opacity: 0.6,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    scene.add(inner);

    // Outer torus
    const torusGeo = new THREE.TorusGeometry(2.4, 0.02, 16, 200);
    const torusMat = new THREE.MeshBasicMaterial({ color: 0x00D4FF, transparent: true, opacity: 0.5 });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 2.5;
    scene.add(torus);

    // Particles
    const pGeo = new THREE.BufferGeometry();
    const N = 800;
    const positions = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02, transparent: true, opacity: 0.7 });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    const onMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove);

    let raf;
    const tick = () => {
      ico.rotation.x += 0.0035;
      ico.rotation.y += 0.005;
      inner.rotation.x -= 0.003;
      inner.rotation.y -= 0.004;
      torus.rotation.z += 0.002;
      points.rotation.y += 0.0006;

      // Parallax
      camera.position.x += (mouse.current.x * 0.6 - camera.position.x) * 0.04;
      camera.position.y += (mouse.current.y * 0.4 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    const onResize = () => {
      const W = mount.clientWidth, H = mount.clientHeight;
      camera.aspect = W / H; camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose(); icoGeo.dispose(); icoMat.dispose();
      innerGeo.dispose(); innerMat.dispose(); torusGeo.dispose(); torusMat.dispose();
      pGeo.dispose(); pMat.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden noise">
      <div ref={mountRef} className="absolute inset-0" />
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,10,15,0.85) 80%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 md:pt-40 pb-24">
        <div className="max-w-3xl">
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            Available for opportunities · 2026
          </span>
          <h1 className="font-display mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.02]">
            Hi, I&apos;m <span className="gradient-text">Sujal</span>
            <br />
            <span className="gradient-accent">Khedekar.</span>
          </h1>

          <div className="mt-6 flex items-center gap-3 text-lg md:text-2xl text-white/85">
            <span className="text-[#00D4FF] font-mono">&gt;</span>
            <span ref={typedEl} className="font-medium" />
          </div>

          <p className="mt-6 max-w-xl text-white/60 text-base md:text-lg leading-relaxed">
            Building scalable web & mobile products with React, Next.js, Flutter and modern cloud stacks.
            Currently engineering AI-powered platforms full-stack.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href={personal.resumeUrl} download className="btn-ghost">
              <Download size={18} /> Download Resume
            </a>
            <div className="flex items-center gap-2 ml-2">
              {[
                { icon: Github, href: personal.github, label: 'GitHub' },
                { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  aria-label={label}
                  className="w-11 h-11 grid place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 hover:text-white hover:border-[#00D4FF]/60 hover:bg-[#00D4FF]/10 transition">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <div className="scroll-indicator" />
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
