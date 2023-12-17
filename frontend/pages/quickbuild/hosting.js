import { IPFSHosting } from "components/WebsiteBuilder/WebsiteBuilder";
import MetadataHelper from "components/MetadataHelper";

export default function QuickBuildHostingPage() {
  return (
    <>
      <MetadataHelper noindex title="Quick Build Hosting" />
      <main className="bg-image4 py-5 text-white">
      <IPFSHosting />
      </main>
    </>
  );
}
