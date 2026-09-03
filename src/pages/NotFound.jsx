import Seo from "../components/Seo";
import { ButtonLink, Section } from "../components/ui";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="That page does not exist on JM Technologies." />
      <Section className="py-32 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 text-slate-600">The link may be old or mistyped.</p>
        <div className="mt-8">
          <ButtonLink to="/">Back to home</ButtonLink>
        </div>
      </Section>
    </>
  );
}
