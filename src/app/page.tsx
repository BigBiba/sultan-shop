import Image from "next/image";
import Header from "@/components/header";
import { Contacts } from "@/components/Contacts/contacts";
import { Footer } from "@/components/Footer/footer";


export default function Home() {
  return (
    <div>
      <Header></Header>
      <Contacts /> 
      <Footer />
    </div>
  );
}
