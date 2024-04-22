import React, { useState, useEffect, useRef } from 'react'
import penImage from '../../assets/images/pen.png';
import { Avatar } from "@files-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';


export default function AvatarMiniButtonUpload(props) {

  const [imageSource, setImageSource] = useState("broken/url");
  const [imageSource2, setImageSource2] = useState(undefined);
  const [showRemoveBtn, setShowRemoveBtn] = useState(false);

  useEffect(() => {
    // console.log(document.getElementsByClassName("fui-avatar-image").length);
  }, [])

  const isLoaded = () => {
    document.getElementsByClassName("fui-avatar-image")[0].style.width = "100%"
    document.getElementsByClassName("fui-avatar-image")[0].style.height = "100%"
    document.getElementsByClassName("fui-avatar-image")[0].style.objectFit = "cover"
  }

  const setNewImage = (img) => {
    console.log(img)
    setImageSource2(img);
    setShowRemoveBtn(true);
  }

  const handleCancelImage = () => {
    setImageSource2(undefined);
    setShowRemoveBtn(false);
  }

  return (
    <div onLoad={isLoaded} className=' w-[200px] h-[200px] relative '>
      {
        imageSource2 == undefined ?
          <Avatar
            src={`${props.image}`}
            style={{ objectFit: "cover" }}
            // onError={() => setImageSource2(fallBackImage)}
            onChange={(imgSource) => setImageSource2(imgSource)}
            variant="circle"
            accept=".png, .jpg"
            readOnly
            alt="Avatar2"
            changeLabel={""}
            emptyLabel={"Upload an avatar"}
            loadingLabel={""}
          />
          :
          <Avatar
            src={imageSource2}
            style={{ objectFit: "cover" }}
            onError={() => setImageSource2(fallBackImage)}
            onChange={(imgSource) => setImageSource2(imgSource)}
            variant="circle"
            accept=".png, .jpg"
            readOnly
            alt="Avatar2"
            changeLabel={""}
            emptyLabel={"Upload an avatar"}
            loadingLabel={""}
          />
      }
      <div className=' w-[32px] h-[32px] absolute left-[160px] top-[160px]'>
        <Avatar
          style={{ width: "30px", height: "30px" }}
          src={penImage}
          onError={() => setImageSource2(penImage)}
          onChange={(imgSource) => setNewImage(imgSource)}
          variant="circle"
          accept=".png, .jpg"
          alt="Avatar2"
          changeLabel={""}
          emptyLabel={""}
          loadingLabel={""}
        />
      </div>
      {
        showRemoveBtn ?
          <div onClick={() => handleCancelImage()} className=' w-[32px] h-[32px] flex flex-row items-center justify-center absolute left-[160px] top-[14px] text-gray-200 bg-gray-400 rounded-full cursor-pointer hover:bg-gray-500 hover:text-white'>
            <FontAwesomeIcon className=' ' icon={faClose} />
          </div>
          :
          <></>
      }
    </div>
  )
}
