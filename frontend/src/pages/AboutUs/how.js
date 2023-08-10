import stl from './how.module.css'


const How = () => {
  return (
    <div className={stl.parent}>
      <div className={stl.left}>
        <h2>
          How Caffae
          <span className={stl.textHighlight}>easy access</span> started
        </h2>
        <p>
          During my journey preparing for the JEE, I encountered challenges in
          reaching out to students who had successfully cleared the exam and
          were already attending colleges. When I finally cleared the JEE, I
          found myself grappling with the same issue of selecting the right
          college. My desire to gain firsthand insights from current college
          students about their experiences motivated me. This need for
          personalized guidance became even more apparent when my aunt sought my
          advice on identifying reliable YouTubers amidst the overwhelming array
          of content, as she aimed to launch her own YouTube channel. These
          experiences led me to recognize a broader demand for trusted and
          individualized guidance. This realization gave birth to the concept of
          Caffae – a user-friendly platform that seamlessly connects individuals
          seeking guidance with experts. On Caffae, users can access
          personalized insights through simple phone calls, making the process
          of obtaining reliable information and advice effortless.
        </p>
      </div>
      <div className={stl.right}>
        <img src=""></img>
      </div>
    </div>
  );
};

export default How;