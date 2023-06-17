import Image from "next/image";

const HomePage = () => {
  return (
    <div className="card">
      <div className="card-items">
        <div>
          <Image
            className="image"
            src="/profile.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
            priority={true}
          />
        </div>
        <div className="text">
          <h1>About Suzana</h1>
          <p>
            Full Stack developer with solid communication and human skills
            background in a passionate relationship with programming. <br />
            My knowledge includes JavaScript, React and Node.js. I also have
            been exposed to React Native, Typescript and GraphQL, and I just
            started a fantastic journey into AWS.
            <br />
            I am an organiser of Auckland AWS tools and Programming and
            co-organiser of Auckland Cloud Native and Full Stack Dev New
            Auckland meetup groups and FullStack Day conference. I am also a
            member of many other tech community projects around NZ.
            <br />
            My multi-faceted background includes work experience in journalism,
            public relations, management, administration and customer service.
            As a result, I am a good team player with a flexible and resilient
            mindset and a collaborative attitude. I have also been acknowledged
            for my ability to work effectively within teams to achieve business
            outcomes.
            <br />
            Quick learning, problem-solving, handling difficult situations and
            having a strong passion for learning and love for everything I do
            are some transferable skills I intend to add value to the technology
            field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
