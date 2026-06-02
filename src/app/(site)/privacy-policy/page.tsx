import { PageShell } from "@/components/common/PageShell";
import PrivacyPolicy from "@/components/pages/Terms/PrivacyPolicyContent";
<<<<<<< HEAD
=======
import GlobalBackground from "@/hooks/GlobalBackground";
>>>>>>> 2d9775cdacbbbc0903e3db7e7b5dfb3f5a53350c

export default function Page() {
  return (
    <PageShell
      backgroundStyle={{
        backgroundImage: `
      linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
      url('/assets/AllVendorServices/background.png')
    `,
      }}
    >
      <PrivacyPolicy />
    </PageShell>
  );
}
