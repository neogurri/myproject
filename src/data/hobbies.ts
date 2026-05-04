import readingListShot from "../assets/hobbies/reading-list.png";
import readingReviewCards from "../assets/hobbies/reading-review-cards.png";
import screenWatchList from "../assets/hobbies/screen-watch-list.png";
import writingDiaryEntries from "../assets/hobbies/writing-diary-entries.png";
import writingFileList from "../assets/hobbies/writing-file-list.png";

export type HobbyId = "reading" | "writing" | "screen";

export interface HobbyFooterImage {
  src: string;
  alt: string;
}

export interface Hobby {
  id: HobbyId;
  label: string;
  summary: string;
  detailTitle: string;
  detailBody: string[];
  /** 본문 아래, 왼쪽부터 순서대로 나란히 표시 (각각 동일한 하단 페이드) */
  footerImages?: HobbyFooterImage[];
}

export const hobbies: Hobby[] = [
  {
    id: "reading",
    label: "독서",
    summary: "책 속 문장과 하나가 되는 경험.",
    detailTitle: "독서",
    detailBody: [
      "책을 읽는 시간은 제게 다른 세계로 떠나는 모험의 시간과 같습니다. 홀로 책장을 넘기며 이야기에 몰입해 갈 때, 넓어지는 시야와 깊어지는 성찰을 느낍니다. 소설·에세이·비문학을 가리지 않고 읽으며, 특히 공상과학 소설을 좋아합니다.",
      "한 권을 마치고 나서는 꼭 감상평을 적습니다. 그 당시만 느낄 수 있는 소중한 감정을 잃지 않기 위해서입니다.",
    ],
    footerImages: [
      {
        src: readingListShot,
        alt: "독서 기록: 제목·유형·완료 상태·별점으로 정리한 도서 목록",
      },
      {
        src: readingReviewCards,
        alt: "독서 감상과 완료 상태가 담긴 도서 카드 그리드",
      },
    ],
  },
  {
    id: "writing",
    label: "글쓰기",
    summary: "흑백의 글자로 대표되는 사색의 시간.",
    detailTitle: "글쓰기",
    detailBody: [
      "글을 쓰는 과정은 제 머릿속이 흐릿할 때 특히 필요한 일입니다. 일기·독후감·자기 성찰 등 목적은 달라도, 결국은 머릿속에 떠다니는 생각을 문장으로 구체화하는 작업입니다. 떠오르는 걸 두서 없이 적어 내려가다 보면 어느새 진정한 제 자신에게 더 가까워집니다.",
      "지금까지 글쓰기는 제 스트레스 해소와 마음 다스리기에 큰 도움이 되었습니다. 앞으로는 글쓰기 능력을 더 길러 단순한 기록을 넘어 타인을 위한 설득과 전달의 도구로 더 단단히 가져가고 싶습니다.",
    ],
    footerImages: [
      {
        src: writingFileList,
        alt: "날짜·월별로 정리된 글 목록과 문서 아이콘이 보이는 기록 화면",
      },
      {
        src: writingDiaryEntries,
        alt: "날짜별로 나뉜 일기·글쓰기 본문이 담긴 화면",
      },
    ],
  },
  {
    id: "screen",
    label: "영화·드라마 시청",
    summary: "화면 너머 인물과 공명하는 순간.",
    detailTitle: "영화·드라마 시청",
    detailBody: [
      "영화와 드라마는 저에게 단순한 여가를 넘어, ‘어떻게 이야기를 설계하는가’를 배우는 창구입니다. 장면 전환·대사 리듬·음향과 색의 사용처럼, 화면 너머의 선택들이 어떤 감정을 만들어내는지 유심히 보는 편입니다.",
      "좋아하는 작품을 보며 메모를 남기거나 친구들과 해석을 나누는 일도 즐겁습니다. 제가 지향하는 언론·영상 분야와 맞닿아 있어, 앞으로도 시청 경험을 바탕으로 제작과 비평 양쪽의 감각을 함께 키우고 싶습니다.",
    ],
    footerImages: [
      {
        src: screenWatchList,
        alt: "시청 기록: 제목·유형(드라마/영화)·완료 상태·별점으로 정리한 목록",
      },
    ],
  },
];

export function getHobby(id: string | undefined): Hobby | undefined {
  return hobbies.find((h) => h.id === id);
}
