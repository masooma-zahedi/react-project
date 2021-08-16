import React from 'react'
import { motion } from 'framer-motion';

const loadingVariant = {
    animationOne:{
        x:[-20,20],
        y:[0, -30],
        transition:{
            x:{
                yoyo:Infinity,
                duration:.5
            },
            y:{
                yoyo:Infinity,
                duration:.25,
                ease:"easeOut"
            }
        }
    }
   
}

export default function Loading() {
    return (
        <div className="d-fixed w-50 text-center mx-auto position-relative boxLoading"style={{marginTop:350}}>
            <motion.div 
                variants={loadingVariant}
                animate="animationOne"
                // style={{width:10, height:10, borderRadius:"50%",backgroundColor:"#dd2399" }}
                className="loading"
            >
                
            </motion.div>

        </div>
    )
}
