

export const fadeIn = (duration: number) => {
    return {
        initial: { opacity: 0, y: -200 },
        enter: { opacity: 1, y: 0, transition: { duration: duration, delay: 0.5, ease: [0.48, 0.15, 0.25, 0.96],}, },
        leave: "hidden",
        class:"hidden xl:flex"
    }
};

export const scrollFadeIn = () => {
    return {
        initial: { opacity: 0, y: -10 },
        visible: {
            opacity: 1, y: 0,
            transition: { delay: 200, duration: 400 },
        },
    }
};
