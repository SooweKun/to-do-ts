/* eslint-disable @typescript-eslint/no-explicit-any */
import { HexColorPicker } from 'react-colorful';
import { useColorStore } from '/home/sowe/program/to-do-ts/src/store/useColorStore.ts';

export const ColorPicker = () => {
    const { fill, setFill } = useColorStore();

    return (
        <HexColorPicker color={fill} onChange={setFill} style={{ width: '100px', height: '100px' }}/>
    );
}