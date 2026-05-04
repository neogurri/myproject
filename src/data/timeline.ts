import bisCampus from "../assets/timeline/bis-campus.png";
import bisClassmates from "../assets/timeline/bis-classmates.png";
import bisClassroom from "../assets/timeline/bis-classroom.png";
import childhoodCheongun from "../assets/timeline/childhood-cheongun.png";
import presentYonseiFieldNight from "../assets/timeline/present-yonsei-field-night.png";
import presentYonseiGroup from "../assets/timeline/present-yonsei-group.png";
import presentYonseiMtCollage from "../assets/timeline/present-yonsei-mt-collage.png";
import sksClassroom from "../assets/timeline/sks-classroom.png";
import sksField from "../assets/timeline/sks-field.png";
import sksGraduation from "../assets/timeline/sks-graduation.png";

export type PeriodId = "birth" | "childhood" | "bis" | "teen" | "present";

export interface PeriodDetailImage {
  src: string;
  alt: string;
}

export interface Period {
  id: PeriodId;
  label: string;
  yearHint: string;
  summary: string;
  detailTitle: string;
  /** 문단 위에 표시할 선택 이미지 */
  detailImage?: PeriodDetailImage;
  /** 문단 위에 가로로 나열할 이미지(높이 통일, 넘치면 가로 스크롤) */
  detailImages?: PeriodDetailImage[];
  detailBody: string[];
}

