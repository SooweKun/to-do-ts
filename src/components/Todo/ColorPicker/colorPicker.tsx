import { HexColorPicker } from 'react-colorful';
import { useColorStore } from '../../../store/useColorStore';

interface Props { 
    setActive: (active: boolean) => void
}                     

export const ColorPicker: React.FC<Props> = ({setActive}) => {
    const { fill, setFill } = useColorStore();

    return (
      <HexColorPicker color={fill} onChange={setFill} style={{ width: '100px', height: '100px', marginRight: '10px'}} onBlur={() => setActive(false)}/>
    );
}