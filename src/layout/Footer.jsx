import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'

const Footer = () => {
  return (
    <>
    <div className="py-4 bg-[#F5F5F3]">
      
      <Container>
        <Flex clas>
          <div className="text-[#6D6D6D] text-[14px] font-normal ">
            <h3 className='text-black text-[16px] font-bold pb-4'>Menu</h3>
            <h4>Home</h4>
            <h4>Shop</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Journal</h4>
          </div>
          <div className="text-[#6D6D6D] text-[14px] font-normal ">
            <h3 className='text-black text-[16px] font-bold pb-4'>Shop</h3>
            <h4>Category 1</h4>
            <h4>Category 2</h4>
            <h4>Category 3</h4>
            <h4>Category 4</h4>
            <h4>Category 5</h4>
          </div>
          <div className="text-[#6D6D6D] text-[14px] font-normal ">
            <h3 className='text-black text-[16px] font-bold pb-4'>Help</h3>
            <h4>Privacy Policy</h4>
            <h4>Terms & Conditions</h4>
            <h4>Special E-shop</h4>
            <h4>Shipping</h4>
            <h4>Secure Payments</h4>
          </div>
          <div className="text-[#6D6D6D] text-[14px] font-normal ">
            <h3 className='text-black text-[16px] font-bold '>(052) 611-5711</h3>
            <h3 className='text-black text-[16px] font-bold pb-4'>company@domain.com</h3>
            <h4>575 Crescent Ave. Quakertown, PA 18951</h4>
           
          </div>

          <div className="">
            <img src="/src/assets/image/Logo.png" alt="" className='w-1/2' />
          </div>
          
        </Flex>
      </Container>
    </div>
    







    
    
    </>
  )
}

export default Footer
