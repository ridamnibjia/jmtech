import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { ButtonLink, Eyebrow, H2, Section } from "../components/ui";
import { CONTACT } from "../site";
import ridamImg from "../assets/ridam-jain.webp";

// Hindi version of the home page. English is the default site language;
// this page exists so people in Pali and Jodhpur who search in Hindi find us.

const SERVICES_HI = [
  ["वेबसाइट", "दुकान, फ़ैक्टरी, क्लिनिक या स्कूल के लिए तेज़ और मोबाइल पर सही चलने वाली वेबसाइट, जो Google पर मिले।"],
  ["मोबाइल ऐप", "Android ऐप, Play Store पर पब्लिश और लॉन्च के बाद अपडेट भी।"],
  ["ऑनलाइन स्टोर", "Shopify और WooCommerce स्टोर, पेमेंट, Cash on Delivery और शिपिंग के साथ, जो सच में ऑर्डर लाए।"],
  ["होस्टिंग और डोमेन", "डोमेन, ईमेल, होस्टिंग, बैकअप। जो चीज़ें साइट को चालू रखती हैं, वे मैं संभालता हूँ।"],
  ["AI टूल्स", "आपके काम में AI का समझदारी से इस्तेमाल: दस्तावेज़ बनाना, कॉल का जवाब देना, डेटा निकालना।"],
  ["WhatsApp ऑटोमेशन", "Meta का ऑफ़िशियल WhatsApp Business API: एक साथ हज़ारों ग्राहकों को मैसेज, बिना नंबर बैन हुए।"],
];

const PRINCIPLES_HI = [
  ["मालिक की तरह काम", "मैं सिर्फ़ काम पूरा करके नहीं छोड़ता। अगर कोई और समस्या दिखती है तो बताता हूँ और ठीक करता हूँ।"],
  ["पहले ज़रूरत समझना", "काम शुरू करने से पहले समझता हूँ कि आपके व्यापार को असल में क्या चाहिए। अक्सर सही हल छोटा और सस्ता निकलता है।"],
  ["सटीक काम", "हर बदलाव लाइव करने से पहले जाँचा जाता है। क्या बदला और क्यों, इसका लिखित रिकॉर्ड आपको मिलता है।"],
  ["लॉन्च के बाद भी साथ", "वेबसाइट बनने के बाद भी होस्टिंग, अपडेट और छोटे-मोटे बदलाव मैं ही देखता हूँ।"],
];

const FAQ_HI = [
  ["वेबसाइट बनने में कितना समय लगता है?", "बिज़नेस वेबसाइट ज़्यादा से ज़्यादा एक हफ़्ते में लाइव हो जाती है। ऑनलाइन स्टोर में थोड़ा ज़्यादा समय लगता है क्योंकि पेमेंट और डिलीवरी असली ऑर्डर से टेस्ट होती है।"],
  ["कीमत कितनी है?", "30 मिनट की मुफ़्त बात के बाद मैं लिखित में तय कीमत बताता हूँ। काम शुरू होने से पहले आपको पूरा दायरा और कीमत पता होती है।"],
  ["क्या आप पाली आकर मिल सकते हैं?", "हाँ। पाली, जोधपुर, जालोर, सिरोही और बालोतरा में मैं खुद आकर मिलता हूँ। बाकी जगह ऑनलाइन।"],
  ["किसी और की बनाई साइट ठीक कर सकते हैं?", "हाँ। पुरानी साइट, बंद पड़ा स्टोर, Google पर न दिखने वाली वेबसाइट, ये सब मैं पहले जाँचता हूँ, फिर ठीक करता हूँ।"],
];

