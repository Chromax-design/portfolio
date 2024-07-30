import Insight from "@/components/About/Insight";

const insights: string[] = [
  "20+ Projects Completed",
  "3+ Years of Freelancing",
  "99% Client Satisfaction",
  "20K+ Subscribers",
  "Authored In-Depth Course on Educative",
  "Contributed as a Technical Course Reviewer 📝",
  "Recipient of the Hackernoon Noonies Award 🏆",
];

const infoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="">
      <div>
        <Insight insights={insights} />
      </div>
      {children}
    </section>
  );
};

export default infoLayout;
