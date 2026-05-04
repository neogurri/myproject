import { Link, Navigate, useParams } from "react-router-dom";
import { getPeriod, type PeriodId } from "../data/timeline";
import styles from "./Detail.module.css";

const validIds: PeriodId[] = [
  "birth",
  "childhood",
  "bis",
  "teen",
  "present",
];

function isPeriodId(s: string): s is PeriodId {
  return validIds.includes(s as PeriodId);
}

export default function Detail() {
  const { periodId } = useParams();

  if (!periodId || !isPeriodId(periodId)) {
    return <Navigate to="/" replace />;
  }

  const period = getPeriod(periodId);
  if (!period) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.page} data-period={period.id}>
      <header className={styles.header}>
        <Link to={{ pathname: "/", hash: "timeline" }} className={styles.back}>
          ← 타임라인으로
        </Link>
      </header>
      <article className={styles.article}>
        <p className={styles.kicker}>
          {period.label}
          {period.yearHint ? ` · ${period.yearHint}` : ""}
        </p>
        <h1 className={styles.title}>{period.detailTitle}</h1>
        {period.detailImages && period.detailImages.length > 0 ? (
          <div
            className={styles.photoStrip}
            role="region"
            aria-label="관련 사진"
          >
            <div className={styles.photoStripTrack}>
              {period.detailImages.map((img, i) => (
                <img
                  key={i}
                  className={styles.photoStripImg}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        ) : period.detailImage ? (
          <figure className={styles.figure}>
            <img
              className={styles.detailPhoto}
              src={period.detailImage.src}
              alt={period.detailImage.alt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        ) : null}
        <div className={styles.body}>
          {period.detailBody.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