export const periods: Period[] = [
  {
    id: "birth",
    label: "출생",
    yearHint: "2007",
    summary: "새로운 시작의 해.",
    detailTitle: "출생",
    detailBody: [
      "2007년에 태어나 인생의 첫 장을 열었습니다. 가족의 사랑 속에서 건강하게 자라기 시작한 시기입니다.",
      "어린 시절의 기억은 앞으로의 성장과 선택의 바탕이 되는 소중한 출발점입니다.",
    ],
  },
  {
    id: "childhood",
    label: "유년기",
    yearHint: "2007-2018",
    summary: "세상에 첫 걸음을 내딛은 시기.",
    detailTitle: "유년기",
    detailImage: {
      src: childhoodCheongun,
      alt: "맑은 하늘 아래 서울청운초등학교 교사와 운동장이 보이는 전경",
    },
    detailBody: [
      "4번의 잦은 이사로 다양한 환경에서 자라며 많은 경험을 할 수 있었습니다. 특히 서울 종로에서의 기억은 유년기의 핵심으로 남아, 지금도 고향을 떠올리면 자연스럽게 생각나는 곳입니다.",
      "친구·가족과의 관계 속에서 사회성과 정서를 키우며, 배움의 즐거움을 알아가던 때입니다. 초등학교에서는 가야금, 바이올린, 피아노 등 다양한 악기에 도전했으며, 미술 학원과 논술 학원을 다니는 등 다양한 방면으로 성장할 수 있었습니다.",
    ],
  },
  {
    id: "bis",
    label: "영국국제학교",
    yearHint: "2019-2022",
    summary: "새로운 환경에 적응하며 시야를 넓힌 시기.",
    detailTitle: "영국국제학교(BISS)",
    detailImages: [
      {
        src: bisCampus,
        alt: "인공 잔디 운동장과 BISS 교사 건물이 보이는 풍경",
      },
      {
        src: bisClassmates,
        alt: "교실에서 교사와 학생들이 함께 찍은 단체 사진",
      },
      {
        src: bisClassroom,
        alt: "수업 중 프로젝터 화면에 숙제 안내가 보이는 교실",
      },
    ],
    detailBody: [
      "2019년 1월 1일, 중국 상하이로 이사한 뒤 영국 국제학교에 다니며 낯선 환경에서의 생활이 시작됐습니다. 처음에는 높은 언어의 벽 때문에 좌절감을 느꼈습니다. 하지만 수많은 친구들의 도움으로 점차 적응해나갈 수 있었습니다. 다양한 국적의 친구들과 어울리며 시야를 넓히고, 도전과 실패를 반복하는 과정에서 책임감과 목표 의식을 길렀습니다.",
      "특히 기억에 남는 경험은 학교를 대표하여 상하이 수학 대회(SISMAC)에 참가했던 일입니다. 다른 국제학교에서 온 뛰어난 친구들 사이에서 조원들과 협력하며 수학 문제를 푸는 과정을 통해 협동심과 문제 해결 능력을 키울 수 있었습니다. 결국 전체 4위라는 쾌거를 이뤘습니다. 이외에 매년 학교 체육대회에서 Triple Jump 부문 은메달을 획득했던 기억도 있습니다.",
      "또한 다른 친구들에 비해 부족했던 영어, 중국어 실력을 채우기 위해 열심히 노력했습니다. 학교에서 제공하는 영어 수업을 수강하며 Cambridge에서 주관하는 KET, PET와 FCE 자격증을 취득했습니다. 한국에서 공부했던 영어와 달리, 처음으로 접한 중국어는 매우 어려웠지만 의식적으로 중국 친구들과 어울리며 실력을 키웠습니다. 결국 2021년(만 14세)에 HSK 3급을 취득했습니다.",
      "이외에도 학교 수업을 따라가며 IGCSE Math 과목을 만점으로 취득했으며, Business, Media, Drama와 같은 과목을 수강하며 다양한 경험을 할 수 있었습니다.",
    ],
  },
  {
    id: "teen",
    label: "상해한국학교",
    yearHint: "2022-2025",
    summary: "정체성과 진로를 탐색하던 시기.",
    detailTitle: "상해한국학교(SKS)",
    detailImages: [
      {
        src: sksField,
        alt: "흐린 날, 운동장과 잔디 구장, 주변 교사 건물이 보이는 상해한국학교 풍경",
      },
      {
        src: sksClassroom,
        alt: "교실 책상에서 교복을 입고 한국어 교과서로 공부하는 학생들",
      },
      {
        src: sksGraduation,
        alt: "졸업식 무대에서 학위복을 입고 상을 받는 모습과 축하 문구가 담긴 전광판",
      },
    ],
    detailBody: [
      "2022년 8월, 중학교 3학년이었던 저는 상해한국학교로 전입했습니다. 몇 년의 생활로 익숙해진 영국국제학교를 떠나 재외한국학교로서의 전학은 제게 또 다른 도전이었습니다. 어색한 한국식 교육과 한국 친구들의 다른 가치관에 적응하는 데는 시간이 걸렸습니다. 시험보다는 토론과 에세이 쓰기 등의 활동이 주가 됐던 과거와 달리, 한국 학교에서는 직접적인 내신 대비와 공부가 필요했습니다. 하지만 결국 꾸준한 노력 끝에 새로운 환경에도 적응할 수 있었습니다. 전학 후 처음으로 본 중간고사에서 전교 5등이라는 쾌거를 이루며 제 가능성을 엿보았고, 이후 꾸준한 노력 끝에 성적을 최상위까지 끌어올릴 수 있었습니다. 1등이라는 자리는 기쁨과 동시에 부담이었고, 이후 고등학교 3년 내내 성적을 일정하게 유지하는 것은 제게 또 다른 과제였습니다. 따라서 다양한 활동에 도전헀던 국제학교에서의 생활과는 달리, 한국학교에서는 제가 잘할 수 있는 것에 집중하기 시작했습니다.",
      "고등학교에 진학하여 본격적인 입시 생활에 들어간 저는 대학 진학을 위해 수많은 행사와 대회에 참여했습니다. 특히 기억에 남은 경험은 SKOSMUN(모의 국제회의)에서 AD를 맡아 행사를 주도했던 일과, '임시정부의 발자취를 찾아서'라는 프로그램에서 인솔단으로 활동했던 경험입니다. 두 행사 모두 제가 직접 기획하고 진행하는 작업을 통해 리더십과 기획력, 행동력을 키울 수 있었습니다.",
      "다양한 공인 성적도 준비했습니다. 영국국제학교에서 기른 영어 실력을 증명하기 위해 2023년(고1) 8월 SAT 1530점, 2024년(고2) 2월 TOEFL 110점을 취득했습니다. 또한 2025년(고3) 5월에는 AP Macroeconomics와 AP Psychology에 응시하여 모두 5점 만점을 취득했습니다. 공인 성적을 학교 내신과 병행하며 준비하느라 큰 부담으로 다가왔지만, 포기하지 않고 노력하여 최종적으로 좋은 성과를 거둘 수 있었습니다.",
    ],
  },
  {
    id: "present",
    label: "현재",
    yearHint: "2026",
    summary: "지금 이 순간, 성장하는 중.",
    detailTitle: "연세대학교 언론홍보영상학부",
    detailImages: [
      {
        src: presentYonseiGroup,
        alt: "밤에 연세대학교 간판 앞에서 야구점퍼를 입고 단체 사진을 찍는 학생들",
      },
      {
        src: presentYonseiFieldNight,
        alt: "야간 잔디 운동장에서 야구점퍼를 입고 둥글게 모여 있는 학생들을 위에서 찍은 사진",
      },
      {
        src: presentYonseiMtCollage,
        alt: "2026 언론홍보영상학부 총MT — 스파클러 단체사진과 해변 단체 사진이 담긴 콜라주",
      },
    ],
    detailBody: [
      "성인이 되어 바라본 새로운 세상은 제가 우물 안 개구리였다는 것을 다시금 상기시켰습니다. 지난 노력을 통해 연세대학교 언론홍보영상학부에 입학하는 쾌거를 이뤘지만, 중국을 떠나 한국이라는 친숙하지만 동시에 새로운 환경에 던져져 또 다른 도전을 시작했습니다.",
      "다양한 배경에서 온 동기들과, 전문적인 전공과 교양 수업, 연세대학교에서 접할 수 있는 수많은 활동 등을 통해 앞으로 제가 성장할 날이 무궁무진하다는 것을 깨달았습니다.",
      "저는 이제 우물 밖의 세상을 바라보며 더 넓은 세상을 향해 나아가려 합니다. 연세대학교에서 만나는 다양한 경험을 바탕으로, 미래의 제가 가고자 하는 언론인의 길에 조금 더 가까워지길 바랍니다.",
    ],
  },
];

export function getPeriod(id: string | undefined): Period | undefined {
  return periods.find((p) => p.id === id);
}
