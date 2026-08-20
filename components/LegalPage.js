import Header from "./Header";
import Footer from "./Footer";
import { ArrowUpRight, CheckCircle2, CircleAlert } from "lucide-react";

const sections = {
  privacy: [
    ["1. Who is responsible", "The website is presented under the Northstar Sport name. The legal entity that owns and operates the website, its registered address, privacy contact, and applicable supervisory authority are not included in the project materials. Add those details before publishing this policy."],
    ["2. Information this website currently collects", "Based on the current source code, the website does not contain analytics, advertising pixels, account creation, or a working server-side contact submission. The welcome popup uses session storage only to remember that it was dismissed during the current browser session; it does not create a user account or send information to Northstar. The contact form currently prevents its default browser submission and does not transmit or store the entered values. Do not describe the form as an operational enquiry channel until a submission provider or backend is connected."],
    ["3. Information collected by external services", "The site requests fonts from Google Fonts and photographs from Unsplash. Those requests may disclose technical information such as an IP address, browser details, and the requested resource to the relevant provider. Confirm the providers' current terms and privacy practices, and decide whether these assets should be self-hosted before publication."],
    ["4. Why information may be used", "If Northstar later connects an enquiry form, mailing list, analytics, customer relationship system, or other service, this section must describe each purpose and its lawful basis under the laws that apply to the business. No such operational processing is implemented in the current project."],
    ["5. Sharing and international transfers", "No operational data-sharing vendors are identified in the current project. Before launch, list every processor or service that receives personal information, explain any international transfers, and identify the safeguards or contractual terms used where required."],
    ["6. Retention", "The project does not specify a retention period because it does not currently store form submissions or analytics data. Supply retention periods for enquiries, marketing subscriptions, analytics data, backups, and any other records before publishing."],
    ["7. Your rights", "The rights available to a person depend on the laws that apply to the business and the person's location. Supply the applicable rights, request process, identity-verification approach, response times, and privacy contact after the jurisdiction is confirmed."],
    ["8. Security", "Northstar should describe the technical and organisational safeguards used for any personal information it actually receives. Do not claim specific security controls until they are confirmed by the operator."],
    ["9. Children", "Confirm whether the website or services are directed to children and add the applicable age and consent requirements for the relevant jurisdiction."],
    ["10. Changes and contact", "Add the policy effective date, change-notice approach, legal entity name, postal address, and privacy email address. A reviewed version should replace this implementation draft before the website goes live."],
  ],
  terms: [
    ["1. Operator and agreement", "The operator's legal entity, registered address, jurisdiction, and contact details are not present in the project materials. Add them before publishing. These terms are a website-use draft and are not a substitute for legal review."],
    ["2. Website content", "Northstar should describe what content is provided on the website, whether it is informational only, and any permitted personal or commercial use. Confirm ownership and licences for all text, photography, logos, typefaces, and other materials before launch."],
    ["3. No professional advice", "Unless a reviewed services agreement says otherwise, website content should not be presented as legal, financial, medical, sporting-performance, or other professional advice."],
    ["4. Services and project work", "The website describes possible services but does not set pricing, delivery dates, acceptance criteria, ownership, confidentiality, cancellation, liability, or payment terms. Those matters should be agreed in a separate written statement of work or services agreement."],
    ["5. Enquiries", "The current contact form does not submit information. If it is connected later, describe what happens after an enquiry, who may access it, expected response handling, and any terms that apply to a resulting engagement."],
    ["6. External links and services", "The site uses external image and font services. Confirm the operator's position on third-party links, availability, content accuracy, and third-party terms before publication."],
    ["7. Acceptable use", "Add the reviewed rules for lawful use, misuse, interference, automated access, copying, impersonation, and other conduct relevant to the website."],
    ["8. Disclaimers and liability", "Any exclusions, limits, warranties, indemnities, or consumer-law qualifications must be drafted for the confirmed jurisdiction. No specific limitation is included here because the applicable law and business structure are unknown."],
    ["9. Governing law and disputes", "Supply the governing law, courts or dispute process, venue, and any mandatory consumer-law wording after the business jurisdiction is confirmed."],
    ["10. Changes", "Add how changes to these terms will be announced, the effective date, and the version history. Keep a copy of each published version."],
  ],
  cookies: [
    ["1. Current cookie position", "Based on the current source code, Northstar does not intentionally set or read first-party cookies and does not include analytics, advertising, consent-management, or other tracking scripts. No cookie banner is warranted by the current implementation alone."],
    ["2. External requests", "Google Fonts and Unsplash are requested by the browser. These providers may use their own technical mechanisms, including logs or cookies, under their own policies. Confirm their current behaviour and consider self-hosting assets if reducing third-party requests is important."],
    ["3. Essential cookies", "If the production hosting platform, security layer, consent tool, form provider, analytics service, video player, or other integration adds cookies, list each cookie or cookie category, provider, purpose, duration, and whether it is essential or optional."],
    ["4. Choices", "If optional cookies are added, implement a consent mechanism appropriate to the jurisdictions served, do not load optional technologies before consent where required, and provide a way to change or withdraw choices."],
    ["5. Updates and contact", "Add the effective date, operator identity, privacy contact, jurisdiction, and a link to the privacy policy. Reassess this page whenever a new vendor, script, embed, form, or analytics tool is added."],
  ],
};

