import React from 'react'
import Lottie, { useLottie } from 'lottie-react'
const Loading = ({animetion}) => {
    const defaultOption = {
        loop: true,
        autoplay: true,
        animationData: animetion.defaut,
    }
    const style = {
        height:300
    }
  
  return <>
  <Lottie
  animetionData={animetion}
  defaultOption={defaultOption}
  style={style} />
  </>;
  
};

export default Loading