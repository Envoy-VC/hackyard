import {
  CraneTowerIcon,
  GearSixIcon,
  MagnifyingGlassIcon,
  PaletteIcon,
  PresentationIcon,
  RocketLaunchIcon,
  SparkleIcon,
  StarFourIcon,
  StudentIcon,
  SuitcaseIcon,
  UsersIcon,
} from "@phosphor-icons/react/ssr";

const question0Options = [
  {
    icon: StudentIcon,
    id: "student",
    title: "Student",
  },
  {
    icon: RocketLaunchIcon,
    id: "indie-hacker",
    title: "Indie hacker",
  },
  {
    icon: SuitcaseIcon,
    id: "professional-developer",
    title: "Professional developer",
  },
  {
    icon: PaletteIcon,
    id: "designer",
    title: "Designer",
  },
  {
    icon: StarFourIcon,
    id: "founder",
    title: "Founder",
  },
  {
    icon: GearSixIcon,
    id: "other",
    title: "Other",
  },
];

const question1Options = [
  {
    id: "web-apps",
    title: "Web apps",
  },
  {
    id: "mobile-apps",
    title: "Mobile apps",
  },
  {
    id: "ai-ml-projects",
    title: "AI / ML projects",
  },
  {
    id: "web3-blockchain",
    title: "Web3 / Blockchain",
  },
  {
    id: "games",
    title: "Games",
  },
  {
    id: "developer-tools-libraries",
    title: "Developer tools / libraries",
  },
  {
    id: "hackathon-experiments",
    title: "Hackathon experiments",
  },
  {
    id: "other",
    title: "Other",
  },
];

const question3Options = [
  {
    icon: PresentationIcon,
    id: "showcase-my-past-projects",
    title: "Showcase my past projects",
  },
  {
    icon: CraneTowerIcon,
    id: "share-ongoing-work-milestones",
    title: "Share ongoing work / milestones",
  },
  {
    icon: UsersIcon,
    id: "find-collaborators-or-feedback",
    title: "Find collaborators or feedback",
  },
  {
    icon: MagnifyingGlassIcon,
    id: "discover-projects-by-other-devs",
    title: "Discover projects by other devs",
  },
  {
    icon: SparkleIcon,
    id: "just-exploring",
    title: "Just exploring",
  },
];

export const onboardingQuestions = {
  0: {
    options: question0Options,
    question: "What best describes you?",
    subtitle: "Select one of the options below",
  },
  1: {
    options: question1Options,
    question: "What kind of projects do you usually build?",
    subtitle: "Select all that apply",
  },
  2: {
    options: question3Options,
    question: "What's your current goal on HackYard?",
    subtitle: "Select all that apply",
  },
  3: {
    question: "Claim your HackYard handle",
    subtitle:
      "This will be your unique space to showcase everything you build.",
  },
} as const;
