import Link from "next/link"
import { SignedIn,SignedOut,UserButton,SignInButton } from "@clerk/nextjs"

export default function Navbar(){
    return(        
    <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-500'>
    <Link href={"/"} className='uppercase font-bold flex items-center text-md h-12'>Next Ecommerce</Link>
    <SignedIn><UserButton/></SignedIn>
    <SignedOut>
        <SignInButton mode="modal">
            <button className="uppercase rounded-md border-gray-400 px-3 py-2">Fazer login</button>
        </SignInButton>
        </SignedOut>
    </nav>)
}