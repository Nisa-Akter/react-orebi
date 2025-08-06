import React from 'react'
import Images from '../components/Images'
import logo from '/src/assets/image/Logo.png'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";





const Header = () => {
    return (
        <>
            <div className='py-6 bg-white'>

                <Container>
                    <Flex>
                        <div className="w-[90px]">
                            <Images imgSrc={logo} />
                        </div>



                        <div className=' m-auto'>
                            <ul className="flex gap-x-5 text-[#767676] font-normal text-[14px]">
                                <Link to={'/'}>
                                    <li className='hover: font-bold hover:text-[#262626]'><a href="#">Home</a></li>
                                </Link>
                                <Link to={'/shop'}>
                                    <li className='hover: font-bold hover:text-[#262626]'>Shop</li>
                                </Link>
                                <Link to={'/about'}>
                                    <li className='hover: font-bold hover:text-[#262626]'>About</li>
                                </Link>
                                <Link to={'/contact'}>
                                    <li className='hover: font-bold hover:text-[#262626]'>Contact</li>
                                </Link>
                                <Link to={'/journal'}>
                                    <li className='hover: font-bold hover:text-[#262626]'>Journal</li>
                                </Link>
                            </ul>
                        </div>
                        {/* <div className="">
                            <a href="#"><Button btnText={'Contact Me'} className={'bg-btn text-white'}>   </Button></a>

                        </div> */}

                    </Flex>



                </Container>

            </div >

            <div className='py-2 bg-[#F5F5F3]'>
                <Container>
                    <Flex>

                        <div className="">
                            <Flex className="gap-x-2">

                                <RiBarChartHorizontalLine />
                                <h3>Shop by Category</h3>
                            </Flex>


                        </div>
                        <div className="p-2.5 bg-white w-[600px]">
                            <Flex>

                                <input type="text" placeholder='Search products ' className='w-full' />

                                <Link>
                                    <CiSearch />
                                </Link>

                            </Flex>
                        </div>
                        <div className="">
                            <Flex className="">
                                <div className="flex gap-x-1 pr-5">
                                    <FaUser />
                                    <FaCaretDown />
                                </div>
                                <div className="">
                                    <FaShoppingCart />
                                </div>
                            </Flex>

                        </div>
                    </Flex>
                </Container>


            </div>


        </>

    )
}

export default Header