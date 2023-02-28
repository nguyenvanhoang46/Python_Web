import React from 'react'
import './index.scss'
// import { HiOutlineBuildingOffice2 } from 'react-icons/hi'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
const Coutdown = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-6  text-center justify-items-center ">
                <div className="mt-10">
                    <div className="icon-coutdown">
                        <HiOutlineBuildingOffice2 />
                    </div>
                    <div className="count-tk text-center">
                        <div className="inline-flex place-items-center">
                            <span className='text-[20px]'>+</span>
                            <span className="counter-number" >400</span>
                        </div>
                        <br />
                        <span className='font-bold'>
                            Bưu cục
                            <br />
                            & Điểm nhận trả
                        </span>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="icon-coutdown">
                        <HiOutlineBuildingOffice2 />
                    </div>
                    <div className="count-tk text-center">
                        <div className="inline-flex place-items-center">
                            <span className='text-[20px]'>+</span>
                            <span className="counter-number" >450</span>
                        </div>
                        <br />
                        <span className='font-bold'>
                            Phương tiện
                            <br />
                            đa tải trọng
                        </span>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="icon-coutdown">
                        <HiOutlineBuildingOffice2 />
                    </div>
                    <div className="count-tk text-center">
                        <div className="inline-flex place-items-center">
                            <span className='text-[20px]'>+</span>
                            <span className="counter-number" >150.000</span>
                            <span> m<sup>2</sup></span>
                        </div>
                        <br />
                        <span className='font-bold'>
                            Diện tích
                            <br />
                            kho bãi
                        </span>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="icon-coutdown">
                        <HiOutlineBuildingOffice2 />
                    </div>
                    <div className="count-tk text-center">
                        <div className="inline-flex place-items-center">
                            <span className='text-[20px]'>+</span>
                            <span className="counter-number" >4.300</span>
                        </div>
                        <br />
                        <span className='font-bold'>
                            Nhân viên
                            <br />
                            chính thức
                        </span>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="icon-coutdown">
                        <HiOutlineBuildingOffice2 />
                    </div>
                    <div className="count-tk text-center">
                        <div className="inline-flex place-items-center">
                            <span className='text-[20px]'>+</span>
                            <span className="counter-number" >36.000</span>
                        </div>
                        <br />
                        <span className='font-bold'>
                            Đối tác
                            <br />
                            Doanh nghiệp
                        </span>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="icon-coutdown">
                        <HiOutlineBuildingOffice2 />
                    </div>
                    <div className="count-tk text-center">
                        <div className="inline-flex place-items-center">
                            <span className='text-[20px]'>+</span>
                            <span className="counter-number" >100.00</span>
                        </div>
                        <br />
                        <span className='font-bold'>
                            Khách hàng
                            <br />
                            Cá nhân
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coutdown