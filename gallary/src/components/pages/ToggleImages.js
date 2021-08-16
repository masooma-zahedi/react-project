import React, {useState} from 'react'
import ImagesPage from './ImagesPage';


export default function ToggleImages() {
    const [title, setTitle] = useState("Gallary Site");
    const [isShowing, setIsShowing] = useState(false);

    const handleToggleImg = () => {
    setIsShowing(!isShowing);
    if (isShowing === !true) {
        setTitle("Imazing");
    } else {
        setTitle("Gallary Site ");
    }
    };


    return (
      <div className="App">
        <div className="text-center h3 p-3 bg-success text-white">{title}</div>
        <div className="">
          <div className="text-center">
            <button onClick={handleToggleImg} className="btn btn-success">
              Toggle Image
            </button>
          </div>
          {isShowing ? <ImagesPage /> : null}
        </div>
      </div>
    );
}
