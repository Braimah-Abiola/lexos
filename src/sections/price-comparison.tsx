import Wrapper from "@/components/common/wrapper";
import { Separator } from "@/components/ui/separator";
import { CircleCheck } from "lucide-react";
import { useTranslations } from "next-intl";

const PricingComparison = () => {
  const t = useTranslations("PricingComparison");
  return (
    <div className=" bg-accent hidden md:block py-20 -mt-24 mb-20">
      <Wrapper>
        <h2 className="mt-2 font-manrope text-5xl font-bold text-center">{t("title")}</h2>

        <div className=" grid grid-cols-4 max-w-7xl mx-auto w-full gap-0 mt-20">
          <div className=" flex flex-col gap-12 py-8 w-full">
            <h4 className="text-xl font-semibold font-manrope">{t("featuresTitle")}</h4>

            <div className="flex flex-col items-start gap-8 w-full">
              <h6 className=" font-semibold text-lg">{t("accountsSubtitle")}</h6>
              <div className=" flex flex-col items-start gap-6 font-plex-sans font-normal text-base text-foreground opacity-70">
                <p>{t("teamMembersLabel")}</p>
                <p>{t("supportLabel")}</p>
                <p>{t("inventoryUseLabel")}</p>
                <p>{t("guidedSurveysLabel")}</p>
              </div>
            </div>


            <div className="flex flex-col items-start gap-8 w-full">
              <h6 className=" font-semibold text-lg">{t("corePlatformSubtitle")}</h6>
              <div className=" w-full flex flex-col items-start gap-4 font-plex-sans font-normal text-base text-foreground opacity-70">
                <p>{t("crmIntegrationLabel")}</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>{t("quoteAutomationLabel")}</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>{t("boxCountAutomationLabel")}</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>{t("fleetAssignmentAutomationLabel")}</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>{t("codeWidgetIntegrationLabel")}</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>{t("ssoScimLabel")}</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>{t("customDataPoliciesLabel")}</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>{t("analyticsOverviewLabel")}</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>{t("whiteLabelBrandingLabel")}</p>
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-col gap-12 py-8">
            <h4 className="text-xl font-semibold font-manrope">{t("growthPlanTitle")}</h4>

            <div className=" w-full flex flex-col items-start gap-8">
              <h6 className=" font-semibold text-lg text-accent">.</h6>
              <div className=" flex flex-col items-start gap-6 font-plex-sans font-normal text-base text-foreground opacity-70">
                <p>{t("growthTeamMembers")}</p>
                <p>{t("growthSupport")}</p>
                <p>{t("growthInventoryUse")}</p>
                <p>{t("growthGuidedSurveys")}</p>
              </div>
            </div>


            <div className=" w-full flex flex-col items-start gap-8">
              <h6 className=" font-semibold text-lg text-accent">.</h6>
              <div className=" w-full flex flex-col items-start gap-4 font-plex-sans font-normal text-base text-foreground opacity-70">
                <CircleCheck className=" h-6 size-5" />
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>{t("notApplicable")}</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>{t("notApplicable")}</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>{t("notApplicable")}</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>{t("notApplicable")}</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>{t("notApplicable")}</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>{t("notApplicable")}</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>{t("notApplicable")}</p>
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <p>{t("notApplicable")}</p>
              </div>
            </div>
          </div>

          <div className=" w-full flex flex-col gap-12 p-8 bg-primary rounded-2xl text-white">
            <h4 className="text-xl font-semibold font-manrope">{t("advancedPlanTitle")}</h4>

            <div className=" w-full flex flex-col items-start gap-8">
              <h6 className=" font-semibold text-lg text-primary">.</h6>
              <div className=" flex flex-col items-start gap-6 font-plex-sans font-normal text-base text-white">
                <p>{t("advancedTeamMembers")}</p>
                <p>{t("advancedSupport")}</p>
                <p>{t("advancedInventoryUse")}</p>
                <p>{t("advancedGuidedSurveys")}</p>
              </div>
            </div>


            <div className=" w-full flex flex-col items-start gap-8">
              <h6 className=" font-semibold text-lg text-primary">.</h6>
              <div className=" w-full flex flex-col items-start gap-4 font-plex-sans font-normal text-base text-white">
                <CircleCheck className=" h-6 size-5" />
                <Separator orientation="horizontal" className=" w-full bg-primary" />
                <CircleCheck className=" h-6 size-5" />
                <Separator orientation="horizontal" className=" w-full bg-primary" />
                <CircleCheck className=" h-6 size-5" />
                <Separator orientation="horizontal" className=" w-full bg-primary" />
                <CircleCheck className=" h-6 size-5" />
                <Separator orientation="horizontal" className=" w-full bg-primary" />
                <CircleCheck className=" h-6 size-5" />
                <Separator orientation="horizontal" className=" w-full bg-primary" />
                <p>{t("notApplicable")}</p>
                <Separator orientation="horizontal" className=" w-full bg-primary" />
                <p>{t("notApplicable")}</p>
                <Separator orientation="horizontal" className=" w-full bg-primary" />
                <p>{t("notApplicable")}</p>
                <Separator orientation="horizontal" className=" w-full bg-primary" />
                <p>{t("notApplicable")}</p>
              </div>
            </div>
          </div>


          <div className=" w-full flex flex-col gap-12 py-8">
            <h4 className="text-xl font-semibold font-manrope pl-8">{t("enterprisePlanTitle")}</h4>

            <div className=" w-full flex flex-col items-start gap-8 pl-8">
              <h6 className=" font-semibold text-lg text-accent">.</h6>
              <div className=" flex flex-col items-start gap-6 font-plex-sans font-normal text-base text-foreground opacity-70">
                <p>{t("enterpriseTeamMembers")}</p>
                <p>{t("enterpriseSupport")}</p>
                <p>{t("enterpriseInventoryUse")}</p>
                <p>{t("enterpriseGuidedSurveys")}</p>
              </div>
            </div>


            <div className=" w-full flex flex-col items-start gap-8">
              <h6 className=" font-semibold text-lg text-accent">.</h6>
              <div className=" w-full flex flex-col items-start gap-4 font-plex-sans font-normal text-base text-foreground opacity-70">
                <CircleCheck className=" ml-8 h-6 size-5 text-primary" />
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <CircleCheck className="ml-8 h-6 size-5 text-primary" />

                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <CircleCheck className="ml-8 h-6 size-5 text-primary" />
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <CircleCheck className="ml-8 h-6 size-5 text-primary" />
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <CircleCheck className="ml-8 h-6 size-5 text-primary" />
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <CircleCheck className="ml-8 h-6 size-5 text-primary" />
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <CircleCheck className="ml-8 h-6 size-5 text-primary" />
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <CircleCheck className="ml-8 h-6 size-5 text-primary" />
                <Separator orientation="horizontal" className=" w-full bg-black/20" />
                <CircleCheck className="ml-8 h-6 size-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default PricingComparison;