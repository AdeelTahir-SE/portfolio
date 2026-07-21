"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function LaptopScene() {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const W = mount.clientWidth;
        const H = mount.clientHeight;

        // ── Scene ───────────────────────────────────────────────
        const scene = new THREE.Scene();

        // ── Camera ──────────────────────────────────────────────
        const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
        camera.position.set(0, 0.3, 5);
        camera.lookAt(0, 0, 0);

        // ── Renderer ────────────────────────────────────────────
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(W, H);
        renderer.setClearColor(0x000000, 0);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.4;
        mount.appendChild(renderer.domElement);

        // ── Lighting ────────────────────────────────────────────
        scene.add(new THREE.AmbientLight(0xffffff, 2.5));

        const keyLight = new THREE.DirectionalLight(0xffffff, 3);
        keyLight.position.set(3, 5, 5);
        scene.add(keyLight);

        const purpleLight = new THREE.PointLight(0xa855f7, 10, 12);
        purpleLight.position.set(-3, 2, 3);
        scene.add(purpleLight);

        const blueLight = new THREE.PointLight(0x6366f1, 6, 12);
        blueLight.position.set(4, -2, 2);
        scene.add(blueLight);

        const rimLight = new THREE.PointLight(0xc084fc, 5, 10);
        rimLight.position.set(0, -3, -2);
        scene.add(rimLight);

        const fillLight = new THREE.DirectionalLight(0x9333ea, 1.5);
        fillLight.position.set(-4, 1, -2);
        scene.add(fillLight);

        // ── Model group ─────────────────────────────────────────
        const group = new THREE.Group();
        scene.add(group);

        // ── Mouse interaction ───────────────────────────────────
        const mouse = { x: 0, y: 0 };
        const target = { x: 0, y: 0 }; // lerp target

        const handleMouseMove = (e) => {
            const rect = mount.getBoundingClientRect();
            // Only react when mouse is near the canvas
            mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            mouse.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
        };
        window.addEventListener("mousemove", handleMouseMove);

        // ── Resize ──────────────────────────────────────────────
        const handleResize = () => {
            const nW = mount.clientWidth;
            const nH = mount.clientHeight;
            camera.aspect = nW / nH;
            camera.updateProjectionMatrix();
            renderer.setSize(nW, nH);
        };
        window.addEventListener("resize", handleResize);

        // ── Load GLTF ───────────────────────────────────────────
        const loader = new GLTFLoader();
        loader.load(
            "/model/source/model.gltf",
            (gltf) => {
                const model = gltf.scene;

                // Centre & fit model to camera view
                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                const size = box.getSize(new THREE.Vector3());
                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = 2.8 / maxDim;

                model.position.sub(center); // centre at origin
                model.scale.setScalar(scale);
                model.rotation.y = Math.PI / 2;



                group.add(model);
            },
            undefined,
            (err) => console.error("GLTF error:", err)
        );



        // ── Animation loop ──────────────────────────────────────
        let frameId;
        group.rotation.y = Math.PI / 4;

        const animate = () => {
            frameId = requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        // ── Cleanup ─────────────────────────────────────────────
        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("mousemove", handleMouseMove);
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
                width: "100%",
                height: "100%",
                minHeight: "420px",
                cursor: "grab",
            }}
        />
    );
}
