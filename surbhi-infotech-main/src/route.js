import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import React, { Suspense } from "react";
import Loader from "./Common/Loader";
import Hire from "./Hire";
import VRReality from "./VR/VRReality";
import ShopifyPage from "./Shopify/ShopifyPage";
import AppDevelopment from "./AppDevelopment/AppDevelopment";
const Home = React.lazy(() => import('./Home/index'));
const BlogList = React.lazy(() => import('./Blog'));
const BlogDetails = React.lazy(() => import('./Blog/BlogDetails'));
const BlogDetails2 = React.lazy(() => import('./Blog/BlogDetails2'));
const BlogDetails3 = React.lazy(() => import('./Blog/BlogDetails3'));
const BlogDetails4 = React.lazy(() => import('./Blog/BlogDetails4'));
const BlogDetails5 = React.lazy(() => import('./Blog/BlogDetails5'));
const BlogDetails6 = React.lazy(() => import('./Blog/BlogDetails6'));
const BlogDetails7 = React.lazy(() => import('./Blog/BlogDetails7'));
const ReasonsMachineLearning = React.lazy(() => import('./Blog/ReasonsMachineLearning'));
const DevelopmentMistakes = React.lazy(() => import('./Blog/DevelopmentMistakes'));
const NeedtoDotoLaunch = React.lazy(() => import('./Blog/NeedtoDotoLaunch'));
const BusinessNeedsaMobileApp = React.lazy(() => import('./Blog/BusinessNeedsaMobileApp'));
const GenerateMoreMoney = React.lazy(() => import('./Blog/GenerateMoreMoney'));
const SelectingaWebsiteTheme = React.lazy(() => import('./Blog/SelectingaWebsiteTheme'));
const WebDesignTips = React.lazy(() => import('./Blog/WebDesignTips'));
const BenefitsofVRTechnology = React.lazy(() => import('./Blog/BenefitsofVRTechnology'));
const InvestinVirtualReality = React.lazy(() => import('./Blog/InvestinVirtualReality'));
const VRtheFutureofRealEstate = React.lazy(() => import('./Blog/VRtheFutureofRealEstate'));
const ThePowerofVirtualReality = React.lazy(() => import('./Blog/ThePowerofVirtualReality'));
const ReshapedMarketingRealEstate = React.lazy(() => import('./Blog/ReshapedMarketingRealEstate'));
const VRInfluencesCustomerBehaviour = React.lazy(() => import('./Blog/VRInfluencesCustomerBehaviour'));
const WaystoIncreaseWebsiteTraffic = React.lazy(() => import('./Blog/WaystoIncreaseWebsiteTraffic'));
const AugmentedRealityTrends = React.lazy(() => import('./Blog/AugmentedRealityTrends'));
const BusinessGrowthWithAI = React.lazy(() => import('./Blog/BusinessGrowthWithAI'));
const VirtualRealityistransformingEcommerce = React.lazy(() => import('./Blog/VirtualRealityistransformingEcommerce'));
const VirtualRealityinEducation = React.lazy(() => import('./Blog/VirtualRealityinEducation'));
const VirtualRealityIsExpandingHealthCare = React.lazy(() => import('./Blog/VirtualRealityIsExpandingHealthCare'));
const PossibilitiesofVirtualRealityinFashion = React.lazy(() => import('./Blog/PossibilitiesofVirtualRealityinFashion'));
const BenefitsofVirtualRealityinFashion = React.lazy(() => import('./Blog/BenefitsofVirtualRealityinFashion'));
const VRbeUsedtoImproveEducation = React.lazy(() => import('./Blog/VRbeUsedtoImproveEducation'));
const BrandsIncorporateVRintoOnlineShopping = React.lazy(() => import('./Blog/BrandsIncorporateVRintoOnlineShopping'));


