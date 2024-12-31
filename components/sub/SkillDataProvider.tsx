"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
    skill_name?: string;

}

const SkillDataProvider = ({ src, width, height, index, skill_name} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{delay: index * animationDelay}}
        >
            <div className="mb-2 flex items-center justify-center">
                <Image
                    src={src}
                    width={width}
                    height={height}
                    alt={skill_name || "skill image"}
                    className="transition-opacity duration-300"
                />
            </div>
            <div className="flex items-center justify-center">
                <p className="text-[#c1a1ff] text-sm font-medium text-center">
                    {skill_name}
                </p>
            </div>
        </motion.div>
)
}

export default SkillDataProvider