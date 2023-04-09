import React from 'react'
import background from "../../images/backG.png"
import image1 from "../../images/big.png"
import image2 from "../../images/repos.png"
import { BsArrowRightCircleFill, BsArrowLeftCircle } from 'react-icons/bs';
const FlasSellProduct = () => {
    return (
        <>
            <div>
                <div className="">
                <div style={{ fontFamily: 'Inter' }} className="m-5 flex justify-between container ">
                    <div className='lg:flex gap-2'>
                        <h1 className="text-2xl  border border-indigo-600 w-64">
                            <span className="font-bold mx-2">
                                Flash
                            </span> Sale Product</h1>

                        <div className="flex items-center gap-2">
                            <p>2d</p>
                            <p>2h</p>
                            <p>2m</p>
                            <p>2s</p>
                        </div>
                    </div>
                    <div>
                        <p className='flex gap-2'>
                            <span className='text-xl'>
                                <BsArrowLeftCircle />
                            </span>
                            <span className='text-xl'>
                                <BsArrowRightCircleFill />
                            </span>

                        </p>
                    </div>
                </div>
                </div>






               



            </div>

        </>
    )
}

export default FlasSellProduct