const VirtualReality = React.lazy(() => import('./Blog/VirtualRealityBlog'));
const BlockChain = React.lazy(() => import('./Blog/Blockchain'));
const FutureVirtualReality = React.lazy(() => import('./Blog/FutureVirtualReality'));
const Entrepreneurs = React.lazy(() => import('./Blog/Entrepreneurs'));
const MachineLearning = React.lazy(() => import('./Blog/MachineLearning'));
const ContactUs = React.lazy(() => import('./ContactUs'));
const Services = React.lazy(() => import('./Services'));
const PortfolioList = React.lazy(() => import('./Portfolio'));
const Career = React.lazy(() => import('./Career'));
const ServiceDetails = React.lazy(() => import('./Services/ServiceDetails'));
const CaseStudy = React.lazy(() => import('./CaseStudy'));
const AboutUs = React.lazy(() => import('./AboutUs'));
const CaseStudyDetails = React.lazy(() => import('./CaseStudy/innerPages/CaseStudyDetails'));
const OcticsAr = React.lazy(() => import('./CaseStudy/innerPages/OcticsAr'));
const PosWebApplication = React.lazy(() => import('./CaseStudy/innerPages/PosWebApplication'));
const ChirplyWeb = React.lazy(() => import('./CaseStudy/innerPages/ChirplyWeb'));
const ZoomIn = React.lazy(() => import('./CaseStudy/innerPages/ZoomIn'));
const AngularBlog = React.lazy(() => import('./CaseStudy/innerPages/AngularBlog'));
const InglishFireSafety = React.lazy(() => import('./CaseStudy/innerPages/InglishFireSafety'));
const Murrays = React.lazy(() => import('./CaseStudy/innerPages/Murrays'));
const HangTime = React.lazy(() => import('./CaseStudy/innerPages/HangTime'));
const NetSpace = React.lazy(() => import('./CaseStudy/innerPages/NetSpace'));
const NetSpaceApplication = React.lazy(() => import('./CaseStudy/innerPages/NetSpaceApplication'));
const StarBuzz = React.lazy(() => import('./CaseStudy/innerPages/StarBuzz'));
const SkooviWeb = React.lazy(() => import('./CaseStudy/innerPages/SkooviWeb'));
const SkooviApp = React.lazy(() => import('./CaseStudy/innerPages/SkooviApp'));
const Habbit = React.lazy(() => import('./CaseStudy/innerPages/Habbit'));
const ServicePack = React.lazy(() => import('./CaseStudy/innerPages/ServicePack'));
const EasyDentalMarketing = React.lazy(() => import('./CaseStudy/innerPages/EasyDentalMarketing'));
const TheNudge = React.lazy(() => import('./CaseStudy/innerPages/TheNudge'));
const MedDevice = React.lazy(() => import('./CaseStudy/innerPages/MedDevice'));
const Dissh = React.lazy(() => import('./CaseStudy/innerPages/Dissh'));
const PowerViz = React.lazy(() => import('./CaseStudy/innerPages/PowerViz'));
const StarChaat = React.lazy(() => import('./CaseStudy/innerPages/StarChaat'));
const LightBox = React.lazy(() => import('./CaseStudy/innerPages/LightBox'));
const Koch = React.lazy(() => import('./CaseStudy/innerPages/Koch'));
const MerchyElectronics = React.lazy(() => import('./CaseStudy/innerPages/MerchyElectronics'));
const StarBuzzWeb = React.lazy(() => import('./CaseStudy/innerPages/StarBuzzWeb'));
const ArtSmiley = React.lazy(() => import('./CaseStudy/innerPages/ArtSmiley'));
const Yudoo = React.lazy(() => import('./CaseStudy/innerPages/Yudoo'));
const EmotionTracker = React.lazy(() => import('./CaseStudy/innerPages/EmotionTracker'));
const Uloss = React.lazy(() => import('./CaseStudy/innerPages/Uloss'));
const Menyos = React.lazy(() => import('./CaseStudy/innerPages/Menyos'));
const MotherFood = React.lazy(() => import('./CaseStudy/innerPages/MotherFood'));
const AcadLife = React.lazy(() => import('./CaseStudy/innerPages/AcadLife'));
const Uvibes = React.lazy(() => import('./CaseStudy/innerPages/Uvibes'));
const Ken42 = React.lazy(() => import('./CaseStudy/innerPages/Ken42'));
const AgriBridge = React.lazy(() => import('./CaseStudy/innerPages/AgriBridge'));
const VovoChatBoat = React.lazy(() => import('./CaseStudy/innerPages/VovoChatBoat'));
const MenyosWeb = React.lazy(() => import('./CaseStudy/innerPages/MenyosWeb'));
const MereSalim = React.lazy(() => import('./CaseStudy/innerPages/MereSalim'));
const BlockChain1 = React.lazy(() => import('./CaseStudy/innerPages/Pgq.js'));
const BlockChain2 = React.lazy(() => import('./CaseStudy/innerPages/metaz.js'));
const BlockChain3 = React.lazy(() => import('./CaseStudy/innerPages/anftiz.js'));
const RetailPortfolio = React.lazy(() => import('./CaseStudy/innerPages/RetailPortfolio'));
const RetailEstate = React.lazy(() => import('./CaseStudy/innerPages/RetailPortfolio/RealEstate.js'));
const FireSafety = React.lazy(() => import('./CaseStudy/innerPages/RetailPortfolio/FireSafety.js'));
const Gamingvr = React.lazy(() => import('./CaseStudy/innerPages/RetailPortfolio/Gamingvr.js'));
const FutureSpace = React.lazy(() => import('./CaseStudy/innerPages/RetailPortfolio/FutureSpace.js'));
const ServiceDetailsBlockChain = React.lazy(() => import('./Services/ServiceDetailsBlockChain'));
const ThankYou = React.lazy(() => import('./ContactUs/ThankYou'));
const route = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Suspense fallback={<><Loader /></>}><Home /></Suspense>} />
          <Route path="/blog" element={<Suspense fallback={<><Loader /></>}><BlogList /></Suspense>} />
          <Route path="/portfolio" element={<Suspense fallback={<><Loader /></>}><PortfolioList /></Suspense>} />
          <Route path="/contact-us" element={<Suspense fallback={<><Loader /></>}><ContactUs /></Suspense>} />
          <Route path="/services" element={<Suspense fallback={<><Loader /></>}><Services /></Suspense>} />
          <Route path="/career" element={<Suspense fallback={<><Loader /></>}><Career /></Suspense>} />
          <Route path="/service-details" element={<Suspense fallback={<><Loader /></>}><ServiceDetails /></Suspense>} />
          <Route path="/case-study" element={<Suspense fallback={<><Loader /></>}><CaseStudy /></Suspense>} />
          <Route path="/about-us" element={<Suspense fallback={<><Loader /></>}><AboutUs /></Suspense>} />
          <Route path="/shopify" element={<Suspense fallback={<><Loader /></>}><BlogDetails /></Suspense>} />
          <Route path="/woocommerce" element={<Suspense fallback={<><Loader /></>}><BlogDetails2 /></Suspense>} />
          <Route path="/ui-ux" element={<Suspense fallback={<><Loader /></>}><BlogDetails3 /></Suspense>} />
          <Route path="/shopify-store" element={<Suspense fallback={<><Loader /></>}><BlogDetails4 /></Suspense>} />
          <Route path="/shopify-magento" element={<Suspense fallback={<><Loader /></>}><BlogDetails5 /></Suspense>} />
          <Route path="/e-commerce" element={<Suspense fallback={<><Loader /></>}><BlogDetails6 /></Suspense>} />
          <Route path="/cross-platform" element={<Suspense fallback={<><Loader /></>}><BlogDetails7 /></Suspense>} />
          <Route path="/hire" element={<Suspense fallback={<></>}><Hire /></Suspense>} />
          <Route path="/case-study-details" element={<Suspense fallback={<></>}><CaseStudyDetails /></Suspense>} />
          <Route path="/case-study-details-octicsar" element={<Suspense fallback={<></>}><OcticsAr /></Suspense>} />
          <Route path="/case-study-details-poswebapplication" element={<Suspense fallback={<></>}><PosWebApplication /></Suspense>} />
          <Route path="/case-study-details-chirplyweb" element={<Suspense fallback={<></>}><ChirplyWeb /></Suspense>} />
          <Route path="/case-study-details-zoomin" element={<Suspense fallback={<></>}><ZoomIn /></Suspense>} />
          <Route path="/case-study-details-angularblog" element={<Suspense fallback={<></>}><AngularBlog /></Suspense>} />
          <Route path="/case-study-details-inglishfiresafety" element={<Suspense fallback={<></>}><InglishFireSafety /></Suspense>} />
          <Route path="/case-study-details-murrays" element={<Suspense fallback={<></>}><Murrays /></Suspense>} />
          <Route path="/case-study-details-hangtime" element={<Suspense fallback={<></>}><HangTime /></Suspense>} />
          <Route path="/case-study-details-netspace" element={<Suspense fallback={<></>}><NetSpace /></Suspense>} />
          <Route path="/case-study-details-netspace-application" element={<Suspense fallback={<></>}><NetSpaceApplication /></Suspense>} />
          <Route path="/case-study-details-starbuzz" element={<Suspense fallback={<></>}><StarBuzz /></Suspense>} />
          <Route path="/case-study-details-skooviweb" element={<Suspense fallback={<></>}><SkooviWeb /></Suspense>} />
          <Route path="/case-study-details-skooviapp" element={<Suspense fallback={<></>}><SkooviApp /></Suspense>} />
          <Route path="/case-study-details-habbit" element={<Suspense fallback={<></>}><Habbit /></Suspense>} />
          <Route path="/case-study-details-service-pack" element={<Suspense fallback={<></>}><ServicePack /></Suspense>} />
          <Route path="/case-study-details-easy-dental-marketing" element={<Suspense fallback={<></>}><EasyDentalMarketing /></Suspense>} />
          <Route path="/case-study-details-the-nudge" element={<Suspense fallback={<></>}><TheNudge /></Suspense>} />
          <Route path="/case-study-details-med-device" element={<Suspense fallback={<></>}><MedDevice /></Suspense>} />
          <Route path="/case-study-details-dissh" element={<Suspense fallback={<></>}><Dissh /></Suspense>} />
          <Route path="/case-study-details-powerviz" element={<Suspense fallback={<></>}><PowerViz /></Suspense>} />
          <Route path="/case-study-details-starchaat" element={<Suspense fallback={<></>}><StarChaat /></Suspense>} />
          <Route path="/case-study-details-lightbox" element={<Suspense fallback={<></>}><LightBox /></Suspense>} />
          <Route path="/case-study-details-koch" element={<Suspense fallback={<></>}><Koch /></Suspense>} />
          <Route path="/case-study-details-merchy-electronics" element={<Suspense fallback={<></>}><MerchyElectronics /></Suspense>} />
          <Route path="/case-study-details-starbuzzweb" element={<Suspense fallback={<></>}><StarBuzzWeb /></Suspense>} />
          <Route path="/case-study-details-art-smiley" element={<Suspense fallback={<></>}><ArtSmiley /></Suspense>} />
          <Route path="/case-study-details-yudoo" element={<Suspense fallback={<></>}><Yudoo /></Suspense>} />
          <Route path="/case-study-details-emotion-tracker" element={<Suspense fallback={<></>}><EmotionTracker /></Suspense>} />
          <Route path="/case-study-details-uloss" element={<Suspense fallback={<></>}><Uloss /></Suspense>} />
          <Route path="/case-study-details-menyos" element={<Suspense fallback={<></>}><Menyos /></Suspense>} />
          <Route path="/case-study-details-motherfood" element={<Suspense fallback={<></>}><MotherFood /></Suspense>} />
          <Route path="/case-study-details-acadlife" element={<Suspense fallback={<></>}><AcadLife /></Suspense>} />
          <Route path="/case-study-details-uvibes" element={<Suspense fallback={<></>}><Uvibes /></Suspense>} />
          <Route path="/case-study-details-ken42" element={<Suspense fallback={<></>}><Ken42 /></Suspense>} />
          <Route path="/case-study-details-agribridge" element={<Suspense fallback={<></>}><AgriBridge /></Suspense>} />
          <Route path="/case-study-details-vovochatboat" element={<Suspense fallback={<></>}><VovoChatBoat /></Suspense>} />
          <Route path="/case-study-details-menyosweb" element={<Suspense fallback={<></>}><MenyosWeb /></Suspense>} />
          <Route path="/case-study-details-meresalim" element={<Suspense fallback={<></>}><MereSalim /></Suspense>} />
          <Route path="/case-study-details-blockchain1" element={<Suspense fallback={<></>}><BlockChain1 /></Suspense>} />
          <Route path="/case-study-details-blockchain2" element={<Suspense fallback={<></>}><BlockChain2 /></Suspense>} />
          <Route path="/case-study-details-blockchain3" element={<Suspense fallback={<></>}><BlockChain3 /></Suspense>} />

          <Route path="/retail-portfolio" element={<Suspense fallback={<><Loader /></>}><RetailPortfolio /></Suspense>} />
          <Route path="/retail-estate" element={<Suspense fallback={<><Loader /></>}><RetailEstate /></Suspense>} />
          <Route path="/firesafety" element={<Suspense fallback={<><Loader /></>}><FireSafety /></Suspense>} />
          <Route path="/gamingvr" element={<Suspense fallback={<><Loader /></>}><Gamingvr /></Suspense>} />
          <Route path="/future-space" element={<Suspense fallback={<><Loader /></>}><FutureSpace /></Suspense>} />
          <Route path="/service-details-block-chain" element={<Suspense fallback={<></>}><ServiceDetailsBlockChain /></Suspense>} />

          <Route path="/virtual-reality" element={<Suspense fallback={<><Loader /></>}><VirtualReality /></Suspense>} />
          <Route path="/blockchain" element={<Suspense fallback={<><Loader /></>}><BlockChain /></Suspense>} />
          <Route path="/future-virtual-reality" element={<Suspense fallback={<><Loader /></>}><FutureVirtualReality /></Suspense>} />
          <Route path="/entrepreneurs" element={<Suspense fallback={<><Loader /></>}><Entrepreneurs /></Suspense>} />
          <Route path="/machine-learning" element={<Suspense fallback={<><Loader /></>}>< MachineLearning /></Suspense>} />
          <Route path="/5-reason-machine-learning" element={<Suspense fallback={<><Loader /></>}><ReasonsMachineLearning /></Suspense>} />
          <Route path="/development-mistakes" element={<Suspense fallback={<><Loader /></>}><DevelopmentMistakes /></Suspense>} />
          <Route path="/need-to-do-to-launch" element={<Suspense fallback={<><Loader /></>}><NeedtoDotoLaunch /></Suspense>} />
          <Route path="/business-needs-a-mobile-app" element={<Suspense fallback={<><Loader /></>}><BusinessNeedsaMobileApp /></Suspense>} />
          <Route path="/generate-more-money" element={<Suspense fallback={<><Loader /></>}><GenerateMoreMoney /></Suspense>} />
          <Route path="/selecting-website-theme" element={<Suspense fallback={<><Loader /></>}><SelectingaWebsiteTheme /></Suspense>} />
          <Route path="/web-design-tips" element={<Suspense fallback={<><Loader /></>}><WebDesignTips /></Suspense>} />
          <Route path="/benefits-of-vr-technology" element={<Suspense fallback={<><Loader /></>}><BenefitsofVRTechnology /></Suspense>} />
          <Route path="/invest-in-virtual-reality" element={<Suspense fallback={<><Loader /></>}><InvestinVirtualReality /></Suspense>} />
          <Route path="/vr-the-futureo-of-real-estate" element={<Suspense fallback={<><Loader /></>}><VRtheFutureofRealEstate /></Suspense>} />
          <Route path="/the-power-of-virtual-reality" element={<Suspense fallback={<><Loader /></>}><ThePowerofVirtualReality /></Suspense>} />
          <Route path="/reshped-marketing-real-estate" element={<Suspense fallback={<><Loader /></>}><ReshapedMarketingRealEstate /></Suspense>} />
          <Route path="/vr-influences-customer-behaviour" element={<Suspense fallback={<><Loader /></>}><VRInfluencesCustomerBehaviour /></Suspense>} />
          <Route path="/ways-to-increase-website-traffic" element={<Suspense fallback={<><Loader /></>}><WaystoIncreaseWebsiteTraffic /></Suspense>} />
          <Route path="/augmented-reality-trends" element={<Suspense fallback={<><Loader /></>}><AugmentedRealityTrends /></Suspense>} />
          <Route path="/business-growth-with-ai" element={<Suspense fallback={<><Loader /></>}><BusinessGrowthWithAI /></Suspense>} />
          <Route path="/virtual-reality-is-transforming-e-commerce" element={<Suspense fallback={<><Loader /></>}><VirtualRealityistransformingEcommerce /></Suspense>} />
          <Route path="/virtual-reality-in-education" element={<Suspense fallback={<><Loader /></>}><VirtualRealityinEducation /></Suspense>} />
          <Route path="/virtual-reality-is-expanding-health-care" element={<Suspense fallback={<><Loader /></>}><VirtualRealityIsExpandingHealthCare /></Suspense>} />
          <Route path="/possibilities-of-virtual-reality-in-fashion" element={<Suspense fallback={<><Loader /></>}><PossibilitiesofVirtualRealityinFashion /></Suspense>} />
          <Route path="/benefits-of-virtual-reality-in-fashion" element={<Suspense fallback={<><Loader /></>}><BenefitsofVirtualRealityinFashion /></Suspense>} />
          <Route path="/virtual-reality-used-improve-education" element={<Suspense fallback={<><Loader /></>}><VRbeUsedtoImproveEducation /></Suspense>} />
          <Route path="/brands-incorporate-vr-into-online-shopping" element={<Suspense fallback={<><Loader /></>}><BrandsIncorporateVRintoOnlineShopping /></Suspense>} />

          <Route path="/vr-reality" element={<Suspense fallback={<><Loader /></>}>< VRReality /></Suspense>} />
          <Route path="/contact-us#contact-hear" element={<Suspense fallback={<><Loader /></>}>< ContactUs /></Suspense>} />
          <Route path="/shopify-page" element={<Suspense fallback={<><Loader /></>}>< ShopifyPage /></Suspense>} />
          <Route path="/app-development" element={<Suspense fallback={<><Loader /></>}>< AppDevelopment /></Suspense>} />
          <Route path="/thank-you" element={<Suspense fallback={<><Loader /></>}><ThankYou /></Suspense>} />
        </Routes>
      </Router>
    </>
  );
}

export default route;