const titles = {
  privacy: ["Privacy Policy", "A clear account of what this website currently does and what still needs to be confirmed."],
  terms: ["Terms & Conditions", "The framework for using this website and moving from an initial conversation to a properly agreed engagement."],
  cookies: ["Cookie Policy", "A plain-language record of the website's current cookie position and the decisions needed before launch."],
};

function Contents({ items }) {
  return <aside className="border border-line bg-surface p-6 lg:sticky lg:top-28 lg:self-start"><p className="text-xs font-bold uppercase tracking-[.18em] text-coral">On this page</p><nav className="mt-4 flex flex-col gap-3" aria-label="Legal page contents">{items.map(([heading]) => <a key={heading} href={`#${heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="text-sm text-ink-soft transition hover:text-coral">{heading}</a>)}</nav></aside>;
}

function LegalSections({ items }) {
  return <div className="divide-y divide-line">{items.map(([heading, copy]) => { const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, "-"); return <section id={id} key={heading} className="scroll-mt-28 py-8 first:pt-0"><h2 className="font-display text-2xl font-bold tracking-tight text-ink">{heading}</h2><p className="mt-4 max-w-3xl text-[15px] leading-8 text-ink-soft">{copy}</p></section>; })}</div>;
}

export default function LegalPage({ type }) {
  const [title, description] = titles[type];
  const items = sections[type];
  return <main><Header /><section className="bg-navy pb-16 pt-36 text-white lg:pb-20 lg:pt-44"><div className="wrap max-w-5xl"><p className="eyebrow">Northstar Sport / Legal</p><h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[.98] tracking-[-.05em] sm:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/65">{description}</p><p className="mt-6 text-xs uppercase tracking-[.16em] text-white/45">Draft for review / last reviewed 20 August 2026</p></div></section><section className="wrap grid gap-12 py-16 lg:grid-cols-[280px_1fr] lg:py-24"><Contents items={items} /><div><div className="mb-10 flex gap-3 border border-coral/30 bg-coral/10 p-5 text-sm leading-6 text-ink-soft"><CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-coral" /><p><strong className="text-ink">Before publishing:</strong> this draft intentionally identifies missing business and jurisdiction details instead of inventing them. Have the operator confirm the highlighted facts and obtain legal review for the applicable market.</p></div><LegalSections items={items} /><div className="mt-10 flex gap-3 border-t border-line pt-7 text-sm text-muted"><CheckCircle2 className="h-5 w-5 shrink-0 text-aqua" /><p>Current implementation note: no analytics, tracking pixels, cookies, or operational form submission were found in the project source reviewed for this draft. The welcome popup uses session storage for its temporary dismissal state.</p></div></div></section><Footer /></main>;
}
