
import { TeamMember, Challenge, VideoItem } from './types';

export const SOCIALS = {
  YOUTUBE: "https://www.youtube.com/@team_scaam",
  INSTAGRAM: "https://www.instagram.com/TEAM_SCAAM"
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "chrys",
    name: "Chrys Gnagne",
    role: "Technical Lead",
    country: "Côte d'Ivoire",
    contribution: "Spearheaded the end-to-end technical architecture of the Mission Genesis ecosystem. This included designing a modular React-based frontend for the 'Mission Terminal' and integrating a real-time analytics engine.",
    reflection: "Building Mission Genesis taught me that technical excellence is secondary to social relevance. In the context of Cameroon, we weren't just writing code; we were building a bridge for students to cross from the limitations of the 1960s educational reforms into the 21st-century digital economy.",
    journal: "I entered E-Lab with a strong resistance to group work. Past experiences had shaped my belief that collaboration often led to inefficiency, emotional strain, and the burden of compensating for others’ shortcomings. I expected group work to be more draining than productive.\n\nAt the beginning, teamwork felt easy. Everyone was motivated, present, and contributing. However, as the workload increased and fatigue set in, that initial momentum began to fade. This was the point at which leadership became necessary. I stepped forward not out of ambition, but out of responsibility. When others slowed down, I became the constant, prioritizing the success of the project even when it was uncomfortable.\n\nIn practice, this meant taking ownership of key deliverables. I led the technical execution by building both the website and the prototype, while guiding the team through the process to ensure alignment with our vision and objectives. Rather than working in isolation, I used these moments to set direction, create structure, and support my teammates in contributing meaningfully within their strengths.\n\nThrough this experience, my perception of teamwork shifted. Implementing group norms improved accountability, and redistributing tasks allowed everyone the space to contribute effectively. I learned when to give people room to grow and when to step in to protect the quality and coherence of the work. I also observed the bystander effect firsthand and realized that initiative often needs to be modeled before others feel empowered to act.\n\nMost importantly, E-Lab taught me that leadership is not about more than everyone else, but about enabling others to lead. What I once understood only in theory became practical. This experience reshaped my understanding of teamwork and leadership, and for that, I am grateful.",
    image: "https://i.ibb.co/wrL7k8r1/Chrys.jpg"
  },
  {
    id: "ayman",
    name: "Ayman Bahadur",
    role: "Research & Innovation Strategist",
    country: "Mozambique",
    contribution: "Authored the core strategic research that identified the '38% Productivity Paradox' in Cameroonian secondary education and mapped historical policy trajectories.",
    reflection: "My journey with Team S.C.A.A.M reinforced my belief that innovation must be rooted in deep historical and cultural context. Identifying that the primary bottleneck was 'syllabus-centric' rather than 'student-centric' was a lightbulb moment.",
    journal: "I think these principles, honesty, integrity, accountability, continual growth, are the foundational blocks on which I am placing behaviour within other human beings and my vision for where we want to go next. And I discovered through my own critique and conscious development that the foundation for effective leadership really begins with the self-awareness of people such as who I want to be, and who I need to become. I am absolutely passionate about an automotive manufacturing industry that creates opportunity and inspires youth, with an emphasis on sustainability, and want to work with others with the opportunity of becoming one of my clients. I want to create, build corporations, be environmentally friendly and lead justly; alter the way people move and build economies and instill confidence in Africa’s potential and excellence. All this makes it clear that leadership is purpose-led and, for me, is having a sense of purpose with a plan in mind to lead every bit of my actions, every inch of my willpower, and every dream I have because I know that I believe more in creating a cleaner, more resilient, and more reliable Africa moving forward.",
    image: "https://i.ibb.co/7NNjnWb3/Ayman-1.jpg"
  },
  {
    id: "sandrine",
    name: "Sandrine Ojong",
    role: "Project Visionary",
    country: "Cameroon",
    contribution: "Served as the primary liaison for the pilot programs, coordinating with school administrators and STEM educators to create the regional innovation sprint.",
    reflection: "As a Cameroonian, seeing Mission Genesis come to life was deeply personal. For too long, our students have been forced into a mold that doesn't fit the dynamic nature of our continent's needs. This isn't just a platform; it's a movement.",
    journal: "When I noticed that most of E-Lab would be done in groups, I had a lot of mixed feelings. I have never been fond of working with people before, for various reasons such as the inefficiency of one person affecting the whole, dealing with several temperaments and characters; it sounded like a mentally draining activity.\n\nWhen we commenced the E-Lab challenges, things started off well; everyone was contributing. I believe this was the peak efficiency stage, when everyone had just arrived on campus. As things moved on and the workload increased, the sun became scorching and we started running low on juice. This is the part where people really see how effective a team can be and how well a leader can lead. It was draining for me because I constantly had to carry the group to drive the desired outcomes. If everyone was not going to show up for a meeting, I had to be the exception. If everyone was tired and suggested we just rest, I had to be the buzzkill and constantly think of the good of the project.\n\nThis experience, as bittersweet as it was, taught me a lot about working with and leading people. When things started to slip, we implemented group norms, and I saw how that elevated the work ethic for most of the team members. When it seemed like the load was too heavy on one person, we split tasks, giving everyone room to think and grow as well. My favourite moments were eating the snacks people paid as penalties for coming late. On a more serious note, I loved the times when I saw my team members, like Marlene, put in their best effort and deliver excellently on a task.\n\nI have also learned when to give people room to experiment and when to step in and get the job done so that it doesn’t affect the output of the project. I have learned that there will, in fact, always be difficult people, and that’s okay. I have also noticed that there will always be a bystander effect, with people waiting for someone to take the first step; I have to do so and encourage others to take part. Lastly, the one lesson I had only understood theoretically before is that a leader’s job is to make other leaders. This alone is the key to achieving the best possible outcomes.\n\nI am forever grateful for the wealth of experiences I gained from E-Lab, both as a leader and as a team member.",
    image: "https://i.ibb.co/TqxqhCPr/Sandrine.jpg" 
  },
  {
    id: "abduljabar",
    name: "Abdulkadir Abduljabar",
    role: "Impact Analyst",
    country: "Nigeria",
    contribution: "Developed the project's Impact Assessment Framework, moving beyond traditional grading systems to a multi-dimensional competency ledger.",
    reflection: "Coming from Nigeria, I've seen the same rote-learning patterns that plague Cameroon. My mission was to prove, through hard data, that game-based immersive learning isn't just 'fun'—it's statistically more effective at building logic-based skills.",
    journal: "Coming from Nigeria, I've seen the same rote-learning patterns that plague Cameroon. My mission was to prove, through hard data, that game-based immersive learning isn't just 'fun'—it's statistically more effective at building logic-based skills. Analyzing data from over 500 alpha testers to quantify the shift was a critical component of our mission.",
    image: "https://i.ibb.co/Xx486mRg/Jb.jpg"
  },
  {
    id: "marylene",
    name: "Marylene Sugira",
    role: "Gamification Specialist",
    country: "Rwanda",
    contribution: "Architected the narrative design and 'Serious Play' methodology that embeds rigorous physics and logic puzzles within an engaging story-driven world.",
    reflection: "In Rwanda, we've seen how digital leapfrogging can transform a nation. I wanted to apply that same leapfrogging logic to pedagogy by removing the fear of failure often found in traditional African classrooms.",
    journal: "“This is Entrepreneurial Leaders’ Action Lab (E-Lab),” said Mr. Tineyi, our E-Lab facilitator. As a software engineering student, this did not make much sense at first. I assumed that every class I would take would be directly related to my course. Little did I know that I was about to engage in solving a wicked problem, conduct a PESTEL analysis, carry out extensive research, interview people, distribute questionnaires to gather data, and become more familiar with being in front of the camera, as every E-Lab challenge required a video.\n\nOn the following day, we were required to create a think tank, and from that moment, Team S.C.A.A.M was formed. The key lesson I gained from this overall experience is the power of teamwork. As a team, we met at least twice a week, sharing ideas and combining different perspectives to bring out the best solutions. I learned how important it is to express ideas and allow them to be challenged by others, as this brings out your best potential and improves your thinking capacity. Although I was a quiet student during class sessions and initially disliked presenting, my team members consistently encouraged and pushed me to do so. While I am still working on improving my public speaking skills, this experience helped me become more comfortable with presentations.\n\nAnother important lesson was the value of leadership. Having a responsible team leader who motivated us, ensured accountability, and pushed everyone to work hard played a major role. However, teamwork is not only about contributing ideas. There were times when we met feeling tired and really unmotivated. During such moments, I learned that even the little energy each person had could be combined to ignite the group and keep us moving forward instead of giving up.\n\nDespite our differences, every team member contributed something valuable to the group. This whole experience taught me that collaboration, resilience, and shared responsibility are essential not only in E-Lab but also in my future academic and professional journey.",
    image: "https://i.ibb.co/j9V8WHYJ/Marlene.jpg"
  }
];

