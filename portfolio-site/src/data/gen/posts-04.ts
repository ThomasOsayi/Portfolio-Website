// Generated articles, batch 04 (Nov 22 2026). Prices come only from the packages in seo.ts.
import type { Post } from '../seo';

const d = '2026-11-22';

export const postsGen04: Post[] = [
  {
    slug: 'are-website-contact-forms-hipaa-compliant',
    title: 'Are website contact forms HIPAA compliant? What health practices need to know',
    description: 'When a HIPAA compliant contact form matters, what a business associate agreement covers, what your form should never ask for, and how to set it up safely.',
    date: d,
    keywords: ['HIPAA compliant contact form', 'HIPAA website form', 'business associate agreement website', 'healthcare contact form PHI', 'medical practice website privacy'],
    service: 'nextjs-website-development',
    shortAnswer: 'A contact form is not HIPAA compliant or non-compliant on its own. It becomes a HIPAA issue when a covered entity collects protected health information through it, and then every vendor that receives, stores or processes those submissions needs a business associate agreement and proper safeguards. The simplest safe design is a form that does not ask for health details at all.',
    takeaways: [
      'HIPAA applies to covered entities and their business associates, and a website form is one of the places protected health information can enter their systems.',
      'Any vendor that stores or processes form submissions containing PHI, including form tools, email providers and cloud hosts, generally needs a signed business associate agreement.',
      'The safest healthcare contact form collects only contact details and a general request, and moves clinical intake into a system built for it.',
      'Ad pixels and session recording tools on form and thank-you pages are a common way practices leak information without noticing.',
      'This is general information, not legal advice, so final compliance decisions belong with your privacy officer or a healthcare attorney.',
    ],
    faqs: [
      { q: 'Is a standard website contact form HIPAA compliant?', a: 'Not by default, because most standard form tools and email inboxes are not covered by a business associate agreement and were not set up to handle protected health information.' },
      { q: 'Does my website form vendor need to sign a BAA?', a: 'If the form collects protected health information for a covered entity and the vendor stores or processes those submissions, HHS guidance treats that vendor as a business associate that needs a BAA.' },
      { q: 'Can I use Google Analytics or a Meta pixel on my medical practice website?', a: 'HHS guidance warns that tracking tools on pages where patients schedule appointments or describe their reason for care can disclose protected health information, so keep them off form, intake and thank-you pages unless your attorney approves the setup.' },
      { q: 'What should a healthcare contact form ask for?', a: 'Ask for a name, a phone number or email, a preferred contact time and a general service type, and tell visitors not to include medical details.' },
      { q: 'Can Thomas Osayi build a privacy-conscious website for a health practice?', a: 'Yes, a Business Site from $450 covers a practice website with a minimal contact form, and a Full Custom Build from $1,200 covers custom intake or portal features built around vendors that will sign a BAA.' },
    ],
    sources: [
      { title: 'Business Associates', publisher: 'U.S. Department of Health and Human Services', url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/' },
      { title: 'Guidance on HIPAA and Cloud Computing', publisher: 'U.S. Department of Health and Human Services', url: 'https://www.hhs.gov/hipaa/for-professionals/special-topics/cloud-computing' },
      { title: 'Use of Online Tracking Technologies by HIPAA Covered Entities and Business Associates', publisher: 'U.S. Department of Health and Human Services', url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/hipaa-online-tracking/' },
      { title: 'Covered Entities and Business Associates', publisher: 'U.S. Department of Health and Human Services', url: 'https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html' },
    ],
    body: `Anyone planning a website for a therapy practice, clinic or wellness business runs into the same question early: is the contact form on my website HIPAA compliant? The honest answer is that a form is neither compliant nor non-compliant by itself. HIPAA applies to organizations and to how they handle protected health information, and a website form is one of the doors that information can walk through.
This post is general information from a developer's point of view. It is not legal advice, and if your practice is a covered entity, the final calls belong with your privacy officer or a healthcare attorney. What I can do is explain how the technical pieces fit together, so you ask them the right questions and so your website does not quietly create a problem you never knew about.
## Are website contact forms HIPAA compliant?
A contact form is only a HIPAA concern when a covered entity or business associate uses it to collect protected health information, and at that point every system the submission touches has to be handled under the HIPAA Rules.
Think about where a single submission travels: the visitor's browser, the form processor, storage, an email inbox, a phone, and at least one backup. A form plugin can encrypt the first hop perfectly and still drop the full message into an ordinary email account with no agreement in place.
So the useful question is not "is this form plugin HIPAA compliant?" It is "what does this form collect, and is every place that data lands covered?" A form that only asks for a name, a phone number and a general request carries much less risk than one with a large box that says "Tell us what is going on." The second one invites symptoms, diagnoses and medications, often from people who have not even become patients yet.
## Who has to follow HIPAA in the first place?
HIPAA applies to covered entities, meaning health plans, health care clearinghouses and health care providers that transmit health information electronically in connection with certain transactions, plus the business associates that work for them.
HHS puts the provider condition plainly: providers are covered "only if they transmit any information in an electronic form" in connection with the standard transactions, such as insurance claims. In practice, a therapy practice or medical group that bills insurance electronically is almost certainly covered. A practice that is covered has to think about its website forms as part of its HIPAA program, not as a marketing detail.
Plenty of health-adjacent businesses are not covered entities. A waxing studio taking bookings or a gym collecting sign-ups usually is not, because it is not a provider billing health plans. That does not mean anything goes. State privacy laws can still apply to health information, and patients expect discretion either way. If you are unsure whether you are covered, that is the first question to put to a lawyer, before anyone argues about form plugins.
## What is a business associate agreement, and who needs to sign one?
A business associate agreement, or BAA, is a contract between a covered entity and a vendor that handles protected health information on its behalf, setting out how the vendor may use that information and how it must protect it.
HHS describes a business associate as a person or company, other than the practice's own workforce, that performs functions involving protected health information for a covered entity. Its list of examples includes cloud service providers that store or process electronic PHI, IT vendors with access to systems containing it, and health app developers. According to HHS, a BAA has to describe the permitted uses and disclosures of PHI, bar the vendor from going beyond them, require it to report security incidents, and require the same terms from any subcontractor.
For a website, the vendors that typically need one are:
- The form service or backend that receives and stores submissions
- The database or cloud host where submissions are saved
- The email provider whose inbox receives the full message
- Any CRM, scheduling or chat tool the submission is copied into
- Your developer, if they can access real submissions while maintaining the site
One detail surprises people. HHS cloud guidance says a provider that stores only encrypted PHI is still a business associate even if it does not hold the encryption key. Encryption is required good practice, but it does not replace the agreement.
## Which parts of a typical website form create HIPAA problems?
The form itself is rarely the weak point; the problems sit in what happens around it.
These are the patterns I look for first when I review a practice website:
- The submission is emailed in full to a front desk address on a consumer email plan with no BAA.
- The form builder stores every submission in its own dashboard, and nobody checked whether that plan includes a BAA.
- An automation tool copies each submission into a spreadsheet or a chat channel.
- A Meta pixel, an ad tag or a session replay tool runs on the contact page and the thank-you page.
- The thank-you page URL carries form answers in the query string, for example a "service=anxiety" parameter, which then shows up in analytics.
- The automatic reply repeats the visitor's message back to them by email.
- A chat widget on every page invites people to type their symptoms to an unvetted vendor.
Each one is fixable once you know it is there.
## What does HHS say about tracking pixels on health websites?
HHS guidance on online tracking technologies warns that tracking tools on pages where people schedule appointments, check symptoms or log in can collect protected health information, and that disclosing it to a tracking vendor without proper safeguards falls under the HIPAA Rules.
The status of that guidance matters, so here it is as HHS states it at the time of writing. On June 20, 2024, a federal court in Texas vacated part of the guidance: the part saying HIPAA obligations arise when a tracking tool connects a visitor's IP address with a visit to an unauthenticated public page about health conditions or providers. HHS says it is evaluating its next steps.
What remains is still important for forms. The guidance says tracking on logged-in pages generally has access to PHI. It also says that unauthenticated pages offering appointment scheduling or symptom checking may have access to PHI in certain circumstances, and that if tracking collects something like an email address or a typed reason for seeking care, that is a disclosure of PHI.
My practical rule for health practices: no ad pixels, no session recording and no third-party chat on contact, booking, intake or thank-you pages, and no form answers in URLs. Measure those pages with a simple count of submissions on your own server instead. Your attorney can approve something more elaborate if marketing truly needs it.
> If you are not sure what is running on your contact page, open it in Chrome, open the developer tools, go to the Network tab and submit a test form. Every domain that appears in that list is receiving something.
## What should a healthcare contact form not collect?
The safest healthcare contact form collects only what your staff need to call or email someone back, and nothing about their health.
HIPAA's Privacy Rule has a minimum necessary principle, and it is good design advice even where it does not strictly apply. A first contact form needs very little:
- Name
- Phone number or email, and which they prefer
- Best time to reach them
- A general category, such as "new patient appointment" or "question about insurance"
- Whether they are a new or existing client
Leave out symptoms, diagnoses, medications, dates of birth, insurance member IDs, Social Security numbers, file uploads and any open text box labelled "describe your concern." Under the message field, if you keep one, add a line such as "Please do not include medical details here. We will talk through your needs privately."
For Guardian MindCare, a therapy practice platform I built, the guiding principle was that the safest data is the data you never collect. The get-matched intake opens with a single gentle question about who the care is for, and clinical detail belongs in the practice's clinical records system rather than in a marketing form.
![The get-matched intake I built for Guardian MindCare, opening with one question: "Who is this care for?"](/shots/guardian-get-matched.jpg)
## How do I set up a form that has to handle PHI?
If your workflow genuinely needs health information before the first call, move that step into a system designed and contracted for it rather than stretching a marketing form.
### Option 1: keep the website form general and use your clinical system for intake
Best for most practices. The website collects contact details only. After scheduling, the patient completes intake inside your EHR or practice management system's patient portal, which you already have a BAA with.
### Option 2: embed a form tool on a HIPAA plan with a signed BAA
Some form builders offer HIPAA-specific plans and will sign a BAA, usually only on particular tiers. Confirm the plan, sign the agreement before collecting anything, turn on encryption and two-factor sign-in, and make sure notification emails do not include the answers.
### Option 3: a custom intake built around vendors that sign BAAs
For a practice that needs its own intake flow, I build the form on the site and send submissions only to storage covered by a BAA. The staff notification email says "New inquiry received, sign in to view" and contains no details. Access is limited by role, with every view logged.
On cost, a practice website with a minimal, safe contact form fits my Business Site from $450 in 14 days. Custom intake or portal features fit a Full Custom Build from $1,200, plus whatever the covered vendors charge, which is often more than their standard plans. HIPAA also expects a risk analysis and policies that no website build covers on its own.
## What does a safer setup look like in practice?
Here is an illustration with a made-up business: Harbor Street Physical Therapy, a two-location clinic that bills insurance.
Before: the WordPress form asked visitors to "describe your injury," emailed the full message to a shared Gmail inbox, and ran a Meta pixel on every page. The thank-you page URL included the selected service, so "lower back pain" appeared in their ad and analytics data.
After the changes:
- The form asks for name, phone, email, preferred location, new or returning patient, and best time to call.
- A note under the form asks visitors not to share medical details.
- Submissions are stored in a service covered by a BAA, and the staff email only says a new inquiry arrived.
- The pixel and session recording are removed from the contact and thank-you pages, and the thank-you URL carries no answers.
- After the first call, the patient receives a link to the intake forms in the clinic's EHR.
The site looks identical to visitors. Work like this usually takes a few days, and a shorter form is usually easier for visitors to finish anyway.
## When should I bring in a lawyer or compliance consultant?
Bring one in before you collect any health information online, before you add marketing tags to a health site, and whenever a vendor's answer about a BAA is vague.
A developer can build the technical controls and tell you where data goes. A developer cannot tell you whether your practice is a covered entity, whether a vendor's agreement is adequate, or what your state adds on top of HIPAA. Be wary of any badge or plugin that promises compliance in one click. Compliance depends on what you collect, which agreements you have signed and how your staff handle the data, not on a logo in the footer.
Useful questions to take to that conversation: Which of our website vendors need a BAA? Can our contact form stay outside PHI entirely? Which tracking tools are acceptable on which pages? Who reviews this each year? If you are also planning the rest of the site, my post "What pages does a small business website need? A page-by-page plan" covers the structure around the form.
## The bottom line
A website contact form becomes a HIPAA question the moment it collects health information for a covered entity. The simplest protection is to not collect it: ask for contact details and a general request, tell visitors to leave medical details out, and move clinical intake into a system with a signed BAA. Then check what else runs on those pages, because pixels and inboxes cause more trouble than the form itself. Treat this as a starting checklist, not legal advice, and confirm your setup with a healthcare attorney or privacy officer.`,
  },
  {
    slug: 'bilingual-website-english-spanish',
    title: 'How to build a bilingual website in English and Spanish that ranks in both',
    description: 'A practical guide to a bilingual website in English and Spanish: URL structure, hreflang, language switchers, translation quality, and what it costs to do properly.',
    date: d,
    keywords: ['bilingual website English Spanish', 'Spanish version of website', 'hreflang English Spanish', 'multilingual small business website', 'translate website to Spanish'],
    service: 'nextjs-website-development',
    shortAnswer: 'Give each language its own URL, for example example.com for English and example.com/es/ for Spanish, link each page to its translation with hreflang tags, and have a fluent speaker review every translated page. Avoid translation widgets, cookie-based language switching and automatic redirects, because Google may not find or show the Spanish pages.',
    takeaways: [
      'Each language version needs its own crawlable URL, and a subdirectory such as /es/ is the simplest choice for most small businesses.',
      'Hreflang annotations tell Google which pages are translations of each other, and every page must list itself and all its alternates.',
      'Google advises against redirecting visitors automatically based on their guessed language, so offer a clear switcher instead.',
      'Machine translation is a fine first draft, but a fluent reviewer should check every page, form message and confirmation email before launch.',
      'The parts people forget to translate are metadata, form errors, emails, image alt text and the booking flow.',
    ],
    faqs: [
      { q: 'Is a Google Translate widget enough for a bilingual website?', a: 'No, because widget translations usually do not get their own URLs, so search engines do not index them as Spanish pages and the quality is not reviewed.' },
      { q: 'Should the Spanish version be on a subdomain or a subfolder?', a: 'For most small businesses a subfolder such as /es/ is simplest, because it shares the main domain, is easy to maintain and works cleanly with hreflang.' },
      { q: 'Which hreflang code should I use for Spanish in the United States?', a: 'Use es-US if the pages target Spanish speakers in the United States, or plain es if they serve Spanish speakers anywhere, and pair it with en-US or en for English.' },
      { q: 'Do I need to translate the URLs too?', a: 'It is optional, but translated slugs such as /es/servicios/ read better to Spanish speakers and can help them recognize relevant results.' },
      { q: 'How much does Thomas Osayi charge for a bilingual website?', a: 'A bilingual site of a few pages can start from his Business Site at $450, and larger bilingual sites with a CMS fit his Full Custom Build from $1,200, with translation priced separately.' },
    ],
    sources: [
      { title: 'Tell Google about localized versions of your page', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/specialty/international/localized-versions' },
      { title: 'Managing multi-regional and multilingual sites', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/advanced/crawling/managing-multi-regional-sites' },
      { title: 'Internationalization', publisher: 'Next.js', url: 'https://nextjs.org/docs/app/guides/internationalization' },
    ],
    body: `In Los Angeles, a lot of businesses serve customers who would rather read about a service in Spanish, and plenty of owners already run their front desk in both languages. The website is often the one place where everything is still English only, or where a translate button sits in the corner producing pages that Google never sees.
A proper bilingual website is not hard, but it has a few rules that are easy to get wrong. Here is how I set one up: the URL structure, the hreflang tags, the switcher, the translation process and the pieces people forget, with realistic costs at the end.
## Do I need a real bilingual website, or is a translate widget enough?
If you want Spanish speakers to find you in search and trust what they read, you need real Spanish pages with their own URLs, not a widget.
A translate widget changes the text in the visitor's browser after the page loads. The Spanish version usually has no URL of its own, so there is nothing for Google to crawl, index or show to someone searching in Spanish. Google's documentation on multilingual sites recommends using different URLs for each language version rather than relying on cookies or browser settings to change the language, and it notes that if you adjust content that way anyway, Google might not find and crawl all your variations.
Quality is the other problem. Automatic translation of a service page can turn "free estimate" or "same-day appointment" into something stiff or wrong, and visitors notice. A widget is better than nothing for a long tail of pages nobody will translate. For your homepage, service pages, contact page and booking flow, real translations are worth the effort.
## What URL structure should a bilingual site use?
For most small businesses, keep English at the root and put Spanish in a subdirectory, so example.com/services has a Spanish twin at example.com/es/servicios.
Google's guide to multi-regional and multilingual sites compares the options:
- Country domains, such as a separate .mx domain: clear signals but expensive and only sensible if you truly target another country.
- Subdomains, such as es.example.com: easy to set up, but treated more like a separate site to maintain.
- Subdirectories, such as example.com/es/: easy to set up and low maintenance, sharing one domain.
- URL parameters, such as example.com?lang=es: Google labels this not recommended.
A business serving Spanish speakers in Los Angeles is not targeting another country, it is serving another language in the same city. That is exactly what a subdirectory does well. The Spanish pages benefit from the same domain, the same hosting and the same deployment, and there is one site to keep healthy.
In Next.js, this maps to a dynamic segment. The Next.js internationalization guide nests the app under app/[lang], so every page receives the language as a parameter and the root layout can set the html lang attribute to match. Each language reads its strings from a dictionary file, such as dictionaries/en.json and dictionaries/es.json, loaded on the server.
## What is hreflang, and how do I set it up?
Hreflang is an annotation that tells Google which pages are language versions of each other, so it can show the Spanish page to Spanish searchers and the English page to everyone else.
According to Google's localized versions documentation, there are three equivalent ways to declare it: link tags in the page head, HTTP headers, or entries in your XML sitemap. Pick one and use it consistently. The rules that matter:
- Every version must list itself and every other version. If the English page points to the Spanish one but the Spanish page does not point back, Google may ignore the annotation.
- Use full URLs, including https.
- The code is a language, optionally followed by a region: es, es-US, en or en-US. A region alone is not valid.
- Add an x-default entry for the page to show when no language matches, usually the English version or a language chooser.
For a service business in Los Angeles, I usually use en-US and es-US, because the content is about local services in the United States. Plain es and en are fine too if you do not need a region.
In the Next.js App Router, I generate these from the metadata API, setting a canonical URL and the alternates for each language in generateMetadata, so every page gets matching tags automatically. Google also notes that it does not use hreflang or the lang attribute to detect what language a page is in. It reads the content, so the Spanish page has to actually be in Spanish, including the menu and footer.
> Check your hreflang pairs after launch by viewing the page source of one English page and its Spanish twin. Each should list both URLs, and the URLs should match exactly, including trailing slashes.
## Should I translate the URLs as well?
Translating slugs is optional, but I recommend it for the main pages because example.com/es/servicios looks right to a Spanish reader in a way that example.com/es/services does not.
The trade-off is maintenance. Translated slugs mean you need a mapping from each English page to its Spanish page, so the language switcher and hreflang tags know where to point. In code this is a small table, or a field on each page in a CMS. If you skip it, the switcher sends people to the Spanish homepage instead of the Spanish version of the page they were on, which is frustrating.
Whatever you choose, do not change slugs after launch without redirects. If you later move from /es/services to /es/servicios, add permanent redirects from the old paths, the same way you would during any migration. My post "How to move from Wix or Squarespace without losing your Google rankings" covers how to plan redirects so rankings carry over.
## How should the language switcher work?
Put a visible link labelled "Español" on English pages and "English" on Spanish pages, pointing to the equivalent page in the other language, and never force visitors into a language.
Google's multilingual guidance says to avoid automatically redirecting users based on what you think their language may be, because that can prevent people and search engines from seeing all versions of the site. That is worth knowing because the Next.js internationalization guide shows a proxy.js file that redirects visitors from the root URL based on their browser's Accept-Language header. It works, but for a small business I prefer to serve English at the root, mark it as x-default, and let people choose.
A few details make switchers better:
- Use language names written in that language, such as "Español," not flags. Flags represent countries, and Spanish is spoken in many.
- Keep the switcher in the same spot on every page, usually the header and the footer.
- Remember the choice for later visits with a cookie, but still give every page its own URL.
- On mobile, keep the switcher outside a collapsed menu if Spanish speakers are a large share of your visitors.
## How do I get translation quality right?
Use machine translation for a first draft if you like, then have a fluent speaker who knows your industry review and localize every page before it goes live.
Translation for a website is closer to rewriting than to word swapping. Headlines need to sound natural, calls to action need to be short, and service names need to match the words customers actually use when they search. Spanish varies by region, and an audience in Los Angeles may use different everyday words than a reader in Madrid. Your reviewer should know who the customers are.
A process that works:
- Freeze the English copy first. Translating while the English is still changing doubles the work.
- Export all the text, including button labels and error messages, into one document or the dictionary files.
- Translate, then have a second fluent person review it on the actual pages, not in a spreadsheet, because layout reveals problems such as long Spanish phrases breaking buttons.
- Agree on a glossary for service names and recurring terms so they stay consistent.
Professional translation is commonly priced per word or per project, so get quotes. Treat any number someone gives you without seeing the word count as a guess.
## What do people forget to translate?
The pages usually get translated; the small text around them often does not.
My checklist for the Spanish version:
- Page titles and meta descriptions, which are what searchers see in results
- Image alt text and the labels on icons
- Form placeholders, validation errors such as "Please enter a valid phone number," and success messages
- Confirmation and reminder emails or texts sent by a booking or quote tool
- The cookie banner, the 404 page and the privacy policy summary
- PDFs such as menus, price lists or intake forms
- Structured data, so the name of each service in the markup matches the visible Spanish text
- Your Google Business Profile, which can mention that you serve customers in Spanish
And the offline part: if the site says "Llámenos," someone who answers the phone should be able to continue in Spanish.
## What does a bilingual site cost and how long does it take?
Expect the build to take somewhat longer than an English-only site of the same size, with translation as a separate cost that depends on the word count.
Based on my packages, a bilingual site of up to five pages per language with a contact or booking form can start from the Business Site at $450 in 14 days, with extra time for translated forms and emails. A larger site where staff edit both languages in a CMS fits the Full Custom Build from $1,200 in 21 days, because the editor, the page pairings and the publishing flow all need to handle two languages. The website cost calculator on this site gives a fuller estimate.
Here is an illustration with a made-up business: Rivera Family Dental in the San Gabriel Valley. English lives at the root, Spanish under /es/, with translated slugs for the five main pages. Every page carries en-US, es-US and x-default annotations. The switcher sits in the header. The booking form, its error messages and the confirmation email exist in both languages, and the front desk reviewed the Spanish copy with a professional translator before launch.
## The bottom line
A bilingual website in English and Spanish works when each language has its own URL, the pages are linked with reciprocal hreflang tags, visitors choose their language instead of being redirected, and a fluent person reviews every word, including forms and emails. Use a subdirectory such as /es/ unless you have a strong reason not to, translate the small text as carefully as the headlines, and plan the build and translation together so the Spanish site launches as complete as the English one.`,
  },
  {
    slug: 'track-website-leads-with-google-analytics-4',
    title: 'How to track website leads with Google Analytics 4: forms, calls and UTMs',
    description: 'Track website leads in GA4 properly: send a lead event on successful form submits, count phone and email clicks, mark them as key events and tag campaigns with UTMs.',
    date: d,
    keywords: ['track website leads GA4', 'GA4 key events', 'GA4 form submission tracking', 'track phone clicks GA4', 'UTM parameters GA4'],
    service: 'nextjs-website-development',
    shortAnswer: 'Send a generate_lead event from your site only after a form submission succeeds, send a separate event when someone taps a phone or email link, and mark those events as key events in GA4 Admin. Then add utm_source, utm_medium and utm_campaign to every link you control outside the site, so each lead is tied to the campaign that brought it.',
    takeaways: [
      'In GA4, any event can be marked as a key event, which is what Google Analytics now calls the actions that matter most to your business.',
      'The automatic form_submit event from enhanced measurement can miss modern forms or fire on failed submits, so a custom lead event on success is more reliable.',
      'Phone and email link taps need their own events, and a tap is a strong signal of intent but not proof that a call happened.',
      'UTM tags only work if utm_source, utm_medium and utm_campaign are present and written consistently in lowercase.',
      'Never send names, emails or phone numbers to GA4, because Google prohibits personally identifiable information in Analytics.',
    ],
    faqs: [
      { q: 'What is a key event in GA4?', a: 'A key event is any GA4 event you mark as especially important to your business, such as a lead form submission, and it is reported separately so you can see which channels drive it.' },
      { q: 'Does GA4 track form submissions automatically?', a: 'Enhanced measurement can send form_start and form_submit events, but it does not always detect modern JavaScript forms and cannot tell a successful submit from a failed one.' },
      { q: 'How do I track phone number clicks in GA4?', a: 'Send a custom event when someone taps a link that starts with tel:, either from your site code or with a Google Tag Manager link click trigger, and mark that event as a key event.' },
      { q: 'How many key events can I have in GA4?', a: 'At the time of writing, Google allows up to 30 key events on a standard GA4 property and 50 on Analytics 360.' },
      { q: 'Can Thomas Osayi set up lead tracking on a new website?', a: 'Yes, his Business Site from $450 includes analytics, and he adds lead events for forms and phone taps so the owner can see which channels bring inquiries.' },
    ],
    sources: [
      { title: 'Mark events as key events', publisher: 'Google Analytics Help', url: 'https://support.google.com/analytics/answer/13128484' },
      { title: 'Enhanced measurement events', publisher: 'Google Analytics Help', url: 'https://support.google.com/analytics/answer/9216061' },
      { title: 'Recommended events', publisher: 'Google Analytics Help', url: 'https://support.google.com/analytics/answer/9267735' },
      { title: 'URL builders: Collect campaign data with custom URLs', publisher: 'Google Analytics Help', url: 'https://support.google.com/analytics/answer/10917952' },
      { title: 'Best practices to avoid sending Personally Identifiable Information (PII)', publisher: 'Google Analytics Help', url: 'https://support.google.com/analytics/answer/6366371' },
    ],
    body: `Plenty of small business owners have Google Analytics installed and cannot answer the question it exists for: where did last month's inquiries come from? GA4 counts visitors happily out of the box. It does not know what a lead is until you tell it.
This is the setup I use on service business sites: one reliable event for form leads, one for phone and email taps, both marked as key events, and campaign tags on every link you share outside the site. It takes an afternoon to do properly, and once it is in place, the reports start answering real questions.
## What counts as a lead in GA4?
A lead in GA4 is whatever event you decide represents one, marked as a key event so Analytics reports it separately from ordinary activity.
Google's help center defines a key event as an event that measures an action that is particularly important to the success of your business. Any event can become one. If you used Universal Analytics or older GA4 guides, you will have seen these called conversions. In current GA4 the term is key events, and "conversion" is used for what you create in Google Ads, which can be imported from a GA4 key event so both tools count the same thing.
For a service business, a short list covers most leads:
- A contact, quote or booking form submitted successfully
- A tap on a phone number link
- A tap on an email link
- A booking completed in an embedded scheduler, if it can report back to the page
Resist marking everything. Page views of the contact page and scroll depth are interesting, but they are not leads, and a report full of soft key events hides the hard ones.
## Does GA4 track form submissions automatically?
Partly: enhanced measurement can send form_start and form_submit events, but on many modern sites it misses submissions or counts attempts that failed.
According to Google's enhanced measurement documentation, form_start fires the first time a visitor interacts with a form in a session, and form_submit fires when they submit it, with parameters such as form_id, form_name and form_destination. Those parameters only appear in reports if you register them as custom dimensions.
The trouble is how modern forms work. A Next.js form that submits with JavaScript and shows a success message without loading a new page may not trigger the automatic event at all. Worse, a form that does trigger it may fire on the click even when validation fails or the server returns an error. Embedded forms inside iframes from third-party tools are invisible to it.
So I leave enhanced measurement on as a rough signal and do not mark form_submit as a key event. The key event comes from the site's own code, sent only when the server confirms the submission was saved.
## How do I send a lead event when a form succeeds?
Send a generate_lead event from your site code after the server responds with success, not when the button is clicked.
Google's list of recommended events includes generate_lead, described as when a user submits a form online or submits information offline. Using a recommended name rather than inventing one keeps your reports consistent with Google's own documentation and integrations.
In a Next.js site using the Google tag, the flow looks like this:
- The form posts to a server action or an API route such as app/api/contact/route.ts.
- The route validates the fields, saves or emails the submission, and returns a success response.
- Only when the client receives that success does it call the gtag function with the event name generate_lead and a parameter such as form_name set to "quote_request."
- If you use Google Tag Manager, the client pushes an event to the dataLayer instead, and a GA4 event tag in Tag Manager fires on it.
The parameters should describe the form, never the person. Google's policy is explicit that no data passed to Analytics should be something Google could recognize as personally identifiable information, and that applies to URLs and page titles too. Do not send the name, email, phone number or message, and do not put them in the thank-you page URL.
> If your form redirects to a thank-you page, make sure that page cannot be reached without submitting, or bookmarks and refreshes will inflate your lead count.
## How do I track phone and email clicks?
Send a custom event whenever someone taps a link that starts with tel: or mailto:, then mark those events as key events.
On mobile, a phone tap is often the most common lead a local business gets, and GA4 will not reliably separate it for you. Enhanced measurement's outbound click event is described for links to other websites, so do not count on it for phone links. There are two clean ways to add it:
- In code: a small click handler on every phone link that calls gtag with an event such as phone_click and a parameter for where the link was, for example "header" or "contact_page."
- In Google Tag Manager: a link click trigger that fires when the click URL starts with tel:, attached to a GA4 event tag named phone_click. Repeat with mailto: for email_click.
Be honest with yourself about what this measures. A tap opens the dialer; it does not prove a call connected or lasted long enough to matter. If calls are your main lead source, a call tracking service that assigns numbers per channel will tell you more, though it costs extra and needs care with your Google Business Profile number. For most small sites, tap tracking is a good, free middle ground.
## How do I mark events as key events?
In GA4, go to Admin, open Events under Data display, find your event and click the star next to it.
The event has to have been received at least once before it appears in the Recent events list, so submit a test form first. If you want to set things up before any data arrives, the same screen has a Create event button where you can name the event and turn on the Mark as key event toggle. Google's help page notes that you need Editor access at the property level to mark an existing event, and at the time of writing a standard property can have up to 30 key events.
To check events in real time while testing, open DebugView under Data display in Admin, or the Realtime report. The Google Tag Assistant browser tool can put your browser in debug mode so your test events show up there. Submit a form, tap the phone link, and confirm both events appear with the parameters you expect.
## How do UTM parameters connect leads to campaigns?
UTM parameters are tags you add to links you control outside your site, so GA4 can attribute the visit, and any lead that follows, to a specific source and campaign.
Google's URL builder documentation says you should always use utm_source, utm_medium and utm_campaign together. Missing ones show up as "(not set)" in reports. Values are case sensitive, so "Facebook" and "facebook" become two separate sources, which is why I write everything in lowercase.
Links worth tagging:
- The website link on your Google Business Profile, for example utm_source=google, utm_medium=organic and utm_campaign=gbp, so map visits are distinguishable from ordinary search
- Links in your email newsletter, with utm_medium=email
- The link in your Instagram or TikTok profile, with utm_medium=social
- Flyers or QR codes, with utm_medium=print and a campaign name per print run
- Paid ads, unless the ad platform already tags them automatically
Never put UTM tags on links within your own site. A tagged internal link restarts attribution, so a visitor who arrived from Google and clicked your tagged homepage banner would be credited to the banner instead.
## Where do I see which channels bring leads?
Open Reports, then Acquisition, then Traffic acquisition, and look at the key events column, filtering it to your lead events.
That report breaks sessions down by channel and by session source and medium, so you can see how many generate_lead and phone_click events came from organic search, your Google Business Profile, email or paid ads. Switch the key events column to a single event if you want form leads and phone taps separately. For a monthly habit, save a simple exploration with source and medium as rows and your lead events as values.
I build sites to make this kind of question answerable. For LACEUP, a basketball apparel storefront I built, visits, product views, adds to bag and checkout attempts are recorded to the store's own database to power its dashboard, with Vercel Analytics alongside for page-level traffic. A service business rarely needs that much, but the principle is the same: decide which actions matter, record them reliably, and read them by source.
## What does a complete setup look like?
Here is an illustration with a made-up business: Summit Roofing, serving the San Fernando Valley, with a quote form, a click-to-call button and a monthly email.
- generate_lead fires after the quote route saves the request, with form_name set to "quote."
- phone_click fires on every tel: link, with a location parameter for header, footer or quote page.
- email_click fires on the single mailto: link in the footer.
- All three are marked as key events.
- The Google Business Profile link, the newsletter links and the truck magnet QR code all carry lowercase UTM tags.
- No names, emails or phone numbers reach GA4.
After a month, the owner can see that most quote forms came from organic search and most phone taps came from the Business Profile, which tells him where to spend time. Setting this up on an existing site typically takes a few hours. On a new build it is part of my Business Site from $450, and the website cost calculator on this site shows how a quote form changes the estimate.
## The bottom line
To track website leads in GA4, send generate_lead only when a form submission succeeds, add phone and email tap events, star those events as key events in Admin, and tag every outside link you control with lowercase utm_source, utm_medium and utm_campaign. Keep personal details out of Analytics entirely. Test in DebugView before you trust any number, then read the Traffic acquisition report monthly so your marketing decisions rest on real leads rather than visitor counts.`,
  },
  {
    slug: 'headless-cms-for-small-business',
    title: 'Headless CMS for a small business: Sanity vs Contentful vs Payload vs no CMS',
    description: 'Choosing a headless CMS for a small business: Sanity, Contentful and Payload compared on cost, editing and hosting, plus when editing in code is the better call.',
    date: d,
    keywords: ['headless CMS for small business', 'Sanity vs Contentful vs Payload', 'best headless CMS Next.js', 'headless CMS pricing', 'do I need a CMS'],
    service: 'nextjs-website-development',
    shortAnswer: 'Most small businesses that update their site rarely do not need a CMS at all, because a developer can change copy in code in minutes. If staff will publish posts, menus or listings every week, Sanity is my default for its generous free plan and flexible editor, Payload suits teams that want everything self-hosted inside the Next.js app, and Contentful fits organizations that need its structure and can afford its paid tiers.',
    takeaways: [
      'A headless CMS stores and edits content separately from the website, which then pulls that content in through an API.',
      'If content changes a few times a year, editing in code is cheaper, faster and has fewer moving parts than any CMS.',
      'At the time of writing, Sanity and Contentful both have free plans, with paid tiers at $15 per seat per month for Sanity Growth and $300 per month for Contentful Lite.',
      'Payload is open source and runs inside your own Next.js app, so there is no per-seat bill, but you own hosting, database and updates.',
      'Choose based on who edits, how often, and what they edit, not on feature lists.',
    ],
    faqs: [
      { q: 'What is a headless CMS?', a: 'A headless CMS is a content management system that stores and edits content but does not render the website, so a separate front end such as a Next.js site fetches the content and displays it.' },
      { q: 'Is Sanity free for a small business?', a: 'At the time of writing Sanity has a free plan with up to 20 seats and 10,000 documents, which covers most small business sites, and a Growth plan at $15 per seat per month.' },
      { q: 'Is Payload CMS free?', a: 'Payload is open source under the MIT license and free to self-host, but you pay for the hosting and database it runs on.' },
      { q: 'Do I need a CMS for a five-page website?', a: 'Usually not, because a site that changes a few times a year is cheaper to update in code, and a CMS adds setup, accounts and another service to maintain.' },
      { q: 'Does Thomas Osayi include a CMS in his website builds?', a: 'His Full Custom Build from $1,200 includes a CMS or admin tools, while smaller sites keep copy in one place in code so updates stay quick.' },
    ],
    sources: [
      { title: 'Sanity pricing', publisher: 'Sanity', url: 'https://www.sanity.io/pricing' },
      { title: 'Contentful pricing', publisher: 'Contentful', url: 'https://www.contentful.com/pricing/' },
      { title: 'Payload has joined Figma', publisher: 'Payload', url: 'https://payloadcms.com/payload-has-joined-figma' },
      { title: 'Payload is now free and open source', publisher: 'Payload', url: 'https://payloadcms.com/posts/blog/open-source' },
    ],
    body: `"Can I edit the site myself?" is one of the first questions owners ask me, and the answer is always yes. The more useful question is how often you will actually edit it, and what. A bakery changing its seasonal menu every month needs something very different from a law office that updates its homepage once a year.
This comparison covers the three headless CMS options I would consider for a small business on Next.js, Sanity, Contentful and Payload, plus the option people forget: no CMS at all. Prices are from each vendor's own pricing page at the time of writing.
## What is a headless CMS, and how is it different from WordPress?
A headless CMS is an editing dashboard and content database with no website attached, so your Next.js site fetches the content through an API and decides how to display it.
WordPress is a traditional CMS: the same system stores the content, provides the editor and renders the pages with a theme. A headless CMS splits those jobs. Editors log into a hosted dashboard, change a headline or add a blog post, and the site picks up the change, either on the next build or on demand through revalidation.
The benefit is that the site stays as fast and custom as any hand-built Next.js site, while non-technical staff still get a friendly editor. The cost is one more service, one more account and some setup: content models, preview, image handling and the connection that refreshes pages when content changes. My post "Next.js vs WordPress for a small business website in 2026" goes deeper on the platform choice itself. Here I assume you are on Next.js and deciding how content gets edited.
## Do I even need a CMS?
If your content changes a few times a year and nobody on staff wants to touch it, you probably do not need a CMS.
It is easy to pay every month for an editor you open twice a year. Meanwhile the things they actually change, hours, a price, a new photo, take a developer a few minutes when the copy lives in one tidy file. The questions that decide it:
- How often will content change: weekly, monthly or a few times a year?
- What changes: whole new pages and posts, or a few lines of existing text?
- Who edits: one owner, several staff, or an outside writer?
- Is there structured content, such as menu items, team members, listings or events, that grows over time?
If the answers are "rarely, a few lines, one person, no," editing in code wins. If they are "weekly, new posts, several people, yes," you want a CMS.
## Option 1: no CMS, edit content in code
Best for: brochure sites, landing pages and service sites of up to about ten pages that change occasionally.
Cost range: no CMS fee. You pay for edits, either a maintenance arrangement or small one-off changes.
On smaller builds I keep all the copy, prices, hours and service lists in one place in the codebase, often a single content file per page. Changing a price means editing one line and redeploying, which on Vercel takes a minute or two.
Pros:
- Nothing extra to host, pay for, secure or log into
- The fastest possible site, because content is part of the build
- Every change is version-controlled, so mistakes can be reverted
Cons:
- You depend on a developer, or on being comfortable editing a text file in GitHub
- Not workable for a blog or anything published weekly
- Images need to be added to the project rather than uploaded through a dashboard
## Option 2: Sanity
Best for: small businesses with regular publishing, such as blogs, menus, portfolios, events or listings, that want a flexible editor without a monthly bill.
Cost range: at the time of writing, Sanity's Free plan is $0 with up to 20 seats, 10,000 documents, 250,000 API requests and 1 million CDN requests per month, and two public datasets. The Growth plan is $15 per seat per month, with 25,000 documents and private datasets.
Sanity's editor, called Studio, is configured in code, so the editing screens match your content exactly: a "Menu item" with a name, price, description, dietary tags and a photo, rather than a generic page with a big text box.
Pros:
- The free plan covers most small business sites comfortably
- Very flexible content modelling and a clean editing experience
- Good Next.js support, including live preview and image transformations
Cons:
- Content models are written in code, so changing the structure needs a developer
- The free plan's datasets are public, which is fine for website content but not for anything private
- Usage-based overage on the Growth plan means you should keep an eye on API requests on busy sites
## Option 3: Contentful
Best for: larger organizations or growing companies that want a structured, enterprise-style content platform, with roles, environments and locales.
Cost range: at the time of writing, Contentful's Free plan is $0 with 10 users, 2 roles, 2 locales, one space with 25 content types and 10,000 records, and 100,000 API calls per month. The next tier, Lite, is $300 per month with 20 users, 3 roles, 3 locales and 1 million API calls.
Contentful has been a major name in headless CMS for years, and its content modelling is done in a web interface, so a technical marketer can adjust structure without code.
Pros:
- Mature platform with strong roles, environments and localization
- Content types can be edited in the dashboard rather than in code
- Widely known, so agencies and in-house teams are often familiar with it
Cons:
- The jump from free to $300 per month is steep for a small business
- The free plan's limits, such as two roles and 25 content types, are easy to outgrow on a growing site
- More platform than most small sites need
## Option 4: Payload
Best for: businesses that want the CMS inside their own Next.js app and database, with no per-seat fees, and that have a developer looking after hosting.
Cost range: Payload is open source under the MIT license and free to self-host. You pay for the hosting and database, which for a small site can be modest. Payload has joined Figma, and at the time of writing its page says deployment of new projects on Payload Cloud, its hosted service, is paused, so plan on hosting it yourself.
Payload installs into a Next.js project, and its admin panel lives at a route on your own site, with content in your own Postgres or MongoDB database.
Pros:
- No per-seat or per-request pricing from the CMS itself
- Content lives in your database, which suits sites that also have custom features, such as bookings or quotes
- TypeScript throughout, with generated types for every content model
Cons:
- You own updates, backups, security and uptime for the admin
- More setup than a hosted CMS
- Fewer non-technical editors will have seen it before
## Which one should I choose?
Choose the simplest option that matches how often you publish and who does it.
- Rare updates, one owner: no CMS. Keep copy in code and pay for the occasional change.
- Monthly or weekly posts, a few editors, tight budget: Sanity on the Free plan.
- A site that also runs custom features on its own database, with a developer on hand: Payload.
- A larger team that needs formal roles, environments and several locales, with budget for it: Contentful.
For a site that only needs one or two editable areas, such as a weekly specials board, there is a middle option: a small custom admin page backed by the site's existing database. I build that kind of admin for projects with custom features anyway, so adding an editable section costs less than wiring up a whole CMS. My Full Custom Build from $1,200 in 21 days includes a CMS or admin tools for exactly this reason, and the website cost calculator on this site lets you see how it changes the estimate.
> Before choosing, write down the three edits you expect to make most often. Then ask whoever builds the site to show you exactly how each would be done in the option they recommend.
## What does a sensible setup look like in practice?
Here is an illustration with a made-up business: Marigold Café, a neighborhood café with a menu that changes seasonally, a weekly events list and a small blog.
The owner and one manager edit content. Menu items, events and posts are structured content that grows over time, and the budget for software is close to zero. Sanity on the Free plan fits: two seats out of twenty, a few hundred documents, and request volumes far under the limits. The menu item model has a name, price, description, dietary tags and a photo. The site refreshes the menu page whenever a menu item is published, so changes show up within seconds.
The homepage hero, the about page and the footer stay in code, because they change once a year and nobody needs to edit them at nine at night. That split keeps the editor focused on what staff actually change.
If Marigold later added online ordering on its own database, I would revisit Payload, so menu items and orders lived in one place.
## What mistakes should I avoid?
The common mistakes are choosing a CMS before knowing what you will edit, and modelling content as generic pages instead of structured items.
- A CMS for a site that never changes. You pay in setup and complexity for nothing.
- One giant rich text field per page. Editors break layouts, and you lose structured data such as prices and dates.
- No preview. Editors publish blind, then fix in production.
- Forgetting who owns the account. The CMS account should be in the business's name, not the developer's, with the developer added as a member.
- Ignoring plan limits. Check seats, documents and API usage once a quarter, especially on usage-based plans.
- Migrating later without redirects. If content moves between systems, keep URLs identical.
## The bottom line
The best headless CMS for a small business is often no CMS, because copy that changes a few times a year is cheaper to edit in code. When staff publish regularly, Sanity is my default thanks to its free plan and flexible editor, Payload is the pick when you want everything inside your own Next.js app and database, and Contentful suits bigger teams that need its structure and can pay for it. Decide by who edits, what they edit and how often, then check the vendor's pricing page yourself, because plans change.`,
  },
  {
    slug: 'schema-markup-for-small-business',
    title: 'Schema markup for a small business: LocalBusiness, Service, FAQ and review rules',
    description: 'What schema markup a small business site needs in 2026: LocalBusiness essentials, Service markup, the end of FAQ rich results, review rules and how to test it.',
    date: d,
    keywords: ['schema markup for small business', 'LocalBusiness schema', 'structured data for local business', 'FAQ schema 2026', 'review schema rules'],
    service: 'nextjs-website-development',
    shortAnswer: 'Most small business sites need LocalBusiness markup on the homepage or contact page, with a name, address, phone, hours and URL that match what visitors see and your Google Business Profile. Service markup can describe what you offer, but Google stopped showing FAQ rich results in May 2026, and star ratings from reviews you collect about your own business are not eligible for review rich results.',
    takeaways: [
      'Structured data helps Google read facts about your business, but Google does not guarantee any rich result even when the markup is valid.',
      'LocalBusiness markup requires a name and address, and Google recommends adding hours, phone, URL, geo coordinates and price range.',
      'Google deprecated FAQ rich results, which stopped appearing in Search on May 7, 2026, so FAQ markup no longer earns a special search display there.',
      'Google treats reviews a business controls about itself as self-serving and ineligible for star ratings in search results.',
      'Markup must describe content that is visible on the page, and misleading markup can lead to a manual action that removes rich result eligibility.',
    ],
    faqs: [
      { q: 'What schema markup does a small business website need?', a: 'Start with LocalBusiness, or a more specific subtype such as Dentist or Restaurant, on the homepage or contact page, and add Service or Product markup only where it describes real visible content.' },
      { q: 'Does FAQ schema still work in 2026?', a: 'Google stopped showing FAQ rich results on May 7, 2026, so FAQ markup no longer produces a special display in Google Search, although visible FAQ content is still useful to readers.' },
      { q: 'Can I add star ratings to my business website with schema?', a: 'Not for reviews of your own business, because Google says pages where the business controls the reviews about itself are ineligible for star review rich results.' },
      { q: 'Which format should I use for structured data?', a: 'Google recommends JSON-LD, a script block in the page that describes the content without changing the visible HTML.' },
      { q: 'Does Thomas Osayi add schema markup to the websites he builds?', a: 'Yes, schema markup is part of the technical SEO on his sites, including the Business Site from $450, which covers up to five pages with local SEO setup.' },
    ],
    sources: [
      { title: 'Local business (LocalBusiness) structured data', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/structured-data/local-business' },
      { title: 'General structured data guidelines', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/structured-data/sd-policies' },
      { title: 'Review snippet (Review, AggregateRating) structured data', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/advanced/structured-data/review-snippet' },
      { title: 'FAQ (FAQPage, Question, Answer) structured data', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/structured-data/faqpage' },
      { title: 'Service', publisher: 'Schema.org', url: 'https://schema.org/Service' },
    ],
    body: `Schema markup has a reputation as an SEO trick: add some code, get stars and dropdowns in Google. For a small business in 2026 it is less magical and more useful than that. It is a way of stating plain facts, your name, address, phone, hours and services, in a format machines can read without guessing.
The rules have also changed. Google retired FAQ rich results this year, and its review rules rule out the star ratings many owners still ask for. Here is what is worth adding, what is not, and how I set it up on Next.js sites.
## What is schema markup, and does a small business need it?
Schema markup is structured data, written in the schema.org vocabulary, that describes what a page is about, and a small business benefits most from the basic markup that identifies the business itself.
Google's general structured data guidelines recommend JSON-LD, a script block in the page that holds the description as data, separate from the visible HTML. Search engines read it to understand that "Monday to Friday, 9 to 6" are opening hours and that a string of digits is your phone number. Google's LocalBusiness documentation says this kind of markup can help a business appear in knowledge panels and business carousels.
Two caveats keep expectations honest. First, Google does not guarantee that structured data will show up in results, even when the Rich Results Test passes. Second, markup is not a ranking boost on its own. It removes ambiguity. Your Google Business Profile, reviews on Google, accurate listings and good service pages still do most of the work in local search, as I cover in the "Local SEO checklist for a small business website."
## What should LocalBusiness markup include?
LocalBusiness markup must include the business name and address, and Google recommends adding the phone, URL, opening hours, geo coordinates and price range.
From Google's LocalBusiness documentation, the required properties are:
- name: the business name, exactly as customers see it
- address: a PostalAddress with street, city, region, postal code and country filled in as completely as possible
The recommended properties worth adding for most businesses:
- telephone, including country and area code
- url, a working link to the specific location's page
- openingHoursSpecification, with days, opening and closing times, and seasonal dates if hours change
- geo, with latitude and longitude to at least five decimal places
- priceRange, kept under 100 characters, such as "$$" or "$40 to $120"
- menu and servesCuisine for restaurants
Use the most specific type that fits. Schema.org has subtypes such as Dentist, Restaurant, HairSalon, AutoRepair and many others. A waxing studio might use BeautySalon or HealthAndBeautyBusiness. Specific types tell search engines more than the generic LocalBusiness.
The most important rule is consistency. The name, address and phone in your markup should match your Google Business Profile and the visible text on your site character for character.
On Astiglow, a waxing studio site I built, the booking call to action, hours and location sit in a footer on every page. That visible information is exactly what LocalBusiness markup should mirror, no more and no less.
![The booking call to action, hours and location footer on Astiglow, the waxing studio site I built.](/shots/astiglow-home-s3.jpg)
## Where does the markup go on the site?
Put LocalBusiness markup on the homepage or the contact page, and give each physical location its own page with its own markup if you have more than one.
For a single-location business, one block on the homepage is enough. Some developers add it to every page through the site layout. That is acceptable, but I prefer to keep it on the page that actually shows the address and hours, because Google's guidelines say markup should describe content visible on the page.
For multiple locations, each location gets a page with its own address, hours and phone, and its own LocalBusiness block with a url pointing to that page. A parent Organization block on the homepage can tie them together.
In a Next.js App Router site, I render JSON-LD as a script tag with the type application/ld+json inside the page component, building the object from the same content file that renders the visible footer and contact page. Because one source feeds both, the markup cannot drift out of sync when the hours change.
> When your hours change for a holiday or a new season, update your Google Business Profile first, then the site. If the site's markup and visible hours come from one content file, both update together.
## Should I add Service markup?
Service markup is optional: it can describe what you offer on each service page, but Google does not offer a rich result for it, so treat it as extra clarity rather than a visible search feature.
Schema.org defines Service as a service provided by an organization, with properties such as serviceType, provider, areaServed and offers. On a page for, say, emergency plumbing, a Service block might name the service, point to your LocalBusiness as the provider, list the cities in areaServed and describe pricing in an offer.
Is it worth doing? For a small site, it is a modest improvement that costs little if the site is built well, because the data already exists in your service pages. It helps any system that reads structured data, including search engines and AI tools, connect "this business" with "this service in these areas." I add it when each service has a dedicated page, and skip it when services are only listed on one page. What I avoid is stuffing areaServed with dozens of cities you do not really serve. Markup has to tell the truth, same as the page.
## Is FAQ schema still worth adding?
Not for Google rich results: Google deprecated the FAQ rich result, and it stopped appearing in Google Search on May 7, 2026.
The history matters because a lot of older advice still recommends FAQ markup as a way to take up more room in results. Google limited FAQ rich results to well-known government and health websites in August 2023. In 2026 it went further. Its FAQ structured data documentation added a deprecation notice in May stating the feature would no longer appear in Google Search starting May 7, 2026, and Google later removed the documentation for it.
What that means in practice:
- Existing FAQPage markup does not need emergency removal, but it no longer produces a special display in Google Search.
- Do not pay anyone to add FAQ markup for rich results.
- Visible FAQ sections are still worth having. They answer real questions, they help visitors decide, and plain question-and-answer text is easy for search engines and AI answer tools to quote.
My post "How to get your business mentioned in ChatGPT, Perplexity and Google AI answers" covers writing content that is easy to quote. That matters more now than the markup around it.
## Can I show star ratings from my reviews?
Not for your own business: Google's review snippet rules say a business that controls the reviews about itself is ineligible for star ratings in results.
Google's review snippet documentation lists local businesses and organizations as eligible only for sites that capture reviews about other businesses, such as a directory or review site. It also says that if the entity being reviewed controls the reviews about itself, its pages are ineligible for the star review feature, and that ratings must come directly from users rather than being compiled by editors.
So a testimonials section on your own site, even with genuine five-star quotes, will not earn stars in Google, and marking it up as AggregateRating is a bad idea. The general guidelines say not to mark up misleading content, such as fake reviews, and a structured data manual action removes a page's eligibility for rich results. The stars people see next to local businesses in Google come from Google reviews on the Business Profile. Put your effort there: ask happy customers for reviews and reply to them.
Testimonials on your site are still valuable as visible social proof. Just leave them unmarked.
## How do I test schema markup?
Test with Google's Rich Results Test for features Google supports, the Schema Markup Validator for general schema.org correctness, and Search Console's reports after launch.
My routine:
- Paste each key page URL into the Rich Results Test. For LocalBusiness it reports detected items and any missing required fields.
- Run the same URLs through the Schema Markup Validator at validator.schema.org, which checks all schema.org types, including ones Google has no rich result for, such as Service.
- After launch, check Search Console for structured data reports, and the Manual Actions report if anything looks wrong.
- View the page and compare: every fact in the markup should be visible to a visitor.
Common errors I fix: an address missing a postal code, hours written in a format that does not parse, a telephone without the country code, and a url pointing to the homepage on a location page. Each takes a few minutes once spotted.
## What does a sensible setup look like?
Here is an illustration with a made-up business: Bright Path Pediatric Dentistry, one office in Pasadena, with five service pages.
- The contact page carries Dentist markup with name, full address, telephone, url, opening hours, geo and a price range.
- Each service page, such as sealants or emergency visits, carries a Service block with Bright Path as the provider and Pasadena and nearby cities in areaServed.
- The visible FAQ section on each service page stays, with no FAQPage markup added for rich results.
- Testimonials appear as quotes on the homepage, unmarked.
- Hours come from one content file that feeds the footer, the contact page and the markup.
On my packages, this is part of the technical SEO on a Business Site from $450 in 14 days, which covers up to five pages and local SEO setup. Adding it to an existing site usually takes a few hours.
## The bottom line
Schema markup for a small business is mostly about stating basic facts clearly: LocalBusiness, or a specific subtype, with name, address, phone, hours and URL that match your Google Business Profile and your visible pages. Service markup is a reasonable extra on dedicated service pages. Skip FAQ markup for rich results, since Google stopped showing them in May 2026, and never mark up your own testimonials for stars. Use JSON-LD, test with the Rich Results Test and the Schema Markup Validator, and keep one source of truth so the markup never contradicts the page.`,
  },
];
