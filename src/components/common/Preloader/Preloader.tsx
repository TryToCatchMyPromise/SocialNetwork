import React, {FC} from "react";
import preloader from "../../../assets/images/preloader.svg"

type PropsType = {

}

const Preloader: FC<PropsType> = () => {
  return (
      <div>
        <img src={preloader}/>
      </div>
  );
}

export default Preloader;