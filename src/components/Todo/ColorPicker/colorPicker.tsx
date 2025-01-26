import { HexColorPicker } from 'react-colorful';
import { useColorStore } from '/home/sowe/program/to-do-ts/src/store/useColorStore.ts';
import { motion } from "motion/react"

interface Props {
    setActive: (active: boolean) => void
}

export const ColorPicker: React.FC<Props> = ({setActive}) => {
    const { fill, setFill } = useColorStore();

    return (
       <motion.div
        onBlur={() => setActive(false)}
       >
         <HexColorPicker color={fill} onChange={setFill} style={{ width: '100px', height: '100px', marginRight: '10px'}}/>
       </motion.div>
    );
}