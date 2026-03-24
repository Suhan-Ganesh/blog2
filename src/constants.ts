import { Article, Feature } from './types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    category: 'Workflow',
    title: 'Git: A Time Machine for Developers',
    description: "Mastering version control is more than just commits; it's about collaborative safety, seamless rollbacks, and the architectural backbone of team-driven software engineering in a global environment.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMQoau5YiiywGYe5n0fJ4F-u-8Uyee4wjBcZBjB7rXACrdAuTWSTFXo7z9jNlaSMRCmUD38nkz46QwfDS8f7_I8WEBmk2yDbKgz6_3UWOhUd_RPNLh57MfKm-88Qq89573hLnQFcN5346Sqjg2Snoz5cc_FSlbEb4VdModMF-XrlL1I5hC3j44ruB45MU4kAxPZabUEIPJTmXI-4V1g7pdv1PbLPAD_C7qrgkUtZSHK7JkzZ8U55pw1VI0V7q7kHK8WG6kSXXAdxa_',
  },
  {
    id: '2',
    category: 'Future Tech',
    title: 'AI: Replacement or Superhuman?',
    description: "Artificial intelligence isn't coming for your job—it's coming for your repetitive tasks. Learn how to leverage LLMs to augment your productivity and focus on core fundamental logic.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy5Fsx4EMFHRbwuhLCKJtuMLqQqLeLGJB859Klok538cGmm2LjUzsxLxx1lkaUQXEsRJHxOgrjPl8T_IDb7_lyusgxD5nA6wnbbUD8K90Z6-0yq7ydHd-4Y38sE7XxyMBMSwVsMeKLPeR3gu15wH7lYADyA21SO3oBpb08yTKjqsd7wu3rZ71oBnWLnltBAbpslPrbvhUjRijFwNW4Js4REfPIPUCrcfsxz6QpZx42BKAuQgN0VbpQkyUCd6jn1VXZpThqLq3NFcyz',
  },
  {
    id: '3',
    category: 'Computer Science',
    title: 'Real-World Data Structures',
    description: 'From the way Google ranks search results to how social media feeds connect you with friends, understanding the core structures behind the software makes you a better architect.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-H_YEuDl0NiQ9IRQYbltpctrmE_5ezsIcyEEMV_Rl1zL0-xO_GDb6TSWAzwVKHMIi9ws4S9nSw3_x9WbHF5rSNynL7h7agHg5H7vl6PsCtTF4wLEYJpzMh_6o4iY5S8XrLF6xIJCoFR8jGN6ZS_c-glBXzIhCmDwhHyXfnfed66cXX2N9gXcIInyAoStsV9LS0-gi1CN4TsD3007t34d-42QmH2odX0l8V4sDUvfKiW8ZxeE178tDzhpJ6YY09vsEMWMxUiHMqfNW',
  },
  {
    id: '4',
    category: 'Career',
    title: 'Your Digital Resume Beyond CGPA',
    description: 'Your degree is a ticket, but your GitHub is the performance. Build a personal brand that demonstrates curiosity, persistence, and practical problem-solving through open-source contributions.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKOGY___AaabeqFr3XJxiBPIgWUqjqSEMcc4PV49ywAb6tcA8eyZsjxLWB7PcvMtzVeBdDSoaIOaFdpelcZnVrvS9c-uDUyqOr8d1f8BTNcbqBBQxbuDccjGlO8T7eFwdwyaN4_M_Sd41VPacBcd8-HDDVKyhw6GypJyHPcKU6XUYM6bCJkK-J_6OlI2ZIhVQYDhIQpkd9NG3UMNaI1SLLDSM--okGuBdIl0y8CQe5EO9vaB7YKNSrKEqIlDgPjMhQCHFGVzjKp99H',
  },
  {
    id: '5',
    category: 'Craftsmanship',
    title: 'Writing Code for Humans',
    description: 'Computers execute instructions; humans maintain systems. Learn the art of Clean Code, intentional naming, and building software that welcomes future developers rather than scaring them.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfeGDY8DHmpoohxgcGw0hNI9m9ppTrpUbverJHONKsOoLPtpL2eEW1nu-e-ZOVvsAnDZ_gUCCfTEd1KQol_7hUV1c5U1k3TkyQeTy8M3SZmFk9Dg60kKjwkiFQVA1UXVZz84uSje-sQXxk30izj7VFEC9Fov0cqI4riqXT0xnhwp5ZZXG8hvHUno2GEHGOly5lI5jxV35B74jGuVKzFNjBx40KnxfV3hQVbrgZxPa0YiHkmlb72kKiHIQSKV9wXYqwfgt5Ous23hre',
  },
  {
    id: '6',
    category: 'Emerging Trends',
    title: 'The Rise of No-Code Tools',
    description: 'Is it a threat or a tool? Discover how professional developers are using no-code for rapid prototyping and internal tools to save time for more complex architectural challenges.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGExIFXkn_QDpSZbKWSbtW9lt76Y2ruK0PlXNd-34zUU1TjOYttrKd80TDuvLijVpy2uBNMpXtiETOADZ50IKOCGY8dfqhWZfZtaYlbGr8fq7F-H6Y5esuVnHTVF8CW4rbo9v_ww0-TFjs-KlEUD6SRYe1N4jo8PO5iRC6sdBJJ5IDuhr0I95fEsc_Or04zbqB2EJBBrPU9B6E6AsKKstJo5qicNW_V2lv4L7Lm-775uxjcMoJJw7gs2v_nm_t0UqybUbGwj_UPVXC',
  },
  {
    id: '7',
    category: 'Professionalism',
    title: 'Soft Skills for Hardcore Coders',
    description: 'Communication, empathy, and problem-solving are the true 10x developer traits. Learn why your ability to explain a concept matters just as much as your ability to code it.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9GGiWzDHa8zLTTfckOryp3oIAmH21MWYBkVlh16mtYoPkJ8_XvXycklsBEsm1RDQ4Bwf1gK0UC0lM7_AH51W_zRN_TEZ4c6ZNv_avZEqBIEV-KD6VklFZPrYwRZbhG1WHj0AXdd5PalwLC3FtOijjKJrPqW2_6n80WF6Z94rYU1AP5vkGAiiZa905jJxnGZ_hEwE_-jYyUKykCRtXvC8vMbK5NAuohWhUIw2DfZCKi5CGo864mjyNlf86L38RGYUcBLsLa1Qojy-h',
  },
  {
    id: '8',
    category: 'Security',
    title: 'Digital Hygiene & Cybersecurity',
    description: "Security is everyone's responsibility. Master the basics of 2FA, phishing defense, and secure coding practices to protect both your data and your users' privacy in 2026.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByKM6adJxfO3-WlJ2LbOwubw29VeVjUrjq0-tICWSZLPx_fRyGKoCl9da7PBPCi_hWxu-mLaZVy9JXW7gtDe5BJMvB9m3f4YkGWAvAR864vsQUOOv_Sy8TjQm3bO4aXcq0is_mMFLcOReA5CQzEx5SYmP9xXIkekP7gZJ_UQcHfXwa-5ph2L0_bIclmeJuKNKSSlcGRyWzZPRDGB8Wl6rGgneNiTbRfdptKKLnNMr1508KpKsB84VwTREeEyEiSk0xCET9UoTkX4R-',
  },
];

export const FEATURES: Feature[] = [
  {
    id: 'speed',
    title: 'Extreme Speed',
    description: 'Rapid iteration cycles and efficient workflows are no longer optional—they are the minimum requirement for competitive development.',
    icon: 'Zap',
    bgColor: 'bg-primary-fixed',
    iconColor: 'text-primary',
  },
  {
    id: 'security',
    title: 'Unmatched Security',
    description: 'As attacks become more automated, a "security-first" mindset in code architecture is the only way to build trust and longevity.',
    icon: 'ShieldCheck',
    bgColor: 'bg-secondary-fixed',
    iconColor: 'text-secondary',
  },
  {
    id: 'scalability',
    title: 'Infinite Scalability',
    description: 'Writing code that can grow from ten users to ten million requires deep understanding of patterns and resource management.',
    icon: 'Compass',
    bgColor: 'bg-tertiary-fixed',
    iconColor: 'text-tertiary',
  },
];