export default function Hindi() {
  return (
    <>
      <Seo
        title="पाली, राजस्थान में वेबसाइट, ऐप और WhatsApp ऑटोमेशन"
        description="JM Technologies, पाली (राजस्थान)। रिदम जैन द्वारा वेबसाइट, मोबाइल ऐप, ऑनलाइन स्टोर, होस्टिंग और WhatsApp Business API सेटअप। पाली, जोधपुर और आसपास के व्यापारियों के लिए। बिज़नेस वेबसाइट एक हफ़्ते में।"
        lang="hi"
        alternates={[
          { hreflang: "en", href: "/" },
          { hreflang: "hi", href: "/hi" },
          { hreflang: "x-default", href: "/" },
        ]}
      />

      <Section className="pb-16 pt-20 md:pb-24 md:pt-28">
        <Eyebrow>पाली, राजस्थान</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          आपके व्यापार के लिए वेबसाइट, ऐप और ऑनलाइन स्टोर।
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
          मैं रिदम जैन हूँ, पाली से। मैं छोटे और मध्यम व्यापारों के लिए वेबसाइट, मोबाइल ऐप, ऑनलाइन स्टोर और WhatsApp
          सिस्टम बनाता हूँ, और बनने के बाद भी उन्हें चालू रखता हूँ। बिज़नेस वेबसाइट एक हफ़्ते में तैयार।
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <ButtonLink href={CONTACT.whatsapp}>WhatsApp पर बात करें</ButtonLink>
          <ButtonLink href={CONTACT.booking} variant="secondary">
            मुफ़्त कॉल बुक करें
          </ButtonLink>
        </div>
      </Section>

      <div className="bg-white">
        <Section>
          <Eyebrow>सेवाएँ</Eyebrow>
          <H2>मैं क्या-क्या करता हूँ</H2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES_HI.map(([title, text]) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-sand p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/services" className="text-sm font-medium text-accent hover:underline">
              पूरी जानकारी अंग्रेज़ी में देखें
            </Link>
          </div>
        </Section>
      </div>

      <Section className="grid items-center gap-12 md:grid-cols-[300px_1fr]">
        <img
          src={ridamImg}
          alt="रिदम जैन, JM Technologies के संस्थापक"
          width="800"
          height="1000"
          className="w-64 rounded-2xl object-cover md:w-full"
        />
        <div>
          <Eyebrow>पाली के लिए एक पहल</Eyebrow>
          <H2>बड़े शहरों की एजेंसी नहीं, अपने इलाके के लिए काम</H2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            मैंने विदेशी कंपनियों के लिए काम किया है और जानता हूँ कि अच्छा सॉफ़्टवेयर कैसा होता है। मेरा मक़सद मुंबई या
            बेंगलुरु के बड़े क्लाइंट ढूँढना नहीं है। मैं चाहता हूँ कि पाली, जोधपुर और आसपास के कस्बों की दुकानें,
            फ़ैक्टरियाँ, क्लिनिक और स्कूल भी ऑनलाइन उतनी ही आसानी से मिलें जितनी किसी मेट्रो शहर का व्यापार, और वह
            भी यहाँ की सही कीमत पर। यही JM Technologies का उद्देश्य है।
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            JM नाम मेरे दादाजी जेठमल जैन के नाम पर है, जिन्हें सब जेठमल मास्टर कहते थे। जालोर में हेडमास्टर, फिर 1965
            से पाली में कपड़े का व्यापार। उनका नाम मेरे लिए ईमानदारी और भरोसे का पैमाना है।
          </p>
          <div className="mt-6">
            <ButtonLink to="/about" variant="secondary">
              मेरे बारे में और पढ़ें
            </ButtonLink>
          </div>
        </div>
      </Section>

      <div className="bg-white">
        <Section>
          <Eyebrow>काम करने का तरीका</Eyebrow>
          <H2>चार बातें जिन पर आप भरोसा कर सकते हैं</H2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {PRINCIPLES_HI.map(([title, text], i) => (
              <div key={title} className="flex gap-4">
                <span className="mt-1 h-7 w-7 shrink-0 rounded-full bg-ink text-center text-sm font-semibold leading-7 text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section className="grid gap-12 md:grid-cols-2">
        <div>
          <Eyebrow>सवाल-जवाब</Eyebrow>
          <H2>अक्सर पूछे जाने वाले सवाल</H2>
          <dl className="mt-8 space-y-5">
            {FAQ_HI.map(([q, a]) => (
              <div key={q}>
                <dt className="font-semibold text-ink">{q}</dt>
                <dd className="mt-1 leading-relaxed text-slate-600">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-semibold">संपर्क करें</h2>
          <dl className="mt-5 space-y-4 text-slate-700">
            <div>
              <dt className="text-sm font-semibold text-slate-500">WhatsApp / फ़ोन</dt>
              <dd>
                <a href={`tel:${CONTACT.phoneRaw}`} className="hover:underline">
                  {CONTACT.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-slate-500">ईमेल</dt>
              <dd>
                <a href={`mailto:${CONTACT.email}`} className="hover:underline">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-slate-500">पता</dt>
              <dd>23, महावीर उद्योग नगर, पाली, राजस्थान 306401</dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={CONTACT.whatsapp}>WhatsApp पर मैसेज करें</ButtonLink>
            <ButtonLink href={CONTACT.booking} variant="secondary">
              कॉल बुक करें
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
