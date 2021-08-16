import React, { useState, useEffect} from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import useFetchImage from "../utils/Hooks/useFetchImage";
import useScroll from "../utils/Hooks/useScroll";
import Loading from "../utils/Hooks/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import {  AnimatePresence, motion } from "framer-motion";

function Images(){

  const [page, setPage] = useState(0);
  const [search, setSearch] = useState(null)
  const [myImage, setMyImage, errers, isLoading] = useFetchImage(page,search);
  const [isHovering, setIsHovering] = useState(-1);
  const scrollPosition = useScroll();
  const[showPreview,setShowPreview] = useState(-1);

  // ::::::::::::::; Handle Remove Img:::::::::::
  const handleRemoveImg = (index) => {
    setMyImage(myImage.filter((q, i) => i !== index));

      // ::::::::::::::;; Other Way to Remove Img
      // setMyImage([...myImage.slice(0, index), ...myImage.slice(index + 1)]);
  };

  // ::::::::::::::::: handel Load Page
  useEffect(()=>{
      if(scrollPosition >= document.body.offsetHeight - window.innerHeight){
        setPage(page+1)
      }
  },[scrollPosition])

// :::::::::::::::::::::;; Handle Searching::::::::::::::;;
const handleSearching = (e)=>{
  e.preventDefault();
  setSearch(e.target.elements.search.value);
   e.target.elements.search.placeholder= e.target.elements.search.value;
  e.target.elements.search.value ="";
}

  // ::::::::::::::::::::::::::::::::::::::::::: Add Form Image::::::::::::::::;::::::::::::::::::::::::::::::
  //  function AddFormImage() {
  //     const inputRef = useRef(null);
  //     const [myImage, setMyImage] = useFetchImage();

  //     const handleAddImg = (e) => {
  //       e.preventDefault();
  //       const srcImg = e.target.elements.image.value;
  //       if (srcImg !== "") {
  //         setMyImage([...myImage, srcImg]);
  //         e.target.elements.image.value = "";
  //       } else {
  //         alert("please Enter Img URL");
  //       }
  //     };

  //       useEffect(() => {
  //         inputRef.current.focus();
  //       }, []);

//     return (
//       <div>
//         <form
//           onSubmit={handleAddImg}
//           className="w-50 mx-auto text-center  my-2 boeder border-danger form-group"
//         >
//           <input
//             ref={inputRef}
//             type="text"
//             name="image"
//             className="p-2 shadow rounded border-1 form-control-input w-75 "
//           />
//           <button
//             name="btnAdd"
//             type="submit"
//             className="btn btn-primary p-2 mx-1"
//           >
//             Add Image
//           </button>
//         </form>
//       </div>
//     );
// }


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;
    return (
      <>
        <form onSubmit={handleSearching} className="form-group container">
          <div className=" my-4 form-group row justify-content-center">
            <input
              type="text"
              name="search"
              className="form-control-input p-1 col-8 "
              placeholder="Search For Photo"
            />
            <button type="submit" className="btn btn-primary p-1 col-1">
              Search
            </button>
          </div>
        </form>

        <InfiniteScroll
          dataLength={myImage.length}
          next={() => setPage(page + 1)}
          hasMore={true}
        >
          {errers[0] ? (
            <h3
              className="position-absolute top-50  border"
              style={{ left: "50%", transform: "translate(-50%, -50%)" }}
            >
              {errers[0]}
            </h3>
          ) : (
            <div>
              <div className=" flex flex-wrap container">
                {myImage.map((image, index) => (
                  <motion.div
                    // layoutId={index}

                    style={{ width: "16%" }}
                    className="flex justify-center d-inline-block"
                  >
                    <motion.div
                      key={index}
                      className=" my-1 w-100 p-1 position-relative"
                      style={{
                        height: "350px",
                        border: "2px solid #e9e9e9 ",
                      }}
                      onMouseEnter={() => {
                        setIsHovering(index);
                      }}
                      onMouseLeave={() => {
                        setIsHovering(-1);
                      }}
                    >
                      <RiCloseCircleLine
                        onClick={() => handleRemoveImg(index)}
                        className={`position-absolute text-white closeImg ${
                          isHovering === index ? "" : "d-none"
                        }`}
                        style={{ right: 5, top: 5, cursor: "pointer" }}
                      />
                      <motion.img
                        onClick={() => {
                          setShowPreview(index);
                        }}
                        className="w-100 h-100"
                        src={image.urls.regular}
                        alt="img"
                      />
                    </motion.div>
                    <AnimatePresence exitBeforeEnter>
                      {showPreview === index && (
                        <motion.section
                          initial={{ opacity: 0,scale:0 }}
                          animate={{
                            opacity: 1,
                            scale:1,
                            rotate: 360,
                            transition: {delay:.1, duration: 1 },
                          }}
                          exit={{
                            rotateZ: 360,
                            scale:0,
                            transition: { duration: .3 },
                          }}
                          onClick={(e) => {
                            setShowPreview(-1);
                          }}
                          className="position-fixed   d-flex justify-content-center align-items-center text-center"
                          style={{
                            zIndex: "40",
                            top: "20%",
                            left: "25%",
                            width: "700px",
                            height: "500px",
                          }}
                        >
                          <motion.div className="w-100 h-100">
                            <motion.img
                              className="w-100 h-100 rounded"
                              src={image.urls.regular}
                              alt="img"
                            />
                          </motion.div>
                        </motion.section>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          {isLoading && <Loading />}
        </InfiniteScroll>
      </>
    );
  
};

export default Images;
