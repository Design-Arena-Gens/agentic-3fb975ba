"use client";

import { useState } from "react";
import styles from "./page.module.css";

const ethosHighlights = [
  {
    id: "motion",
    title: "حركة متموجة",
    description: "طبقات ضوئية تتجاوب مع الإيماءة لتخلق إيقاعاً بصرياً يشبه نبض القلب."
  },
  {
    id: "sound",
    title: "صوت محيط",
    description: "تصميم صوتي غامر مبني على عينات من آلات تقليدية ممزوجة مع نسيج إلكتروني."
  },
  {
    id: "type",
    title: "هوية حرفية",
    description: "حروف عربية حديثة تحافظ على الدقة وتحتفي بالتراكيب الأصيلة مع حس رقمي حي."
  }
];

const experienceTimeline = [
  {
    phase: "إشعال الفكرة",
    detail: "نرسم ملامح الرؤية عبر جلسة اكتشاف غنية، نحدد خلالها الصوت، النبرة، وإيقاع التجربة."
  },
  {
    phase: "صياغة الهوية",
    detail: "نبني عوالم لونية، أنظمة حرفية، وتدفقات تفاعل تحترم الثقافة وتدفعها نحو المستقبل."
  },
  {
    phase: "إطلاق التجربة",
    detail: "نغلف التجربة في بيئة رقمية قابلة للانتشار، مدعومة بالأداء والتحليلات اللحظية."
  }
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div className="grid-overlay" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <main className={styles.main}>
        <section className={`${styles.hero} section`}>
          <div className={styles.heroOrb} aria-hidden="true" />
          <div className={`${styles.heroPanel} glass-panel`}>
            <div className="section-content">
              <div className={styles.heroCopy}>
                <span className="tag">رلن • موجة جديدة</span>
                <h1 className="arabic-display" aria-label="رلن">
                  <span>رلن</span>
                </h1>
                <p className="subhead">
                  منصة حسية عربية تعيد تشكيل علاقة الضوء بالصوت والحرف. رلن تبتكر مساراً
                  جديداً للتجارب الرقمية يتجاوز حدود الشاشة إلى الواقع المعزز.
                </p>
                <div className="flex-row">
                  <a className="cta-button" href="#explore">
                    ابدأ الاستكشاف
                    <span aria-hidden="true">⟶</span>
                  </a>
                  <div className={styles.heroMeta}>
                    <span>الزمن</span>
                    <strong>٢٠٢٤</strong>
                  </div>
                  <div className={styles.heroMeta}>
                    <span>الموقع</span>
                    <strong>دبي • الرياض</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="explore" className="section">
          <div className="section-content">
            <header className={styles.sectionHeader}>
              <span className="tag">فسيفساء المشاعر</span>
              <h2 className={`${styles.sectionTitle} headline`}>مكوّنات التجربة</h2>
              <p className="subhead">
                الداخل إلى رلن يعيش طبقات متعددة من السرد. نكتب القصص بالألوان، نُسمع الضوء،
                ونمنح الحرف صوتاً نابضاً يتفاعل مع حركة الزائر.
              </p>
            </header>

            <div className="grid grid--three">
              {ethosHighlights.map((item) => (
                <article key={item.id} className="card">
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardBody}>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.timelineSection} section`}>
          <div className={styles.timelineOrb} aria-hidden="true" />
          <div className="section-content">
            <header className={styles.sectionHeader}>
              <span className="tag">رحلة بناء التجارب</span>
              <h2 className={`${styles.sectionTitle} headline`}>خط زمني نابض</h2>
              <p className="subhead">
                من أول لحظة حتى لحظة الإطلاق، نعمل ضمن مسار واضح يضمن التماسك الإبداعي وإيقاع
                التنفيذ السلس.
              </p>
            </header>

            <div className={styles.timeline}>
              {experienceTimeline.map((step, index) => (
                <div key={step.phase} className={styles.timelineItem}>
                  <div className={styles.timelineIndex}>{index + 1}</div>
                  <div>
                    <h3 className={styles.cardTitle}>{step.phase}</h3>
                    <p className={styles.cardBody}>{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.contactSection} section`}>
          <div className="section-content">
            <div className={`${styles.contactPanel} glass-panel`}>
              <header className={styles.sectionHeader}>
                <span className="tag">تواصل</span>
                <h2 className={`${styles.sectionTitle} headline`}>ابدأ محادثة مع رلن</h2>
                <p className="subhead">
                  شاركنا فكرة، نغم، أو لحظة إلهام؛ نبني عليها تجربة تنبض بالعربية وتعيش على
                  كل شاشة.
                </p>
              </header>

              <form
                className="contact-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <label htmlFor="name">
                  اسمك
                  <input id="name" name="name" type="text" placeholder="الاسم الكامل" required />
                </label>
                <label htmlFor="email">
                  بريد إلكتروني
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                </label>
                <label htmlFor="vision">
                  رؤيتك
                  <textarea
                    id="vision"
                    name="vision"
                    rows={4}
                    placeholder="آفاق التجربة، الجمهور، الأثر المتوقع..."
                    required
                  />
                </label>
                <button className="cta-button" type="submit">
                  أرسل المخيلة
                  <span aria-hidden="true">✶</span>
                </button>
                {submitted && (
                  <p role="status" className={styles.successNote}>
                    تم استلام رسالتك. سنعود إليك بنبض جديد قريباً.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} رلن — مساحات عربية متجددة</span>
        <span>مدعوم بتقنيات WebGL، WebAudio، وذكاء اصطناعي تركيبي</span>
      </footer>
    </>
  );
}
