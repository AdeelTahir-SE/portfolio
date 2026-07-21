"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ThreeBackground() {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            60,
            mount.clientWidth / mount.clientHeight,
            0.1,
            200
        );
        camera.position.set(0, 0, 6);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setClearColor(0x000000, 0);
        mount.appendChild(renderer.domElement);

        // ── Floating particles ─────────────────────────────────
        const particleCount = 280;
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        const pgeo = new THREE.BufferGeometry();
        pgeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        const pmat = new THREE.PointsMaterial({
            color: 0xa855f7,
            size: 0.03,
            transparent: true,
            opacity: 0.45,
        });
        const particles = new THREE.Points(pgeo, pmat);
        scene.add(particles);

        // ── Ambient decorative rings ───────────────────────────
        const makeRing = (radius, opacity, rotX, rotY) => {
            const geo = new THREE.TorusGeometry(radius, 0.008, 6, 120);
            const mat = new THREE.MeshBasicMaterial({
                color: 0x7c3aed,
                transparent: true,
                opacity,
            });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.rotation.x = rotX;
            mesh.rotation.y = rotY;
            scene.add(mesh);
            return { mesh, mat };
        };

        const r1 = makeRing(5, 0.08, Math.PI / 4, 0);
        const r2 = makeRing(7, 0.05, -Math.PI / 6, Math.PI / 3);
        const r3 = makeRing(4, 0.06, Math.PI / 3, Math.PI / 5);

        // ── Scroll fade ─────────────────────────────────────────
        const scrollState = { progress: 0 };
        ScrollTrigger.create({
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => { scrollState.progress = self.progress; },
        });

        const handleResize = () => {
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener("resize", handleResize);

        let frameId;
        let elapsed = 0;
        let last = performance.now();

        const animate = () => {
            frameId = requestAnimationFrame(animate);
            const now = performance.now();
            elapsed += (now - last) / 1000;
            last = now;

            const op = Math.max(0, 1 - scrollState.progress * 2);

            particles.rotation.y = elapsed * 0.03;
            particles.rotation.x = elapsed * 0.015;
            pmat.opacity = op * 0.45;

            r1.mesh.rotation.z = elapsed * 0.06;
            r1.mat.opacity = op * 0.08;

            r2.mesh.rotation.z = -elapsed * 0.04;
            r2.mat.opacity = op * 0.05;

            r3.mesh.rotation.z = elapsed * 0.05;
            r3.mat.opacity = op * 0.06;

            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", handleResize);
            renderer.dispose();
            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: "fixed",
                top: 0, left: 0,
                width: "100%", height: "100vh",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
}
