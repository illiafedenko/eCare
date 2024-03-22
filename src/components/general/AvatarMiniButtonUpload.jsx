import React, { useState, useEffect, useRef } from 'react'
import penImage from '../../assets/images/pen.png';
import { Avatar } from "@files-ui/react";


export default function AvatarMiniButtonUpload() {

  const [imageSource, setImageSource] = React.useState("broken/url");
  const [imageSource2, setImageSource2] = React.useState(undefined);

  useEffect(() => {
    // console.log(document.getElementsByClassName("fui-avatar-image").length);
  }, [])

  const isLoaded = () => {
    document.getElementsByClassName("fui-avatar-image")[0].style.width = "100%"
    document.getElementsByClassName("fui-avatar-image")[0].style.height = "100%"
    document.getElementsByClassName("fui-avatar-image")[0].style.objectFit = "cover"
  }


  return (
    <div onLoad={isLoaded} className=' w-[200px] h-[200px] relative '>
      <Avatar
        src={imageSource2}
        style={{ objectFit: "cover" }}
        onError={() => setImageSource2(fallBackImage)}
        onChange={(imgSource) => setImageSource2(imgSource)}
        variant="circle"
        accept=".pdf, .png, .jpg"
        readOnly
        alt="Avatar2"
        changeLabel={""}
        emptyLabel={"Upload an avatar"}
        loadingLabel={""}
      />
      <div className=' w-[32px] h-[32px] absolute left-[160px] top-[160px]'>
        <Avatar
          style={{ width: "30px", height: "30px" }}
          src={penImage}
          onError={() => setImageSource2(penImage)}
          onChange={(imgSource) => setImageSource2(imgSource)}
          variant="circle"
          accept=".pdf, .png, .jpg"
          alt="Avatar2"
          changeLabel={""}
          emptyLabel={""}
          loadingLabel={""}
        />
      </div>
    </div>
  )
}
