const hermione = 0
const guts = 1
const otaku = 2
const inside = 3
const ghost = 4


export const qnaList = [
    {
      q: '1. 시험치기 한달 전 당신의 상태는 ?',
      a: [
        { answer: 'a. 한달밖에 안 남았네? 계획표 짜야겠다', type: [hermione, inside] },
        { answer: 'b. 한달 전? 많이 남았네 ~ ', type: [guts, otaku] },
        { answer: 'c. 난 잘 모르겠어..', type: [ghost] }
      ]
    },
    {
      q: '2. 드디어 시험이 끝났다! 시험 끝난 당신의 선택지는 ? ',
      a: [
        { answer: 'a. 바로 집가서 쉬어야징...', type: [ghost, otaku] },
        { answer: 'b. 시험 끝난 기념으로 바로 놀러가야지 ~ ', type: [inside, guts] },
        { answer: 'c. 나 찾지마 자유로운 영혼이 될 거야', type: [guts, hermione] }
      ]
    },
    {
      q: '3. 교수님이 기억하는 당신의 모습은? ',
      a: [
        { answer: 'a. 허허 또 자네인가?', type: [hermione, inside] },
        { answer: 'b. 당신을 기억하지 못한다', type: [ghost, guts] },
        { answer: 'c. 교수님에게 질문 공격을 한다', type: [otaku, hermione] }
      ]
    },
    {
      q: '4. 친구와의 약속 시간, 당신은?',
      a: [
        { answer: 'a. 10분 전이나 약속 시간에 도착, 약속은 지켜야지 ', type: [hermione, ghost ] },
        { answer: 'b. 5~10분 늦는 타입, 어차피 다들 조금씩 늦잖아 ~ ', type: [inside, otaku ] },
        { answer: 'c. 약속 시간? 그냥 내킬 때 가용', type: [guts] }
      ]
    },
    {
      q: '5. 대학생활에서 가장 중요한 것은?',
      a: [
        { answer: 'a. 성적! A+ 없인 못 살아', type: [hermione] },
        { answer: 'b. 친구들! 함께라면 어느 곳이든 천국', type: [inside, guts] },
        { answer: 'c. 대학교는 내가 대학생이라 그냥 다니는 곳', type: [otaku, ghost] }
      ]
    },
  
    {
      q: '6. 수업 시간에 당신은 주로 어디에 앉나요?',
      a: [
        { answer: 'a. 교수님 바로 앞줄, 내가 바로 여기 있어요!', type: [hermione] },
        { answer: 'b. 중간쯤? 가까우면서도 멀리, 그 적당한 거리감', type: [inside, otaku] },
        { answer: 'c. 수업에 안 가서 모르겠어요', type: [ghost, guts ] }
      ]
    },
    {
      q: '7. 새로운 학기 첫날, 당신은 어떻게 행동하나요?',
      a: [
        { answer: 'a. 안녕! 나는...! 대뜸 말을 거는 스타일', type: [inside, guts ] },
        { answer: 'b. 강의실 구석에 앉아 상황을 살피는 스타일', type: [hermione, guts ] },
        { answer: 'c. 누군가 다가오길 기다림', type: [otaku, ghost ] }
      ]
    },
    {
      q: '8. 팀플에서의 당신의 역할은?',
      a: [
        { answer: 'a. ~~~~~ 이건 어떤가요 ? 적극적인 스타일', type: [inside, guts ] },
        { answer: 'b. 조용히 조별 사람들의 의견을 듣는 스타일', type: [ghost, otaku ] },
        { answer: 'c. 자 다들 모이세요 역할 분담합시다 이끄는 스타일', type: [hermione ] }
      ]
    },
    {
      q: '9. 수업이 끝난 당신? 어디로 향하나요?',
      a: [
        { answer: 'a. 나 동아리 활동 있어 동아리 활동 가야해 ~ ', type: [hermione, inside] },
        { answer: 'b. 뒤도 안 돌아보고 집으로 향함', type: [ghost, otaku] },
        { answer: 'c. 친구들아 뭐행 ? 나랑 놀자', type: [guts] }
      ]
    }
  ]
  
  export const infoList = [
    {
      title: '헤르미온느',
      name: '대학생활! 전부 다 잡겠어 완벽 추구형',
      desc: '당신은 뛰어난 학원 성취와 지적 호기심을 가진 학생으로, 모든 일에 철저히 준비하고 책임감 있게 임합니다. 정의감이 강하며, 옳고 그름에 대한 명확한 신념을 가지고 있습니다. 또한 친구들에 대한 충성심이 깊고, 협력과 팀워크에서도 뛰어난 능력을 발휘한다는 특징이 있습니다.'
    },
    {
      title: '뽀로로',
      name: '대학생활은 삶의 일부분, 열심히 즐기다가 가겠어',
      desc: '당신은 주로 여유롭게 시간을 보내며 현재의 즐거움을 중시하는 학생으로, 당신은 과제나 시험준비를 마지막 순간까지 미루는 경향이 있습니다. 당신은 그러한 스릴을 즐기고 압박 속에서 효율적으로 일하는 능력을 발휘합니다. 또한 사회적 활동을 좋아하고 친구들과 어울리는 것을 중요하게 생각하여, 학업보다 인간관계에 더 많은 시간을 투자한다는 특징이 있습니다.'
    },
    {
      title: '오타쿠',
      name: '크흑 나의 미쿠짱.. 대학생활 가지고 말꺼라능',
      desc: '당신은 특정 분야에 깊은 관심과 열정을 가지고 몰두하는 학생으로, 대부분 시간을 자신이 좋아하는 주제에 대해 공부하거나 관련 활동을 하며 보내며, 종종 혼자만의 시간을 즐깁니다. 사회적 활동보다는 자신의 관심사에 집중하는 것을 선호하며, 같은 취미를 가진 사람들관의 교류를 중요하게 생각한다는 특징이 있습니다.'
    },
    {
      title: '인싸',
      name: '넌 나의 동료가 되라! 대학생활은 인맥의 장',
      desc: '당신은 활발한 사회 생활을 즐기며 다양한 사람들과 쉽게 어울리는 학생으로, 각종 동아리와 모임에 적극적으로 참여하고, 주도적으로 이벤트를 기획하거나 친구들을 모으는 역할을 합니다. 당신은 학업보다는 인간관계와 네트워킹을 중시하며, 주변 사람들과의 교류에서 에너지를 얻습니다.'
    },
    {
      title: '유령',
      name: '대학생활은 가늘고 길게 눈에 안띄는게 목표..',
      desc: '당신은 수업이나 캠퍼스 활동에서 거의 모습을 드러내지 않는 학생으로, 주로 혼자서 공부하거나 시간을 보내며, 사회적 활동이나 모임에 참여하는 것을 꺼립니다. 다른 사람들에게는 존재감이 적지만, 자신만의 방식으로 대학 생활을 조용히 이어나가는 특징이 있습니다.'
    },
  ]
  