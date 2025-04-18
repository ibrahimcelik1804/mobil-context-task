import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
import {Colors} from '../../thema/color';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const BackArrow = props => (
  <Svg
    width={70}
    height={70}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#filter0_dii_9_333)">
      <Path
        d="M100 183.333C146.025 183.333 183.334 146.025 183.334 100C183.334 53.975 146.025 16.6667 100 16.6667C53.9753 16.6667 16.667 53.975 16.667 100C16.667 146.025 53.9753 183.333 100 183.333Z"
        fill={Colors.SKYBLUE}
      />
    </G>
    <G filter="url(#filter1_dii_9_333)">
      <Path
        d="M129.167 93.75H85.917L100.25 79.4167C102.667 77 102.667 73 100.25 70.5833C99.0742 69.421 97.4872 68.7692 95.8337 68.7692C94.1801 68.7692 92.5931 69.421 91.417 70.5833L66.417 95.5833C64.0003 98 64.0003 102 66.417 104.417L91.417 129.417C92.667 130.667 94.2503 131.25 95.8337 131.25C97.417 131.25 99.0003 130.667 100.25 129.417C102.667 127 102.667 123 100.25 120.583L85.917 106.25H129.167C132.584 106.25 135.417 103.417 135.417 100C135.417 96.5833 132.584 93.75 129.167 93.75Z"
        fill={Colors.SLATEGRAY}
        fillOpacity={0.9}
        shapeRendering="crispEdges"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default BackArrow;
