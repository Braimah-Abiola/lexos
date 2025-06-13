"use client";

import CareerCard from "@/components/common/career-card";
import Wrapper from "@/components/common/wrapper";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const OpenPositions = () => {
    const t = useTranslations("OpenPositions");
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className=" -mt-[30rem] md:-mt-[40rem] z-20 relative mb-20">
            <Wrapper className="flex flex-col gap-16">
                <motion.div
                    className=" w-full flex flex-col md:flex-row items-start justify-between md:px-6 max-w-5xl mx-auto gap-8 md:gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <motion.div variants={itemVariants} className="w-full md:w-1/3">
                        <h6 className=" text-xl font-semibold ">{t("designTitle")}</h6>
                        <p className=" text-foreground opacity-70 mt-1">{t("designDescription")}</p>
                    </motion.div>
                    <motion.div className="flex flex-col gap-4 w-full md:w-2/3" variants={itemVariants}>
                        <CareerCard category={t("designJob1Category")} title={t("designJob1Title")} description={t("designJob1Description")} location={t("designJob1Location")} type={t("designJob1Type")} compensation={t("designJob1Compensation")} />
                        <CareerCard category={t("designJob2Category")} title={t("designJob2Title")} description={t("designJob2Description")} location={t("designJob2Location")} type={t("designJob2Type")} compensation={t("designJob2Compensation")} />
                    </motion.div>
                </motion.div>

                <motion.div
                    className=" w-full flex flex-col md:flex-row items-start justify-between md:px-6 max-w-5xl mx-auto gap-8 md:gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <motion.div variants={itemVariants} className="w-full md:w-1/3">
                        <h6 className=" text-xl font-semibold ">{t("softwareDevelopmentTitle")}</h6>
                        <p className=" text-foreground opacity-70 mt-1">{t("softwareDevelopmentDescription")}</p>
                    </motion.div>
                    <motion.div className="flex flex-col gap-4 w-full md:w-2/3" variants={itemVariants}>
                        <CareerCard category={t("softwareJob1Category")} title={t("softwareJob1Title")} description={t("softwareJob1Description")} location={t("softwareJob1Location")} type={t("softwareJob1Type")} compensation={t("softwareJob1Compensation")} />
                        <CareerCard category={t("softwareJob2Category")} title={t("softwareJob2Title")} description={t("softwareJob2Description")} location={t("softwareJob2Location")} type={t("softwareJob2Type")} compensation={t("softwareJob2Compensation")} />
                    </motion.div>
                </motion.div>

                <motion.div
                    className=" w-full flex flex-col md:flex-row items-start justify-between md:px-6 max-w-5xl mx-auto gap-8 md:gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <motion.div variants={itemVariants} className="w-full md:w-1/3">
                        <h6 className=" text-xl font-semibold ">{t("otherTitle")}</h6>
                        <p className=" text-foreground opacity-70 mt-1">{t("otherDescription")}</p>
                    </motion.div>
                    <motion.div className="flex flex-col gap-4 w-full md:w-2/3" variants={itemVariants}>
                        <CareerCard category={t("otherJob1Category")} title={t("otherJob1Title")} description={t("otherJob1Description")} location={t("otherJob1Location")} type={t("otherJob1Type")} compensation={t("otherJob1Compensation")} />
                        <CareerCard category={t("otherJob2Category")} title={t("otherJob2Title")} description={t("otherJob2Description")} location={t("otherJob2Location")} type={t("otherJob2Type")} compensation={t("otherJob2Compensation")} />
                    </motion.div>
                </motion.div>
            </Wrapper>
        </section>
    );
}

export default OpenPositions;