export const CHALLENGES: Challenge[] = [
  {
    id: "challenge1",
    title: "Challenge 1: Introduction",
    date: "E-LAB Challenge 01",
    description: "E-LAB challenge 1 was about introductions. We got to know ourselves as a team, the G.C.G.O we chose to focus on and why we decided to tackle that challenge. Our team made a video that introduced each team member, and each one of us talked about who we are, what drives us, as well as an interesting fact about ourselves.",
    impact: "We got to know each group member better and get familiar with each other. We also got a chance to get comfortable speaking in front of a camera and planning for our videos. This was also the first challenge where we got to work in our different roles and better understand our team dynamic.",
    image: "https://i.ibb.co/6cZ25Nky/S-A-2.jpg"
  },
  {
    id: "challenge2",
    title: "Challenge 2: Discover Africa",
    date: "E-LAB Challenge 02",
    description: "E-LAB challenge 2 was about the power of telling our own stories. For this challenge we were to exercise our skills in storytelling, creative, critical, and radical thinking. Our team spoke about the ongoing Anglophone crisis in Cameroon. We talked about the Kumbo school kidnapping, Monday Ghost towns, and the Ebam mass assault. We also spoke about the strength of the English speaking region and how they still thrive regardless of the issues.",
    impact: "We also learned that storytelling is a powerful tool to give voice and shine a light into real world problems, build empathy, and to challenge the silence around injustice.",
    image: "https://i.ibb.co/yFvhwTtr/S-M-2.jpg"
  },
  {
    id: "challenge3",
    title: "Challenge 3: Help Lab",
    date: "E-LAB Challenge 03",
    description: "E-LAB challenge 3 was focused on community service. We chose to volunteer at the Living word community beach Braai. It was a day of bonding, wellness and sharing. The Braai happened at the Mon Choisy beach. We mainly helped with setting up, serving food, taking care of some kids and engaging with the people to ensure everyone was having fun and had a pair of helping hands when it was needed.",
    impact: "We were also in charge of helping clean up and taking the trash out. We learnt that community service doesn’t always mean doing something big, simply showing up and supporting others as well as being a helping hand.",
    image: "https://images.unsplash.com/photo-1559027615-cd7d730ee0bb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "challenge4",
    title: "Challenge 4: Hunt for Treasure",
    date: "E-LAB Challenge 04",
    description: "E-LAB challenge 4 was about us putting in practice our research skills, systems thinking, and human-centered design. From the problem we are working on, we had to find an organization, whose operations falls under our chosen G.C.G.O, and we were to interview them to get to know their day-to-day operations, and what they are doing to combat their focused issue. We interviewed Mr. Teh Allen Kuma, CEO and President of Knowledge Center, Cameroon: an institution reimagining how African talent is discovered, trained, and launched onto the global stage.",
    impact: "Unlike most schools in Cameroon, KC does not focus on rote memorization. Instead, it emphasizes human-centered solutions, demonstrating how creativity, practical skills, and community-focused learning more effectively address real-world problems than traditional rote education.",
    image: "https://i.ibb.co/P816TbB/F-1.jpg"
  },
  {
    id: "challenge5",
    title: "Challenge 5: Launch Your Mission",
    date: "E-LAB Challenge 05",
    description: "Challenge 5 was based on our team’s mission, the problem we had identified, and our research. This was our opportunity to launch a solution to the problem we had found. We were to come up with a compelling application for our project that could earn us a grant of up to $10,000 USD. We had to make a business proposal and a video pitching our solution and explaining why we needed the money. This challenge pushed us into hours of brainstorming and iteration. We had to utilize everything we had learned so far and the data we had collected to come up with an innovative solution. We pushed back, made changes, and came up with our project, Mission Genesis.",
    impact: "We also had to use our storytelling skills to create a compelling pitch and proposal. This challenge brought us closer as a team as we gained a deeper understanding of the intricacies of solution development.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "challenge6",
    title: "Challenge 6: Digital Footprint",
    date: "E-LAB Challenge 06",
    description: "Challenge 6 is where everything came together. Having to bring our solution to life and see the lines on the white board transform into wireframes and interfaces, we had to build our prototype. We were also required to build a website which highlighted our E-Lab journey so far. Going down memory lane, and reflecting on how much we have each learnt, grown and contributed to this journey was in fact the highlight of this challenge.",
    impact: "Our creativity also came to life as we decided on colour palettes, button positioning, functionality and experience. Challenge 6 showed us the importance of reflection and documenting in building.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: "LyvSLAETMw0",
    title: "Team S.C.A.A.M",
    url: "https://www.youtube.com/watch?v=LyvSLAETMw0",
    category: "Challenge 01",
    thumbnail: "https://img.youtube.com/vi/LyvSLAETMw0/maxresdefault.jpg"
  },
  {
    id: "KYaRVhN_eb0",
    title: "The Untold Story of Southern Cameroon's Crisis",
    url: "https://www.youtube.com/watch?v=KYaRVhN_eb0",
    category: "Challenge 02",
    thumbnail: "https://img.youtube.com/vi/KYaRVhN_eb0/maxresdefault.jpg"
  },
  {
    id: "iXOYouYUs1I",
    title: "Help Lab 🌍✨",
    url: "https://www.youtube.com/watch?v=iXOYouYUs1I",
    category: "Challenge 03",
    thumbnail: "https://img.youtube.com/vi/iXOYouYUs1I/maxresdefault.jpg"
  },
  {
    id: "EV0RV7jenU8",
    title: "Validating our Assumptions",
    url: "https://www.youtube.com/watch?v=EV0RV7jenU8",
    category: "Challenge 04",
    thumbnail: "https://img.youtube.com/vi/EV0RV7jenU8/maxresdefault.jpg"
  },
  {
    id: "jPwq5kixgLg",
    title: "Genesis Vision Core",
    url: "https://www.youtube.com/watch?v=jPwq5kixgLg",
    category: "Challenge 05",
    thumbnail: "https://img.youtube.com/vi/jPwq5kixgLg/maxresdefault.jpg"
  },
  {
    id: "tDrVGoJoVWg",
    title: "Digital Footprint & Launch",
    url: "https://www.youtube.com/watch?v=tDrVGoJoVWg",
    category: "Challenge 06",
    thumbnail: "https://img.youtube.com/vi/tDrVGoJoVWg/maxresdefault.jpg"
  }
];
