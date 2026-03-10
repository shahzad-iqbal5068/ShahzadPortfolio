"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Mail, Phone } from "lucide-react";
// import Link from 'next/link';

import SocialIcons from "@/components/data-display/social-icons";
import Tag from "@/components/data-display/tag";
import IconButton from "@/components/general/icon-button";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import useWindowSize from "@/hooks/use-window-size";
import { copyTextToClipboard } from "@/lib/utils";
import { CONTACT_INFO } from "@/lib/data";

type CopyValue = "email" | "phone";

const ContactSection = () => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
    null
  );

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      let timoutId: any = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert("Unable to copy!");
    }
  };

  return (
    <Container id="contact">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="self-center">
          <Tag label="Get in touch" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          What’s next? Feel free to reach out to me if you are looking for a
          developer, have a query, or simply want to connect.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col items-center gap-6 md:gap-12"
      >
        <div className="flex flex-col items-center md:gap-4">
          <div className="flex items-center gap-4 md:gap-5">
            <Mail className="h-6 w-6 md:h-8 md:w-8" />
            {/* <Link href={`mailto:${email}`}> */}
            <Typography variant="h2">{CONTACT_INFO.email}</Typography>
            {/* </Link> */}
            <IconButton
              size={width && width < 768 ? "md" : "lg"}
              onClick={() => handleCopyClick(CONTACT_INFO.email, "email")}
              showTooltip={isCopied && copiedValueType === "email"}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>
          <div className="flex items-center gap-4 md:gap-5">
            <Phone className="h-6 w-6 md:h-8 md:w-8" />
            {/* <Link href={`tel:${phone.replace(' ', '')}`}> */}
            <Typography variant="h2">{CONTACT_INFO.phone}</Typography>
            {/* </Link> */}
            <IconButton
              size={width && width < 768 ? "md" : "lg"}
              onClick={() => handleCopyClick(CONTACT_INFO.phone.replace(" ", ""), "phone")}
              showTooltip={isCopied && copiedValueType === "phone"}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Typography className="text-center">
            You may also find me on these platforms!
          </Typography>
          <SocialIcons />
        </div>
      </motion.div>
    </Container>
  );
};

export default ContactSection;
