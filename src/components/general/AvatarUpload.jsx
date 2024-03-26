import React, { useState, useEffect, useRef } from 'react'
import { Avatar } from "@files-ui/react";
import dummyData from '../../dummydata';
import { Avatar as PrimeAvatar } from 'primereact/avatar';

export default function AvatarUpload() {

  const [imageSource, setImageSource] = React.useState("broken/url");
  const [imageSource2, setImageSource2] = React.useState();

  useEffect(() => {
  }, [imageSource2])

  const isLoaded = () => {
    // document.getElementsByClassName("fui-avatar-image")[0].style.width = "100%"
    // document.getElementsByClassName("fui-avatar-image")[0].style.height = "100%"
    // document.getElementsByClassName("fui-avatar-image")[0].style.objectFit = "cover"
  }

  const changeAvatar = (img) => {
    setImageSource2(img);
    console.log(img);
  }

  return (
    <>
      <div onLoad={isLoaded} className=' w-[200px] h-[200px] relative '>
        <Avatar
          src={imageSource2}
          style={{ objectFit: "cover" }}
          onError={() => changeAvatar(fallBackImage)}
          onChange={(imgSource) => changeAvatar(imgSource)}
          accept=".pdf, .png, .jpg"
          alt="Avatar2"
          changeLabel={""}
          emptyLabel={"Upload an avatar"}
          loadingLabel={""}
        />
      </div>
    </>
  )
}
