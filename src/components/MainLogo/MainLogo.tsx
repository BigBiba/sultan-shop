import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/icons/sultan.svg"

export default function MainLogo() {
    return (
        <Link href=""><Image src={Logo} alt=""></Image></Link>
    )
}