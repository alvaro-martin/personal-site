import { useTranslation } from "react-i18next";
import content from 'data/content.json';
import { useScrollReveal } from 'hooks/useScrollReveal';

const LanguageRow = ({ flag, name, level, percent, certification, certLink, index }) => {
    const [t] = useTranslation("global");

    return (
        <div
            className="language-row card-reveal flex flex-col py-4 px-4 border-b border-border last:border-b-0 transition-colors duration-normal hover:bg-background-secondary/50"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            <div className="flex flex-row items-center justify-between mb-2">
                <div className="flex flex-row items-center gap-3">
                    <span className="text-2xl" role="img" aria-label={`${name} flag`}>
                        {flag}
                    </span>
                    <span className="text-text font-bold text-lg">
                        {t(name)}
                    </span>
                    {certification && certLink && (
                        <a
                            href={certLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-badge inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-sm font-bold hover:bg-primary/20 transition-colors duration-normal"
                            aria-label={`${certification} certification`}
                        >
                            <span aria-hidden="true">✓</span>
                            {certification}
                        </a>
                    )}
                </div>
                <span className="level-badge text-text-muted font-bold text-base opacity-0 scale-90" style={{ animationDelay: `${index * 150 + 400}ms` }}>
                    {level}
                </span>
            </div>
            <div className="progress-bar-container w-full h-3 rounded-full overflow-hidden bg-background-secondary">
                <div
                    className="progress-bar h-full rounded-full bg-primary"
                    style={{
                        width: '0%',
                        animationDelay: `${index * 150 + 200}ms`,
                        '--target-width': percent
                    }}
                />
            </div>
        </div>
    );
};

const Languages = () => {
    const [t] = useTranslation("global");
    const ref = useScrollReveal();

    return (
        <section
            id="languages"
            ref={ref}
            aria-labelledby="languages-heading"
            className="section-wrapper py-16"
        >
            <h1 id="languages-heading" className="section-heading">
                {t("languages.title")}
            </h1>
            <p className="section-subtitle">
                {t("languages.subtitle")}
            </p>
            <div className="card w-full max-w-2xl mx-4 sm:mx-6">
                {content.languages.map((lang, idx) => (
                    <LanguageRow
                        key={lang.nameKey}
                        flag={lang.flag}
                        name={lang.nameKey}
                        level={lang.level}
                        percent={lang.percent}
                        certification={lang.certification}
                        certLink={lang.certLink}
                        index={idx}
                    />
                ))}
            </div>
        </section>
    );
};

export { Languages };
