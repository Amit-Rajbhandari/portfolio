import React from "react";
import { Card } from "@src/components";
import { StyledLink } from "@src/styled-component";

const ContactSection = () => {
  return (
    <section id="contact" className="js-show-on-scroll py-32 pb-20">
      <div className="container grid grid-cols-1 xl:grid-cols-12">
        <div className="xl:col-start-3 xl:col-end-11">
          <Card
            classes={{
              root: "grid grid-cols-12 xl:gap-20 !py-14 !px-10 bg-aurora-bg bg-cover bg-center !bg-slate-100 dark:!bg-[#43435E]",
            }}
          >
            <div className="col-span-12 xl:col-span-8">
              <h2 className="mb-6 text-primary-500 dark:text-primary-100">
                Let&apos;s work together on your next project
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Don&apos;t wait untill tomorrow. Let&apos;s talk today and learn
                how to start leveraging your business.
              </p>
            </div>

            <div className="col-span-12 xl:col-span-3 flex flex-col items-center justify-center ">
              <h3 className="mb-4">Start by</h3>
              <StyledLink url="/" isActive>
                saying hi
              </StyledLink>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;