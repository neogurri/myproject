import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MutableRefObject,
} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import introProfile from "../assets/intro-profile.png";
import { hobbies } from "../data/hobbies";
import { periods, type Period, type PeriodId } from "../data/timeline";
import styles from "./Home.module.css";

const TIP_ID = "timeline-summary-tip";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const snapRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLOListElement>(null);
  const firstDotRef = useRef<HTMLSpanElement | null>(null) as MutableRefObject<
    HTMLSpanElement | null
  >;
  const lastDotRef = useRef<HTMLSpanElement | null>(null) as MutableRefObject<
    HTMLSpanElement | null
  >;
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const hideTipTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [tip, setTip] = useState<Period | null>(null);
  const [popPos, setPopPos] = useState({ left: 0, top: 0 });

  const goDetail = (id: PeriodId) => {
    navigate(`/period/${id}`);
  };

  const updatePopupPosition = () => {
    const el = anchorRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPopPos({ left: r.left + r.width / 2, top: r.top - 8 });
  };

  useLayoutEffect(() => {
    if (!tip) return;

    updatePopupPosition();

    const snap = snapRef.current;
    window.addEventListener("scroll", updatePopupPosition, true);
    window.addEventListener("resize", updatePopupPosition);
    snap?.addEventListener("scroll", updatePopupPosition, true);

    return () => {
      window.removeEventListener("scroll", updatePopupPosition, true);
      window.removeEventListener("resize", updatePopupPosition);
      snap?.removeEventListener("scroll", updatePopupPosition, true);
    };
  }, [tip]);

  const showTip = (p: Period) => (e: React.FocusEvent<HTMLButtonElement>) => {
    anchorRef.current = e.currentTarget;
    setTip(p);
  };

  const showTipMouse = (p: Period) => (e: React.MouseEvent<HTMLButtonElement>) => {
    if (hideTipTimer.current) {
      clearTimeout(hideTipTimer.current);
      hideTipTimer.current = null;
    }
    anchorRef.current = e.currentTarget;
    setTip(p);
  };

  const hideTip = () => {
    if (hideTipTimer.current) {
      clearTimeout(hideTipTimer.current);
      hideTipTimer.current = null;
    }
    setTip(null);
    anchorRef.current = null;
  };

  const hideTipDelayed = () => {
    if (hideTipTimer.current) clearTimeout(hideTipTimer.current);
    hideTipTimer.current = setTimeout(() => {
      hideTipTimer.current = null;
      hideTip();
    }, 100);
  };

  useEffect(
    () => () => {
      if (hideTipTimer.current) clearTimeout(hideTipTimer.current);
    },
    [],
  );

  const syncTimelineLine = useCallback(() => {
    const ol = timelineRef.current;
    const first = firstDotRef.current;
    const last = lastDotRef.current;
    if (!ol || !first) return;
    const olRect = ol.getBoundingClientRect();
    const firstRect = first.getBoundingClientRect();
    const lineStart = firstRect.left - olRect.left + firstRect.width / 2;
    ol.style.setProperty("--line-start", `${Math.max(0, lineStart)}px`);

    if (last) {
      const lastRect = last.getBoundingClientRect();
      const lastCenter = lastRect.left - olRect.left + lastRect.width / 2;
      const solidEnd = Math.max(0, lastCenter - lineStart);
      ol.style.setProperty("--line-solid-end", `${solidEnd}px`);
    } else {
      ol.style.removeProperty("--line-solid-end");
    }
  }, []);

  useLayoutEffect(() => {
    syncTimelineLine();
    const el = timelineRef.current;
    if (!el) return;
    const ro = new ResizeObserver(syncTimelineLine);
    ro.observe(el);
    window.addEventListener("resize", syncTimelineLine);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncTimelineLine);
    };
  }, [syncTimelineLine]);

  useLayoutEffect(() => {
    const target =
      location.hash === "#intro"
        ? "intro"
        : location.hash === "#timeline"
          ? "timeline"
          : location.hash === "#hobbies"
            ? "hobbies"
            : null;
    if (!target) return;
    const snap = snapRef.current;
    const section = document.getElementById(target);
    if (!snap || !section) return;
    const snapRect = snap.getBoundingClientRect();
    const secRect = section.getBoundingClientRect();
    snap.scrollTop += secRect.top - snapRect.top;
  }, [location.hash, location.pathname]);

  return (
    <>
      <div ref={snapRef} className={styles.snapRoot}>
        <div className={styles.snapScrollTrack}>
        <section className={styles.hero} aria-label="인사말">
          <h1 className={styles.heroTitle}>권희지를 소개합니다</h1>
          <p className={styles.heroSubtitle}>
            언론홍보영상학부 2026129019 권희지 언론학개론 과제
          </p>
          <p className={styles.scrollHint} aria-hidden="true">
            아래로 스크롤
          </p>
        </section>

        <section id="intro" className={styles.introSection} aria-label="자기소개">
          <div className={styles.introInner}>
            <div className={styles.introPhotoCol}>
              <img
                className={styles.introPhoto}
                src={introProfile}
                alt="권희지 프로필 사진"
                decoding="async"
              />
            </div>
            <div className={styles.introPanel}>
              <h2 className={styles.introHeading}>자기 소개</h2>
              <dl className={styles.introList}>
                <div className={styles.introRow}>
                  <dt>이름</dt>
                  <dd>
                    권희지{" "}
                    <span className={styles.introEn} lang="en">
                      Heeji Kwon
                    </span>
                  </dd>
                </div>
                <div className={styles.introRow}>
                  <dt>나이</dt>
                  <dd>만 19세</dd>
                </div>
                <div className={styles.introRow}>
                  <dt>학력</dt>
                  <dd>
                    <ul className={styles.introPath}>
                      <li>서울청운초등학교</li>
                      <li>The British International School Shanghai, Puxi</li>
                      <li>상해한국학교</li>
                      <li>
                        연세대학교 언론홍보영상학부 <span className={styles.introNow}>(현재)</span>
                      </li>
                    </ul>
                  </dd>
                </div>
                <div className={styles.introRow}>
                  <dt>좌우명</dt>
                  <dd className={styles.introMotto}>진심성선</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section
          id="timeline"
          className={styles.timelineSection}
          aria-label="성장 타임라인"
        >
          <h2 className={styles.sectionHeading}>시간을 따라</h2>
          <p className={styles.sectionLead}>
            각 시기에 마우스를 올리면 요약이 보이고, 클릭하면 자세한 이야기로
            이동합니다.
          </p>

          <div className={styles.timelineScroll}>
            <ol ref={timelineRef} className={styles.timeline}>
              {periods.map((p, i) => (
                <li key={p.id} className={styles.timelineItem}>
                  <span
                    ref={(el) => {
                      if (i === 0) {
                        firstDotRef.current = el;
                      } else if (i === periods.length - 1) {
                        lastDotRef.current = el;
                      }
                    }}
                    className={styles.dot}
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    className={styles.node}
                    onClick={() => goDetail(p.id)}
                    onMouseEnter={showTipMouse(p)}
                    onMouseLeave={hideTipDelayed}
                    onFocus={showTip(p)}
                    onBlur={hideTip}
                    aria-label={`${p.label} 자세히 보기`}
                    aria-describedby={tip?.id === p.id ? TIP_ID : undefined}
                  >
                    <span className={styles.nodeTitle}>
                      {p.label}
                      {p.yearHint ? (
                        <span className={styles.year}>({p.yearHint})</span>
                      ) : null}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="hobbies"
          className={styles.hobbiesSection}
          aria-label="취미와 관심사"
        >
          <h2 className={styles.sectionHeading}>취미와 관심사</h2>
          <p className={styles.sectionLead}>
            각 영역을 클릭하면 자세한 이야기로 이동합니다.
          </p>
          <ul className={styles.hobbyGrid}>
            {hobbies.map((h) => (
              <li key={h.id} className={styles.hobbyGridItem}>
                <Link
                  to={`/hobby/${h.id}`}
                  className={styles.hobbyCard}
                  aria-label={`${h.label} 자세히 보기`}
                >
                  <span className={styles.hobbyCardTitle}>{h.label}</span>
                  <p className={styles.hobbyCardSummary}>{h.summary}</p>
                  <span className={styles.hobbyCardCta}>자세히 보기 →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        </div>
      </div>

      {tip ? (
        <div
          id={TIP_ID}
          className={styles.popupFixed}
          style={{ left: popPos.left, top: popPos.top }}
          role="tooltip"
        >
          <span className={styles.popupTitle}>{tip.label}</span>
          <p className={styles.popupText}>{tip.summary}</p>
          <span className={styles.popupCta}>클릭하여 자세히</span>
        </div>
      ) : null}
    </>
  );
}
