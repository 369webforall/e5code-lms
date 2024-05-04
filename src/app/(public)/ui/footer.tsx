import Link from "next/link";

const Footer = () => {
    return ( 
    <div className="
    border-t-[1px]">
       <div className="flex justify-between px-4 py-4 max-w-7xl mx-auto">
    
     
            <div> <Link href='/' className='flex items-center gap-1 mr-4'>
            <h1 className='text-orange-600 font-semibold'>e5code</h1>
        </Link></div>
        <p>All rights reserved. @{new Date().getFullYear()} e5code</p>
        <div className="flex gap-4 items-center">
            <Link href='/documents/tnc'>T&C</Link>
            <Link href='/documents/privacy-policy'>Privacy-Policy</Link>
            <Link href='/documents/refund'>Refund</Link>
        </div>
        
             
     </div>
    </div>  );
}
 
export default Footer;