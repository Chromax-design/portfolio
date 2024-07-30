import { ContactForm } from "@/components/Contact/ContactFormcomponent";
import LottieAnimation from "@/components/Contact/LottieAnimation";
import { siteMetadata } from "@/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: "Contact me",
  description: `Get in touch with Godskey, a skilled web developer, to discuss your web development needs. Contact me for project inquiries, collaborations, or any questions you have at ${siteMetadata.email} . Let's create something amazing together!`,
};

const ContactPage = () => {
  return (
    <section className="w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center text-dark">
      <div className="inline-block w-2/5 h-full border-solid border-r-2 border-b-dark">
        <LottieAnimation />
      </div>
      <div className="w-3/5 flex flex-col items-start justify-center px-10 pb-8">
        <h2 className="font-bold capitalize text-4xl">Let&apos;s connect</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
