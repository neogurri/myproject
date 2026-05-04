import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getHobby, type HobbyId } from "../data/hobbies";
import styles from "./Detail.module.css";
import hobbyStyles from "./HobbyDetail.module.css";

const validIds: HobbyId[] = ["reading", "writing", "screen"];

function isHobbyId(s: string): s is HobbyId {
  return validIds.includes(s as HobbyId);
}

export default function HobbyDetail() {
  const { hobbyId } = useParams();
  const hobby =
    hobbyId && isHobbyId(hobbyId) ? getHobby(hobbyId) : undefined;

  const pair = Boolean(hobby?.footerImages && hobby.footerImages.length === 2);
  const secondColRef = useRef<HTMLDivElement>(null);
  const [pairCropH, setPairCropH] = useState<number | null>(null);

  const measurePairCrop = useCallback(() => {
    if (!pair || !secondColRef.current) {
      setPairCropH(null);
      return;
    }
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 560px)").matches) {
      setPairCropH(null);
      return;
    }
    setPairCropH(secondColRef.current.offsetHeight);
  }, [pair]);

  useLayoutEffect(() => {
    measurePairCrop();
    const el = secondColRef.current;
    const ro = el ? new ResizeObserver(() => measurePairCrop()) : null;
    if (el && ro) ro.observe(el);
    window.addEventListener("resize", measurePairCrop);
    const mq = window.matchMedia("(max-width: 560px)");
    const onMq = () => measurePairCrop();
    mq.addEventListener("change", onMq);
    return () => {
      if (el && ro) ro.unobserve(el);
      ro?.disconnect();
      window.removeEventListener("resize", measurePairCrop);
      mq.removeEventListener("change", onMq);
    };
  }, [measurePairCrop, hobbyId, hobby?.id]);

  if (!hobbyId || !isHobbyId(hobbyId) || !hobby) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to={{ pathname: "/", hash: "hobbies" }} className={styles.back}>
          ← 취미·관심사로
        </Link>
      </header>
      <article className={styles.article}>
        <p className={styles.kicker}>취미 · 관심사</p>
        <h1 className={styles.title}>{hobby.detailTitle}</h1>
        <div className={styles.body}>
          {hobby.detailBody.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        {hobby.footerImages && hobby.footerImages.length > 0 ? (
          <figure className={hobbyStyles.footerFigure}>
            <div
              className={
                hobbyStyles.fadeImageRow +
                (pair ? " " + hobbyStyles.fadeImageRowPair : "")
              }
            >
              {hobby.footerImages.map((img, i) => {
                const isFirstOfPair = pair && i === 0;
                const isSecondOfPair = pair && i === 1;
                return (
                  <div
                    key={i}
                    ref={isSecondOfPair ? secondColRef : undefined}
                    className={hobbyStyles.fadeImageCol}
                  >
                    <div
                      className={hobbyStyles.fadeImageWrap}
                      style={
                        isFirstOfPair && pairCropH
                          ? {
                              height: pairCropH,
                              boxSizing: "border-box",
                            }
                          : undefined
                      }
                    >
                      <img
                        className={
                          hobbyStyles.fadeImage +
                          (isFirstOfPair && pairCropH
                            ? " " + hobbyStyles.fadeImageCropFit
                            : "")
                        }
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        decoding="async"
                        onLoad={isSecondOfPair ? () => measurePairCrop() : undefined}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </figure>
        ) : null}
      </article>
    </div>
  );
}
