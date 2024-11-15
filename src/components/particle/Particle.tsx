import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // background: {
                //     color: {
                //         value: "#ffffff", // цвет фона
                //     },
                // },
                fpsLimit: 60,
                particles: {
                    color: {
                        value: ["rgba(60,140,198,0.09)", "rgba(81,185,217,0.35)", "rgba(18,170,218,0.35)", "#b0d0e8"], // массив цветов для кругов
                    },
                    number: {
                        value: 6, // количество кругов
                        density: {
                            enable: false,
                        },
                    },
                    size: {
                        value: { min: 30, max: 80 }, // диапазон размеров кругов
                    },
                    opacity: {
                        value: 0.1 || 0.2, // прозрачность для мягкого вида
                    },
                    shape: {
                        type: "circle",
                    },
                    move: {
                        enable: true,
                        speed: 1, // медленное движение для плавного эффекта
                        direction: "top",
                        random: true,
                        straight: false,
                        outModes: {
                            default: "out",
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};
