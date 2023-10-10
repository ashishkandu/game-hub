import bullsEye from '../assets/bulls-eye.png';
import thumpsUp from '../assets/thumps-up.png';
import meh from '../assets/meh.png';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumpsUp, alt: 'recommended', boxSize: '30px' },
    5: { src: bullsEye, alt: 'exceptional', boxSize: '30px' },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
