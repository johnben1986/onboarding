import WebsiteBuilder from "components/WebsiteBuilder/WebsiteBuilder";
import MetadataHelper from "components/MetadataHelper";
import Navbar from "components/Layout/Navbar";
import Footer from "components/Layout/Footer";
import { withAuth } from "../../src/components/Auth/authMiddleware";
const Builder = () => {
  return (
    <>
      <MetadataHelper noindex title="Builder" />
      <div className="bg-image3">
      <Navbar title="QuickBuild Web3 Website Builder" />
      <div className="bg-gray-100 bg-opacity-75">
      <WebsiteBuilder />
      </div>
      
      <Footer />
      </div>
    </>
  );
}
export default withAuth(Builder);